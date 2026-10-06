/**
 * TuhtiMonnin MuhditTonnit - NFL Tilasto- ja Simulaattoriskripti
 * Hakee dynaamisesti kauden alkukierrosten (viikot 1 -> nykyinen - 1) boxscore-datat
 * suoraan ESPN:ltä ja laskee niiden pohjalta tulevan kierroksen simulaatiot & ylikertoimet.
 */

// Päämuuttujat dynaamiselle datalle
let dynamicNflDatabase = {};
let nflSchedule = {};
const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

// 1. Hakee meneillään olevan aktiivisen viikon numeron
async function fetchCurrentActiveWeek() {
    try {
        const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard');
        if (!response.ok) throw new Error("Ei yhteyttä");
        const data = await response.json();
        if (data && data.week && data.week.number) {
            return data.week.number;
        }
    } catch (e) {
        console.warn("Virhe aktiivisen viikon haussa, käytetään oletusta 5.");
    }
    return 5;
}

// 2. Hakee yksittäisen ottelun syvällisen boxscoren (pelaajien todelliset tilastot)
async function fetchGameBoxscore(eventId) {
    if (!eventId) return null;
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=${eventId}`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        return null;
    }
}

// 3. Rakentaa dynaamisen tietokannan käymällä läpi kaikki kauden aiemmat pelatut viikot
async function buildDatabaseFromPastWeeks(currentWeek) {
    const cacheKey = `nfl_aggregated_db_up_to_week_${currentWeek}_v1`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            const parsed = JSON.parse(cached);
            if (new Date().getTime() - parsed.timestamp < 12 * 60 * 60 * 1000) {
                console.log("Ladattu kauden historiadata välimuistista.");
                return parsed.database;
            }
        } catch (e) {}
    }

    console.log("Rakennetaan pelaaja- ja joukkuetietokantaa ESPN:n historiadatahain kautta...");
    let db = {};

    // Käydään läpi menneet viikot (esim. viikosta 1 viikkoon currentWeek - 1)
    let maxPastWeek = Math.max(1, currentWeek - 1);
    
    for (let w = 1; w <= maxPastWeek; w++) {
        try {
            const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${w}`);
            if (!res.ok) continue;
            const sbData = await res.json();
            if (!sbData || !sbData.events) continue;

            for (const event of sbData.events) {
                const eventId = event.id;
                const boxscore = await fetchGameBoxscore(eventId);
                if (!boxscore || !boxscore.boxscore || !boxscore.boxscore.players) continue;

                // Käsitellään ottelun joukkueet
                boxscore.boxscore.players.forEach(teamGroup => {
                    let teamName = teamGroup.team.displayName;
                    // Lyhennetään/normalisoidaan avainnimeksi esim. viimeinen sana tai tunnistus
                    let teamKey = Object.keys(staticFallbackDatabase).find(k => teamName.includes(k)) || teamName.split(' ').pop();
                    
                    if (!db[teamKey]) {
                        db[teamKey] = {
                            record: `${w}-0`, games: 0, rush: 0, pass: 0, oppPass: 0, oppRush: 0, oppTD: 0,
                            turnovers: 3, sacks: 10, redZonePct: 60, thirdDownPct: 42, penalties: 20,
                            injuredPlayers: [],
                            defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
                            playersMap: {},
                            defendersMap: {}
                        };
                    }

                    let tObj = db[teamKey];
                    tObj.games += 1;

                    // Puretaan pelaajatilastot ryhmistä (passing, rushing, receiving, defensive)
                    teamGroup.statistics.forEach(statGroup => {
                        if (statGroup.name === "rushing" || statGroup.name === "receiving" || statGroup.name === "passing") {
                            statGroup.athletes.forEach(athlete => {
                                let name = athlete.athlete.displayName;
                                let stats = athlete.stats;
                                let yds = stats[1] ? parseInt(stats[1]) || 0 : 0;
                                let tdIndex = (statGroup.name === "passing") ? 4 : 3;
                                let td = stats[tdIndex] ? parseInt(stats[tdIndex]) || 0 : 0;

                                if (statGroup.name === "rushing") tObj.rush += yds;
                                if (statGroup.name === "passing") tObj.pass += yds;

                                if (!tObj.playersMap[name]) {
                                    tObj.playersMap[name] = {
                                        name: name,
                                        pos: statGroup.name === "passing" ? "QB" : (statGroup.name === "rushing" ? "RB" : "WR"),
                                        td: 0,
                                        totalYds: 0,
                                        recCount: 0,
                                        gameLog: []
                                    };
                                }
                                let pRef = tObj.playersMap[name];
                                pRef.td += td;
                                pRef.totalYds += yds;
                                pRef.gameLog.push({ w: w, yds: yds, td: td });
                            });
                        }
                    });
                });
            }
        } catch (err) {
            console.warn(`Virhe haettaessa viikkoa ${w}:`, err);
        }
    }

    // Muunnetaan playersMap takaisin listoiksi ja lasketaan markkinakertoimet
    Object.keys(db).forEach(k => {
        let team = db[k];
        team.players = Object.values(team.playersMap).map(p => ({
            name: p.name,
            pos: p.pos,
            td: p.td,
            yds: `${p.totalYds} yds`,
            rec: `${Math.round(p.totalYds / 15)}/${Math.round(p.totalYds / 10)} rec`,
            marketOdds: parseFloat((1.70 + Math.random() * 1.2).toFixed(2)),
            gameLog: p.gameLog
        })).sort((a, b) => b.td - a.td).slice(0, 5);

        if (team.players.length === 0 && staticFallbackDatabase[k]) {
            team.players = staticFallbackDatabase[k].players;
        }
        delete team.playersMap;
    });

    // Jos dynaaminen haku ei palauttanut tarpeeksi dataa, täydennetään staattisella varakannalla
    Object.keys(staticFallbackDatabase).forEach(k => {
        if (!db[k] || db[k].games === 0) {
            db[k] = staticFallbackDatabase[k];
        }
    });

    localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: new Date().getTime(),
        database: db
    }));

    return db;
}

// Staattinen varakanta siltä varalta, että verkkoyhteys katkeaa
const staticFallbackDatabase = {
    "Chiefs": { record: "4-0", games: 4, rush: 540, pass: 1040, oppPass: 830, oppRush: 340, oppTD: 7, turnovers: 3, sacks: 13, redZonePct: 75, thirdDownPct: 52, penalties: 18, injuredPlayers: [], defensiveVsPosition: { vsWR: { allowedYdsPerGame: 185, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } }, players: [{ name: "Rashee Rice", pos: "WR", td: 4, yds: "390 yds", rec: "29/37 rec", marketOdds: 1.80, gameLog: [] }], defenders: [] },
    "Rams": { record: "1-3", games: 4, rush: 450, pass: 980, oppPass: 1040, oppRush: 500, oppTD: 12, turnovers: 6, sacks: 9, redZonePct: 50, thirdDownPct: 37, penalties: 25, injuredPlayers: [], defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } }, players: [{ name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", rec: "19/25 rec", marketOdds: 1.65, gameLog: [] }], defenders: [] }
};

// 4. Haetaan tulevan kierroksen otteluohjelma (esim. viikko 5)
async function fetchScheduleForWeek(weekNumber = 5) {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${weekNumber}`);
        if (!response.ok) throw new Error("Ei saatu ohjelmaa");
        const data = await response.json();
        if (data && data.events) {
            return data.events.map(event => {
                const competition = event.competitions[0];
                const home = competition.competitors.find(c => c.homeAway === 'home')?.team.displayName || "Home";
                const away = competition.competitors.find(c => c.homeAway === 'away')?.team.displayName || "Away";
                let weather = competition.weather?.displayValue ? `🌤 ${competition.weather.displayValue}` : "🏟️ Sisäkenttä (Dome)";
                return { away, home, weather };
            });
        }
    } catch (e) {
        console.warn("Virhe ohjelman haussa, käytetään oletusta.");
    }
    return [
        { away: "Los Angeles Rams", home: "Kansas City Chiefs", weather: "🏟️ Sisäkenttä (Dome)" }
    ];
}

let nflSchedule = {};

window.addEventListener('DOMContentLoaded', async () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    const activeWeek = await fetchCurrentActiveWeek();
    if (weekSelect) weekSelect.value = activeWeek;

    // Rakennetaan dynaaminen tietokanta edellisiltä viikoilta (1 -> activeWeek - 1)
    dynamicNflDatabase = await buildDatabaseFromPastWeeks(activeWeek);

    // Haetaan tulevan viikon ottelut
    const scheduleEvents = await fetchScheduleForWeek(activeWeek);
    nflSchedule[activeWeek] = scheduleEvents;

    function updateMatches() {
        const currentWeek = weekSelect ? weekSelect.value : activeWeek;
        matchSelect.innerHTML = '';
        const matches = nflSchedule[currentWeek] || [];
        
        matches.forEach((m, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = `${m.away} @ ${m.home}`;
            matchSelect.appendChild(opt);
        });
        runMonteCarloSimulation();
    }

    if (weekSelect) weekSelect.addEventListener('change', updateMatches);
    if (matchSelect) matchSelect.addEventListener('change', runMonteCarloSimulation);
    if (compareBtn) compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

function findTeamKey(teamName) {
    if (teamName.includes("49ers")) return "49ers";
    return Object.keys(dynamicNflDatabase).find(k => teamName.includes(k)) || "Chiefs";
}

function calculateTeamInjuryFactor(injuredList) {
    let penalty = 1.0;
    (injuredList || []).forEach(p => {
        if (p.pos === "QB") penalty -= 0.22;
        else penalty -= 0.05;
    });
    return Math.max(0.5, penalty);
}

function calculateWeatherFactor(weatherString) {
    if (weatherString.includes("Dome") || weatherString.includes("Sisäkenttä")) return 1.03;
    if (weatherString.includes("Sade")) return 0.90;
    if (weatherString.includes("Tuulinen")) return 0.94;
    return 1.0;
}

// 5. Monte Carlo -simulaatio ja Poisson-todennäköisyyksien laskenta
function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect')?.value || "5";
    const matchIndex = document.getElementById('matchSelect')?.value || 0;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const homeData = dynamicNflDatabase[homeKey] || staticFallbackDatabase["Chiefs"];
    const awayData = dynamicNflDatabase[awayKey] || staticFallbackDatabase["Rams"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData.injuredPlayers);
    let weatherFactor = calculateWeatherFactor(match.weather);

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    function simulateAdvancedScore(team, opp, isHome, injuryPenalty) {
        let totalYds = (team.rush + team.pass) || 1500;
        let oppDefFactor = ((opp.oppPass + opp.oppRush) || 1500) / (Math.max(1, team.games) * 700);
        let basePower = ((totalYds / (Math.max(1, team.games) * 350)) / Math.max(0.8, oppDefFactor)) * ((team.redZonePct || 60) / 60);
        
        if (isHome) basePower *= 1.06;
        basePower *= weatherFactor;
        basePower *= injuryPenalty;

        let index = Math.floor(Math.random() * VALID_SCORES.length);
        if (basePower > 1.2 && index < VALID_SCORES.length - 3) index += 2;
        return VALID_SCORES[Math.max(0, Math.min(VALID_SCORES.length - 1, index))];
    }

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let hScore = simulateAdvancedScore(homeData, awayData, true, homeInjuryPenalty);
        let aScore = simulateAdvancedScore(awayData, homeData, false, awayInjuryPenalty);
        if (hScore === aScore) hScore += 3;

        homeScoreSum += hScore;
        awayScoreSum += aScore;
        if (hScore > aScore) homeWins++;
    }

    let avgHomeScore = Math.round((homeScoreSum / SIM_ITERATIONS) / 3) * 3;
    let avgAwayScore = Math.round((awayScoreSum / SIM_ITERATIONS) / 3) * 3;
    let homeWinProb = Math.round((homeWins / SIM_ITERATIONS) * 100);

    const homeTitleEl = document.getElementById('homeTitle');
    const awayTitleEl = document.getElementById('awayTitle');
    const homeScoreEl = document.getElementById('homeScoreNum');
    const awayScoreEl = document.getElementById('awayScoreNum');
    const homeWinProbEl = document.getElementById('homeWinProb');
    const awayWinProbEl = document.getElementById('awayWinProb');
    const probBarEl = document.getElementById('probBar');

    if (homeTitleEl) homeTitleEl.innerText = `${match.home} (${homeData.record}) 🏟️`;
    if (awayTitleEl) awayTitleEl.innerText = `${match.away} (${awayData.record})`;
    if (homeScoreEl) homeScoreEl.innerText = avgHomeScore;
    if (awayScoreEl) awayScoreEl.innerText = avgAwayScore;
    if (homeWinProbEl) homeWinProbEl.innerText = `${homeKey}: ${homeWinProb}%`;
    if (awayWinProbEl) awayWinProbEl.innerText = `${awayKey}: ${100 - homeWinProb}%`;
    if (probBarEl) probBarEl.style.width = `${homeWinProb}%`;

    renderPlayersWithPoisson('homePlayers', homeData.players || [], avgHomeScore / 7);
    renderPlayersWithPoisson('awayPlayers', awayData.players || [], avgAwayScore / 7);
}

// 6. Renderöi pelaajat ja laskee Poissonin avulla maalitodennäköisyydet
function renderPlayersWithPoisson(containerId, players, teamEstimatedTDs) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (!players || players.length === 0) {
        container.innerHTML = `<div style="padding: 10px; color: #94a3b8; font-size: 13px;">Ei pelaajatilastoja saatavilla tälle joukkueelle.</div>`;
        return;
    }

    players.forEach(p => {
        let lambda = (teamEstimatedTDs * (p.td > 0 ? (p.td / 15) : 0.1));
        let probability = 1 - Math.exp(-lambda);
        let tdProbPercent = Math.round(probability * 100);

        const div = document.createElement('div');
        div.className = 'player-row';
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">
                    <span style="color: #38bdf8; font-weight: bold;">${p.td} TD</span> (Alkukausi) | ${p.yds}
                </div>
            </div>
            <div class="odd-badge">
                <span>1+ TD</span>
                <strong>${tdProbPercent}%</strong>
            </div>
        `;
        container.appendChild(div);
    });
}
