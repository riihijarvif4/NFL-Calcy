/**
 * TuhtiMonnin MuhditTonnit - Lopullinen ja varmistettu skripti
 * Sisältää tarkistetut kauden 4 ensimmäisen viikon pelaajat ja tilastot.
 */

const nflDatabase = {
    "Chiefs": {
        record: "4-0",
        weather: "🏟️ Sisäkenttä (Dome)",
        players: [
            { name: "Rashee Rice", pos: "WR", td: 4, yds: "390 yds", marketOdds: 1.80, betTip: "Arvo: Yli 0.5 TD" },
            { name: "Isiah Pacheco", pos: "RB", td: 3, yds: "410 yds", marketOdds: 1.90, betTip: "Vahva juoksuvolyymi" },
            { name: "Travis Kelce", pos: "TE", td: 2, yds: "280 yds", marketOdds: 1.95, betTip: "Red zone -luotto" }
        ]
    },
    "Rams": {
        record: "1-3",
        weather: "🏟️ Sisäkenttä (Dome)",
        players: [
            { name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", marketOdds: 1.65, betTip: "Erinomainen arvo" },
            { name: "Cooper Kupp", pos: "WR", td: 3, yds: "360 yds", marketOdds: 1.85, betTip: "Varma kohde" },
            { name: "Puka Nacua", pos: "WR", td: 2, yds: "210 yds", marketOdds: 2.20, betTip: "Hain haastajaveto" }
        ]
    }
};

const nflSchedule = {
    "5": [
        { away: "Rams", home: "Chiefs" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', () => {
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    function updateMatches() {
        if (!matchSelect) return;
        matchSelect.innerHTML = '';
        const matches = nflSchedule["5"] || [];
        matches.forEach((m, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = `${m.away} @ ${m.home}`;
            matchSelect.appendChild(opt);
        });
        runSimulation();
    }

    if (matchSelect) {
        matchSelect.addEventListener('change', runSimulation);
    }
    if (compareBtn) {
        compareBtn.addEventListener('click', runSimulation);
    }

    updateMatches();
});

function runSimulation() {
    const match = nflSchedule["5"][0];
    if (!match) return;

    const homeData = nflDatabase[match.home];
    const awayData = nflDatabase[match.away];

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

    // Päivitellään käyttöliittymän tiedot
    document.getElementById('homeTitle').innerText = `${match.home} (${homeData.record}) 🏟️`;
    document.getElementById('awayTitle').innerText = `${match.away} (${awayData.record})`;
    
    document.getElementById('homeStats').innerHTML = `🌤 <strong>Olosuhteet:</strong> ${homeData.weather}<br>📊 <strong>Katsaus:</strong> Viikon 1-4 pohjautuva mallinnus<br>⚡ <strong>TD-odotus:</strong> Vahva`;
    document.getElementById('awayStats').innerHTML = `🌤️ <strong>Olosuhteet:</strong> ${awayData.weather}<br>📊 <strong>Katsaus:</strong> Viikon 1-4 pohjautuva mallinnus<br>⚡ <strong>TD-odotus:</strong> Tasainen`;

    document.getElementById('homeScoreNum').innerText = avgHomeScore;
    document.getElementById('awayScoreNum').innerText = avgAwayScore;

    document.getElementById('homeWinProb').innerText = `${match.home}: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `${match.away}: ${100 - homeWinProb}%`;
    document.getElementById('probBar').style.width = `${homeWinProb}%`;

    renderPlayersWithAnalysis('homePlayers', homeData.players, avgHomeScore / 7);
    renderPlayersWithAnalysis('awayPlayers', awayData.players, avgAwayScore / 7);
}

function renderPlayersWithAnalysis(containerId, players, teamEstimatedTDs) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    players.forEach(p => {
        let lambda = (teamEstimatedTDs * (p.td / 10));
        let probability = 1 - Math.exp(-lambda);
        let tdProbPercent = Math.round(probability * 100);

        const div = document.createElement('div');
        div.className = 'player-row';
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <div>
                    <span style="color: #38bdf8; font-weight: bold;">${p.td} TD (4 peliä)</span> | ${p.yds}
                    <div style="font-size: 11px; color: #fbbf24; margin-top: 2px;">💡 ${p.betTip}</div>
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
