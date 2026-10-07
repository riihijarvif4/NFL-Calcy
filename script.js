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
    return Object.keys(nflDatabase).find(k => teamName.includes(k)) || "Chiefs";
}

function calculateTeamInjuryFactor(injuredList) {
    let penalty = 1.0;
    injuredList.forEach(p => {
        if (p.pos === "QB") penalty -= 0.22;
        else if (p.pos === "RB" || p.pos === "WR" || p.pos === "TE") penalty -= 0.05;
        else penalty -= 0.03;
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

function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect').value;
    const matchIndex = document.getElementById('matchSelect').value;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const homeData = nflDatabase[homeKey] || nflDatabase["Chiefs"];
    const awayData = nflDatabase[awayKey] || nflDatabase["Rams"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData.injuredPlayers);

    let weatherFactor = calculateWeatherFactor(match.weather);

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let away
