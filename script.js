// Mahdottomien tulosten suodatin (ei 5 pisteen mokia)
const VALID_NFL_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];
function getValidScore() {
    return VALID_NFL_SCORES[Math.floor(Math.random() * VALID_NFL_SCORES.length)];
}

// H2H Tietokanta viikoille 4 ja 5 (sisältää säkitykset ja puolustuksen syvädatan)
const nflH2HDatabase = {
    "4": {
        "chiefs-chargers": {
            home: {
                name: "Kansas City Chiefs",
                offYds: 385,
                sacksAllowed: 1.5,
                defenseSacks: 3.2, // Säkitykset per peli
                players: [
                    { name: "Isiah Pacheco", pos: "RB", tds: 4, yds: "76.5 yds (Rush)" },
                    { name: "Travis Kelce", pos: "TE", tds: 3, yds: "64.0 yds (Pass)" }
                ]
            },
            away: {
                name: "Los Angeles Chargers",
                offYds: 340,
                sacksAllowed: 2.8,
                defenseSacks: 2.7,
                players: [
                    { name: "J.K. Dobbins", pos: "RB", tds: 5, yds: "82.0 yds (Rush)" },
                    { name: "Justin Herbert", pos: "QB", tds: 6, yds: "255.0 yds (Pass)" }
                ]
            },
            stadium: "GEHA Field at Arrowhead Stadium",
            weather: "☀️ +18°C | Ihanteelliset olosuhteet.",
            hasPenaltyWeather: false
        },
        "bills-ravens": {
            home: {
                name: "Buffalo Bills",
                offYds: 360,
                sacksAllowed: 2.0,
                defenseSacks: 3.0,
                players: [
                    { name: "James Cook", pos: "RB", tds: 5, yds: "80.2 yds (Rush)" },
                    { name: "Josh Allen", pos: "QB", tds: 7, yds: "270.0 yds (Pass)" }
                ]
            },
            away: {
                name: "Baltimore Ravens",
                offYds: 395,
                sacksAllowed: 1.8,
                defenseSacks: 3.5,
                players: [
                    { name: "Derrick Henry", pos: "RB", tds: 6, yds: "95.5 yds (Rush)" },
                    { name: "Lamar Jackson", pos: "QB", tds: 4, yds: "230.0 yds (Pass)" }
                ]
            },
            stadium: "Highmark Stadium",
            weather: "❄️ Kova tuuli 11 m/s! Suosii juoksupeliä (rushing).",
            hasPenaltyWeather: true
        }
    },
    "5": {
        "49ers-cowboys": {
            home: {
                name: "San Francisco 49ers",
                offYds: 410,
                sacksAllowed: 1.2,
                defenseSacks: 3.4,
                players: [
                    { name: "Christian McCaffrey", pos: "RB", tds: 6, yds: "98.0 yds (Rush)" },
                    { name: "Deebo Samuel", pos: "WR", tds: 3, yds: "58.0 yds (Pass)" }
                ]
            },
            away: {
                name: "Dallas Cowboys",
                offYds: 380,
                sacksAllowed: 2.5,
                defenseSacks: 2.4,
                players: [
                    { name: "CeeDee Lamb", pos: "WR", tds: 5, yds: "92.0 yds (Pass)" },
                    { name: "Rico Dowdle", pos: "RB", tds: 2, yds: "55.0 yds (Rush)" }
                ]
            },
            stadium: "Levi's Stadium",
            weather: "⛅ +20°C | Täydellinen jalkapallokeli.",
            hasPenaltyWeather: false
        }
    }
};

const weekSelect = document.getElementById('weekSelect');
const matchSelect = document.getElementById('matchSelect');
const simulateBtn = document.getElementById('simulateBtn');

function updateMatchDropdown() {
    const week = weekSelect.value;
    const matches = nflH2HDatabase[week];
    matchSelect.innerHTML = '';
    
    if (matches) {
        Object.keys(matches).forEach(key => {
            const m = matches[key];
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = `${m.home.name} vs. ${m.away.name}`;
            matchSelect.appendChild(opt);
        });
    }
}

weekSelect.addEventListener('change', updateMatchDropdown);
simulateBtn.addEventListener('click', runH2HSimulation);

function runH2HSimulation() {
    const week = weekSelect.value;
    const matchKey = matchSelect.value;
    const data = nflH2HDatabase[week]?.[matchKey];

    if (!data) return;

    // Säävaroitus (Keltalippu)
    const alertBox = document.getElementById('weatherAlert');
    const alertText = document.getElementById('weatherText');
    if (data.hasPenaltyWeather) {
        alertBox.classList.remove('hidden');
        alertText.innerHTML = `<strong>${data.stadium}:</strong> ${data.weather}`;
    } else {
        alertBox.classList.add('hidden');
    }

    // Pisteet ja voittotodennäköisyydet
    let homeScore = getValidScore();
    let awayScore = getValidScore();
    if (homeScore === awayScore) homeScore += 3;

    document.getElementById('homeTeamTitle').innerText = data.home.name;
    document.getElementById('awayTeamTitle').innerText = data.away.name;

    document.getElementById('homeOffYds').innerText = data.home.offYds;
    document.getElementById('homeSacks').innerText = data.home.defenseSacks;
    document.getElementById('homeScore').innerText = homeScore;

    document.getElementById('awayOffYds').innerText = data.away.offYds;
    document.getElementById('awaySacks').innerText = data.away.defenseSacks;
    document.getElementById('awayScore').innerText = awayScore;

    let homeProb = homeScore > awayScore ? Math.floor(60 + Math.random() * 25) : Math.floor(20 + Math.random() * 25);
    let awayProb = 100 - homeProb;

    document.getElementById('homeWinProb').innerText = `${data.home.name}: ${homeProb}%`;
    document.getElementById('awayWinProb').innerText = `${data.away.name}: ${awayProb}%`;

    // Linjojen taistelu ja säkitysdynamiikka
    document.getElementById('trenchBox').innerHTML = `
        ⚔️ <strong>Linjataistelu & Säkitykset:</strong><br>
        • ${data.home.name} puolustus tekee keskimäärin <strong>${data.home.defenseSacks} säkitystä</strong> ottelua kohden.<br>
        • ${data.away.name} puolustus tekee keskimäärin <strong>${data.away.defenseSacks} säkitystä</strong> ottelua kohden.
    `;

    // Pelaajatiedot molemmille
    renderPlayers('homePlayersContainer', data.home.players, homeScore);
    renderPlayers('awayPlayersContainer', data.away.players, awayScore);

    // Päivitetään parlayt
    updateH2HParlays(data);
}

function renderPlayers(containerId, players, teamScore) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    players.forEach(p => {
        let tdProb = teamScore <= 3 ? 0 : Math.min(85, Math.max(20, (p.td * 4) + (teamScore * 1.5)));
        
        const div = document.createElement('div');
        div.className = 'player-row';
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <span>${p.yds} | Tehdyt TD: ${p.td}</span>
            </div>
            <div class="odd-badge">
                <span>1+ TD</span>
                <strong>${tdProb}%</strong>
            </div>
        `;
        container.appendChild(div);
    });
}

function updateH2HParlays(data) {
    const p1 = data.home.players[0];
    const p2 = data.away.players[0];

    document.getElementById('parlayDouble').querySelector('.parlay-content').innerHTML = `
        🔹 <strong>Kohteet:</strong><br>
        1. ${p1.name} (1+ TD)<br>
        2. ${p2.name} (1+ TD)<br>
        ⚡ <em>Kerroin: ~3.50</em>
    `;

    document.getElementById('parlayTriple').querySelector('.parlay-content').innerHTML = `
        🔹 <strong>Kohteet:</strong><br>
        1. ${p1.name} (1+ TD)<br>
        2. ${p2.name} (1+ TD)<br>
        3. Säkityksiä yhteensä yli 4.5 (${data.home.name} / ${data.away.name})<br>
        ⚡ <em>Kerroin: ~7.20</em>
    `;
}

window.onload = () => {
    updateMatchDropdown();
    runH2HSimulation();
};
