/**
 * TuhtiMonnin MuhditTonnit - script.js
 */

const nflDatabase = {
    "Chiefs": {
        record: "4-0",
        rush: 540, pass: 1040, oppPass: 830, oppRush: 340, games: 4,
        players: [
            { name: "Rashee Rice", pos: "WR", td: 4, yds: "390 yds", marketOdds: 1.80 },
            { name: "Isiah Pacheco", pos: "RB", td: 3, yds: "410 yds", marketOdds: 1.90 },
            { name: "Travis Kelce", pos: "TE", td: 2, yds: "280 yds", marketOdds: 1.95 }
        ]
    },
    "Rams": {
        record: "1-3",
        rush: 450, pass: 980, oppPass: 1040, oppRush: 500, games: 4,
        players: [
            { name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", marketOdds: 1.65 },
            { name: "Cooper Kupp", pos: "WR", td: 3, yds: "360 yds", marketOdds: 1.85 },
            { name: "Puka Nacua", pos: "WR", td: 2, yds: "210 yds", marketOdds: 2.20 }
        ]
    }
};

const nflSchedule = {
    "5": [
        { away: "Rams", home: "Chiefs", weather: "🏟️ Sisäkenttä (Dome)" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', () => {
    const weekSelect = document.getElementById('weekSelect');
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
        runMonteCarloSimulation();
    }

    if (matchSelect) {
        matchSelect.addEventListener('change', runMonteCarloSimulation);
    }
    if (compareBtn) {
        compareBtn.addEventListener('click', runMonteCarloSimulation);
    }

    updateMatches();
});

function runMonteCarloSimulation() {
    const match = nflSchedule["5"][0];
    if (!match) return;

    const homeData = nflDatabase[match.home] || nflDatabase["Chiefs"];
    const awayData = nflDatabase[match.away] || nflDatabase["Rams"];

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

    // Päivitetään tekstikentät
    document.getElementById('homeTitle').innerText = `${match.home} (${homeData.record}) 🏟️`;
    document.getElementById('awayTitle').innerText = `${match.away} (${awayData.record})`;
    
    document.getElementById('homeStats').innerHTML = `🌤 <strong>Olosuhteet:</strong> ${match.weather}<br>📊 <strong>Hyökkäys / peli:</strong> Heitto 260 yds | Juoksu 135 yds<br>⚡ <strong>TD-arvio:</strong> Korkea odotus`;
    document.getElementById('awayStats').innerHTML = `🌤️ <strong>Olosuhteet:</strong> ${match.weather}<br>📊 <strong>Hyökkäys / peli:</strong> Heitto 245 yds | Juoksu 110 yds<br>⚡ <strong>TD-arvio:</strong> Tasainen`;

    document.getElementById('homeScoreNum').innerText = avgHomeScore;
    document.getElementById('awayScoreNum').innerText = avgAwayScore;

    document.getElementById('homeWinProb').innerText = `${match.home}: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `${match.away}: ${100 - homeWinProb}%`;
    document.getElementById('probBar').style.width = `${homeWinProb}%`;

    renderPlayersWithPoisson('homePlayers', homeData.players, avgHomeScore / 7);
    renderPlayersWithPoisson('awayPlayers', awayData.players, avgAwayScore / 7);
}

function renderPlayersWithPoisson(containerId, players, teamEstimatedTDs) {
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
