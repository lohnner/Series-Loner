const channelKeyAliases={
  'american-gods':'series-loner-progress-v1','hotd':'series-loner-house-dragon-v1','ark':'series-loner-the-ark-v1','dune':'series-loner-dune-prophecy-v1'
};
let channelLibrary=[],latestSeriesScores=null;
const progressKey=item=>channelKeyAliases[item.id]||`series-loner-${item.id}-v1`;
const safeState=key=>{try{return JSON.parse(localStorage.getItem(key))||{}}catch{return{}}};
const initials=name=>name.split(/\s+/).map(word=>word[0]).join('').slice(0,3).toUpperCase();
const escapeChannel=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function localChannelScores(){const scores={};channelLibrary.forEach(item=>{if(safeState(progressKey(item)).inWatchlist){const channel=item.channel||item.platform||'Não informado';scores[channel]=(scores[channel]||0)+1}});return scores}
function aggregateChannelScores(seriesScores){const scores={};channelLibrary.forEach(item=>{const points=Number(seriesScores?.[progressKey(item)]||0);const channel=item.channel||item.platform||'Não informado';scores[channel]=(scores[channel]||0)+points});return scores}
function renderChannelRanking(scores){const board=document.getElementById('channel-ranking-board'),rows=Object.entries(scores).filter(([,score])=>score>0).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'pt-BR'));board.innerHTML=rows.length?rows.map(([channel,score],index)=>`<a class="rank-row channel-rank-row ${index===0?'rank-first':''}" href="canal.html?canal=${encodeURIComponent(channel)}"><strong class="rank-position">${String(index+1).padStart(2,'0')}</strong><span class="channel-mark">${escapeChannel(initials(channel))}</span><div class="rank-name"><small>${index===0?'CANAL LÍDER':'NO RANKING'}</small><h2>${escapeChannel(channel)}</h2><p>${score} ${score===1?'série adicionada':'séries adicionadas'}</p></div><div class="rank-score"><strong>${score}</strong><span>${score===1?'ponto':'pontos'}</span></div></a>`).join(''):'<div class="calendar-empty">O ranking aparecerá quando uma série for adicionada à lista.</div>'}
window.addEventListener('seriesloner-ranking-change',event=>{latestSeriesScores=event.detail.seriesScores;renderChannelRanking(aggregateChannelScores(latestSeriesScores))});
window.addEventListener('seriesloner-cloud-change',()=>renderChannelRanking(localChannelScores()));
fetch('series-data.json').then(response=>response.json()).then(items=>{channelLibrary=items;renderChannelRanking(latestSeriesScores?aggregateChannelScores(latestSeriesScores):localChannelScores())}).catch(()=>document.getElementById('channel-ranking-board').innerHTML='<div class="calendar-empty">Não foi possível carregar os canais.</div>');
