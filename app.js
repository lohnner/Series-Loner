const SHOW_ID = 'american-gods';
const STORAGE_KEY = 'series-loner-progress-v1';
const HOTD_STORAGE_KEY = 'series-loner-house-dragon-v1';
const BIG_BANG_STORAGE_KEY = 'series-loner-big-bang-v1';
const ACOLYTE_STORAGE_KEY = 'series-loner-acolyte-v1';
const SILO_STORAGE_KEY = 'series-loner-silo-v1';
const STUART_STORAGE_KEY = 'series-loner-stuart-v1';
const ARK_STORAGE_KEY = 'series-loner-the-ark-v1';
const DUNE_STORAGE_KEY = 'series-loner-dune-prophecy-v1';
const DEXTER_STORAGE_KEY = 'series-loner-dexter-v1';
const WALKING_DEAD_STORAGE_KEY = 'series-loner-walking-dead-v1';
const SANDMAN_STORAGE_KEY = 'series-loner-sandman-v1';
const WITCHER_STORAGE_KEY = 'series-loner-witcher-v1';
const STRANGER_THINGS_STORAGE_KEY = 'series-loner-stranger-things-v1';
const GAME_OF_THRONES_STORAGE_KEY = 'series-loner-game-of-thrones-v1';
const BREAKING_BAD_STORAGE_KEY = 'series-loner-breaking-bad-v1';
const BLACK_MIRROR_STORAGE_KEY = 'series-loner-black-mirror-v1';
const FRIENDS_STORAGE_KEY = 'series-loner-friends-v1';
const LAST_OF_US_STORAGE_KEY = 'series-loner-last-of-us-v1';
const DARK_STORAGE_KEY = 'series-loner-dark-v1';
const WANDAVISION_STORAGE_KEY = 'series-loner-wandavision-v1';
const SQUID_GAME_STORAGE_KEY = 'series-loner-squid-game-v1';
const SEX_EDUCATION_STORAGE_KEY = 'series-loner-sex-education-v1';
const SENSE8_STORAGE_KEY = 'series-loner-sense8-v1';
const THE_BOYS_STORAGE_KEY = 'series-loner-the-boys-v1';
const WEDNESDAY_STORAGE_KEY = 'series-loner-wednesday-v1';
const MURDER_STORAGE_KEY = 'series-loner-how-to-get-away-with-murder-v1';
const THAT_70S_STORAGE_KEY = 'series-loner-that-70s-show-v1';
const HIMYM_STORAGE_KEY = 'series-loner-how-i-met-your-mother-v1';
const HIMYF_STORAGE_KEY = 'series-loner-how-i-met-your-father-v1';
const AVATAR_STORAGE_KEY = 'series-loner-avatar-last-airbender-v1';
const SPIDER_NOIR_STORAGE_KEY = 'series-loner-spider-noir-v1';
const KNIGHT_STORAGE_KEY = 'series-loner-knight-seven-kingdoms-v1';
const GREYS_STORAGE_KEY = 'series-loner-greys-anatomy-v1';
const SAVING_HOPE_STORAGE_KEY = 'series-loner-saving-hope-v1';
const GOOD_DOCTOR_STORAGE_KEY = 'series-loner-the-good-doctor-v1';
const CONSTANTINE_STORAGE_KEY = 'series-loner-constantine-v1';
const GOTHAM_STORAGE_KEY = 'series-loner-gotham-v1';
const DAREDEVIL_STORAGE_KEY = 'series-loner-marvels-daredevil-v1';
const FLASH_STORAGE_KEY = 'series-loner-the-flash-v1';
const BETTER_CALL_SAUL_STORAGE_KEY = 'series-loner-better-call-saul-v1';
const MR_ROBOT_STORAGE_KEY = 'series-loner-mr-robot-v1';
const JESSICA_JONES_STORAGE_KEY = 'series-loner-marvels-jessica-jones-v1';
const LUKE_CAGE_STORAGE_KEY = 'series-loner-marvels-luke-cage-v1';
const IRON_FIST_STORAGE_KEY = 'series-loner-marvels-iron-fist-v1';
const RANSOM_CANYON_STORAGE_KEY = 'series-loner-ransom-canyon-v1';

const PROFILE_LIBRARY = [
  ['american','series-loner-progress-v1',26,'series'],['hotd','series-loner-house-dragon-v1',26,'hotd'],['big-bang','series-loner-big-bang-v1',279,'big-bang'],['acolyte','series-loner-acolyte-v1',8,'acolyte'],['silo','series-loner-silo-v1',30,'silo'],['stuart','series-loner-stuart-v1',10,'stuart'],['ark','series-loner-the-ark-v1',36,'the-ark'],
  ['dune','series-loner-dune-prophecy-v1',14,'dune-prophecy'],['dexter','series-loner-dexter-v1',96,'dexter'],['walking-dead','series-loner-walking-dead-v1',177,'walking-dead'],['sandman','series-loner-sandman-v1',21,'sandman'],['witcher','series-loner-witcher-v1',40,'witcher'],['stranger-things','series-loner-stranger-things-v1',42,'stranger-things'],['game-of-thrones','series-loner-game-of-thrones-v1',73,'game-of-thrones'],['breaking-bad','series-loner-breaking-bad-v1',62,'breaking-bad'],['black-mirror','series-loner-black-mirror-v1',33,'black-mirror'],['friends','series-loner-friends-v1',236,'friends'],['last-of-us','series-loner-last-of-us-v1',16,'last-of-us'],['dark','series-loner-dark-v1',26,'dark'],['wandavision','series-loner-wandavision-v1',9,'wandavision'],['squid-game','series-loner-squid-game-v1',22,'squid-game'],['sex-education','series-loner-sex-education-v1',32,'sex-education'],['sense8','series-loner-sense8-v1',24,'sense8'],['the-boys','series-loner-the-boys-v1',40,'the-boys'],['wednesday','series-loner-wednesday-v1',16,'wednesday'],['how-to-get-away-with-murder','series-loner-how-to-get-away-with-murder-v1',90,'how-to-get-away-with-murder'],['that-70s-show','series-loner-that-70s-show-v1',200,'that-70s-show'],['how-i-met-your-mother','series-loner-how-i-met-your-mother-v1',208,'how-i-met-your-mother'],['how-i-met-your-father','series-loner-how-i-met-your-father-v1',30,'how-i-met-your-father'],
  ['avatar-last-airbender',AVATAR_STORAGE_KEY,15,'avatar-last-airbender'],['spider-noir',SPIDER_NOIR_STORAGE_KEY,8,'spider-noir'],['knight-seven-kingdoms',KNIGHT_STORAGE_KEY,6,'knight-seven-kingdoms'],['greys-anatomy',GREYS_STORAGE_KEY,467,'greys-anatomy'],['saving-hope',SAVING_HOPE_STORAGE_KEY,85,'saving-hope'],['the-good-doctor',GOOD_DOCTOR_STORAGE_KEY,126,'the-good-doctor'],['constantine',CONSTANTINE_STORAGE_KEY,13,'constantine'],['gotham',GOTHAM_STORAGE_KEY,100,'gotham'],['marvels-daredevil',DAREDEVIL_STORAGE_KEY,39,'marvels-daredevil'],['the-flash',FLASH_STORAGE_KEY,184,'the-flash'],
  ['better-call-saul',BETTER_CALL_SAUL_STORAGE_KEY,63,'better-call-saul'],['mr-robot',MR_ROBOT_STORAGE_KEY,45,'mr-robot'],['marvels-jessica-jones',JESSICA_JONES_STORAGE_KEY,39,'marvels-jessica-jones'],['marvels-luke-cage',LUKE_CAGE_STORAGE_KEY,26,'marvels-luke-cage'],['marvels-iron-fist',IRON_FIST_STORAGE_KEY,23,'marvels-iron-fist'],['ransom-canyon',RANSOM_CANYON_STORAGE_KEY,18,'ransom-canyon']
];
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
function getArkState() {
  try { const saved = JSON.parse(localStorage.getItem(ARK_STORAGE_KEY)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
  catch { return { watched: [], lastWatched: null, inWatchlist: false }; }
}
function getExtraState(key) {
  try { const saved = JSON.parse(localStorage.getItem(key)) || {}; return { watched: Array.isArray(saved.watched) ? saved.watched : [], lastWatched: saved.lastWatched || null, inWatchlist: saved.inWatchlist === true }; }
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
  const xp = (getState().watched.length + getHotdState().watched.length + getBigBangState().watched.length + getAcolyteState().watched.length + getSiloState().watched.length + getStuartState().watched.length + getArkState().watched.length + [DUNE_STORAGE_KEY,DEXTER_STORAGE_KEY,WALKING_DEAD_STORAGE_KEY,SANDMAN_STORAGE_KEY,WITCHER_STORAGE_KEY,STRANGER_THINGS_STORAGE_KEY,GAME_OF_THRONES_STORAGE_KEY,BREAKING_BAD_STORAGE_KEY,BLACK_MIRROR_STORAGE_KEY,FRIENDS_STORAGE_KEY,LAST_OF_US_STORAGE_KEY,DARK_STORAGE_KEY,WANDAVISION_STORAGE_KEY,SQUID_GAME_STORAGE_KEY,SEX_EDUCATION_STORAGE_KEY,SENSE8_STORAGE_KEY,THE_BOYS_STORAGE_KEY,WEDNESDAY_STORAGE_KEY,MURDER_STORAGE_KEY,THAT_70S_STORAGE_KEY,HIMYM_STORAGE_KEY,HIMYF_STORAGE_KEY].reduce((sum,key)=>sum+getExtraState(key).watched.length,0)) * 22;
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
  const state = getState(), hotd = getHotdState(), bigBang = getBigBangState(), acolyte = getAcolyteState(), silo = getSiloState(), stuart = getStuartState(), ark = getArkState(), dune = getExtraState(DUNE_STORAGE_KEY), dexter = getExtraState(DEXTER_STORAGE_KEY), walkingDead = getExtraState(WALKING_DEAD_STORAGE_KEY), sandman = getExtraState(SANDMAN_STORAGE_KEY), witcher = getExtraState(WITCHER_STORAGE_KEY), strangerThings = getExtraState(STRANGER_THINGS_STORAGE_KEY), gameOfThrones = getExtraState(GAME_OF_THRONES_STORAGE_KEY), breakingBad = getExtraState(BREAKING_BAD_STORAGE_KEY), blackMirror = getExtraState(BLACK_MIRROR_STORAGE_KEY), friends = getExtraState(FRIENDS_STORAGE_KEY), lastOfUs = getExtraState(LAST_OF_US_STORAGE_KEY), dark = getExtraState(DARK_STORAGE_KEY), wandavision = getExtraState(WANDAVISION_STORAGE_KEY), squidGame = getExtraState(SQUID_GAME_STORAGE_KEY), sexEducation = getExtraState(SEX_EDUCATION_STORAGE_KEY), sense8 = getExtraState(SENSE8_STORAGE_KEY), theBoys = getExtraState(THE_BOYS_STORAGE_KEY), wednesday = getExtraState(WEDNESDAY_STORAGE_KEY), murder = getExtraState(MURDER_STORAGE_KEY), that70s = getExtraState(THAT_70S_STORAGE_KEY), himym = getExtraState(HIMYM_STORAGE_KEY), himyf = getExtraState(HIMYF_STORAGE_KEY), count = state.watched.length, hotdCount = hotd.watched.length, bigBangCount = bigBang.watched.length, acolyteCount = acolyte.watched.length, siloCount = silo.watched.length, stuartCount = stuart.watched.length, arkCount = ark.watched.length, duneCount = dune.watched.length, dexterCount = dexter.watched.length, walkingDeadCount = walkingDead.watched.length, sandmanCount = sandman.watched.length, witcherCount = witcher.watched.length, strangerThingsCount = strangerThings.watched.length, gameOfThronesCount = gameOfThrones.watched.length, breakingBadCount = breakingBad.watched.length, blackMirrorCount = blackMirror.watched.length, friendsCount = friends.watched.length, lastOfUsCount = lastOfUs.watched.length, darkCount = dark.watched.length, wandavisionCount = wandavision.watched.length, squidGameCount = squidGame.watched.length, sexEducationCount = sexEducation.watched.length, sense8Count = sense8.watched.length, theBoysCount = theBoys.watched.length, wednesdayCount = wednesday.watched.length, murderCount = murder.watched.length, that70sCount = that70s.watched.length, himymCount = himym.watched.length, himyfCount = himyf.watched.length, allCount = count + hotdCount + bigBangCount + acolyteCount + siloCount + stuartCount + arkCount + duneCount + dexterCount + walkingDeadCount + sandmanCount + witcherCount + strangerThingsCount + gameOfThronesCount + breakingBadCount + blackMirrorCount + friendsCount + lastOfUsCount + darkCount + wandavisionCount + squidGameCount + sexEducationCount + sense8Count + theBoysCount + wednesdayCount + murderCount + that70sCount + himymCount + himyfCount, xp = allCount * 22, info = getLevelInfo(xp), percent = Math.round((allCount / (totalEpisodes + 26 + 279 + 8 + 30 + 10 + 36 + 14 + 96 + 177 + 21 + 40 + 42 + 73 + 62 + 33 + 236 + 16 + 26 + 9 + 22 + 32 + 24 + 40 + 16 + 90 + 200 + 208 + 30)) * 100);
  document.getElementById('level-number').textContent = info.level;
  document.getElementById('avatar-level').textContent = info.level;
  document.getElementById('xp-current').textContent = `${xp} XP`;
  document.getElementById('xp-next').textContent = `${info.ceiling - xp} XP para o nível ${info.level + 1}`;
  setWidth('xp-progress', info.percent);
  document.getElementById('stat-episodes').textContent = allCount;
  document.getElementById('stat-xp').textContent = xp;
  document.getElementById('stat-series').textContent = Number(count === totalEpisodes) + Number(hotdCount === 26) + Number(bigBangCount === 279) + Number(acolyteCount === 8) + Number(siloCount === 30) + Number(stuartCount === 10) + Number(arkCount === 36) + Number(duneCount === 14) + Number(dexterCount === 96) + Number(walkingDeadCount === 177) + Number(sandmanCount === 21) + Number(witcherCount === 40) + Number(strangerThingsCount === 42) + Number(gameOfThronesCount === 73) + Number(breakingBadCount === 62) + Number(blackMirrorCount === 33) + Number(friendsCount === 236) + Number(lastOfUsCount === 16) + Number(darkCount === 26) + Number(wandavisionCount === 9) + Number(squidGameCount === 22) + Number(sexEducationCount === 32) + Number(sense8Count === 24) + Number(theBoysCount === 40) + Number(wednesdayCount === 16) + Number(murderCount === 90) + Number(that70sCount === 200) + Number(himymCount === 208) + Number(himyfCount === 30);
  document.getElementById('stat-progress').textContent = `${percent}%`;
  const americanPercent = Math.round((count / totalEpisodes) * 100);
  document.getElementById('profile-progress-label').textContent = `${americanPercent}% assistido`;
  setWidth('profile-progress', americanPercent);
  document.getElementById('american-profile-card').hidden = !state.inWatchlist;
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
  const arkPercent = Math.round((arkCount / 36) * 100);
  document.getElementById('ark-profile-card').hidden = !ark.inWatchlist;
  document.getElementById('ark-profile-progress-label').textContent = `${arkPercent}% assistido`;
  setWidth('ark-profile-progress', arkPercent);
  [[dune,duneCount,14,'dune'],[dexter,dexterCount,96,'dexter'],[walkingDead,walkingDeadCount,177,'walking-dead'],[sandman,sandmanCount,21,'sandman'],[witcher,witcherCount,40,'witcher'],[strangerThings,strangerThingsCount,42,'stranger-things'],[gameOfThrones,gameOfThronesCount,73,'game-of-thrones'],[breakingBad,breakingBadCount,62,'breaking-bad'],[blackMirror,blackMirrorCount,33,'black-mirror'],[friends,friendsCount,236,'friends'],[lastOfUs,lastOfUsCount,16,'last-of-us'],[dark,darkCount,26,'dark'],[wandavision,wandavisionCount,9,'wandavision'],[squidGame,squidGameCount,22,'squid-game'],[sexEducation,sexEducationCount,32,'sex-education'],[sense8,sense8Count,24,'sense8'],[theBoys,theBoysCount,40,'the-boys'],[wednesday,wednesdayCount,16,'wednesday'],[murder,murderCount,90,'how-to-get-away-with-murder'],[that70s,that70sCount,200,'that-70s-show'],[himym,himymCount,208,'how-i-met-your-mother'],[himyf,himyfCount,30,'how-i-met-your-father']].forEach(([series,watched,total,id])=>{const value=Math.round(watched/total*100);document.getElementById(`${id}-profile-card`).hidden=!series.inWatchlist;document.getElementById(`${id}-profile-progress-label`).textContent=`${value}% assistido`;setWidth(`${id}-profile-progress`,value)});
  document.getElementById('profile-empty').hidden = state.inWatchlist || hotd.inWatchlist || bigBang.inWatchlist || acolyte.inWatchlist || silo.inWatchlist || stuart.inWatchlist || ark.inWatchlist || dune.inWatchlist || dexter.inWatchlist || walkingDead.inWatchlist || sandman.inWatchlist || witcher.inWatchlist || strangerThings.inWatchlist || gameOfThrones.inWatchlist || breakingBad.inWatchlist || blackMirror.inWatchlist || friends.inWatchlist || lastOfUs.inWatchlist || dark.inWatchlist || wandavision.inWatchlist || squidGame.inWatchlist || sexEducation.inWatchlist || sense8.inWatchlist || theBoys.inWatchlist || wednesday.inWatchlist || murder.inWatchlist || that70s.inWatchlist || himym.inWatchlist || himyf.inWatchlist;
}

function initCatalog() {
  const state = getState(), hotd = getHotdState(), bigBang = getBigBangState(), acolyte = getAcolyteState(), silo = getSiloState(), stuart = getStuartState(), ark = getArkState(), dune = getExtraState(DUNE_STORAGE_KEY), dexter = getExtraState(DEXTER_STORAGE_KEY), walkingDead = getExtraState(WALKING_DEAD_STORAGE_KEY), sandman = getExtraState(SANDMAN_STORAGE_KEY), witcher = getExtraState(WITCHER_STORAGE_KEY), strangerThings = getExtraState(STRANGER_THINGS_STORAGE_KEY), gameOfThrones = getExtraState(GAME_OF_THRONES_STORAGE_KEY), breakingBad = getExtraState(BREAKING_BAD_STORAGE_KEY), blackMirror = getExtraState(BLACK_MIRROR_STORAGE_KEY), friends = getExtraState(FRIENDS_STORAGE_KEY), lastOfUs = getExtraState(LAST_OF_US_STORAGE_KEY), dark = getExtraState(DARK_STORAGE_KEY), wandavision = getExtraState(WANDAVISION_STORAGE_KEY), squidGame = getExtraState(SQUID_GAME_STORAGE_KEY), sexEducation = getExtraState(SEX_EDUCATION_STORAGE_KEY), sense8 = getExtraState(SENSE8_STORAGE_KEY), theBoys = getExtraState(THE_BOYS_STORAGE_KEY), wednesday = getExtraState(WEDNESDAY_STORAGE_KEY), murder = getExtraState(MURDER_STORAGE_KEY), that70s = getExtraState(THAT_70S_STORAGE_KEY), himym = getExtraState(HIMYM_STORAGE_KEY), himyf = getExtraState(HIMYF_STORAGE_KEY), percent = Math.round((state.watched.length / totalEpisodes) * 100), hotdPercent = Math.round((hotd.watched.length / 26) * 100), bigBangPercent = Math.round((bigBang.watched.length / 279) * 100), acolytePercent = Math.round((acolyte.watched.length / 8) * 100), siloPercent = Math.round((silo.watched.length / 30) * 100), stuartPercent = Math.round((stuart.watched.length / 10) * 100), arkPercent = Math.round((ark.watched.length / 36) * 100);
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
  document.getElementById('ark-catalog-progress-label').textContent = `${arkPercent}% assistido`;
  setWidth('ark-catalog-progress', arkPercent);
  [[dune,14,'dune'],[dexter,96,'dexter'],[walkingDead,177,'walking-dead'],[sandman,21,'sandman'],[witcher,40,'witcher'],[strangerThings,42,'stranger-things'],[gameOfThrones,73,'game-of-thrones'],[breakingBad,62,'breaking-bad'],[blackMirror,33,'black-mirror'],[friends,236,'friends'],[lastOfUs,16,'last-of-us'],[dark,26,'dark'],[wandavision,9,'wandavision'],[squidGame,22,'squid-game'],[sexEducation,32,'sex-education'],[sense8,24,'sense8'],[theBoys,40,'the-boys'],[wednesday,16,'wednesday'],[murder,90,'how-to-get-away-with-murder'],[that70s,200,'that-70s-show'],[himym,208,'how-i-met-your-mother'],[himyf,30,'how-i-met-your-father']].forEach(([series,total,id])=>{const value=Math.round(series.watched.length/total*100);document.getElementById(`${id}-catalog-progress-label`).textContent=`${value}% assistido`;setWidth(`${id}-catalog-progress`,value)});
}

function initSeriesRanking() {
  const american = getState(), hotd = getHotdState(), bigBang = getBigBangState(), acolyte = getAcolyteState(), silo = getSiloState(), stuart = getStuartState(), ark = getArkState(), dune = getExtraState(DUNE_STORAGE_KEY), dexter = getExtraState(DEXTER_STORAGE_KEY), walkingDead = getExtraState(WALKING_DEAD_STORAGE_KEY), sandman = getExtraState(SANDMAN_STORAGE_KEY), witcher = getExtraState(WITCHER_STORAGE_KEY), strangerThings = getExtraState(STRANGER_THINGS_STORAGE_KEY), gameOfThrones = getExtraState(GAME_OF_THRONES_STORAGE_KEY), breakingBad = getExtraState(BREAKING_BAD_STORAGE_KEY), blackMirror = getExtraState(BLACK_MIRROR_STORAGE_KEY), friends = getExtraState(FRIENDS_STORAGE_KEY), lastOfUs = getExtraState(LAST_OF_US_STORAGE_KEY), dark = getExtraState(DARK_STORAGE_KEY), wandavision = getExtraState(WANDAVISION_STORAGE_KEY), squidGame = getExtraState(SQUID_GAME_STORAGE_KEY), sexEducation = getExtraState(SEX_EDUCATION_STORAGE_KEY), sense8 = getExtraState(SENSE8_STORAGE_KEY), theBoys = getExtraState(THE_BOYS_STORAGE_KEY), wednesday = getExtraState(WEDNESDAY_STORAGE_KEY), murder = getExtraState(MURDER_STORAGE_KEY), that70s = getExtraState(THAT_70S_STORAGE_KEY), himym = getExtraState(HIMYM_STORAGE_KEY), himyf = getExtraState(HIMYF_STORAGE_KEY);
  const entries = [
    { row: document.getElementById('american-rank-row'), score: Number(american.inWatchlist) },
    { row: document.getElementById('hotd-rank-row'), score: Number(hotd.inWatchlist) },
    { row: document.getElementById('big-bang-rank-row'), score: Number(bigBang.inWatchlist) },
    { row: document.getElementById('acolyte-rank-row'), score: Number(acolyte.inWatchlist) },
    { row: document.getElementById('silo-rank-row'), score: Number(silo.inWatchlist) },
    { row: document.getElementById('stuart-rank-row'), score: Number(stuart.inWatchlist) },
    { row: document.getElementById('ark-rank-row'), score: Number(ark.inWatchlist) },
    { row: document.getElementById('dune-rank-row'), score: Number(dune.inWatchlist) },
    { row: document.getElementById('dexter-rank-row'), score: Number(dexter.inWatchlist) },
    { row: document.getElementById('walking-dead-rank-row'), score: Number(walkingDead.inWatchlist) },
    { row: document.getElementById('sandman-rank-row'), score: Number(sandman.inWatchlist) },
    { row: document.getElementById('witcher-rank-row'), score: Number(witcher.inWatchlist) },
    { row: document.getElementById('stranger-things-rank-row'), score: Number(strangerThings.inWatchlist) },
    { row: document.getElementById('game-of-thrones-rank-row'), score: Number(gameOfThrones.inWatchlist) },
    { row: document.getElementById('breaking-bad-rank-row'), score: Number(breakingBad.inWatchlist) },
    { row: document.getElementById('black-mirror-rank-row'), score: Number(blackMirror.inWatchlist) },
    { row: document.getElementById('friends-rank-row'), score: Number(friends.inWatchlist) },
    { row: document.getElementById('last-of-us-rank-row'), score: Number(lastOfUs.inWatchlist) },
    { row: document.getElementById('dark-rank-row'), score: Number(dark.inWatchlist) },
    { row: document.getElementById('wandavision-rank-row'), score: Number(wandavision.inWatchlist) },
    { row: document.getElementById('squid-game-rank-row'), score: Number(squidGame.inWatchlist) },
    { row: document.getElementById('sex-education-rank-row'), score: Number(sexEducation.inWatchlist) },
    { row: document.getElementById('sense8-rank-row'), score: Number(sense8.inWatchlist) },
    { row: document.getElementById('the-boys-rank-row'), score: Number(theBoys.inWatchlist) },
    { row: document.getElementById('wednesday-rank-row'), score: Number(wednesday.inWatchlist) },
    { row: document.getElementById('how-to-get-away-with-murder-rank-row'), score: Number(murder.inWatchlist) },
    { row: document.getElementById('that-70s-show-rank-row'), score: Number(that70s.inWatchlist) },
    { row: document.getElementById('how-i-met-your-mother-rank-row'), score: Number(himym.inWatchlist) },
    { row: document.getElementById('how-i-met-your-father-rank-row'), score: Number(himyf.inWatchlist) }
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
  const currentXp = (getState().watched.length + getHotdState().watched.length + getBigBangState().watched.length + getAcolyteState().watched.length + getSiloState().watched.length + getStuartState().watched.length + getArkState().watched.length + [DUNE_STORAGE_KEY,DEXTER_STORAGE_KEY,WALKING_DEAD_STORAGE_KEY,SANDMAN_STORAGE_KEY,WITCHER_STORAGE_KEY,STRANGER_THINGS_STORAGE_KEY,GAME_OF_THRONES_STORAGE_KEY,BREAKING_BAD_STORAGE_KEY,BLACK_MIRROR_STORAGE_KEY,FRIENDS_STORAGE_KEY,LAST_OF_US_STORAGE_KEY,DARK_STORAGE_KEY,WANDAVISION_STORAGE_KEY,SQUID_GAME_STORAGE_KEY,SEX_EDUCATION_STORAGE_KEY,SENSE8_STORAGE_KEY,THE_BOYS_STORAGE_KEY,WEDNESDAY_STORAGE_KEY,MURDER_STORAGE_KEY,THAT_70S_STORAGE_KEY,HIMYM_STORAGE_KEY,HIMYF_STORAGE_KEY].reduce((sum,key)=>sum+getExtraState(key).watched.length,0)) * 22;
  const users = [{ name: 'Você', xp: currentXp, current: true }];
  document.getElementById('user-ranking-list').innerHTML = users.map((user, index) => {
    const info = getLevelInfo(user.xp);
    return `<div class="user-rank-row ${index < 3 ? `top-${index + 1}` : ''} ${user.current ? 'current-user' : ''}"><strong class="user-position">${String(index + 1).padStart(2, '0')}</strong><span class="rank-avatar">${user.name.charAt(0)}</span><div class="user-name"><strong>${user.name}</strong><small>${user.current ? 'SEU PERFIL' : 'AVENTUREIRO'}</small></div><div class="user-level"><span>NÍVEL ${info.level}</span><strong>${user.xp} XP</strong></div></div>`;
  }).join('');
}

function initExtendedLibrary() {
  const records = PROFILE_LIBRARY.map(([id,key,total,ratingSlug])=>({id,key,total,ratingSlug,state:getExtraState(key)}));
  const watchedTotal = records.reduce((sum,item)=>sum+item.state.watched.length,0);
  const xp = watchedTotal * 22;
  const level = getLevelInfo(xp);
  document.querySelectorAll('[data-header-level]').forEach(el=>el.textContent=level.level);
  document.querySelectorAll('[data-header-xp]').forEach(el=>el.textContent=`${xp} XP`);
  document.querySelectorAll('[data-header-next]').forEach(el=>el.textContent=`${level.ceiling-xp} XP para o nível ${level.level+1}`);
  document.querySelectorAll('[data-header-xp-bar]').forEach(el=>el.style.width=`${level.percent}%`);

  if(page==='catalog') records.forEach(item=>{const percent=Math.round(item.state.watched.length/item.total*100);const label=document.getElementById(`${item.id}-catalog-progress-label`);if(label){label.textContent=`${percent}% assistido`;setWidth(`${item.id}-catalog-progress`,percent)}});

  if(page==='profile') {
    records.forEach(item=>{const percent=Math.round(item.state.watched.length/item.total*100);const label=document.getElementById(`${item.id}-profile-progress-label`);if(label){label.textContent=`${percent}% assistido`;setWidth(`${item.id}-profile-progress`,percent)}});
    document.getElementById('level-number').textContent=level.level;document.getElementById('avatar-level').textContent=level.level;document.getElementById('xp-current').textContent=`${xp} XP`;document.getElementById('xp-next').textContent=`${level.ceiling-xp} XP para o nível ${level.level+1}`;setWidth('xp-progress',level.percent);
    document.getElementById('stat-episodes').textContent=watchedTotal;document.getElementById('stat-xp').textContent=xp;document.getElementById('stat-series').textContent=records.filter(item=>item.state.inWatchlist&&item.state.watched.length===item.total).length;document.getElementById('stat-progress').textContent=`${Math.round(watchedTotal/records.reduce((sum,item)=>sum+item.total,0)*100)}%`;
    const empty=document.getElementById('profile-empty'),tabs=[...document.querySelectorAll('[data-profile-filter]')];
    const applyFilter=filter=>{const uid=window.seriesLonerUser?.uid;let shown=0;records.forEach(item=>{const card=document.getElementById(`${item.id}-profile-card`);if(!card)return;const rating=uid?Number(localStorage.getItem(`series-loner-rating-${uid}-${item.ratingSlug}`)||0):0;const visible=item.state.inWatchlist&&(filter==='watching'?item.state.watched.length<item.total:filter==='completed'?item.state.watched.length===item.total:rating===Number(filter));card.hidden=!visible;if(visible)shown++});empty.hidden=shown>0;if(!shown){const labels={watching:'Nenhuma série para continuar',completed:'Nenhuma série finalizada'};empty.querySelector('strong').textContent=labels[filter]||`Nenhuma série com ${filter} estrela${filter==='1'?'':'s'}`;empty.querySelector('p').textContent=filter==='watching'?'Adicione uma série ao acervo para começar a assistir.':filter==='completed'?'As séries aparecem aqui quando todos os episódios forem assistidos.':'Avalie suas séries para encontrá-las nesta aba.'}};
    tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(item=>{const active=item===tab;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active))});applyFilter(tab.dataset.profileFilter)}));
    applyFilter('watching');window.addEventListener('seriesloner-auth-change',()=>applyFilter(document.querySelector('[data-profile-filter].active')?.dataset.profileFilter||'watching'));
  }

  if(page==='ranking-series') {
    const board=document.querySelector('.ranking-board');
    records.forEach(item=>{const row=document.getElementById(`${item.id}-rank-row`);if(row)board.appendChild(row)});
    const rows=[...board.querySelectorAll('.rank-row')].sort((a,b)=>{const score=row=>{const item=records.find(entry=>row.id===`${entry.id}-rank-row`);return item?Number(item.state.inWatchlist):Number(row.querySelector('.rank-score strong')?.textContent||0)};return score(b)-score(a)});
    rows.forEach((row,index)=>{const item=records.find(entry=>row.id===`${entry.id}-rank-row`),score=item?Number(item.state.inWatchlist):Number(row.querySelector('.rank-score strong')?.textContent||0);row.querySelector('.rank-position').textContent=String(index+1).padStart(2,'0');row.querySelector('.rank-score strong').textContent=score;row.querySelector('.rank-score span').textContent=score===1?'ponto':'pontos';board.appendChild(row)});
  }

  if(page==='ranking-users'){const xpNode=document.querySelector('.current-user .user-level strong');if(xpNode)xpNode.textContent=`${xp} XP`}
}

const page = document.body.dataset.page;
const authEntry = document.querySelector('.header-xp');
if (authEntry && !document.querySelector('.auth-link')) authEntry.insertAdjacentHTML('beforebegin', '<a class="auth-link" href="login.html">ENTRAR</a>');
updateHeaderXp();
if (page === 'home') updateGlobalProgress();
if (page === 'series') initSeriesPage();
if (page === 'profile') initProfile();
if (page === 'catalog' && !window.SeriesCatalog) initCatalog();
if (page === 'ranking-series') initSeriesRanking();
if (page === 'ranking-users') initUserRanking();
initExtendedLibrary();
window.addEventListener('seriesloner-ranking-change',event=>{
  const {users,seriesScores}=event.detail;
  if(page==='ranking-users'){
    const uid=window.seriesLonerUser?.uid,list=document.getElementById('user-ranking-list');
    if(list)list.innerHTML=users.map((user,index)=>{const info=getLevelInfo(user.xp),current=user.uid===uid,name=String(user.name).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');return `<div class="user-rank-row ${index<3?`top-${index+1}`:''} ${current?'current-user':''}"><strong class="user-position">${String(index+1).padStart(2,'0')}</strong><span class="rank-avatar">${name.charAt(0).toUpperCase()}</span><div class="user-name"><strong>${name}</strong><small>${current?'SEU PERFIL':'AVENTUREIRO'}</small></div><div class="user-level"><span>NÍVEL ${info.level}</span><strong>${user.xp} XP</strong></div></div>`}).join('');
  }
  if(page==='ranking-series'){
    const board=document.querySelector('.ranking-board');if(!board)return;
    const rows=[...board.querySelectorAll('.rank-row')].map(row=>{const item=row.id==='american-rank-row'?PROFILE_LIBRARY[0]:PROFILE_LIBRARY.find(entry=>row.id===`${entry[0]}-rank-row`);return{row,score:item?Number(seriesScores[item[1]]||0):0}}).sort((a,b)=>b.score-a.score);
    rows.forEach(({row,score},index)=>{row.querySelector('.rank-position').textContent=String(index+1).padStart(2,'0');row.querySelector('.rank-score strong').textContent=score;row.querySelector('.rank-score span').textContent=score===1?'ponto':'pontos';row.classList.toggle('rank-first',index===0&&score>0);board.appendChild(row)});
  }
});
import('./auth-shell.js');
