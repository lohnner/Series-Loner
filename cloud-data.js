import { getFirestore, doc, getDoc, setDoc, onSnapshot, collection, serverTimestamp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js';
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';

const firebaseConfig={apiKey:'AIzaSyCgZgwPUo5Ehp5JIdprYfjhIb5VlyJ2RcM',authDomain:'games-loner.firebaseapp.com',projectId:'games-loner',storageBucket:'games-loner.firebasestorage.app',messagingSenderId:'243629336740',appId:'1:243629336740:web:841224ffe9661397781e31'};
const PREFIX='series-loner-',DIRTY_KEY=`${PREFIX}progress-pending`,db=getFirestore(getApps()[0]||initializeApp(firebaseConfig)),nativeSet=Storage.prototype.setItem;
const isProgressKey=key=>key.startsWith(PREFIX)&&key.endsWith('-v1');
const safeJson=value=>{try{return JSON.parse(value)}catch{return null}};
let activeUser=null,loading=false,writeTimer=null,unsubscribeUser=null,unsubscribeRanking=null;
function localProgress(){const result={};for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(isProgressKey(key)){const value=safeJson(localStorage.getItem(key));if(value)result[key]=value}}return result}
function localRatings(uid){const result={},prefix=`${PREFIX}rating-${uid}-`;for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(key.startsWith(prefix))result[key.slice(prefix.length)]=Number(localStorage.getItem(key))||0}return result}
function clearProgress(){const keys=[];for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(isProgressKey(key))keys.push(key)}keys.forEach(key=>localStorage.removeItem(key))}
function mergeProgress(local,cloud){const result={...local};Object.entries(cloud||{}).forEach(([key,state])=>{const old=result[key]||{},watched=[...new Set([...(old.watched||[]),...(state.watched||[])])];result[key]={...old,...state,watched,inWatchlist:old.inWatchlist===true||state.inWatchlist===true}});return result}
function totals(progress){return{xp:Object.values(progress||{}).reduce((sum,state)=>sum+(Array.isArray(state?.watched)?state.watched.length:0),0)*22,watchlistCount:Object.values(progress||{}).filter(state=>state?.inWatchlist).length}}
function xpForLevel(level){if(level<=1)return 0;const n=level-1;return Math.floor((50*n**3-150*n**2+400*n)/3)}
function renderXp(){
  const xp=totals(localProgress()).xp;
  let level=1;while(xpForLevel(level+1)<=xp)level++;
  const floor=xpForLevel(level),ceiling=xpForLevel(level+1),percent=(xp-floor)/(ceiling-floor)*100;
  document.querySelectorAll('[data-header-level]').forEach(node=>node.textContent=level);
  document.querySelectorAll('[data-header-xp]').forEach(node=>node.textContent=`${xp} XP`);
  document.querySelectorAll('[data-header-next]').forEach(node=>node.textContent=`${ceiling-xp} XP para o nível ${level+1}`);
  document.querySelectorAll('[data-header-xp-bar]').forEach(node=>node.style.width=`${percent}%`);
  const values=[['xp-current',`${xp} XP`],['xp-next',`${ceiling-xp} XP para o nível ${level+1}`],['stat-xp',xp],['level-number',level],['avatar-level',level]];
  values.forEach(([id,value])=>{const node=document.getElementById(id);if(node)node.textContent=value});
  const bar=document.getElementById('xp-progress');if(bar)bar.style.width=`${percent}%`;
  window.dispatchEvent(new CustomEvent('seriesloner-xp-change',{detail:{xp,level,ceiling,percent}}));
}
function publishRanking(snapshot){const users=[],seriesScores={},ratingTotals={};snapshot.forEach(item=>{const data=item.data();users.push({uid:item.id,name:data.name||'Usuário',xp:Number(data.xp)||0,watchlistCount:Number(data.watchlistCount)||data.watchlist?.length||0});(data.watchlist||[]).forEach(key=>seriesScores[key]=(seriesScores[key]||0)+1);Object.entries(data.ratings||{}).forEach(([slug,value])=>{const rating=Number(value);if(rating>=1&&rating<=5){const total=ratingTotals[slug]||{sum:0,count:0};total.sum+=rating;total.count++;ratingTotals[slug]=total}})});users.sort((a,b)=>b.xp-a.xp||a.name.localeCompare(b.name));const seriesRatings={};Object.entries(ratingTotals).forEach(([slug,total])=>seriesRatings[slug]={average:Number((total.sum/total.count).toFixed(1)),count:total.count});window.seriesLonerRatings=seriesRatings;window.dispatchEvent(new CustomEvent('seriesloner-ranking-change',{detail:{users,seriesScores,seriesRatings}}));window.dispatchEvent(new CustomEvent('seriesloner-ratings-change',{detail:{seriesRatings}}))}
async function writeAll(){const user=activeUser,progress=localProgress(),ratings=localRatings(user.uid),stats=totals(progress),name=user.displayName||'Usuário',watchlist=Object.entries(progress).filter(([,state])=>state?.inWatchlist).map(([key])=>key);await Promise.all([setDoc(doc(db,'users',user.uid),{name,progress,ratings,...stats,updatedAt:serverTimestamp()},{merge:true}),setDoc(doc(db,'publicProfiles',user.uid),{name,xp:stats.xp,watchlistCount:stats.watchlistCount,watchlist,progress,ratings,updatedAt:serverTimestamp()},{merge:true})]);if(activeUser?.uid===user.uid)sessionStorage.removeItem(DIRTY_KEY)}
function scheduleWrite(){if(!activeUser||loading)return;clearTimeout(writeTimer);writeTimer=setTimeout(()=>writeAll().catch(error=>console.error('Falha ao sincronizar dados:',error)),250)}
Storage.prototype.setItem=function(key,value){nativeSet.call(this,key,value);if(this===localStorage&&isProgressKey(String(key))){nativeSet.call(sessionStorage,DIRTY_KEY,'1');scheduleWrite();queueMicrotask(renderXp)}else if(this===localStorage&&String(key).startsWith(PREFIX+'rating-'))scheduleWrite()};

export async function startCloudSync(user){activeUser=user;loading=true;unsubscribeUser?.();const ref=doc(db,'users',user.uid),snapshot=await getDoc(ref),cloud=snapshot.exists()?snapshot.data():null,owner=localStorage.getItem(`${PREFIX}cloud-owner`),before=localProgress(),pending=owner===user.uid&&sessionStorage.getItem(DIRTY_KEY);let progress;if(pending)progress={...(cloud?.progress||{}),...before};else if(owner)progress=cloud?.progress||{};else progress=mergeProgress(before,cloud?.progress);clearProgress();Object.entries(progress).forEach(([key,value])=>nativeSet.call(localStorage,key,JSON.stringify(value)));nativeSet.call(localStorage,`${PREFIX}cloud-owner`,user.uid);Object.entries(cloud?.ratings||{}).forEach(([slug,value])=>nativeSet.call(localStorage,`${PREFIX}rating-${user.uid}-${slug}`,String(value)));loading=false;renderXp();await writeAll();unsubscribeUser=onSnapshot(ref,next=>{if(!next.exists()||loading)return;loading=true;const data=next.data();clearProgress();Object.entries(data.progress||{}).forEach(([key,value])=>nativeSet.call(localStorage,key,JSON.stringify(value)));Object.entries(data.ratings||{}).forEach(([slug,value])=>nativeSet.call(localStorage,`${PREFIX}rating-${user.uid}-${slug}`,String(value)));loading=false;renderXp();window.dispatchEvent(new CustomEvent('seriesloner-cloud-change',{detail:{user,data}}))});window.dispatchEvent(new CustomEvent('seriesloner-cloud-ready',{detail:{user}}))}
export function stopCloudSync(){activeUser=null;clearTimeout(writeTimer);unsubscribeUser?.();unsubscribeUser=null}
export function saveCloudProfile(user){activeUser=user;return writeAll()}
unsubscribeRanking=onSnapshot(collection(db,'publicProfiles'),publishRanking,error=>console.error('Falha ao carregar ranking:',error));
renderXp();
