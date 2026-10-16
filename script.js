// ============================================================================
// TUHTIMONNIN MUHDITTONNIT - YHDISTETTY SIMULAATTORI & LIVE API SYNC (script.js)
// ============================================================================

// Oletusotteluohjelma (käytetään ennen ensimmäistä Live-päivitystä)
const nflSchedule = {
    "6": [
        { date: "Perjantai 16.10.2026", time: "03:15", away: "Seattle Seahawks", home: "Denver Broncos", weather: "🌤 15°C, Aurinkoinen" },
        { date: "Sunnuntai 18.10.2026", time: "16:30", away: "Houston Texans", home: "Jacksonville Jaguars", weather: "☁️ 14°C, Pilvinen (Lontoo)" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Chicago Bears", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Baltimore Ravens", home: "Cleveland Browns", weather: "🌤 16°C, Melko selkeää" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Tennessee Titans", home: "Indianapolis Colts", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "New York Jets", home: "New England Patriots", weather: "🌥 13°C, Pilvinen" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "New Orleans Saints", home: "New York Giants", weather: "🌤 17°C, Raikas" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Carolina Panthers", home: "Philadelphia Eagles", weather: "🌤 18°C, Aurinkoinen" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Pittsburgh Steelers", home: "Tampa Bay Buccaneers", weather: "🌤 26°C, Aurinkoinen" },
        { date: "Sunnuntai 18.10.2026", time: "23:05", away: "Arizona Cardinals", home: "Los Angeles Rams", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 18.10.2026", time: "23:25", away: "Los Angeles Chargers", home: "Kansas City Chiefs", weather: "🌤 19°C, Selkeää" },
        { date: "Sunnuntai 18.10.2026", time: "23:25", away: "Buffalo Bills", home: "Las Vegas Raiders", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Maanantai 19.10.2026", time: "03:20", away: "Dallas Cowboys", home: "Green Bay Packers", weather: "❄️ 7°C, Viileä" },
        { date: "Tiistai 20.10.2026", time: "03:15", away: "Washington Commanders", home: "San Francisco 49ers", weather: "🌤 18°C, Selkeää" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 30, 31, 34, 35, 37, 38, 41, 42, 45];

// Virallinen NFL-joukkuekoodisto (Sleeper & ESPN -> nflData-avain)
const TEAM_MAP = {
    "ARI": { key: "Cardinals", full: "Arizona Cardinals" },
    "ATL": { key: "Falcons", full: "Atlanta Falcons" },
    "BAL": { key: "Ravens", full: "Baltimore Ravens" },
    "BUF": { key: "Bills", full: "Buffalo Bills" },
    "CAR": { key: "Panthers", full: "Carolina Panthers" },
    "CHI": { key: "Bears", full: "Chicago Bears" },
    "CIN": { key: "Bengals", full: "Cincinnati Bengals" },
    "CLE": { key: "Browns", full: "Cleveland Browns" },
    "DAL": { key: "Cowboys", full: "Dallas Cowboys" },
    "DEN": { key: "Broncos", full: "Denver Broncos" },
    "DET": { key: "Lions", full: "Detroit Lions" },
    "GB":  { key: "Packers", full: "Green Bay Packers" },
    "HOU": { key: "Texans", full: "Houston Texans" },
    "IND": { key: "Colts", full: "Indianapolis Colts" },
    "JAX": { key: "Jaguars", full: "Jacksonville Jaguars" },
    "KC":  { key: "Chiefs", full: "Kansas City Chiefs" },
    "LV":  { key: "Raiders", full: "Las Vegas Raiders" },
    "LAC": { key: "Chargers", full: "Los Angeles Chargers" },
    "LAR": { key: "Rams", full: "Los Angeles Rams" },
    "MIA": { key: "Dolphins", full: "Miami Dolphins" },
    "MIN": { key: "Vikings", full: "Minnesota Vikings" },
    "NE":  { key: "Patriots", full: "New England Patriots" },
    "NO":  { key: "Saints", full: "New Orleans Saints" },
    "NYG": { key: "Giants", full: "New York Giants" },
    "NYJ": { key: "Jets", full: "New York Jets" },
    "PHI": { key: "Eagles", full: "Philadelphia Eagles" },
    "PIT": { key: "Steelers", full: "Pittsburgh Steelers" },
    "SF":  { key: "49ers", full: "San Francisco 49ers" },
    "SEA": { key: "Seahawks", full: "Seattle Seahawks" },
    "TB":  { key: "Buccaneers", full: "Tampa Bay Buccaneers" },
    "TEN": { key: "Titans", full: "Tennessee Titans" },
    "WAS": { key: "Commanders", full: "Washington Commanders" }
};

const CACHE_KEY_DATA = "tuhtimonni_live_nfldata_v1";
const CACHE_KEY_SCHED = "tuhtimonni_live_schedule_v1";
const CACHE_KEY_TIME = "tuhtimonni_live_timestamp";

// ============================================================================
// KÄYNNISTYS JA KÄYTTÖLIITTYMÄN ALUSTUS
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    // Lisätään Live-päivityksen ja tiedostolatauksen ohjaimet
    injectSyncControls();

    // Ladataan mahdollinen tallennettu Live-data selaimen välimuistista
    loadCachedLiveData();

    if (weekSelect) weekSelect.addEventListener('change', updateMatches);
    if (matchSelect) matchSelect.addEventListener('change', runMonteCarloSimulation);
    if (compareBtn) compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

function updateMatches() {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    if (!weekSelect || !matchSelect) return;

    const availableWeeks = Object.keys(nflSchedule);
    const fallbackWeek = availableWeeks[0] || "6";
    const currentWeek = nflSchedule[weekSelect.value] ? weekSelect.value : fallbackWeek;

    matchSelect.innerHTML = '';
    const matches = nflSchedule[currentWeek] || [];

    const groupedMatches = {};
    matches.forEach((m, index) => {
        if (!groupedMatches[m.date]) {
            groupedMatches[m.date] = [];
        }
        groupedMatches[m.date].push({ ...m, originalIndex: index });
    });

    for (const [date, dayMatches] of Object.entries(groupedMatches)) {
        const group = document.createElement('optgroup');
        group.label = date;

        dayMatches.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.originalIndex;
            opt.textContent = `${m.time} - ${m.away} @ ${m.home}`;
            group.appendChild(opt);
        });

        matchSelect.appendChild(group);
    }

    runMonteCarloSimulation();
}

// ============================================================================
// LIVE API SYNKRONOINTI (ESPN + SLEEPER)
// ============================================================================

function injectSyncControls() {
    const compareBtn = document.getElementById('compareBtn');
    if (!compareBtn || !compareBtn.parentElement) return;

    const syncBox = document.createElement('div');
    syncBox.style.marginTop = "14px";
    syncBox.style.paddingTop = "14px";
    syncBox.style.borderTop = "1px solid rgba(51, 65, 85, 0.8)";
    syncBox.innerHTML = `
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="liveSyncBtn" type="button" style="flex: 2; background: linear-gradient(135deg, #00d2ff, #0284c7) !important; color: #07090e !important;">
                🔄 Päivitä Live-tilastot (API)
            </button>
            <button id="exportDataBtn" type="button" style="flex: 1; background: linear-gradient(145deg, #1e293b, #0f172a) !important; color: #cbd5e1 !important; border: 1px solid #475569 !important; font-size: 13px;">
                💾 Lataa nflData.js
            </button>
        </div>
        <div id="syncStatusText" style="font-size: 12px; color: #94a3b8; margin-top: 8px; text-align: center;">
            Tila: Tarkistetaan välimuistia...
        </div>
    `;
    compareBtn.parentElement.appendChild(syncBox);

    const liveBtn = document.getElementById('liveSyncBtn');
    const expBtn = document.getElementById('exportDataBtn');
    if (liveBtn) liveBtn.addEventListener('click', syncAllLiveNFLData);
    if (expBtn) expBtn.addEventListener('click', downloadGeneratedNflData);
}

function loadCachedLiveData() {
    const statusEl = document.getElementById('syncStatusText');
    try {
        const cachedData = localStorage.getItem(CACHE_KEY_DATA);
        const cachedSched = localStorage.getItem(CACHE_KEY_SCHED);
        const cachedTime = localStorage.getItem(CACHE_KEY_TIME);

        if (cachedData && cachedSched) {
            const parsedData = JSON.parse(cachedData);
            const parsedSched = JSON.parse(cachedSched);

            if (typeof nflData !== 'undefined') Object.assign(nflData, parsedData);
            Object.keys(parsedSched).forEach(k => { nflSchedule[k] = parsedSched[k]; });

            const activeWeek = Object.keys(parsedSched)[0];
            refreshWeekDropdown(parsedSched, activeWeek);

            const timeStr = cachedTime ? new Date(parseInt(cachedTime)).toLocaleString('fi-FI') : 'Tuntematon';
            if (statusEl) statusEl.innerHTML = `✅ Live-data käytössä (Päivitetty: <strong>${timeStr}</strong>)`;
            return;
        }
    } catch (e) {
        console.warn("Välimuistin luku epäonnistui:", e);
    }
    if (statusEl) {
        statusEl.textContent = "ℹ️ Käytössä paikallinen nflData.js. Paina 'Päivitä Live-tilastot' hakeaksesi tuoreimmat tiedot.";
    }
}

async function syncAllLiveNFLData() {
    const statusEl = document.getElementById('syncStatusText');
    const syncBtn = document.getElementById('liveSyncBtn');
    if (syncBtn) syncBtn.disabled = true;

    try {
        if (statusEl) statusEl.innerHTML = "⏳ 1/4 Haetaan kuluvaa NFL-viikkoa ja kauden tilaa...";
        const stateRes = await fetch("https://api.sleeper.app/v1/state/nfl");
        const nflState = await stateRes.json();
        const season = nflState.season || "2026";
        const currentWeek = nflState.display_week || nflState.week || 6;

        if (statusEl) statusEl.innerHTML = `⏳ 2/4 Haetaan viikon ${currentWeek} otteluohjelma ja säät (ESPN API)...`;
        const liveSchedule = await fetchEspnSchedule(season, currentWeek);

        if (statusEl) statusEl.innerHTML = "⏳ 3/4 Haetaan pelaajien koko nimet, nykyiset joukkueet, loukkaantumiset ja tilastot...";
        const [playersRes, seasonStatsRes] = await Promise.all([
            fetch("https://api.sleeper.app/v1/players/nfl"),
            fetch(`https://api.sleeper.app/stats/nfl/regular/${season}`)
        ]);

        const allPlayers = await playersRes.json();
        const seasonStats = await seasonStatsRes.json();

        // Haetaan viimeisimpien pelattujen viikkojen (max 5 viikkoa) ottelulogit virelaskentaa varten
        const maxCompletedWeek = Math.max(1, currentWeek - 1);
        const startWeek = Math.max(1, maxCompletedWeek - 4);
        const weeklyStatsMap = {};

        const weekPromises = [];
        for (let w = startWeek; w <= maxCompletedWeek; w++) {
            weekPromises.push(
                fetch(`https://api.sleeper.app/stats/nfl/regular/${season}/${w}`)
                    .then(r => r.ok ? r.json() : {})
                    .then(data => { weeklyStatsMap[w] = data; })
                    .catch(() => { weeklyStatsMap[w] = {}; })
            );
        }
        await Promise.all(weekPromises);

        if (statusEl) statusEl.innerHTML = "⏳ 4/4 Päivitetään kaikki 32 joukkuetta ja lasketaan kertoimet...";
        const newNflData = await buildCompleteNflData(allPlayers, seasonStats, weeklyStatsMap, startWeek, maxCompletedWeek);

        if (typeof nflData !== 'undefined') {
            Object.keys(newNflData).forEach(k => { nflData[k] = newNflData[k]; });
        }
        if (liveSchedule[String(currentWeek)] && liveSchedule[String(currentWeek)].length > 0) {
            nflSchedule[String(currentWeek)] = liveSchedule[String(currentWeek)];
        }

        localStorage.setItem(CACHE_KEY_DATA, JSON.stringify(newNflData));
        localStorage.setItem(CACHE_KEY_SCHED, JSON.stringify(liveSchedule));
        localStorage.setItem(CACHE_KEY_TIME, String(Date.now()));

        refreshWeekDropdown(liveSchedule, String(currentWeek));
        updateMatches();

        if (statusEl) {
            statusEl.innerHTML = `✅ Live-päivitys valmis! Viikko ${currentWeek} (${season}) – kaikki 32 joukkuetta ja pelaajat ajan tasalla.`;
        }
    } catch (err) {
        console.error("Virhe Live-synkronoinnissa:", err);
        if (statusEl) statusEl.innerHTML = `❌ Virhe päivityksessä: ${err.message}. Tarkista verkkoyhteys.`;
    } finally {
        if (syncBtn) syncBtn.disabled = false;
    }
}

async function fetchEspnSchedule(season, week) {
    const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=${season}&seasontype=2&week=${week}`;
    const res = await fetch(url);
    const data = await res.json();
    const events = data.events || [];

    const weekMatches = events.map(ev => {
        const comp = ev.competitions?.[0] || {};
        const competitors = comp.competitors || [];
        const homeComp = competitors.find(c => c.homeAway === "home") || competitors[0];
        const awayComp = competitors.find(c => c.homeAway === "away") || competitors[1];

        const dt = new Date(ev.date);
        const dayNames = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];
        const dateStr = `${dayNames[dt.getDay()]} ${dt.getDate()}.${dt.getMonth() + 1}.${dt.getFullYear()}`;
        const timeStr = dt.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Helsinki' });

        const isIndoor = comp.venue?.indoor === true;
        let weatherStr = "🌤 17°C, Selkeää";
        if (isIndoor) {
            weatherStr = "🏟️ Sisäkenttä (Dome)";
        } else if (ev.weather) {
            const tempC = ev.weather.temperature ? Math.round((ev.weather.temperature - 32) * 5 / 9) : 16;
            const cond = ev.weather.displayValue || "Selkeää";
            weatherStr = `⛅ ${tempC}°C, ${cond}`;
        }

        return {
            date: dateStr,
            time: timeStr,
            away: awayComp?.team?.displayName || "Away Team",
            home: homeComp?.team?.displayName || "Home Team",
            weather: weatherStr
        };
    });

    return { [String(week)]: weekMatches };
}

async function buildCompleteNflData(allPlayers, seasonStats, weeklyStatsMap, startWeek, maxWeek) {
    // Haetaan joukkueiden viralliset voitto-tappio-saldot ESPN:ltä
    const espnRecordByKey = {};
    try {
        const espnTeamsRes = await fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams?limit=32");
        const espnTeamsJson = await espnTeamsRes.json();
        const espnTeamsList = espnTeamsJson?.sports?.[0]?.leagues?.[0]?.teams || [];

        espnTeamsList.forEach(tObj => {
            const t = tObj.team;
            if (t && t.displayName) {
                const key = findTeamKey(t.displayName);
                const rec = t.record?.items?.[0]?.summary || null;
                if (key && rec) espnRecordByKey[key] = rec;
            }
        });
    } catch (e) {
        console.warn("ESPN-joukkuesaldojen haku ohitettiin:", e);
    }

    const resultData = {};
    const teamRosters = {};
    Object.keys(TEAM_MAP).forEach(abbr => { teamRosters[abbr] = []; });

    for (const [playerId, p] of Object.entries(allPlayers)) {
        if (!p || !p.team || !teamRosters[p.team]) continue;
        const pos = p.position;
        if (!["QB", "RB", "FB", "WR", "TE", "DL", "DE", "DT", "LB", "OLB", "ILB", "DB", "CB", "S"].includes(pos)) continue;

        const st = seasonStats[playerId] || {};
        teamRosters[p.team].push({
            id: playerId,
            fullName: p.full_name || `${p.first_name || ''} ${p.last_name || ''}`.trim(),
            pos: pos,
            injuryStatus: p.injury_status || null,
            depthOrder: p.depth_chart_order || 99,
            stats: st
        });
    }

    for (const [abbr, meta] of Object.entries(TEAM_MAP)) {
        const teamKey = meta.key;
        const roster = teamRosters[abbr] || [];

        let teamPassYds = 0;
        let teamRushYds = 0;
        let teamTurnovers = 0;
        let teamSacks = 0;

        roster.forEach(p => {
            teamPassYds += Math.round(p.stats.pass_yd || 0);
            teamRushYds += Math.round(p.stats.rush_yd || 0);
            teamTurnovers += Math.round((p.stats.pass_int || 0) + (p.stats.fum_lost || 0));
            teamSacks += Math.round(p.stats.idp_sack || 0);
        });

        const fallbackTeam = (typeof nflData !== 'undefined' && nflData[teamKey]) ? nflData[teamKey] : {};
        const recordStr = espnRecordByKey[teamKey] || fallbackTeam.record || "3-2";
        const parts = String(recordStr).split('-');
        const gamesPlayed = Math.max(1, parts.reduce((acc, v) => acc + (parseInt(v) || 0), 0));

        // 1. Virallinen loukkaantumisraportti
        const injuredPlayers = roster
            .filter(p => p.injuryStatus && ["Out", "Doubtful", "Questionable", "IR"].includes(p.injuryStatus))
            .filter(p => p.depthOrder <= 2 || (p.stats.gp || 0) >= 1)
            .slice(0, 5)
            .map(p => ({
                name: p.fullName,
                pos: p.pos,
                status: p.injuryStatus === "IR" ? "Out (IR)" : p.injuryStatus
            }));

        // 2. Valitaan hyökkäyksen todelliset ykköspelaajat (tehojen ja syvyyskartan perusteella)
        const offenseScore = (p) => (p.stats.rush_yd || 0) + (p.stats.rec_yd || 0) + ((p.stats.rush_td || 0) + (p.stats.rec_td || 0)) * 45;

        const qbs = roster.filter(p => p.pos === "QB")
            .sort((a, b) => (((b.stats.pass_yd || 0) + (b.stats.rush_yd || 0)) - ((a.stats.pass_yd || 0) + (a.stats.rush_yd || 0))) || (a.depthOrder - b.depthOrder));
        const rbs = roster.filter(p => p.pos === "RB" || p.pos === "FB")
            .sort((a, b) => (offenseScore(b) - offenseScore(a)) || (a.depthOrder - b.depthOrder));
        const wrs = roster.filter(p => p.pos === "WR")
            .sort((a, b) => (offenseScore(b) - offenseScore(a)) || (a.depthOrder - b.depthOrder));
        const tes = roster.filter(p => p.pos === "TE")
            .sort((a, b) => (offenseScore(b) - offenseScore(a)) || (a.depthOrder - b.depthOrder));

        const selectedOffensive = [
            ...qbs.slice(0, 1),
            ...rbs.slice(0, 2),
            ...wrs.slice(0, 2),
            ...tes.slice(0, 1)
        ];

        // Jos 6 pelaajaa ei ole täynnä tai WR3 on tehokas, täydennetään kuuteen
        if (selectedOffensive.length < 6 && wrs[2]) selectedOffensive.push(wrs[2]);

        const formattedPlayers = selectedOffensive.slice(0, 6).map(p => {
            const st = p.stats;
            const isQB = p.pos === "QB";

            // QB-SÄÄNTÖ: Anytime TD lasketaan AINOASTAAN juostuista + kiinniotetuista maaleista
            const anytimeTdCount = Math.round((st.rush_td || 0) + (st.rec_td || 0));

            const passYds = Math.round(st.pass_yd || 0);
            const rushYds = Math.round(st.rush_yd || 0);
            const recYds = Math.round(st.rec_yd || 0);
            const totalScrimmageYds = rushYds + recYds;

            const recCount = Math.round(st.rec || 0);
            const tgtCount = Math.round(st.rec_tgt || 0);

            const gameLog = [];
            for (let w = startWeek; w <= maxWeek; w++) {
                const wSt = weeklyStatsMap[w]?.[p.id] || {};
                const wTd = Math.round((wSt.rush_td || 0) + (wSt.rec_td || 0));
                const wYds = isQB ? Math.round(wSt.pass_yd || 0) : Math.round((wSt.rush_yd || 0) + (wSt.rec_yd || 0));
                gameLog.push({ w: w, yds: wYds, td: wTd });
            }

            const tdPerGame = anytimeTdCount / gamesPlayed;
            let calcOdds = 2.50;
            if (isQB) {
                calcOdds = rushYds / gamesPlayed >= 35 ? Math.max(1.70, 2.60 - tdPerGame * 0.9) : Math.max(2.90, 4.20 - tdPerGame * 1.1);
            } else {
                calcOdds = Math.max(1.45, Math.min(3.60, 2.65 - (tdPerGame * 1.15) - (totalScrimmageYds / gamesPlayed / 220)));
            }

            return {
                name: p.fullName,
                pos: p.pos,
                td: anytimeTdCount,
                yds: isQB ? `${passYds} pass yds / ${rushYds} rush yds` : `${totalScrimmageYds} yds`,
                rec: isQB ? (rushYds / gamesPlayed >= 30 ? "QB / Dual Threat" : "QB / Starter") : `${recCount}/${tgtCount} rec`,
                marketOdds: Number(calcOdds.toFixed(2)),
                yac: isQB ? undefined : `${Math.round(totalScrimmageYds * 0.36)} YAC`,
                gameLog: gameLog
            };
        });

        // 3. Puolustuksen tähtipelaajat
        const defs = roster
            .filter(p => ["DL", "DE", "DT", "LB", "OLB", "ILB", "DB", "CB", "S"].includes(p.pos))
            .sort((a, b) => (((b.stats.idp_sack || 0) * 3 + (b.stats.idp_tkl || 0)) - ((a.stats.idp_sack || 0) * 3 + (a.stats.idp_tkl || 0))))
            .slice(0, 2);

        const formattedDefenders = defs.length > 0 && (defs[0].stats.idp_sack || defs[0].stats.idp_tkl) ? defs.map(d => {
            const sacks = Number(d.stats.idp_sack || 0).toFixed(1);
            const tackles = Math.round(d.stats.idp_tkl || (d.stats.idp_tkl_solo || 0) + (d.stats.idp_tkl_ast || 0));
            const tfl = Math.round(d.stats.idp_tkl_loss || 0);
            const pressures = Math.max(Math.round(parseFloat(sacks) * 3.5), Math.round(d.stats.idp_qb_hit || 0) * 2);
            const prob = Math.min(85, Math.max(45, Math.round(45 + parseFloat(sacks) * 6)));
            return {
                name: `${d.fullName} (${d.pos})`,
                sacks: `${sacks} Sacks`,
                pressures: `${pressures} Pressures`,
                tackles: `${tackles} Tackles`,
                tacklesForLoss: tfl,
                probability: `${prob}%`,
                status: d.injuryStatus === "Out" ? "OUT" : "ACTIVE"
            };
        }) : (fallbackTeam.defenders || []);

        resultData[teamKey] = {
            record: recordStr,
            games: gamesPlayed,
            rush: teamRushYds > 100 ? teamRushYds : (fallbackTeam.rush || 500),
            pass: teamPassYds > 200 ? teamPassYds : (fallbackTeam.pass || 1100),
            oppPass: fallbackTeam.oppPass || Math.round(gamesPlayed * 215),
            oppRush: fallbackTeam.oppRush || Math.round(gamesPlayed * 110),
            oppTD: fallbackTeam.oppTD || Math.round(gamesPlayed * 2.2),
            turnovers: teamTurnovers || fallbackTeam.turnovers || 5,
            sacks: teamSacks > 2 ? teamSacks : (fallbackTeam.sacks || 12),
            redZonePct: fallbackTeam.redZonePct || 58,
            thirdDownPct: fallbackTeam.thirdDownPct || 41,
            penalties: fallbackTeam.penalties || Math.round(gamesPlayed * 6),
            injuredPlayers: injuredPlayers,
            defensiveVsPosition: fallbackTeam.defensiveVsPosition || {
                vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 },
                vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 },
                vsRB: { allowedYdsPerGame: 75, allowedTDs: 1 }
            },
            players: formattedPlayers,
            defenders: formattedDefenders
        };
    }

    return resultData;
}

function refreshWeekDropdown(scheduleObj, activeWeekStr) {
    const weekSelect = document.getElementById('weekSelect');
    if (!weekSelect || !scheduleObj) return;

    weekSelect.innerHTML = '';
    Object.keys(scheduleObj).forEach(w => {
        const opt = document.createElement('option');
        opt.value = w;
        opt.textContent = `Viikko ${w} (Live API)`;
        if (w === activeWeekStr) opt.selected = true;
        weekSelect.appendChild(opt);
    });
}

function downloadGeneratedNflData() {
    if (typeof nflData === 'undefined') return;
    const content = `// Automaattisesti generoitu Live-datasta (${new Date().toLocaleString('fi-FI')})\nconst nflData = ${JSON.stringify(nflData, null, 4)};\n`;
    const blob = new Blob([content], { type: "application/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "nflData.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================================================
// MONTE CARLO -SIMULAATTORI & PELAAJATODENNÄKÖISYYDET
// ============================================================================

function findTeamKey(teamName) {
    if (!teamName) return "Chiefs";
    if (teamName.includes("49ers")) return "49ers";
    const db = typeof nflData !== 'undefined' ? nflData : {};
    return Object.keys(db).find(k => teamName.includes(k)) || "Chiefs";
}

function calculateTeamInjuryFactor(injuredList) {
    if (!injuredList || !Array.isArray(injuredList)) return 1.0;
    let penalty = 1.0;
    injuredList.forEach(p => {
        const statusStr = p.status ? String(p.status) : "";
        if (statusStr.includes("Active")) return;
        const multiplier = statusStr.includes("Out") ? 1.0 : 0.45;
        const pPos = p.pos ? String(p.pos) : "";
        if (pPos.includes("QB")) penalty -= (0.22 * multiplier);
        else if (pPos.includes("RB") || pPos.includes("WR") || pPos.includes("TE")) penalty -= (0.05 * multiplier);
        else penalty -= (0.03 * multiplier);
    });
    return Math.max(0.5, penalty);
}

function calculateWeatherFactor(weatherString) {
    const wStr = weatherString ? String(weatherString) : "";
    if (wStr.includes("Dome") || wStr.includes("Sisäkenttä")) return 1.03;
    if (wStr.includes("Sade") || wStr.includes("Rankkasade") || wStr.includes("Sadetta") || wStr.includes("Rain")) return 0.90;
    if (wStr.includes("Tuulinen") || wStr.includes("Wind")) return 0.94;
    if (wStr.includes("Viileä") || wStr.includes("Kylmä") || wStr.includes("Snow")) return 0.97;
    return 1.0;
}

function getWeatherPositionMultiplier(pos, weatherString) {
    if (!weatherString || !pos) return 1.0;
    const wStr = String(weatherString);
    const pStr = String(pos);
    const isBadWeather = wStr.includes("Sade") || wStr.includes("Rankkasade") || wStr.includes("Sadetta") || wStr.includes("Tuulinen") || wStr.includes("Rain");
    if (isBadWeather) {
        if (pStr.includes("WR") || pStr.includes("TE")) return 0.92;
        if (pStr.includes("RB")) return 1.08;
    }
    return 1.0;
}

function calculateGameLogMomentum(player) {
    if (!player.gameLog || !Array.isArray(player.gameLog) || player.gameLog.length === 0) return 1.0;
    const recentGames = player.gameLog.slice(-2);
    let momentumBoost = 0;
    recentGames.forEach(game => {
        if (typeof game === 'object' && game !== null) {
            const gameStats = game.stats ? String(game.stats) : "";
            if ((game.td && game.td > 0) || gameStats.includes('TD')) {
                momentumBoost += 0.08;
            }
            if (game.yds && game.yds >= 90 && !String(player.pos).includes("QB")) {
                momentumBoost += 0.03;
            }
        } else if (typeof game === 'string' && game.includes('TD')) {
            momentumBoost += 0.08;
        }
    });
    return 1.0 + Math.min(0.18, momentumBoost);
}

function getClosestValidScore(rawScore) {
    let closest = VALID_SCORES[0];
    let minDiff = Math.abs(rawScore - closest);
    for (let i = 1; i < VALID_SCORES.length; i++) {
        let diff = Math.abs(rawScore - VALID_SCORES[i]);
        if (diff < minDiff) {
            minDiff = diff;
            closest = VALID_SCORES[i];
        }
    }
    return closest;
}

function getRandomPoisson(lambda) {
    let L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    do {
        k++;
        p *= Math.random();
    } while (p > L);
    return k - 1;
}

function getPlayedGamesCount(teamData) {
    if (!teamData) return 5;
    if (teamData.games && teamData.games > 0) return teamData.games;
    if (!teamData.record) return 5;
    const parts = String(teamData.record).split('-');
    const played = parts.reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    return played > 0 ? played : 5;
}

function getPlayerInjuryStatus(playerName, injuredList) {
    if (!injuredList || !Array.isArray(injuredList)) return "ACTIVE";
    const found = injuredList.find(p => p.name === playerName);
    if (!found || !found.status) return "ACTIVE";
    const st = String(found.status).toUpperCase();
    if (st.includes("OUT") || st.includes("IR")) return "OUT";
    if (st.includes("QUESTIONABLE") || st.includes("DOUBTFUL")) return "QUESTIONABLE";
    return "ACTIVE";
}

function extractTargets(recStr) {
    if (!recStr) return 0;
    const rStr = String(recStr);
    if (rStr.includes('/')) {
        const parts = rStr.split('/');
        const t = parseInt(parts[1]);
        return isNaN(t) ? 0 : t;
    }
    return 0;
}

function extractYAC(yacStr) {
    if (!yacStr) return 0;
    return parseInt(String(yacStr)) || 0;
}

function runMonteCarloSimulation() {
    const selectedWeekElement = document.getElementById('weekSelect');
    const matchIndexElement = document.getElementById('matchSelect');
    if (!selectedWeekElement || !matchIndexElement) return;

    const availableWeeks = Object.keys(nflSchedule);
    const selectedWeek = nflSchedule[selectedWeekElement.value] ? selectedWeekElement.value : (availableWeeks[0] || "6");
    const matchIndex = matchIndexElement.value || 0;
    const match = nflSchedule[selectedWeek]?.[matchIndex] || nflSchedule[selectedWeek]?.[0];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const db = typeof nflData !== 'undefined' ? nflData : {};
    const homeData = db[homeKey] || db["Chiefs"];
    const awayData = db[awayKey] || db["Broncos"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData?.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData?.injuredPlayers);
    let weatherFactor = calculateWeatherFactor(match.weather);

    const homeGames = getPlayedGamesCount(homeData);
    const awayGames = getPlayedGamesCount(awayData);

    const homePassYPG = Math.round((homeData?.pass || 1000) / homeGames);
    const homeRushYPG = Math.round((homeData?.rush || 500) / homeGames);
    const homePassDefYPG = Math.round((homeData?.oppPass || 1000) / homeGames);
    const homeRushDefYPG = Math.round((homeData?.oppRush || 500) / homeGames);

    const awayPassYPG = Math.round((awayData?.pass || 1000) / awayGames);
    const awayRushYPG = Math.round((awayData?.rush || 500) / awayGames);
    const awayPassDefYPG = Math.round((awayData?.oppPass || 1000) / awayGames);
    const awayRushDefYPG = Math.round((awayData?.oppRush || 500) / awayGames);

    const homeRedZone = (homeData?.redZonePct || 55) / 58;
    const awayRedZone = (awayData?.redZonePct || 55) / 58;
    const homeThirdDown = (homeData?.thirdDownPct || 40) / 40;
    const awayThirdDown = (awayData?.thirdDownPct || 40) / 40;

    const homeTurnoverDiff = ((awayData?.turnovers || 5) / awayGames - (homeData?.turnovers || 5) / homeGames) * 0.04;
    const awayTurnoverDiff = -homeTurnoverDiff;

    const homeEfficiency = Math.max(0.85, Math.min(1.18, (homeRedZone * 0.6 + homeThirdDown * 0.4) + homeTurnoverDiff));
    const awayEfficiency = Math.max(0.85, Math.min(1.18, (awayRedZone * 0.6 + awayThirdDown * 0.4) + awayTurnoverDiff));

    let h2hHomeBoost = 1.0;
    let h2hAwayBoost = 1.0;
    if (homeData.h2h && homeData.h2h[awayKey]) {
        const h2h = homeData.h2h[awayKey];
        const totalMeetings = h2h.wins + h2h.losses;
        if (totalMeetings > 0) {
            h2hHomeBoost += ((h2h.wins / totalMeetings) - 0.5) * 0.15;
            h2hAwayBoost += ((h2h.losses / totalMeetings) - 0.5) * 0.15;
        }
    }

    const homeFieldAdvantage = 0.85;

    const homeLambda = Math.max(4.5, (((homePassYPG * 0.55 + awayPassDefYPG * 0.45) / 180 + (homeRushYPG * 0.55 + awayRushDefYPG * 0.45) / 80) * h2hHomeBoost * homeEfficiency) * homeInjuryPenalty * weatherFactor * 2.1 + homeFieldAdvantage);
    const awayLambda = Math.max(4.2, (((awayPassYPG * 0.55 + homePassDefYPG * 0.45) / 180 + (awayRushYPG * 0.55 + homeRushDefYPG * 0.45) / 80) * h2hAwayBoost * awayEfficiency) * awayInjuryPenalty * weatherFactor * 2.0);

    const SIM_ITERATIONS = 2500;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let homeRaw = getRandomPoisson(homeLambda) * 3.5 + (Math.random() * 4 - 2);
        let awayRaw = getRandomPoisson(awayLambda) * 3.5 + (Math.random() * 4 - 2);

        let homeScore = getClosestValidScore(Math.max(0, homeRaw));
        let awayScore = getClosestValidScore(Math.max(0, awayRaw));

        homeScoreSum += homeScore;
        awayScoreSum += awayScore;

        if (homeScore > awayScore) {
            homeWins++;
        } else if (homeScore === awayScore) {
            homeWins += 0.5;
        }
    }

    let avgHomeScore = Math.round(homeScoreSum / SIM_ITERATIONS);
    let avgAwayScore = Math.round(awayScoreSum / SIM_ITERATIONS);
    const homeWinPct = ((homeWins / SIM_ITERATIONS) * 100).toFixed(1);
    const awayWinPct = (100 - parseFloat(homeWinPct)).toFixed(1);

    if (avgHomeScore === avgAwayScore && parseFloat(homeWinPct) !== 50.0) {
        if (parseFloat(homeWinPct) > 50.0) avgHomeScore += 1;
        else avgAwayScore += 1;
    }

    if (document.getElementById('homeScoreNum')) document.getElementById('homeScoreNum').textContent = avgHomeScore;
    if (document.getElementById('awayScoreNum')) document.getElementById('awayScoreNum').textContent = avgAwayScore;
    if (document.getElementById('homeWinProb')) document.getElementById('homeWinProb').textContent = `${match.home}: ${homeWinPct}%`;
    if (document.getElementById('awayWinProb')) document.getElementById('awayWinProb').textContent = `${match.away}: ${awayWinPct}%`;
    if (document.getElementById('probBar')) document.getElementById('probBar').style.width = `${homeWinPct}%`;

    if (document.getElementById('homeTitle')) document.getElementById('homeTitle').textContent = `Kotijoukkue: ${match.home} (${homeData.record || "0-0"})`;
    if (document.getElementById('homeStats')) {
        document.getElementById('homeStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäys (/peli):</strong> Syöttö ${homePassYPG} yds | Juoksu ${homeRushYPG} yds | Red Zone ${homeData.redZonePct || 55}% | 3rd Down ${homeData.thirdDownPct || 40}%<br>
            🛡️ <strong>Puolustus (sallitut /peli):</strong> Syöttö ${homePassDefYPG} yds | Juoksu ${homeRushDefYPG} yds | Säkit ${homeData.sacks || 0} kpl<br>
            ⚠️ Loukkaantumiset: ${homeData.injuredPlayers?.length ? homeData.injuredPlayers.map(p => `${p.name} (${p.pos} -${p.status || 'Out'})`).join(', ') : 'Ei merkittäviä'}
        `;
    }

    if (document.getElementById('awayTitle')) document.getElementById('awayTitle').textContent = `Vierasjoukkue: ${match.away} (${awayData.record || "0-0"})`;
    if (document.getElementById('awayStats')) {
        document.getElementById('awayStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäys (/peli):</strong> Syöttö ${awayPassYPG} yds | Juoksu ${awayRushYPG} yds | Red Zone ${awayData.redZonePct || 55}% | 3rd Down ${awayData.thirdDownPct || 40}%<br>
            🛡️ <strong>Puolustus (sallitut /peli):</strong> Syöttö ${awayPassDefYPG} yds | Juoksu ${awayRushDefYPG} yds | Säkit ${awayData.sacks || 0} kpl<br>
            ⚠️ Loukkaantumiset: ${awayData.injuredPlayers?.length ? awayData.injuredPlayers.map(p => `${p.name} (${p.pos} -${p.status || 'Out'})`).join(', ') : 'Ei merkittäviä'}
        `;
    }

    renderPlayers('homePlayers', homeData, awayData, avgHomeScore, awayPassDefYPG, awayRushDefYPG, match.weather);
    renderPlayers('awayPlayers', awayData, homeData, avgAwayScore, homePassDefYPG, homeRushDefYPG, match.weather);
}

function renderPlayers(containerId, teamData, opponentData, teamOffenseScore, opponentPassDefYPG, opponentRushDefYPG, weatherString) {
    const container = document.getElementById(containerId);
    if (!container || !teamData || !teamData.players) return;

    container.innerHTML = '';

    const teamGames = getPlayedGamesCount(teamData);
    const gameScale = 4 / teamGames;

    teamData.players.forEach(player => {
        const injuryStatus = getPlayerInjuryStatus(player.name, teamData.injuredPlayers);
        const isOut = injuryStatus === "OUT";
        const isQuestionable = injuryStatus === "QUESTIONABLE";
        const posStr = player.pos ? String(player.pos) : "";
        const isQB = posStr.includes("QB");

        let rawTd = player.td || 0;
        let scaledTd = rawTd * gameScale;

        let rawYds = 0;
        const ydsStr = player.yds !== undefined && player.yds !== null ? String(player.yds) : "";

        if (ydsStr.includes('/')) {
            const parts = ydsStr.split('/');
            if (isQB) {
                const rushPart = parts.find(p => p && String(p).includes('rush')) || parts[1];
                rawYds = parseInt(rushPart) || 0;
            } else {
                rawYds = parseInt(parts[0]) || 100;
            }
        } else {
            rawYds = parseInt(ydsStr) || 100;
        }

        let scaledYds = rawYds * gameScale;
        let scaledTargets = extractTargets(player.rec) * gameScale;
        let scaledYAC = extractYAC(player.yac) * gameScale;

        let positionWeight = 12;
        if (posStr.includes("RB")) positionWeight = 32;
        else if (posStr.includes("WR")) positionWeight = 26;
        else if (posStr.includes("TE")) positionWeight = 20;
        else if (isQB) {
            const isDualThreat = (ydsStr.includes("rush") && scaledYds > 75) || String(player.rec).includes("Dual Threat");
            positionWeight = isDualThreat ? 16 : 2;
        }

        let matchMultiplier = 1.0;
        const defVsPos = opponentData?.defensiveVsPosition;
        if (posStr.includes("RB")) {
            const vsRB = defVsPos?.vsRB?.allowedYdsPerGame || opponentRushDefYPG;
            matchMultiplier = (vsRB / 80) * 0.6 + (opponentRushDefYPG / 100) * 0.4;
        } else if (posStr.includes("WR")) {
            const vsWR = defVsPos?.vsWR?.allowedYdsPerGame || opponentPassDefYPG;
            matchMultiplier = (vsWR / 205) * 0.6 + (opponentPassDefYPG / 210) * 0.4;
        } else if (posStr.includes("TE")) {
            const vsTE = defVsPos?.vsTE?.allowedYdsPerGame || 50;
            matchMultiplier = (vsTE / 50) * 0.65 + (opponentPassDefYPG / 210) * 0.35;
        } else if (isQB) {
            matchMultiplier = opponentRushDefYPG / 110;
        }

        let momentumMultiplier = calculateGameLogMomentum(player);
        let weatherPosMultiplier = getWeatherPositionMultiplier(player.pos, weatherString);
        let injuryMultiplier = isQuestionable ? 0.85 : 1.0;

        let targetBonus = scaledTargets > 0 ? (scaledTargets * 0.20) : (isQB ? 0 : scaledYds / 40);
        let yacBonus = scaledYAC > 0 ? (scaledYAC / 60) : 0;
        let rawProductivity = positionWeight + (scaledTd * 6.0) + targetBonus + yacBonus + (isQB ? (scaledYds / 15) : (scaledYds / 50));

        let estimatedTeamTDs = Math.max(1, teamOffenseScore / 7.5);
        let probability = (rawProductivity * matchMultiplier * momentumMultiplier * weatherPosMultiplier * injuryMultiplier * (estimatedTeamTDs / 2.8));

        if (isQB) {
            const isDualThreat = (ydsStr.includes("rush") && scaledYds > 75) || String(player.rec).includes("Dual Threat");
            if (!isDualThreat) {
                probability = rawTd > 0 ? (scaledTd * 4.5) : 3.0;
            }
        }

        const tdProbability = isOut ? 0 : Math.min(72, Math.max(2, Math.round(probability)));
        const isHot = momentumMultiplier > 1.0;

        const marketOdds = player.marketOdds ? parseFloat(player.marketOdds) : null;
        const impliedProb = marketOdds ? Math.round((1 / marketOdds) * 100) : null;
        const hasValue = !isOut && impliedProb !== null && (tdProbability - impliedProb >= 4);

        let statsText = player.rec ? `${player.rec} | ${player.yds || ''}` : `${player.pos || ''} | ${player.yds || ''}`;
        if (player.td !== undefined) {
            statsText += ` | TD:t: <strong>${player.td}</strong>`;
        }
        if (marketOdds) {
            statsText += ` | Kerroin: <strong>${marketOdds.toFixed(2)}</strong>`;
        }
        if (isOut) {
            statsText += ` <span style="color: #ff4d4d; font-weight: bold;">(OUT)</span>`;
        } else if (isQuestionable) {
            statsText += ` <span style="color: #f59e0b; font-weight: bold;" title="Pelaaminen epävarmaa (-15% teho)">(Q)</span>`;
        }
        if (isHot && !isOut) {
            statsText += ` <span title="Kuuma vire viime peleissä!" style="cursor: help;">🔥</span>`;
        }
        if (hasValue) {
            statsText += ` <span title="Ylikerroin! Mallin arvio (${tdProbability}%) ylittää kertoimen todennäköisyyden (${impliedProb}%)" style="color: #10b981; font-weight: bold; cursor: help;">💎 VALUE</span>`;
        }

        const row = document.createElement('div');
        row.className = `player-row${isHot && !isOut ? ' hot' : ''}${isOut ? ' player-out' : ''}`;
        row.innerHTML = `
            <div>
                <strong>${player.name}</strong> (${player.pos || ''})
                <span>${statsText}</span>
            </div>
            <div class="odd-badge" style="${isOut ? 'opacity: 0.5;' : ''}">
                <span>Anytime TD</span>
                <strong>${tdProbability}%</strong>
            </div>
        `;
        container.appendChild(row);
    });

    if (teamData.defenders && Array.isArray(teamData.defenders) && teamData.defenders.length > 0) {
        teamData.defenders.forEach(def => {
            const row = document.createElement('div');
            row.className = 'player-row';
            row.style.opacity = '0.9';
            row.innerHTML = `
                <div>
                    <strong>🛡️ ${def.name}</strong>
                    <span>${def.sacks} | ${def.pressures} | ${def.tackles} (TFL: ${def.tacklesForLoss || 0})</span>
                </div>
                <div class="odd-badge">
                    <span>Sack-uhka</span>
                    <strong>${def.probability || '50%'}</strong>
                </div>
            `;
            container.appendChild(row);
        });
    }
}
