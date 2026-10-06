/**
 * NFL Simulointi- ja Tilastosovellus - script.js
 */

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

async function fetchRealTimeNFLData(weekNumber = 5) {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${weekNumber}`);
        if (!response.ok) throw new Error("Verkkovastaus epäonnistui");
        return await response.json();
    } catch (error) {
        console.error("Verkkovirhe scoreboard-haussa:", error);
        return null;
    }
}

async function fetchGameBoxscore(eventId) {
    if (!eventId) return null;
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=${eventId}`);
        if (!response.ok) throw new Error("Boxscore-vastaus epäonnistui");
        return await response.json();
    } catch (error) {
        console.error("Virhe haettaessa boxscorea:", error);
        return null;
    }
}

function parsePlayersFromBoxscore(boxscoreData, teamName) {
    if (!boxscoreData || !boxscoreData.boxscore || !boxscoreData.boxscore.players) {
        return null;
    }

    let teamStatsList = boxscoreData.boxscore.players.find(p => p.team.displayName.includes(teamName) || teamName.includes(p.team.displayName));
    if (!teamStatsList) return null;

    let extractedPlayers = [];
    let extractedDefenders = [];

    teamStatsList.statistics.forEach(statGroup => {
        if (statGroup.name === "rushing" || statGroup.name === "receiving" || statGroup.name === "passing") {
            statGroup.athletes.forEach(athlete => {
                let name = athlete.athlete.displayName;
                let stats = athlete.stats;
                let yds = stats[1] ? `${stats[1]} yds` : "0 yds";
                let tdIndex = (statGroup.name === "passing") ? 4 : 3;
                let td = stats[tdIndex] ? parseInt(stats[tdIndex]) : 0;
                
                if (td > 0 || parseInt(yds) > 20) {
                    extractedPlayers.push({
                        name: name,
                        pos: statGroup.name === "passing" ? "QB" : (statGroup.name === "rushing" ? "RB" : "WR"),
                        td: td,
                        yds: yds,
                        rec: "Live Stat",
                        marketOdds: 2.10,
                        gameLog: []
                    });
                }
            });
        }
    });

    return {
        players: extractedPlayers.slice(0, 5),
        defenders: extractedDefenders.slice(0, 2)
    };
}

const nflDatabase = {
    "Chiefs": { record: "4-0", games: 4, rush: 540, pass: 1040, oppPass: 830, oppRush: 340, oppTD: 7, turnovers: 3, sacks: 13, redZonePct: 75, thirdDownPct: 52, penalties: 18, injuredPlayers: [], defensiveVsPosition: { vsWR: { allowedYdsPerGame: 185, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } }, players: [{ name: "Rashee Rice", pos: "WR", td: 4, yds: "390 yds", rec: "29/37 rec", marketOdds: 1.80, gameLog: [] }], defenders: [] },
    "Rams": { record: "1-3", games: 4, rush: 450, pass: 980, oppPass: 1040, oppRush: 500, oppTD: 12, turnovers: 6, sacks: 9, redZonePct: 50, thirdDownPct: 37, penalties: 25, injuredPlayers: [], defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } }, players: [{ name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", rec: "19/25 rec", marketOdds: 1.65, gameLog: [] }], defenders: [] }
};

let nflSchedule = {};
const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', async () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    const activeWeek = await fetchCurrentActiveWeek();
    if (weekSelect) weekSelect.value = activeWeek;

    const liveData = await fetchRealTimeNFLData(activeWeek);

    if (liveData && liveData.events && liveData.events.length > 0) {
        nflSchedule[activeWeek] = liveData.events.map(event => {
            const competition = event.competitions[0];
            const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home');
            const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away');
            
            let weather = "🏟️ Sisäkenttä (Dome)";
            if (competition.weather && competition.weather.displayValue) {
                weather = `🌤 ${competition.weather.displayValue}`;
            }

            return {
                eventId: event.id,
                away: awayCompetitor ? awayCompetitor.team.displayName : "Away",
                home: homeCompetitor ? homeCompetitor.team.displayName : "Home",
                weather: weather,
                status: competition.status.type.detail
            };
        });
    } else {
        // Jos API ei palauta dataa, luodaan turvaksi testipeli, jotta näytölle saadaan jotain
        nflSchedule[activeWeek] = [
            { eventId: "test1", away: "Rams", home: "Chiefs", weather: "Dome", status: "Scheduled" }
        ];
    }

    function updateMatches() {
        const currentWeek = weekSelect ? weekSelect.value : activeWeek;
        matchSelect.innerHTML = '';
        const matches = nflSchedule[currentWeek] || [];
        
        matches.forEach((m, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = `${m.away} @ ${m.home} [${m.status}]`;
            matchSelect.appendChild(opt);
        });
        runMonteCarloSimulation();
    }

    if (weekSelect) weekSelect.addEventListener('change', updateMatches);
    if (matchSelect) matchSelect.addEventListener('change', updateMatches);
    if (compareBtn) compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

function findTeamKey(teamName) {
    return Object.keys(nflDatabase).find(k => teamName.includes(k)) || "Chiefs";
}

async function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect')?.value || "5";
    const matchIndex = document.getElementById('matchSelect')?.value || 0;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    let liveBoxscore = await fetchGameBoxscore(match.eventId);

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const homeBaseData = nflDatabase[homeKey] || nflDatabase["Chiefs"];
    const awayBaseData = nflDatabase[awayKey] || nflDatabase["Rams"];

    let homeDynamic = parsePlayersFromBoxscore(liveBoxscore, match.home);
    let awayDynamic = parsePlayersFromBoxscore(liveBoxscore, match.away);

    let homeData = {
        ...homeBaseData,
        players: (homeDynamic && homeDynamic.players.length > 0) ? homeDynamic.players : homeBaseData.players,
        defenders: (homeDynamic && homeDynamic.defenders.length > 0) ? homeDynamic.defenders : homeBaseData.defenders
    };

    let awayData = {
        ...awayBaseData,
        players: (awayDynamic && awayDynamic.players.length > 0) ? awayDynamic.players : awayBaseData.players,
        defenders: (awayDynamic && awayDynamic.defenders.length > 0) ? awayDynamic.defenders : awayBaseData.defenders
    };

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
    if (homeWinProbEl) homeWinProbEl.innerText = `${match.home}: ${homeWinProb}%`;
    if (awayWinProbEl) awayWinProbEl.innerText = `${match.away}: ${100 - homeWinProb}%`;
    if (probBarEl) probBarEl.style.width = `${homeWinProb}%`;

    renderPlayersWithPoisson('homePlayers', homeData.players, homeData.defenders, avgHomeScore / 7);
    renderPlayersWithPoisson('awayPlayers', awayData.players, awayData.defenders, avgAwayScore / 7);
}

function renderPlayersWithPoisson(containerId, players, defenders, teamEstimatedTDs) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    players.forEach(p => {
        let lambda = (teamEstimatedTDs * (p.td > 0 ? (p.td / 10) : 0.1));
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
