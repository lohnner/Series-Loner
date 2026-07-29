const SHOW_ID = 'american-gods';
const STORAGE_KEY = 'series-loner-progress-v1';
const HOTD_STORAGE_KEY = 'series-loner-house-dragon-v1';
const BIG_BANG_STORAGE_KEY = 'series-loner-big-bang-v1';
const ACOLYTE_STORAGE_KEY = 'series-loner-acolyte-v1';
const SILO_STORAGE_KEY = 'series-loner-silo-v1';
const STUART_STORAGE_KEY = 'series-loner-stuart-v1';
const seasons = {
  1: ['The Bone Orchard','The Secret of Spoons','Head Full of Snow','Git Gone','Lemon Scented You','A Murder of Gods','A Prayer for Mad Sweeney','Come to Jesus'],
  2: ['House on the Rock','The Beguiling Man','Muninn','The Greatest Story Ever Told','The Ways of the Dead','Donar the Great','Treasure of the Sun','Moon Shadow'],
  3: ['A Winter’s Tale','Serious Moonlight','Ashes and Demons','The Unseen','Sister Rising','Conscience of the King','Fire and Ice','The Rapture of Burning','The Lake Effect','Tears of the Wrath-Bearing Tree']
};
const airDates = {
  1: ['30/04/2017','07/05/2017','14/05/2017','21/05/2017','28/05/2017','04/06/2017','11/06/2017','18/06/2017'],
  2: ['10/03/2019','17/03/2019','24/03/2019','31/03/2019','07/04/2019','14/04/2019','21/04/2019','28/04/2019'],
  3: ['10/01/2021','17/01/2021','24/01/2021','31/01/2021','14/02/2021','21/02/2021','28/02/2021','07/03/2021','14/03/2021','21/03/2021']
};
const totalEpisodes = Object.values(seasons).flat().length;

function getState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true };
  }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function saveState(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function getHotdState() {
  try { const saved = JSON.parse(localStorage.getItem(HOTD_STORAGE_KEY)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function getBigBangState() {
  try { const saved = JSON.parse(localStorage.getItem(BIG_BANG_STORAGE_KEY)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function getAcolyteState() {
  try { const saved = JSON.parse(localStorage.getItem(ACOLYTE_STORAGE_KEY)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function getSiloState() {
  try { const saved = JSON.parse(localStorage.getItem(SILO_STORAGE_KEY)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function getStuartState() {
  try { const saved = JSON.parse(localStorage.getItem(STUART_STORAGE_KEY)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function episodeKey(season, episode) { return `${SHOW_ID}-s${season}e${episode}`; }
function xpForLevel(level) {
  if (level <= 1) return 0;
  const n = level - 1;
  return Math.floor((50 * n ** 3 - 150 * n ** 2 + 400 * n) / 3);
}
function getLevelInfo(xp) {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  const floor = xpForLevel(level), ceiling = xpForLevel(level + 1);
  return { level, floor, ceiling, percent: ((xp - floor) / (ceiling - floor)) * 100 };
}
function setWidth(id, percent) { const el = document.getElementById(id); if (el) el.style.width = `${percent}%`; }

function updateHeaderXp() {
  const xp = (getState().watched.length + getHotdState().watched.length + getBigBangState().watched.length + getAcolyteState().watched.length + getSiloState().watched.length + getStuartState().watched.length) * 22;
  const info = getLevelInfo(xp);
  document.querySelectorAll('[data-header-level]').forEach(el => el.textContent = info.level);
  document.querySelectorAll('[data-header-xp]').forEach(el => el.textContent = `${xp} XP`);
  document.querySelectorAll('[data-header-next]').forEach(el => el.textContent = `${info.ceiling - xp} XP para o nível ${info.level + 1}`);
  document.querySelectorAll('[data-header-xp-bar]').forEach(el => el.style.width = `${info.percent}%`);
}

function updateGlobalProgress() {
  const state = getState();
  const count = state.watched.length;
  const percent = Math.round((count / totalEpisodes) * 100);
  const countEl = document.getElementById('watched-count'); if (countEl) countEl.textContent = count;
  const label = document.getElementById('home-progress-label'); if (label) label.textContent = `${percent}%`;
  setWidth('home-progress', percent);
}

function renderEpisodes(season) {
  const list = document.getElementById('episode-list'); if (!list) return;
  const state = getState();
  const lock = document.getElementById('episode-lock');
  if (lock) lock.hidden = state.inWatchlist;
  list.innerHTML = seasons[season].map((title, index) => {
    const number = index + 1, key = episodeKey(season, number), checked = state.watched.includes(key);
    return `<label class="episode-row ${checked ? 'watched' : ''} ${state.inWatchlist ? '' : 'locked'}">
      <input type="checkbox" data-season="${season}" data-episode="${number}" ${checked ? 'checked' : ''} ${state.inWatchlist ? '' : 'disabled'}>
      <span class="custom-check" aria-hidden="true">✓</span><span class="episode-number">${String(number).padStart(2,'0')}</span>
      <span class="episode-name"><strong>${title}</strong><small>Temporada ${season} · Episódio ${number} · Lançado em ${airDates[season][index]}</small></span>
      <span class="episode-xp">${checked ? 'ASSISTIDO' : '+22 XP'}</span>
    </label>`;
  }).join('');
  list.querySelectorAll('input:not(:disabled)').forEach(input => input.addEventListener('change', toggleEpisode));
}
function toggleEpisode(event) {
  const season = Number(event.target.dataset.season), episode = Number(event.target.dataset.episode);
  const key = episodeKey(season, episode), state = getState(), exists = state.watched.includes(key);
  if (!state.inWatchlist) { event.target.checked = false; showToast('Adicione a série primeiro'); return; }
  if (event.target.checked && !exists) {
    state.watched.push(key); state.lastWatched = { season, episode, title: seasons[season][episode - 1] };
    showToast('+22 XP conquistados');
  } else if (!event.target.checked && exists) {
    state.watched = state.watched.filter(item => item !== key);
    if (state.lastWatched && episodeKey(state.lastWatched.season, state.lastWatched.episode) === key) state.lastWatched = null;
  }
  saveState(state); renderEpisodes(season); updateSeriesProgress(); updateHeaderXp();
}
function updateSeriesProgress() {
  const count = getState().watched.length, percent = (count / totalEpisodes) * 100;
  const label = document.getElementById('series-watched'); if (label) label.textContent = `${count} de ${totalEpisodes}`;
  setWidth('series-progress', percent);
}
function showToast(text) {
  const toast = document.getElementById('toast'); if (!toast) return;
  toast.textContent = text; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800);
}
function initSeriesPage() {
  let currentSeason = 1;
  const button = document.getElementById('watchlist-button');
  const syncWatchlistButton = () => {
    const added = getState().inWatchlist;
    button.textContent = added ? '✓ Adicionada à Sua Lista' : '+ Adicionar Para Assistir';
    button.classList.toggle('added', added);
  };
  button.addEventListener('click', () => {
    const state = getState(); state.inWatchlist = !state.inWatchlist; saveState(state);
    syncWatchlistButton(); renderEpisodes(currentSeason);
    showToast(state.inWatchlist ? 'Série adicionada à sua lista' : 'Série removida da sua lista');
  });
  syncWatchlistButton(); renderEpisodes(currentSeason); updateSeriesProgress();
  document.querySelectorAll('.season-tab').forEach(tab => tab.addEventListener('click', () => {
    currentSeason = Number(tab.dataset.season);
    document.querySelectorAll('.season-tab').forEach(item => item.classList.toggle('active', item === tab));
    renderEpisodes(currentSeason);
  }));
}
function initProfile() {
  const state = getState(), hotd = getHotdState(), bigBang = getBigBangState(), acolyte = getAcolyteState(), silo = getSiloState(), stuart = getStuartState(), count = state.watched.length, hotdCount = hotd.watched.length, bigBangCount = bigBang.watched.length, acolyteCount = acolyte.watched.length, siloCount = silo.watched.length, stuartCount = stuart.watched.length, allCount = count + hotdCount + bigBangCount + acolyteCount + siloCount + stuartCount, xp = allCount * 22, info = getLevelInfo(xp), percent = Math.round((allCount / (totalEpisodes + 26 + 279 + 8 + 30 + 10)) * 100);
  document.getElementById('level-number').textContent = info.level;
  document.getElementById('avatar-level').textContent = info.level;
  document.getElementById('xp-current').textContent = `${xp} XP`;
  document.getElementById('xp-next').textContent = `${info.ceiling - xp} XP para o nível ${info.level + 1}`;
  setWidth('xp-progress', info.percent);
  document.getElementById('stat-episodes').textContent = allCount;
  document.getElementById('stat-xp').textContent = xp;
  document.getElementById('stat-series').textContent = Number(count === totalEpisodes) + Number(hotdCount === 26) + Number(bigBangCount === 279) + Number(acolyteCount === 8) + Number(siloCount === 30) + Number(stuartCount === 10);
  document.getElementById('stat-progress').textContent = `${percent}%`;
  const americanPercent = Math.round((count / totalEpisodes) * 100);
  document.getElementById('profile-progress-label').textContent = `${americanPercent}% assistido`;
  setWidth('profile-progress', americanPercent);
  document.getElementById('profile-series-card').hidden = !state.inWatchlist;
  const hotdPercent = Math.round((hotdCount / 26) * 100);
  document.getElementById('hotd-profile-card').hidden = !hotd.inWatchlist;
  document.getElementById('hotd-profile-progress-label').textContent = `${hotdPercent}% assistido`;
  setWidth('hotd-profile-progress', hotdPercent);
  const bigBangPercent = Math.round((bigBangCount / 279) * 100);
  document.getElementById('big-bang-profile-card').hidden = !bigBang.inWatchlist;
  document.getElementById('big-bang-profile-progress-label').textContent = `${bigBangPercent}% assistido`;
  setWidth('big-bang-profile-progress', bigBangPercent);
  const acolytePercent = Math.round((acolyteCount / 8) * 100);
  document.getElementById('acolyte-profile-card').hidden = !acolyte.inWatchlist;
  document.getElementById('acolyte-profile-progress-label').textContent = `${acolytePercent}% assistido`;
  setWidth('acolyte-profile-progress', acolytePercent);
  const siloPercent = Math.round((siloCount / 30) * 100);
  document.getElementById('silo-profile-card').hidden = !silo.inWatchlist;
  document.getElementById('silo-profile-progress-label').textContent = `${siloPercent}% assistido`;
  setWidth('silo-profile-progress', siloPercent);
  const stuartPercent = Math.round((stuartCount / 10) * 100);
  document.getElementById('stuart-profile-card').hidden = !stuart.inWatchlist;
  document.getElementById('stuart-profile-progress-label').textContent = `${stuartPercent}% assistido`;
  setWidth('stuart-profile-progress', stuartPercent);
  document.getElementById('profile-empty').hidden = state.inWatchlist || hotd.inWatchlist || bigBang.inWatchlist || acolyte.inWatchlist || silo.inWatchlist || stuart.inWatchlist;
}

function initCatalog() {
  const state = getState(), hotd = getHotdState(), bigBang = getBigBangState(), acolyte = getAcolyteState(), silo = getSiloState(), stuart = getStuartState(), percent = Math.round((state.watched.length / totalEpisodes) * 100), hotdPercent = Math.round((hotd.watched.length / 26) * 100), bigBangPercent = Math.round((bigBang.watched.length / 279) * 100), acolytePercent = Math.round((acolyte.watched.length / 8) * 100), siloPercent = Math.round((silo.watched.length / 30) * 100), stuartPercent = Math.round((stuart.watched.length / 10) * 100);
  document.getElementById('catalog-progress-label').textContent = `${percent}% assistido`;
  setWidth('catalog-progress', percent);
  document.getElementById('hotd-catalog-progress-label').textContent = `${hotdPercent}% assistido`;
  setWidth('hotd-catalog-progress', hotdPercent);
  document.getElementById('big-bang-catalog-progress-label').textContent = `${bigBangPercent}% assistido`;
  setWidth('big-bang-catalog-progress', bigBangPercent);
  document.getElementById('acolyte-catalog-progress-label').textContent = `${acolytePercent}% assistido`;
  setWidth('acolyte-catalog-progress', acolytePercent);
  document.getElementById('silo-catalog-progress-label').textContent = `${siloPercent}% assistido`;
  setWidth('silo-catalog-progress', siloPercent);
  document.getElementById('stuart-catalog-progress-label').textContent = `${stuartPercent}% assistido`;
  setWidth('stuart-catalog-progress', stuartPercent);
}

function initSeriesRanking() {
  const american = getState(), hotd = getHotdState(), bigBang = getBigBangState(), acolyte = getAcolyteState(), silo = getSiloState(), stuart = getStuartState();
  const entries = [
    { row: document.getElementById('american-rank-row'), score: Number(american.inWatchlist) },
    { row: document.getElementById('hotd-rank-row'), score: Number(hotd.inWatchlist) },
    { row: document.getElementById('big-bang-rank-row'), score: Number(bigBang.inWatchlist) },
    { row: document.getElementById('acolyte-rank-row'), score: Number(acolyte.inWatchlist) },
    { row: document.getElementById('silo-rank-row'), score: Number(silo.inWatchlist) },
    { row: document.getElementById('stuart-rank-row'), score: Number(stuart.inWatchlist) }
  ].sort((a, b) => b.score - a.score);
  const board = document.querySelector('.ranking-board');
  entries.forEach((entry, index) => {
    entry.row.querySelector('.rank-position').textContent = String(index + 1).padStart(2, '0');
    entry.row.querySelector('.rank-score strong').textContent = entry.score;
    entry.row.querySelector('.rank-score span').textContent = entry.score === 1 ? 'ponto' : 'pontos';
    entry.row.querySelector('.rank-name small').textContent = index === 0 && entry.score > 0 ? 'LÍDER DO ACERVO' : 'NO RANKING';
    entry.row.classList.toggle('rank-first', index === 0 && entry.score > 0);
    board.appendChild(entry.row);
  });
}

function initUserRanking() {
  const currentXp = (getState().watched.length + getHotdState().watched.length + getBigBangState().watched.length + getAcolyteState().watched.length + getSiloState().watched.length + getStuartState().watched.length) * 22;
  const users = [{ name: 'Você', xp: currentXp, current: true }];
  document.getElementById('user-ranking-list').innerHTML = users.map((user, index) => {
    const info = getLevelInfo(user.xp);
    return `<div class="user-rank-row ${index < 3 ? `top-${index + 1}` : ''} ${user.current ? 'current-user' : ''}"><strong class="user-position">${String(index + 1).padStart(2, '0')}</strong><span class="rank-avatar">${user.name.charAt(0)}</span><div class="user-name"><strong>${user.name}</strong><small>${user.current ? 'SEU PERFIL' : 'AVENTUREIRO'}</small></div><div class="user-level"><span>NÍVEL ${info.level}</span><strong>${user.xp} XP</strong></div></div>`;
  }).join('');
}

const page = document.body.dataset.page;
const authEntry = document.querySelector('.header-xp');
if (authEntry && !document.querySelector('.auth-link')) authEntry.insertAdjacentHTML('beforebegin', '<a class="auth-link" href="login.html">ENTRAR</a>');
updateHeaderXp();
if (page === 'home') updateGlobalProgress();
if (page === 'series') initSeriesPage();
if (page === 'profile') initProfile();
if (page === 'catalog') initCatalog();
if (page === 'ranking-series') initSeriesRanking();
if (page === 'ranking-users') initUserRanking();
import('./auth-shell.js');
