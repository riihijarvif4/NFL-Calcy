// Aito NFL pistematriisi (mahdottomat pisteet kuten 5 tai 2 suodatettu pois kokonaan)
const VALID_NFL_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

function getValidScore() {
    return VALID_NFL_SCORES[Math.floor(Math.random() * VALID_NFL_SCORES.length)];
}

// Tietokanta otteluille, sääolosuhteille ja syvädatalle
const matchDatabase = {
    "chiefs-bears": {
        home: "Kansas City Chiefs",
        away: "Chicago Bears",
        stadium: "GEHA Field at Arrowhead Stadium",
        weather: "☀️ +14°C | Tuuli 2 m/s (Normaali sisämaa-olosuhde, hyvä heittopeliin).",
        hasPenaltyWeather: false,
        homeOffenseYds: 390,
        awayOffenseYds: 310,
        players: [
            { name: "Isiah Pacheco", pos: "RB", team: "Chiefs", historyTDs: [4, 8, 12], rushYds: "78.5 yds/peli", passYds: "-" },
            { name: "Travis Kelce", pos: "TE", team: "Chiefs", historyTDs: [5, 9, 10], rushYds: "-", passYds: "68.2 yds/peli" },
            { name: "D'Andre Swift", pos: "RB", team: "Bears", historyTDs: [3, 5, 9], rushYds: "65.0 yds/peli", passYds: "-" },
            { name: "Cole Kmet", pos: "TE", team: "Bears", historyTDs: [2, 4, 6], rushYds: "-", passYds: "42.5 yds/peli" }
        ]
    },
    "bills-dolphins": {
        home: "Buffalo Bills",
        away: "Miami Dolphins",
        stadium: "Highmark Stadium (Buffalo)",
        weather: "❄️ SÄÄVAROITUS: Kova myrskytuuli (14 m/s) ja lumisadetta! Kelin vuoksi kentällä kannattaa panostaa enemmän RUSHING kuin PASSING -peliin!",
        hasPenaltyWeather: true,
        homeOffenseYds: 375,
        awayOffenseYds: 410,
        players: [
            { name: "James Cook", pos: "RB", team: "Bills", historyTDs: [2, 6, 11], rushYds: "82.4 yds/peli", passYds: "-" },
            { name: "Josh Allen", pos: "QB", team: "Bills", historyTDs: [12, 15, 18], rushYds: "45.0 yds/peli", passYds: "265.0 yds/peli" },
            { name: "De'Von Achane", pos: "RB", team: "Dolphins", historyTDs: [3, 8, 13], rushYds: "88.1 yds/peli", passYds: "-" },
            { name: "Tyreek Hill", pos: "WR", team: "Dolphins", historyTDs: [7, 12, 14], rushYds: "-", passYds: "98.5 yds/peli" }
        ]
    },
    "49ers-packers": {
        home: "San Francisco 49ers",
        away: "Green Bay Packers",
        stadium: "Levi's Stadium",
        weather: "⛅ +18°C | Täydelliset peliolosuhteet.",
        hasPenaltyWeather: false,
        homeOffenseYds: 405,
        awayOffenseYds: 350,
        players: [
            { name: "Christian McCaffrey", pos: "RB", team: "49ers", historyTDs: [8, 14, 21], rushYds: "95.0 yds/peli", passYds: "35.2 yds/peli" },
            { name: "Deebo Samuel", pos: "WR", team: "49ers", historyTDs: [4, 7, 10], rushYds: "30.5 yds/peli", passYds: "55.0 yds/peli" },
            { name: "Josh Jacobs", pos: "RB", team: "Packers", historyTDs: [5, 9, 12], rushYds: "84.0 yds/peli", passYds: "-" },
            { name: "Jayden Reed", pos: "WR", team: "Packers", historyTDs: [2, 6, 9], rushYds: "-", passYds: "58.4 yds/peli" }
        ]
    }
};

document.getElementById('simulateBtn').addEventListener('click', runSimulation);

function runSimulation() {
    const matchKey = document.getElementById('matchSelect').value;
    const match = matchDatabase[matchKey];

    // Säävaroitus ilmoitus (Keltalippu)
    const alertBox = document.getElementById('weatherAlert');
    const alertText = document.getElementById('weatherText');
    if (match.hasPenaltyWeather) {
        alertBox.classList.remove('hidden');
        alertText.innerHTML = `<strong>${match.stadium}:</strong> ${match.weather}`;
    } else {
        alertBox.classList.add('hidden');
    }

    // Aitojen NFL-pisteiden arvonta xG-pohjaisesti (vältetään mahdottomat pisteet kuten 5)
    let homeScore = getValidScore();
    let awayScore = getValidScore();
    
    // Varmistetaan ettei tule tasapeliä häiritsemään voittotodennäköisyyksiä
    if (homeScore === awayScore) homeScore += 3;

    document.getElementById('homeName').innerText = match.home;
    document.getElementById('awayName').innerText = match.away;
    document.getElementById('homeScore').innerText = homeScore;
    document.getElementById('awayScore').innerText = awayScore;

    let homeWinProb = homeScore > awayScore ? Math.floor(65 + Math.random() * 25) : Math.floor(15 + Math.random() * 30);
    let awayWinProb = 100 - homeWinProb;
    document.getElementById('homeWinProb').innerText = `Voitto: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `Voitto: ${awayWinProb}%`;

    // Jaardit ja linjojen hallinta
    document.getElementById('yardsOverview').innerHTML = `
        <p>📊 <strong>Arvioidut kokonaisjaardit (xG & Trenches):</strong> 🏠 ${match.home}: <strong>${match.homeOffenseYds} yds</strong> | ✈️ ${match.away}: <strong>${match.awayOffenseYds} yds</strong></p>
        <p style="margin-top:0.5rem; font-size:0.85rem; color:#94a3b8;">🏟️ Stadion: ${match.stadium}</p>
    `;

    // Pelaajien xG & 1+ / 2+ TD todennäköisyydet (Uranousu-trendillä)
    const container = document.getElementById('playersContainer');
    container.innerHTML = '';

    match.players.forEach(player => {
        // Lasketaan uranousu-trendi (esim. 2 -> 6 -> 11 kertoo nousujohteisuudesta)
        const [y1, y2, y3] = player.historyTDs;
        let trendMultiplier = 1.0;
        if (y3 > y2 && y2 > y1) {
            trendMultiplier = 1.25; // Nouseva tähti!
        }

        // Pistemäärään sidottu ehdoton katto ja xG-laskenta
        let teamScoreForPlayer = player.team === match.home ? homeScore : awayScore;
        let baseChance = (y3 * 3) * trendMultiplier;
        
        let td1Prob = 0;
        let td2Prob = 0;

        if (teamScoreForPlayer <= 3) {
            td1Prob = 0;
            td2Prob = 0;
        } else {
            td1Prob = Math.min(88, Math.max(15, Math.floor(baseChance + (teamScoreForPlayer * 1.5))));
            td2Prob = Math.max(5, Math.floor(td1Prob * 0.45));
        }

        const row = document.createElement('div');
        row.className = 'player-row';
        row.innerHTML = `
            <div class="player-info">
                <h4>${player.name} (${player.pos}) <span>- ${player.team}</span></h4>
                <span>📈 Kausi/Peli: ${player.rushYds !== '-' ? 'Juoksu: ' + player.rushYds : 'Heitto: ' + player.passYds} | Uranousu: ${y1}➔${y2}➔${y3} TD</span>
            </div>
            <div class="player-odds">
                <div class="odd-badge">
                    <span>1+ TD</span>
                    <strong>${td1Prob}%</strong>
                </div>
                <div class="odd-badge">
                    <span>2+ TD</span>
                    <strong>${td2Prob}%</strong>
                </div>
            </div>
        `;
        container.appendChild(row);
    });

    // Päivitetään yhdistelmävedot (Parlays: Tupla, Tripla, 4 & 5 kohdetta)
    updateParlays(match);
}

function updateParlays(match) {
    const p1 = match.players[0];
    const p2 = match.players[1];
    const p3 = match.players[2];
    const p4 = match.players[3];

    document.getElementById('parlayDouble').querySelector('.parlay-content').innerHTML = `
        🔹 <strong>Kohteet:</strong><br>
        1. ${p1.name} 1+ TD<br>
        2. ${p2.name} 1+ TD<br>
        ⚡ <em>Hupikerroin: ~3.40 | Riski: Matala</em>
    `;

    document.getElementById('parlayTriple').querySelector('.parlay-content').innerHTML = `
        🔹 <strong>Kohteet:</strong><br>
        1. ${p1.name} 1+ TD<br>
        2. ${p2.name} 1+ TD<br>
        3. ${p3.name} 1+ TD<br>
        ⚡ <em>Hupikerroin: ~7.80 | Riski: Keski</em>
    `;

    document.getElementById('parlay4Leg').querySelector('.parlay-content').innerHTML = `
        🔹 <strong>Kohteet:</strong><br>
        1. ${p1.name} 1+ TD<br>
        2. ${p2.name} 1+ TD<br>
        3. ${p3.name} 2+ TD (${p1.name})<br>
        4. ${p3.name} 1+ TD<br>
        ⚡ <em>Hupikerroin: ~18.50 | Riski: Korkea</em>
    `;

    document.getElementById('parlay5Leg').querySelector('.parlay-content').innerHTML = `
        🔹 <strong>Kohteet (💣 Mega):</strong><br>
        1. ${p1.name} 2+ TD<br>
        2. ${p2.name} 1+ TD<br>
        3. ${p3.name} 1+ TD<br>
        4. ${p4.name} 1+ TD<br>
        5. Ottelun kokonaispisteet yli 45.5<br>
        💣 <em>Hupikerroin: ~65.00 | Riski: Ekstreme</em>
    `;
}

// Aja oletuksena simulaatio heti sivun latautuessa
window.onload = () => {
    runSimulation();
};
