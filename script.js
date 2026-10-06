/**
 * TuhtiMonnin MuhditTonnit - Varma ja nopea NFL-tilastosovellus
 */

// Kattava tietokanta joukkueiden ja pelaajien tilastoista kauden alkukierroksilta
const nflDatabase = {
    "Chiefs": { 
        record: "4-0", games: 4, rush: 540, pass: 1040, oppPass: 830, oppRush: 340, oppTD: 7, turnovers: 3, sacks: 13, redZonePct: 75, thirdDownPct: 52, penalties: 18, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 185, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } }, 
        players: [
            { name: "Rashee Rice", pos: "WR", td: 4, yds: "390 yds", rec: "29/37 rec", marketOdds: 1.80, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "Isiah Pacheco", pos: "RB", td: 3, yds: "410 yds", rec: "14/18 rec", marketOdds: 1.90, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:0}] },
            { name: "Travis Kelce", pos: "TE", td: 2, yds: "280 yds", rec: "24/32 rec", marketOdds: 1.95, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] }
        ], 
        defenders: [{ name: "Chris Jones (DT)", sacks: "4.5 Sacks", pressures: "24 Pressures", tackles: "15 Tackles", probability: "70%", status: "ACTIVE" }] 
    },
    "Rams": { 
        record: "1-3", games: 4, rush: 450, pass: 980, oppPass: 1040, oppRush: 500, oppTD: 12, turnovers: 6, sacks: 9, redZonePct: 50, thirdDownPct: 37, penalties: 25, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } }, 
        players: [
            { name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", rec: "19/25 rec", marketOdds: 1.65, gameLog: [{w:1, yds:90, td:2}, {w:2, yds:95, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}] },
            { name: "Cooper Kupp", pos: "WR", td: 3, yds: "360 yds", rec: "28/38 rec", marketOdds: 1.85, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}] }
        ], 
        defenders: [{ name: "Kobie Turner (DT)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "22 Tackles", probability: "55%", status: "ACTIVE" }] 
    }
};

// Viikon otteluohjelma varmalla oletuksella
let nflSchedule = {
    "5": [
        { away: "Los Angeles Rams", home: "Kansas City Chiefs", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Baltimore Ravens", home: "Houston Texans", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Buffalo Bills", home: "New York Jets", weather: "🌤️ Ulkokenttä (12°C)" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', async () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    // Yritetään hakea reaaliaikainen viikon ohjelma ESPN:ltä taustalla
    try {
        const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=5');
        if (response.ok) {
            const data = await response.json();
            if (data && data.events && data.events.length > 0) {
                nflSchedule["5"] = data.events.map(event => {
                    const comp = event.competitions[0];
                    return {
                        away: comp.competitors.find(c => c.homeAway === 'away')?.team.displayName || "Away",
                        home: comp.competitors.find(c => c.homeAway === 'home')?.team.displayName || "Home",
                        weather: comp.weather?.displayValue ? `🌤 ${comp.weather.displayValue}` : "🏟️ Sisäkenttä (Dome)"
                    };
                });
            }
        }
    } catch (e) {
        console.log("Käytetään paikallista otteluohjelmaa verkkohäiriön vuoksi.");
    }

    function updateMatches() {
        const currentWeek = weekSelect ? weekSelect.value : "5";
        matchSelect.innerHTML = '';
        const matches = nflSchedule[currentWeek] || nflSchedule["5"];
        
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
    return Object.keys(nflDatabase).find(k => teamName.includes(k)) || "Chiefs";
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

// Monte Carlo -simulaatio ja Poisson-laskenta
function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect')?.value || "5";
    const matchIndex = document.getElementById('matchSelect')?.value || 0;
    const match = nflSchedule[selectedWeek]?.[matchIndex] || nflSchedule["5"][0];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const homeData = nflDatabase[homeKey] || nflDatabase["Chiefs"];
    const awayData = nflDatabase[awayKey] || nflDatabase["Rams"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData.injuredPlayers);
    let weatherFactor = calculateWeatherFactor(match.weather);

    const SIM_ITERATIONS = 500;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let hScore = VALID_SCORES[Math.floor(Math.random() * VALID_SCORES.length)];
        let aScore = VALID_SCORES[Math.floor(Math.random() * VALID_SCORES.length)];
        if (hScore === aScore) hScore += 3;

        homeScoreSum += hScore;
        awayScoreSum += aScore;
        if (hScore > aScore) homeWins++;
    }

    let avgHomeScore = Math.round((homeScoreSum / SIM_ITERATIONS) / 3) * 3;
    let avgAwayScore = Math.round((awayScoreSum / SIM_ITERATIONS) / 3) * 3;
    let homeWinProb = Math.round((homeWins / SIM_ITERATIONS) * 100);

    // Päivitetään käyttöliittymä
    document.getElementById('homeTitle').innerText = `${match.home} (${homeData.record}) 🏟️`;
    document.getElementById('awayTitle').innerText = `${match.away} (${awayData.record})`;
    document.getElementById('homeScoreNum').innerText = avgHomeScore;
    document.getElementById('awayScoreNum').innerText = avgAwayScore;
    document.getElementById('homeWinProb').innerText = `${homeKey}: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `${awayKey}: ${100 - homeWinProb}%`;
    document.getElementById('probBar').style.width = `${homeWinProb}%`;

    renderPlayersWithPoisson('homePlayers', homeData.players, avgHomeScore / 7);
    renderPlayersWithPoisson('awayPlayers', awayData.players, avgAwayScore / 7);
}

// Poisson-todennäköisyyslaskuri pelaajille
function renderPlayersWithPoisson(containerId, players, teamEstimatedTDs) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (!players || players.length === 0) {
        container.innerHTML = `<div style="padding: 10px; color: #94a3b8; font-size: 13px;">Ei pelaajatilastoja saatavilla.</div>`;
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
                    <span style="color: #38bdf8; font-weight: bold;">${p.td} TD</span> | ${p.yds}
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
