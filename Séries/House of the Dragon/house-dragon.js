const HOTD_STORAGE_KEY = 'series-loner-house-dragon-v1';
const AMERICAN_STORAGE_KEY = 'series-loner-progress-v1';
const BIG_BANG_STORAGE_KEY = 'series-loner-big-bang-v1';
const ACOLYTE_STORAGE_KEY = 'series-loner-acolyte-v1';
const SILO_STORAGE_KEY = 'series-loner-silo-v1';
const STUART_STORAGE_KEY = 'series-loner-stuart-v1';
const ARK_STORAGE_KEY = 'series-loner-the-ark-v1';
const EXTRA_STORAGE_KEYS = ['series-loner-dune-prophecy-v1','series-loner-dexter-v1','series-loner-walking-dead-v1','series-loner-sandman-v1','series-loner-witcher-v1','series-loner-stranger-things-v1','series-loner-game-of-thrones-v1','series-loner-breaking-bad-v1','series-loner-black-mirror-v1','series-loner-friends-v1','series-loner-last-of-us-v1','series-loner-dark-v1','series-loner-wandavision-v1','series-loner-squid-game-v1','series-loner-sex-education-v1','series-loner-sense8-v1','series-loner-the-boys-v1','series-loner-wednesday-v1','series-loner-how-to-get-away-with-murder-v1','series-loner-that-70s-show-v1','series-loner-how-i-met-your-mother-v1','series-loner-how-i-met-your-father-v1'];
const HOTD_ID = 'house-of-the-dragon';
const hotdSeasons = {
  1: [
    ['The Heirs of the Dragon','21/08/2022'],['The Rogue Prince','28/08/2022'],['Second of His Name','04/09/2022'],['King of the Narrow Sea','11/09/2022'],['We Light the Way','18/09/2022'],['The Princess and the Queen','25/09/2022'],['Driftmark','02/10/2022'],['The Lord of the Tides','09/10/2022'],['The Green Council','16/10/2022'],['The Black Queen','23/10/2022']
  ],
  2: [
    ['A Son for a Son','16/06/2024'],['Rhaenyra the Cruel','23/06/2024'],['The Burning Mill','30/06/2024'],['The Red Dragon and the Gold','07/07/2024'],['Regent','14/07/2024'],['Smallfolk','21/07/2024'],['The Red Sowing','28/07/2024'],['The Queen Who Ever Was','04/08/2024']
  ],
  3: [
    ['Salt and Sea, Fire and Blood','21/06/2026'],["Queen's Landing",'28/06/2026'],['Rhaenyra Triumphant','05/07/2026'],['Tumbleton','12/07/2026'],['Unbowed and Unbent','19/07/2026'],['Faceless Men','26/07/2026'],['The Dragon in Winter','02/08/2026'],['Título a confirmar','09/08/2026']
  ]
};
const hotdTotal = 26;

function getHotdState(){try{const s=JSON.parse(localStorage.getItem(HOTD_STORAGE_KEY))||{};return{watched:Array.isArray(s.watched)?s.watched:[],lastWatched:s.lastWatched||null,inWatchlist:s.inWatchlist===true}}catch{return{watched:[],lastWatched:null,inWatchlist:false}}}
function saveHotdState(s){localStorage.setItem(HOTD_STORAGE_KEY,JSON.stringify(s))}
function hotdKey(s,e){return`${HOTD_ID}-s${s}e${e}`}
function americanCount(){try{return(JSON.parse(localStorage.getItem(AMERICAN_STORAGE_KEY))?.watched||[]).length}catch{return 0}}
function bigBangCount(){try{return(JSON.parse(localStorage.getItem(BIG_BANG_STORAGE_KEY))?.watched||[]).length}catch{return 0}}
function acolyteCount(){try{return(JSON.parse(localStorage.getItem(ACOLYTE_STORAGE_KEY))?.watched||[]).length}catch{return 0}}
function siloCount(){try{return(JSON.parse(localStorage.getItem(SILO_STORAGE_KEY))?.watched||[]).length}catch{return 0}}
function stuartCount(){try{return(JSON.parse(localStorage.getItem(STUART_STORAGE_KEY))?.watched||[]).length}catch{return 0}}
function arkCount(){try{return(JSON.parse(localStorage.getItem(ARK_STORAGE_KEY))?.watched||[]).length}catch{return 0}}
function extraSeriesCount(){return EXTRA_STORAGE_KEYS.reduce((total,key)=>{try{return total+(JSON.parse(localStorage.getItem(key))?.watched||[]).length}catch{return total}},0)}
function hotdXpForLevel(level){if(level<=1)return 0;const n=level-1;return Math.floor((50*n**3-150*n**2+400*n)/3)}
function hotdLevelInfo(xp){let level=1;while(hotdXpForLevel(level+1)<=xp)level++;const floor=hotdXpForLevel(level),ceiling=hotdXpForLevel(level+1);return{level,ceiling,percent:(xp-floor)/(ceiling-floor)*100}}
function hotdSetWidth(id,p){const el=document.getElementById(id);if(el)el.style.width=`${p}%`}
function updateHotdHeader(){const xp=Array.from({length:localStorage.length},(_,i)=>localStorage.key(i)).filter(key=>key&&key.startsWith('series-loner-')&&key.endsWith('-v1')).reduce((total,key)=>{try{const watched=JSON.parse(localStorage.getItem(key))?.watched;return total+(Array.isArray(watched)?watched.length:0)}catch{return total}},0)*22,info=hotdLevelInfo(xp);document.querySelectorAll('[data-header-level]').forEach(el=>el.textContent=info.level);document.querySelectorAll('[data-header-xp]').forEach(el=>el.textContent=`${xp} XP`);document.querySelectorAll('[data-header-next]').forEach(el=>el.textContent=`${info.ceiling-xp} XP para o nível ${info.level+1}`);document.querySelectorAll('[data-header-xp-bar]').forEach(el=>el.style.width=`${info.percent}%`)}
function hotdBrazilToday(){const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()),get=type=>parts.find(part=>part.type===type).value;return`${get('year')}-${get('month')}-${get('day')}`}function hotdReleased(date){const[d,m,y]=date.split('/');return`${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`<=hotdBrazilToday()}
function hotdToast(text){const el=document.getElementById('hotd-toast');el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
function renderHotdEpisodes(season){const list=document.getElementById('hotd-episode-list'),lock=document.getElementById('hotd-episode-lock'),state=getHotdState();lock.hidden=state.inWatchlist;list.innerHTML=hotdSeasons[season].map(([title,date],i)=>{const number=i+1,key=hotdKey(season,number),checked=state.watched.includes(key),released=hotdReleased(date),enabled=released&&state.inWatchlist;return`<label class="episode-row ${checked?'watched':''} ${released?'':'upcoming'} ${state.inWatchlist?'':'locked'}"><input type="checkbox" data-hotd-season="${season}" data-hotd-episode="${number}" ${checked?'checked':''} ${enabled?'':'disabled'}><span class="custom-check" aria-hidden="true">✓</span><span class="episode-number">${String(number).padStart(2,'0')}</span><span class="episode-name"><strong>${title}</strong><small>Temporada ${season} · Episódio ${number} · ${released?'Lançado':'Estreia'} em ${date}</small></span><span class="episode-xp">${released?(checked?'ASSISTIDO':'+22 XP'):'EM BREVE'}</span></label>`}).join('');list.querySelectorAll('input:not(:disabled)').forEach(el=>el.addEventListener('change',toggleHotdEpisode))}
function toggleHotdEpisode(e){const season=Number(e.target.dataset.hotdSeason),episode=Number(e.target.dataset.hotdEpisode),key=hotdKey(season,episode),state=getHotdState(),exists=state.watched.includes(key);if(!state.inWatchlist){e.target.checked=false;return}if(e.target.checked&&!exists){state.watched.push(key);state.lastWatched={season,episode,title:hotdSeasons[season][episode-1][0]};hotdToast('+22 XP conquistados')}else if(!e.target.checked&&exists){state.watched=state.watched.filter(x=>x!==key)}saveHotdState(state);renderHotdEpisodes(season);updateHotdProgress();updateHotdHeader()}
function updateHotdProgress(){const count=getHotdState().watched.length;document.getElementById('hotd-watched').textContent=`${count} de ${hotdTotal}`;hotdSetWidth('hotd-series-progress',count/hotdTotal*100)}
function initHotd(){let season=1,button=document.getElementById('hotd-watchlist-button');const sync=()=>{const added=getHotdState().inWatchlist;button.textContent=added?'✓ Adicionada à Sua Lista':'+ Adicionar Para Assistir';button.classList.toggle('added',added)};button.addEventListener('click',()=>{const state=getHotdState();state.inWatchlist=!state.inWatchlist;saveHotdState(state);sync();renderHotdEpisodes(season);hotdToast(state.inWatchlist?'Série adicionada à sua lista':'Série removida da sua lista')});document.querySelectorAll('[data-hotd-season]').forEach(tab=>tab.addEventListener('click',()=>{season=Number(tab.dataset.hotdSeason);document.querySelectorAll('[data-hotd-season]').forEach(x=>x.classList.toggle('active',x===tab));renderHotdEpisodes(season)}));sync();renderHotdEpisodes(season);updateHotdProgress();updateHotdHeader()}
const hotdAuthEntry=document.querySelector('.header-xp');if(hotdAuthEntry)hotdAuthEntry.insertAdjacentHTML('beforebegin','<a class="auth-link" href="#entrar">ENTRAR</a>');initHotd();let hotdReleaseDay=hotdBrazilToday();setInterval(()=>{const day=hotdBrazilToday();if(day!==hotdReleaseDay)location.reload()},60000);import('../../auth-shell.js');
