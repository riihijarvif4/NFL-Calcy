// Kaikkien 32 joukkueen tilastot & pelaajat
const nflDatabase = {
    "Rams": { record: "1-2", rush: 401, pass: 885, oppTD: 7, players: [
        { name: "Davante Adams", pos: "WR", td: 2, yds: "358 yds" },
        { name: "Williams", pos: "RB", td: 2, yds: "320 total yds" },
        { name: "Higbee", pos: "TE", td: 1, yds: "74 yds" }
    ]},
    "Broncos": { record: "2-1", rush: 243, pass: 605, oppTD: 7, players: [
        { name: "Bryant II", pos: "WR", td: 1, yds: "98 yds" },
        { name: "Adkins", pos: "TE", td: 2, yds: "40 yds" },
        { name: "Engram", pos: "TE", td: 1, yds: "60 yds" }
    ]},
    "Bills": { record: "3-0", rush: 465, pass: 786, oppTD: 9, players: [
        { name: "Allen", pos: "QB", td: 6, yds: "114 rush yds" },
        { name: "Cook", pos: "RB", td: 2, yds: "362 yds" },
        { name: "Moore", pos: "WR", td: 1, yds: "167 yds" }
    ]},
    "Chargers": { record: "0-3", rush: 339, pass: 627, oppTD: 8, players: [
        { name: "Hampton", pos: "RB", td: 2, yds: "193 yds" },
        { name: "McConkley", pos: "WR", td: 1, yds: "183 yds" }
    ]},
    "Browns": { record: "2-1", rush: 263, pass: 587, oppTD: 6, players: [
        { name: "Fannin Jr", pos: "WR", td: 2, yds: "126 yds" },
        { name: "Boston", pos: "WR", td: 2, yds: "195 yds" },
        { name: "Judkins", pos: "RB", td: 0, yds: "124 yds" }
    ]},
    "Panthers": { record: "1-2", rush: 291, pass: 939, oppTD: 10, players: [
        { name: "Hubbard", pos: "RB", td: 3, yds: "261 yds" },
        { name: "Wallen", pos: "TE", td: 2, yds: "112 yds" },
        { name: "Coker", pos: "WR", td: 2, yds: "222 yds" }
    ]},
    "Cowboys": { record: "1-2", rush: 283, pass: 730, oppTD: 10, players: [
        { name: "Williams", pos: "RB", td: 3, yds: "225 yds" },
        { name: "Lamb", pos: "WR", td: 3, yds: "309 yds" },
        { name: "Ferguson", pos: "TE", td: 3, yds: "72 yds" }
    ]},
    "Ravens": { record: "2-1", rush: 502, pass: 745, oppTD: 8, players: [
        { name: "Henry", pos: "RB", td: 6, yds: "339 yds" },
        { name: "Flowers", pos: "WR", td: 1, yds: "234 yds" },
        { name: "Jackson", pos: "QB", td: 1, yds: "124 yds" }
    ]},
    "Saints": { record: "1-2", rush: 304, pass: 917, oppTD: 10, players: [
        { name: "Johnson", pos: "WR", td: 3, yds: "173 yds" },
        { name: "Fant", pos: "TE", td: 3, yds: "66 yds" },
        { name: "Olave", pos: "WR", td: 1, yds: "375 yds" }
    ]},
    "Raiders": { record: "3-0", rush: 300, pass: 661, oppTD: 7, players: [
        { name: "White", pos: "WR", td: 3, yds: "28 yds" },
        { name: "Jeanty", pos: "RB", td: 2, yds: "303 yds" },
        { name: "Bowers", pos: "TE", td: 1, yds: "116 yds" }
    ]},
    "49yers": { record: "3-0", rush: 409, pass: 789, oppTD: 5, players: [
        { name: "McCaffrey", pos: "RB", td: 3, yds: "270 yds" },
        { name: "Kittle", pos: "TE", td: 3, yds: "174 yds" },
        { name: "Samuel", pos: "WR", td: 2, yds: "159 yds" }
    ]},
    "Cardinals": { record: "1-2", rush: 279, pass: 652, oppTD: 11, players: [
        { name: "Love", pos: "RB", td: 2, yds: "204 yds" },
        { name: "McBride", pos: "TE", td: 2, yds: "211 yds" },
        { name: "Wilson", pos: "WR", td: 1, yds: "163 yds" }
    ]},
    "Buccaneers": { record: "0-3", rush: 283, pass: 615, oppTD: 7, players: [
        { name: "Egbuka", pos: "WR", td: 1, yds: "141 yds" },
        { name: "Irving", pos: "RB", td: 1, yds: "241 yds" },
        { name: "Mayfield", pos: "QB", td: 1, yds: "65 yds" }
    ]},
    "Vikings": { record: "3-0", rush: 304, pass: 462, oppTD: 3, players: [
        { name: "Jefferson", pos: "WR", td: 2, yds: "179 yds" },
        { name: "Jones", pos: "RB", td: 1, yds: "237 yds" },
        { name: "Hockenson", pos: "TE", td: 1, yds: "76 yds" }
    ]},
    "Lions": { record: "2-1", rush: 362, pass: 802, oppTD: 13, players: [
        { name: "St. Brown", pos: "WR", td: 5, yds: "228 yds" },
        { name: "Gibbs", pos: "RB", td: 6, yds: "463 yds" },
        { name: "LaPorta", pos: "TE", td: 1, yds: "144 yds" }
    ]},
    "Jets": { record: "1-2", rush: 277, pass: 783, oppTD: 7, players: [
        { name: "Wilson", pos: "WR", td: 2, yds: "163 yds" },
        { name: "Sadiq", pos: "TE", td: 1, yds: "143 yds" },
        { name: "Hall", pos: "RB", td: 1, yds: "265 yds" }
    ]},
    "Colts": { record: "1-2", rush: 310, pass: 611, oppTD: 10, players: [
        { name: "Taylor", pos: "RB", td: 4, yds: "325 yds" },
        { name: "Warren", pos: "TE", td: 2, yds: "89 yds" },
        { name: "Allen", pos: "WR", td: 1, yds: "100 yds" }
    ]},
    "Texans": { record: "0-3", rush: 254, pass: 794, oppTD: 7, players: [
        { name: "Montgomery", pos: "RB", td: 3, yds: "151 yds" },
        { name: "Collins", pos: "WR", td: 1, yds: "75 yds" },
        { name: "Marks", pos: "RB", td: 1, yds: "96 yds" }
    ]},
    "Jaguars": { record: "2-1", rush: 358, pass: 616, oppTD: 3, players: [
        { name: "Washington", pos: "WR", td: 2, yds: "221 yds" },
        { name: "Tuten", pos: "RB", td: 2, yds: "240 yds" },
        { name: "Meyers", pos: "WR", td: 2, yds: "132 yds" }
    ]},
    "Patriots": { record: "1-2", rush: 328, pass: 631, oppTD: 6, players: [
        { name: "Henderson", pos: "RB", td: 1, yds: "99 yds" },
        { name: "Hollins", pos: "WR", td: 0, yds: "156 yds" }
    ]},
    "Dolphins": { record: "0-3", rush: 295, pass: 627, oppTD: 11, players: [
        { name: "Gordon", pos: "RB", td: 1, yds: "48 yds" },
        { name: "Washington", pos: "WR", td: 0, yds: "152 yds" }
    ]},
    "Chiefs": { record: "3-0", rush: 460, pass: 812, oppTD: 5, players: [
        { name: "Walker III", pos: "RB", td: 4, yds: "442 yds" },
        { name: "Kelce", pos: "TE", td: 2, yds: "231 yds" },
        { name: "Worthy", pos: "WR", td: 1, yds: "63 yds" }
    ]},
    "Giants": { record: "2-1", rush: 355, pass: 479, oppTD: 8, players: [
        { name: "Likely", pos: "WR", td: 2, yds: "124 yds" },
        { name: "Skattebo", pos: "RB", td: 1, yds: "236 yds" },
        { name: "Singletary", pos: "WR", td: 1, yds: "47 yds" }
    ]},
    "Titans": { record: "0-3", rush: 271, pass: 504, oppTD: 5, players: [
        { name: "Ward", pos: "QB", td: 2, yds: "30 yds" },
        { name: "Robinson", pos: "WR", td: 1, yds: "104 yds" },
        { name: "Ayomaoyr", pos: "WR", td: 1, yds: "91 yds" }
    ]},
    "Steelers": { record: "2-1", rush: 287, pass: 700, oppTD: 6, players: [
        { name: "Metcalf", pos: "WR", td: 1, yds: "98 yds" },
        { name: "Freiermuth", pos: "TE", td: 1, yds: "108 yds" },
        { name: "Wilson", pos: "WR", td: 1, yds: "114 yds" }
    ]},
    "Bengals": { record: "2-1", rush: 274, pass: 743, oppTD: 6, players: [
        { name: "Chase", pos: "WR", td: 3, yds: "185 yds" },
        { name: "Gesicki", pos: "TE", td: 2, yds: "115 yds" },
        { name: "Brown", pos: "RB", td: 1, yds: "229 yds" }
    ]},
    "Commanders": { record: "1-2", rush: 396, pass: 554, oppTD: 11, players: [
        { name: "Diggs", pos: "WR", td: 3, yds: "135 yds" },
        { name: "Croskey-Merritt", pos: "RB", td: 1, yds: "142 yds" },
        { name: "McLaurin", pos: "WR", td: 1, yds: "141 yds" }
    ]},
    "Seahawks": { record: "2-1", rush: 303, pass: 828, oppTD: 6, players: [
        { name: "Smith-Njigba", pos: "WR", td: 6, yds: "405 yds" },
        { name: "Kupp", pos: "TE", td: 1, yds: "101 yds" }
    ]},
    "Packers": { record: "1-2", rush: 146, pass: 844, oppTD: 11, players: [
        { name: "Watson", pos: "WR", td: 4, yds: "284 yds" },
        { name: "Golden", pos: "WR", td: 1, yds: "253 yds" }
    ]},
    "Eagles": { record: "2-0", rush: 225, pass: 467, oppTD: 5, players: [
        { name: "Goedert", pos: "TE", td: 2, yds: "81 yds" },
        { name: "Wicks", pos: "WR", td: 1, yds: "147 yds" },
        { name: "Smith", pos: "WR", td: 1, yds: "170 yds" }
    ]},
    "Bears": { record: "1-1", rush: 425, pass: 461, oppTD: 5, players: [
        { name: "Swift", pos: "RB", td: 3, yds: "233 yds" },
        { name: "Williams", pos: "QB", td: 2, yds: "107 yds" },
        { name: "Monangai", pos: "RB", td: 1, yds: "182 yds" }
    ]},
    "Falcons": { record: "1-2", rush: 519, pass: 544, oppTD: 8, players: [
        { name: "Bijan Robinson", pos: "RB", td: 3, yds: "467 yds" },
        { name: "Brian Robinson", pos: "RB", td: 1, yds: "132 yds" }
    ]}
};

// Viikon 4 viralliset ottelut 2026
const nflSchedule = {
    "4": [
        { away: "Pittsburgh Steelers", home: "Cleveland Browns" },
        { away: "Indianapolis Colts", home: "Washington Commanders" },
        { away: "New England Patriots", home: "Buffalo Bills" },
        { away: "Los Angeles Rams", home: "Philadelphia Eagles" },
        { away: "New York Jets", home: "Chicago Bears" },
        { away: "Jacksonville Jaguars", home: "Cincinnati Bengals" },
        { away: "Green Bay Packers", home: "Tampa Bay Buccaneers" },
        { away: "Dallas Cowboys", home: "Houston Texans" },
        { away: "Tennessee Titans", home: "Baltimore Ravens" },
        { away: "Arizona Cardinals", home: "New York Giants" },
        { away: "Miami Dolphins", home: "Minnesota Vikings" },
        { away: "Los Angeles Chargers", home: "Seattle Seahawks" },
        { away: "Denver Broncos", home: "San Francisco 49ers" },
        { away: "Kansas City Chiefs", home: "Las Vegas Raiders" },
        { away: "Detroit Lions", home: "Carolina Panthers" },
        { away: "Atlanta Falcons", home: "New Orleans Saints" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    function updateMatches() {
        const selectedWeek = weekSelect.value;
        matchSelect.innerHTML = '';
        const matches = nflSchedule[selectedWeek] || [];
        
        matches.forEach((m, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = `${m.away} @ ${m.home}`;
            matchSelect.appendChild(opt);
        });
        runMonteCarloSimulation();
    }

    weekSelect.addEventListener('change', updateMatches);
    matchSelect.addEventListener('change', runMonteCarloSimulation);
    compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

// MONTE CARLO SIMULAATTORI (1000 kierrosta)
function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect').value;
    const matchIndex = document.getElementById('matchSelect').value;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = Object.keys(nflDatabase).find(k => match.home.includes(k)) || "Chiefs";
    const awayKey = Object.keys(nflDatabase).find(k => match.away.includes(k)) || "Bills";

    const homeData = nflDatabase[homeKey];
    const awayData = nflDatabase[awayKey];

    // Ajetaan 1000 simulaatiokierrosta
    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    // Poisson-pohjainen satunnaislukuhaun apufunktio
    function simulateTeamScore(baseYds) {
        let base = baseYds / 120; // jaardikerroin
        let score = VALID_SCORES[Math.floor(Math.random() * VALID_SCORES.length)];
        return Math.min(42, Math.max(3, Math.round((score + base * Math.random()) / 3) * 3));
    }

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let hScore = simulateTeamScore(homeData.rush + homeData.pass);
        let aScore = simulateTeamScore(awayData.rush + awayData.pass);
        if (hScore === aScore) hScore += 3; // Ei tasapelejä NFL:ssä

        homeScoreSum += hScore;
        awayScoreSum += aScore;

        if (hScore > aScore) homeWins++;
    }

    // Lasketut keskiarvot 1000 kierroksesta
    let avgHomeScore = Math.round(homeScoreSum / SIM_ITERATIONS);
    let avgAwayScore = Math.round(awayScoreSum / SIM_ITERATIONS);
    let homeWinProb = Math.round((homeWins / SIM_ITERATIONS) * 100);
    let awayWinProb = 100 - homeWinProb;

    // Varmistetaan että lukemat vastaavat validia NFL-pistematriisia
    if (!VALID_SCORES.includes(avgHomeScore)) avgHomeScore = 24;
    if (!VALID_SCORES.includes(avgAwayScore)) avgAwayScore = 20;

    // UI-päivitys
    document.getElementById('homeTitle').innerText = `${match.home} (${homeData.record})`;
    document.getElementById('awayTitle').innerText = `${match.away} (${awayData.record})`;

    document.getElementById('homeStats').innerHTML = `
        📊 <strong>Tilastot:</strong><br>
        • Rush: ${homeData.rush} yds | Pass: ${homeData.pass} yds<br>
        • Vastustajien päästetyt TD: ${homeData.oppTD}
    `;
    document.getElementById('awayStats').innerHTML = `
        📊 <strong>Tilastot:</strong><br>
        • Rush: ${awayData.rush} yds | Pass: ${awayData.pass} yds<br>
        • Vastustajien päästetyt TD: ${awayData.oppTD}
    `;

    document.getElementById('homeScoreNum').innerText = avgHomeScore;
    document.getElementById('awayScoreNum').innerText = avgAwayScore;

    document.getElementById('homeWinProb').innerText = `${homeKey}: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `${awayKey}: ${awayWinProb}%`;
    document.getElementById('probBar').style.width = `${homeWinProb}%`;

    // Pelaajien Poisson-todennäköisyydet simulaation tuloksista
    let homeEstimatedTDs = avgHomeScore / 7;
    let awayEstimatedTDs = avgAwayScore / 7;

    renderPlayersWithPoisson('homePlayers', homeData.players, homeEstimatedTDs, awayData.oppTD);
    renderPlayersWithPoisson('awayPlayers', awayData.players, awayEstimatedTDs, homeData.oppTD);
}

function renderPlayersWithPoisson(containerId, players, teamEstimatedTDs, opponentOppTD) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    let totalPlayerTDs = players.reduce((sum, p) => sum + p.td, 0);
    if (totalPlayerTDs === 0) totalPlayerTDs = 1;

    players.forEach(p => {
        let marketShare = p.td / totalPlayerTDs;
        let matchupMultiplier = opponentOppTD / 8.0; 
        let lambda = (teamEstimatedTDs * marketShare) * matchupMultiplier;
        if (lambda < 0.02) lambda = 0.02;

        let probability = 1 - Math.exp(-lambda);
        let tdProbPercent = Math.round(probability * 100);

        const div = document.createElement('div');
        div.className = 'player-row';
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <span>${p.yds} | TD: ${p.td}</span>
            </div>
            <div class="odd-badge">
                <span>1+ TD</span>
                <strong>${tdProbPercent}%</strong>
            </div>
        `;
        container.appendChild(div);
    });
}
