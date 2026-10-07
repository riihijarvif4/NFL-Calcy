// Staattinen varataulukko viikolle 5 varmistamaan, että pelit näkyvät heti varmasti
const nflSchedule = {
    "5": [
        { away: "Tampa Bay Buccaneers", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Jacksonville Jaguars", home: "Philadelphia Eagles", weather: "🌤 18°C, Aurinkoinen" },
        { away: "New York Jets", home: "Minnesota Vikings", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "New England Patriots", home: "Miami Dolphins", weather: "🌤 26°C, Puolipilvinen" },
        { away: "Buffalo Bills", home: "Houston Texans", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Carolina Panthers", home: "Chicago Bears", weather: "🌥 15°C, Pilvinen" },
        { away: "Las Vegas Raiders", home: "Washington Commanders", weather: "🌤 20°C, Aurinkoinen" },
        { away: "Los Angeles Rams", home: "Green Bay Packers", weather: "❄️ 8°C, Viileä" },
        { away: "Arizona Cardinals", home: "San Francisco 49ers", weather: "🌤 22°C, Aurinkoinen" },
        { away: "New York Giants", home: "New Orleans Saints", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Baltimore Ravens", home: "Pittsburgh Steelers", weather: "🌧 12°C, Sadetta" },
        { away: "Cincinnati Bengals", home: "Cleveland Browns", weather: "🌥 14°C, Pilvinen" },
        { away: "Dallas Cowboys", home: "Detroit Lions", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Kansas City Chiefs", home: "Denver Broncos", weather: "❄️ 6°C, Tuulinen" }
    ]
};

// Funktio, joka hakee reaaliaikaisen NFL-datan ilmaiseksi ESPN:n rajapinnasta
async function fetchRealTimeNFLData(weekNumber = 5) {
    const cacheKey = `nfl_data_week_${weekNumber}_2026`;
    const cachedData = localStorage.getItem(cacheKey);
   
    if (cachedData) {
        try {
            const parsed = JSON.parse(cachedData);
            if (new Date().getTime() - parsed.timestamp < 24 * 60 * 60 * 1000) {
                console.log("Ladattu otteluohjelma selaimen muistista (cache)");
                return parsed.data;
            }
        } catch (e) {
            console.error("Virhe välimuistin luvussa:", e);
        }
    }

    try {
        console.log("Haetaan tuoretta otteludataa ESPN:n rajapinnasta...");
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${weekNumber}`);
        if (!response.ok) throw new Error("Verkkovastaus ei ollut kunnossa");
        
        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: new Date().getTime(),
            data: data
        }));

        return data;
    } catch (error) {
        console.error("Virhe verkkoyhteydessä, käytetään staattista varakantaa:", error);
        return null;
    }
}

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', async () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    const selectedWeek = weekSelect ? weekSelect.value : "5";
    
    let liveData = null;
    try {
        const fetchPromise = fetchRealTimeNFLData(selectedWeek);
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 4000));
        liveData = await Promise.race([fetchPromise, timeoutPromise]);
    } catch (e) {
        console.warn("Verkkohaku kesti liikaa tai epäonnistui, siirrytään suoraan paikalliseen ohjelmaan.");
    }

    if (liveData && liveData.events && liveData.events.length > 0) {
        const liveMatches = liveData.events.map(event => {
            const competition = event.competitions[0];
            const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home');
            const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away');
            
            let weather = "🏟️ Sisäkenttä (Dome)";
            if (competition.weather && competition.weather.displayValue) {
                weather = `🌤 ${competition.weather.displayValue}`;
            }

            return {
                away: awayCompetitor ? awayCompetitor.team.displayName : "Away Team",
                home: homeCompetitor ? homeCompetitor.team.displayName : "Home Team",
                weather: weather
            };
        });

        if (liveMatches.length > 0) {
            nflSchedule[selectedWeek] = liveMatches;
        }
    }

    function updateMatches() {
        const currentWeek = weekSelect.value;
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
    if (weatherString.includes("Dome") || weatherString.includes("Sisäkenttä")) {
        return 1.03; 
    }
    if (weatherString.includes("Sade") || weatherString.includes("Rankkasade")) {
        return 0.90; 
    }
    if (weatherString.includes("Tuulinen")) {
        return 0.94; 
    }
    if (weatherString.includes("Viileä") || weatherString.includes("Kylmä")) {
        return 0.97;
    }
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

function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect').value;
    const matchIndex = document.getElementById('matchSelect').value;
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

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    const homeBaseOffense = ((homeData?.rush || 400) + (homeData?.pass || 900)) / 40 * homeInjuryPenalty * weatherFactor;
    const awayBaseOffense = ((awayData?.rush || 400) + (awayData?.pass || 900)) / 40 * awayInjuryPenalty * weatherFactor;

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let homeRaw = homeBaseOffense * (0.85 + Math.random() * 0.30);
        let awayRaw = awayBaseOffense * (0.85 + Math.random() * 0.30);

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

    // Päivitetään käyttöliittymä
    if (document.getElementById('homeScoreNum')) document.getElementById('homeScoreNum').textContent = avgHomeScore;
    if (document.getElementById('awayScoreNum')) document.getElementById('awayScoreNum').textContent = avgAwayScore;
    if (document.getElementById('homeWinProb')) document.getElementById('homeWinProb').textContent = `${match.home}: ${homeWinPct}%`;
    if (document.getElementById('awayWinProb')) document.getElementById('awayWinProb').textContent = `${match.away}: ${awayWinPct}%`;
    if (document.getElementById('probBar')) document.getElementById('probBar').style.width = `${homeWinPct}%`;

    if (document.getElementById('homeTitle')) document.getElementById('homeTitle').textContent = `Kotijoukkue: ${match.home} (${homeData.record || "0-0"})`;
    if (document.getElementById('homeStats')) {
        document.getElementById('homeStats').innerHTML = `
            Sää: ${match.weather}<br>
            Loukkaantumiset: ${homeData.injuredPlayers?.map(p => `${p.name} (${p.pos})`).join(', ') || 'Ei merkittäviä'}<br>
            Seuraava ottelu: ${homeData.scheduleStatus || 'Ei tietoa'}
        `;
    }

    if (document.getElementById('awayTitle')) document.getElementById('awayTitle').textContent = `Vierasjoukkue: ${match.away} (${awayData.record || "0-0"})`;
    if (document.getElementById('awayStats')) {
        document.getElementById('awayStats').innerHTML = `
            Sää: ${match.weather}<br>
            Loukkaantumiset: ${awayData.injuredPlayers?.map(p => `${p.name} (${p.pos})`).join(', ') || 'Ei merkittäviä'}<br>
            Seuraava ottelu: ${awayData.scheduleStatus || 'Ei tietoa'}
        `;
    }

    renderPlayers('homePlayers', homeData.players);
    renderPlayers('awayPlayers', awayData.players);
}

function renderPlayers(containerId, playersList) {
    const container = document.getElementById(containerId);
    if (!container || !playersList) return;

    container.innerHTML = '';
    playersList.forEach(player => {
        const row = document.createElement('div');
        row.className = 'player-row';
        row.innerHTML = `
            <div>
                <strong>${player.name}</strong> (${player.pos})
                <span>${player.rec || ''} | ${player.yds || ''}</span>
            </div>
            <div class="odd-badge">
                <span>Markkinakerroin</span>
                <strong>${player.marketOdds ? player.marketOdds.toFixed(2) : '-'}</strong>
            </div>
        `;
        container.appendChild(row);
    });
}
