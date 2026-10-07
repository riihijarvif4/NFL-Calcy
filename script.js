// Manuaalinen otteluohjelma ryhmiteltynä päivittäin Suomen aikoina (EEST)
const nflSchedule = {
    "5": [
        { date: "Perjantai 9.10.2026", time: "03:15", away: "Tampa Bay Buccaneers", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Jacksonville Jaguars", home: "Philadelphia Eagles", weather: "🌤 18°C, Aurinkoinen" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "New York Jets", home: "Minnesota Vikings", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "New England Patriots", home: "Miami Dolphins", weather: "🌤 26°C, Puolipilvinen" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Buffalo Bills", home: "Houston Texans", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Carolina Panthers", home: "Chicago Bears", weather: "🌥 15°C, Pilvinen" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Las Vegas Raiders", home: "Washington Commanders", weather: "🌤 20°C, Aurinkoinen" },
        { date: "Sunnuntai 11.10.2026", time: "23:05", away: "Los Angeles Rams", home: "Green Bay Packers", weather: "❄️ 8°C, Viileä" },
        { date: "Sunnuntai 11.10.2026", time: "23:25", away: "Arizona Cardinals", home: "San Francisco 49ers", weather: "🌤 22°C, Aurinkoinen" },
        { date: "Sunnuntai 11.10.2026", time: "23:25", away: "New York Giants", home: "New Orleans Saints", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Maanantai 12.10.2026", time: "03:20", away: "Baltimore Ravens", home: "Pittsburgh Steelers", weather: "🌧 12°C, Sadetta" },
        { date: "Maanantai 12.10.2026", time: "20:00", away: "Cincinnati Bengals", home: "Cleveland Browns", weather: "🌥 14°C, Pilvinen" },
        { date: "Maanantai 12.10.2026", time: "20:00", away: "Dallas Cowboys", home: "Detroit Lions", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Tiistai 13.10.2026", time: "03:15", away: "Kansas City Chiefs", home: "Denver Broncos", weather: "❄️ 6°C, Tuulinen" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    function updateMatches() {
        if (!weekSelect || !matchSelect) return;
        const currentWeek = weekSelect.value;
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

    if (weekSelect) weekSelect.addEventListener('change', updateMatches);
    if (matchSelect) matchSelect.addEventListener('change', runMonteCarloSimulation);
    if (compareBtn) compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

function findTeamKey(teamName) {
    if (teamName.includes("49ers")) return "49ers";
    const db = typeof nflData !== 'undefined' ? nflData : {};
    return Object.keys(db).find(k => teamName.includes(k)) || "Chiefs";
}

function calculateTeamInjuryFactor(injuredList) {
    if (!injuredList || !Array.isArray(injuredList)) return 1.0;
    let penalty = 1.0;
    injuredList.forEach(p => {
        const multiplier = (p.status && p.status.includes("Out")) ? 1.0 : 0.5;
        if (p.pos === "QB") penalty -= (0.22 * multiplier);
        else if (p.pos === "RB" || p.pos === "WR" || p.pos === "TE") penalty -= (0.05 * multiplier);
        else penalty -= (0.03 * multiplier);
    });
    return Math.max(0.5, penalty);
}

function calculateWeatherFactor(weatherString) {
    if (weatherString.includes("Dome") || weatherString.includes("Sisäkenttä")) return 1.03;
    if (weatherString.includes("Sade") || weatherString.includes("Rankkasade")) return 0.90;
    if (weatherString.includes("Tuulinen")) return 0.94;
    if (weatherString.includes("Viileä") || weatherString.includes("Kylmä")) return 0.97;
    return 1.0;
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

// Poisson-generaattori tarkkaan lopputulosmallinnukseen
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

function runMonteCarloSimulation() {
    const selectedWeekElement = document.getElementById('weekSelect');
    const matchIndexElement = document.getElementById('matchSelect');
    if (!selectedWeekElement || !matchIndexElement) return;

    const selectedWeek = selectedWeekElement.value;
    const matchIndex = matchIndexElement.value;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const db = typeof nflData !== 'undefined' ? nflData : {};
    const homeData = db[homeKey] || db["Chiefs"];
    const awayData = db[awayKey] || db["Rams"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData?.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData?.injuredPlayers);
    let weatherFactor = calculateWeatherFactor(match.weather);

    // Otetaan huomioon hyökkäys- ja puolustusvuodot (jaardit)
    const homePassOffense = homeData?.pass || 900;
    const homeRushOffense = homeData?.rush || 400;
    const awayPassDefense = awayData?.allowedPass || 900;
    const awayRushDefense = awayData?.allowedRush || 400;

    const awayPassOffense = awayData?.pass || 900;
    const awayRushOffense = awayData?.rush || 400;
    const homePassDefense = homeData?.allowedPass || 900;
    const homeRushDefense = homeData?.allowedRush || 400;

    // Lasketut odotusarvot (lambdat) huomioiden vastustajan puolustuksen vuodot
    const homeLambda = Math.max(7, (((homePassOffense + awayPassDefense) / 1800) * 11 + ((homeRushOffense + awayRushDefense) / 800) * 3) * homeInjuryPenalty * weatherFactor * 0.75);
    const awayLambda = Math.max(7, (((awayPassOffense + homePassDefense) / 1800) * 11 + ((awayRushOffense + homeRushDefense) / 800) * 3) * awayInjuryPenalty * weatherFactor * 0.72);

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let homeRaw = getRandomPoisson(homeLambda) * 3;
        let awayRaw = getRandomPoisson(awayLambda) * 3;

        let homeScore = getClosestValidScore(homeRaw);
        let awayScore = getClosestValidScore(awayRaw);

        homeScoreSum += homeScore;
        awayScoreSum += awayScore;

        if (homeScore > awayScore) {
            homeWins++;
        }
    }

    const avgHomeScore = Math.round(homeScoreSum / SIM_ITERATIONS);
    const avgAwayScore = Math.round(awayScoreSum / SIM_ITERATIONS);
    const homeWinPct = ((homeWins / SIM_ITERATIONS) * 100).toFixed(1);
    const awayWinPct = (100 - homeWinPct).toFixed(1);

    if (document.getElementById('homeScoreNum')) document.getElementById('homeScoreNum').textContent = avgHomeScore;
    if (document.getElementById('awayScoreNum')) document.getElementById('awayScoreNum').textContent = avgAwayScore;
    if (document.getElementById('homeWinProb')) document.getElementById('homeWinProb').textContent = `${match.home}: ${homeWinPct}%`;
    if (document.getElementById('awayWinProb')) document.getElementById('awayWinProb').textContent = `${match.away}: ${awayWinPct}%`;
    if (document.getElementById('probBar')) document.getElementById('probBar').style.width = `${homeWinPct}%`;

    // Päivitetään joukkuelaatikot jaarditiedoilla (näkyy mikä vuotaa ja dataa H2H-vertailuun)
    if (document.getElementById('homeTitle')) document.getElementById('homeTitle').textContent = `Kotijoukkue: ${match.home} (${homeData.record || "0-0"})`;
    if (document.getElementById('homeStats')) {
        document.getElementById('homeStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäysjaardit:</strong> Syöttö ${homePassOffense} | Juoksu ${homeRushOffense}<br>
            🛡️ <strong>Puolustus (Sallitut jaardit / Vuoto):</strong> Syöttöä ${homePassDefense} | Juoksua ${homeRushDefense}<br>
            ⚠️ Loukkaantumiset: ${homeData.injuredPlayers?.map(p => `${p.name} (${p.pos})`).join(', ') || 'Ei merkittäviä'}
        `;
    }

    if (document.getElementById('awayTitle')) document.getElementById('awayTitle').textContent = `Vierasjoukkue: ${match.away} (${awayData.record || "0-0"})`;
    if (document.getElementById('awayStats')) {
        document.getElementById('awayStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäysjaardit:</strong> Syöttö ${awayPassOffense} | Juoksu ${awayRushOffense}<br>
            🛡️ <strong>Puolustus (Sallitut jaardit / Vuoto):</strong> Syöttöä ${awayPassDefense} | Juoksua ${awayRushDefense}<br>
            ⚠️ Loukkaantumiset: ${awayData.injuredPlayers?.map(p => `${p.name} (${p.pos})`).join(', ') || 'Ei merkittäviä'}
        `;
    }

    renderPlayers('homePlayers', homeData.players, avgHomeScore, awayPassDefense, awayRushDefense);
    renderPlayers('awayPlayers', awayData.players, avgAwayScore, homePassDefense, homeRushDefense);
}

function renderPlayers(containerId, playersList, teamOffenseScore, opponentPassDef, opponentRushDef) {
    const container = document.getElementById(containerId);
    if (!container || !playersList) return;

    container.innerHTML = '';
    playersList.forEach(player => {
        let baseChance = 25;
        if (player.pos === "RB") baseChance = 42;
        else if (player.pos === "WR") baseChance = 38;
        else if (player.pos === "TE") baseChance = 30;
        else if (player.pos === "QB") baseChance = 20; // Vain juoksu/vastaanotto-TD sääntöjen mukaisesti

        // Tarkka Anytime TD -laskenta vastustajan puolustuksen vuotojen ja joukkueen maalimäärän mukaan
        let defMultiplier = 1.0;
        if (player.pos === "RB") defMultiplier = (opponentRushDef / 400);
        else if (player.pos === "WR" || player.pos === "TE") defMultiplier = (opponentPassDef / 900);

        const tdProbability = Math.min(96, Math.max(4, Math.round(baseChance * (teamOffenseScore / 26) * defMultiplier)));

        const row = document.createElement('div');
        row.className = 'player-row';
        row.innerHTML = `
            <div>
                <strong>${player.name}</strong> (${player.pos})
                <span>${player.rec || ''} | ${player.yds || ''}</span>
            </div>
            <div class="odd-badge">
                <span>Anytime TD</span>
                <strong>${tdProbability}%</strong>
            </div>
        `;
        container.appendChild(row);
    });
}
