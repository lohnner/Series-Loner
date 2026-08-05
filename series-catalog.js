(async()=>{
  window.SeriesCatalog=true;
  const response=await fetch('series-data.json?v=55');
  const all=await response.json();
  const normalize=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const params=new URLSearchParams(location.search),pageLetter=(document.body.dataset.catalogLetter||params.get('letter')||'').toUpperCase();
  let saved={};try{saved=JSON.parse(localStorage.getItem('series-loner-catalog-filters')||'{}')}catch{localStorage.removeItem('series-loner-catalog-filters')}
  const state={search:'',platform:'',decade:'',status:'',country:'',genres:[],channels:[],sort:'az',limit:20,...saved};
  if(!Array.isArray(state.genres))state.genres=[];if(!Array.isArray(state.channels))state.channels=[];
  if(pageLetter)state.letter=pageLetter;
  const main=document.querySelector('.catalog-page'),head=document.querySelector('.catalog-head'),grid=document.querySelector('.catalog-grid');
  if(!main||!head||!grid)return;
  document.title=pageLetter?`Séries com ${pageLetter} — Séries Loner`:'Catálogo de Séries — Séries Loner';
  document.querySelector('meta[name="description"]')?.setAttribute('content',pageLetter?`Séries cadastradas com a letra ${pageLetter} no Séries Loner.`:'Pesquise e filtre todo o catálogo do Séries Loner por plataforma, gênero, ano, status e país.');
  all.forEach(item=>{item.description=item.description||'';item.popularity=0});
  let hasSearched=Boolean(pageLetter);const initialRandom=[...all].sort(()=>Math.random()-.5).slice(0,5);
  const values=key=>[...new Set(all.map(item=>item[key]).filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b),'pt-BR'));
  const genres=[...new Set(all.flatMap(item=>item.genres))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
  const channels=values('channel');
  const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const optionList=(items,label)=>`<option value="">${label}</option>${items.map(value=>`<option value="${value}">${value}</option>`).join('')}`;
  const controls=document.createElement('section');controls.className='catalog-tools';controls.innerHTML=`
    <nav class="catalog-breadcrumb" aria-label="Navegação estrutural"><a href="index.html">Início</a><span>›</span><a href="series.html">Séries</a>${pageLetter?`<span>›</span><strong>Letra ${pageLetter}</strong>`:''}</nav>
    <label class="catalog-search"><span>Pesquisar série</span><input id="catalog-search" type="search" placeholder="Digite o nome da série…" autocomplete="off"></label>
    <div class="alphabet-nav" aria-label="Séries por letra"><a class="${!pageLetter?'active':''}" href="series.html">Todas</a>${letters.map(letter=>`<a class="${pageLetter===letter?'active':''}" href="series-${letter.toLowerCase()}.html">${letter}</a>`).join('')}</div>
    <details class="catalog-filters" open><summary>Filtros do catálogo</summary><div class="filter-grid">
      <label>Plataforma<select id="filter-platform">${optionList(values('platform'),'Todas')}</select></label>
      <label>Ano<select id="filter-decade"><option value="">Todos os anos</option><optgroup label="Décadas"><option value="d-1970">Década de 1970</option><option value="d-1980">Década de 1980</option><option value="d-1990">Década de 1990</option><option value="d-2000">Década de 2000</option><option value="d-2010">Década de 2010</option><option value="d-2020">Década de 2020</option></optgroup><optgroup label="Ano específico">${[...new Set(all.map(item=>item.year))].sort((a,b)=>b-a).map(year=>`<option value="y-${year}">${year}</option>`).join('')}</optgroup></select></label>
      <label>Status<select id="filter-status">${optionList(values('status'),'Todos')}</select></label>
      <label>País<select id="filter-country">${optionList(values('country'),'Todos')}</select></label>
      <label>Ordenar<select id="filter-sort"><option value="az">A–Z</option><option value="za">Z–A</option><option value="newest">Mais novas</option><option value="oldest">Mais antigas</option><option value="rating">Melhor avaliação</option><option value="popular">Mais populares</option></select></label>
    </div><fieldset class="genre-filter"><legend>Gêneros <small>(selecione um ou mais)</small></legend>${genres.map(genre=>`<label><input type="checkbox" value="${genre}"><span>${genre}</span></label>`).join('')}</fieldset><fieldset class="channel-filter"><legend>Canais <small>(selecione um ou mais)</small></legend>${channels.map(channel=>`<label><input type="checkbox" value="${channel}"><span>${channel}</span></label>`).join('')}</fieldset><div class="filter-actions"><button id="apply-filters" type="button">Buscar</button><button id="clear-filters" type="button">Limpar filtros</button></div></details>
    <div class="catalog-result-head"><strong id="catalog-count"></strong><span id="catalog-active-filters"></span></div>`;
  head.insertAdjacentElement('afterend',controls);
  const empty=document.createElement('div');empty.className='catalog-empty';empty.hidden=true;grid.insertAdjacentElement('afterend',empty);
  const more=document.createElement('button');more.id='catalog-more';more.className='button catalog-more';more.type='button';more.textContent='Carregar mais séries';empty.insertAdjacentElement('afterend',more);
  const top=document.createElement('button');top.className='back-to-top';top.type='button';top.textContent='↑ Voltar ao topo';top.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));document.body.appendChild(top);
  const storageKey=id=>({american:'series-loner-progress-v1',hotd:'series-loner-house-dragon-v1','big-bang':'series-loner-big-bang-v1',acolyte:'series-loner-acolyte-v1',ark:'series-loner-the-ark-v1'}[id]||`series-loner-${id}-v1`);
  const channelPage=channel=>`Canais/${String(channel).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replaceAll('&','-and-').replaceAll('+','-plus-').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}/index.html`;
  const progress=item=>{try{const value=JSON.parse(localStorage.getItem(storageKey(item.id))||'{}');return Math.round(((value.watched||[]).length/(Number(document.querySelector(`#${CSS.escape(item.id)}-catalog-progress`)?.dataset.total)||1))*100)}catch{return 0}};
  const card=(item,compact=false)=>`<article class="catalog-card ${compact?'featured-card':''}" data-id="${item.id}"><a class="catalog-poster" href="${encodeURI(item.page)}"><img src="${encodeURI(item.image)}" alt="Capa de ${item.title}" loading="lazy"><span>${item.status}</span></a><div class="catalog-info"><small>${item.year} · <a class="catalog-channel-link" href="${channelPage(item.channel||item.platform)}">${item.channel||item.platform}</a></small><h2><a href="${encodeURI(item.page)}">${item.title}</a></h2><p>${item.genres.join(' · ')}</p><div class="catalog-card-meta"><span>★ ${item.rating||'—'}</span><span>${item.seasons} temporada${item.seasons===1?'':'s'}</span><span>${item.country}</span></div></div></article>`;
  function filtered(){if(!hasSearched)return initialRandom;let result=all.filter(item=>{
    if(state.letter&&normalize(item.title).charAt(0)!==normalize(state.letter))return false;
    if(state.search&&!normalize(item.title).includes(normalize(state.search)))return false;
    if(state.platform&&item.platform!==state.platform)return false;
    if(state.decade?.startsWith('d-')&&Math.floor(item.year/10)*10!==Number(state.decade.slice(2)))return false;
    if(state.decade?.startsWith('y-')&&item.year!==Number(state.decade.slice(2)))return false;
    if(state.status&&item.status!==state.status)return false;
    if(state.country&&item.country!==state.country)return false;
    if(state.genres.length&&!state.genres.every(genre=>item.genres.includes(genre)))return false;
    if(state.channels.length&&!state.channels.includes(item.channel))return false;
    return true});
    const sorters={az:(a,b)=>a.title.localeCompare(b.title,'pt-BR'),za:(a,b)=>b.title.localeCompare(a.title,'pt-BR'),newest:(a,b)=>b.year-a.year,oldest:(a,b)=>a.year-b.year,rating:(a,b)=>b.rating-a.rating,popular:(a,b)=>b.popularity-a.popularity||b.rating-a.rating};
    return result.sort(sorters[state.sort]||sorters.az)}
  function persist(){const copy={...state};delete copy.letter;delete copy.limit;localStorage.setItem('series-loner-catalog-filters',JSON.stringify(copy))}
  function render(){const result=filtered(),visible=result.slice(0,state.limit);grid.innerHTML=visible.map(item=>card(item)).join('');document.getElementById('catalog-count').textContent=`${result.length} série${result.length===1?'':'s'} encontrada${result.length===1?'':'s'}`;const yearLabel=state.decade?(state.decade.startsWith('d-')?`Década de ${state.decade.slice(2)}`:state.decade.slice(2)):'';const active=[state.platform,yearLabel,state.status,state.country,...state.genres,...state.channels].filter(Boolean);document.getElementById('catalog-active-filters').textContent=active.join(' · ');empty.hidden=result.length>0;empty.innerHTML=`<strong>${pageLetter?'Nenhuma série cadastrada com esta letra.':'Nenhuma série encontrada.'}</strong><p>Tente alterar a pesquisa ou limpar os filtros.</p>`;more.hidden=result.length<=state.limit;persist()}
  const search=document.getElementById('catalog-search');search.value=state.search;
  [['filter-platform','platform'],['filter-decade','decade'],['filter-status','status'],['filter-country','country'],['filter-sort','sort']].forEach(([id,key])=>{document.getElementById(id).value=state[key]});
  controls.querySelectorAll('.genre-filter input').forEach(input=>input.checked=state.genres.includes(input.value));
  controls.querySelectorAll('.channel-filter input').forEach(input=>input.checked=state.channels.includes(input.value));
  document.getElementById('apply-filters').addEventListener('click',()=>{state.search=search.value;state.platform=document.getElementById('filter-platform').value;state.decade=document.getElementById('filter-decade').value;state.status=document.getElementById('filter-status').value;state.country=document.getElementById('filter-country').value;state.sort=document.getElementById('filter-sort').value;state.genres=[...controls.querySelectorAll('.genre-filter input:checked')].map(item=>item.value);state.channels=[...controls.querySelectorAll('.channel-filter input:checked')].map(item=>item.value);state.limit=all.length;hasSearched=true;render();grid.scrollIntoView({behavior:'smooth',block:'start'})});
  document.getElementById('clear-filters').addEventListener('click',()=>{Object.assign(state,{search:'',platform:'',decade:'',status:'',country:'',genres:[],channels:[],sort:'az',limit:5});hasSearched=Boolean(pageLetter);search.value='';controls.querySelectorAll('select').forEach(select=>select.value=select.id==='filter-sort'?'az':'');controls.querySelectorAll('.genre-filter input,.channel-filter input').forEach(input=>input.checked=false);render()});
  more.addEventListener('click',()=>{state.limit+=20;render()});window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500),{passive:true});
  window.addEventListener('seriesloner-ranking-change',event=>{all.forEach(item=>item.popularity=Number(event.detail.seriesScores[storageKey(item.id)]||0));if(state.sort==='popular')render()});
  if(matchMedia('(max-width:600px)').matches)controls.querySelector('.catalog-filters').removeAttribute('open');
  if(!pageLetter)state.limit=5;render();await import('./app.js?v=library-52');
})().catch(error=>{console.error(error);const grid=document.querySelector('.catalog-grid');if(grid)grid.innerHTML='<div class="catalog-empty"><strong>Não foi possível carregar o catálogo.</strong><p>Atualize a página e tente novamente.</p></div>'});
