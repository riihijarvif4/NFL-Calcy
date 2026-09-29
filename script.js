const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];
function getRandomScore() {
    return VALID_SCORES[Math.floor(Math.random() * VALID_SCORES.length)];
}

// Kaikki 32 joukkuetta tarkkoine tilastoinesi
const nflDatabase = {
    "Rams": { record: "1-2", rush: 401, pass: 885, oppTD: 7, players: [
        { name: "Davante Adams", pos: "WR", td: 2, yds: "358 yds, 18 Rec" },
        { name: "Williams", pos: "RB", td: 2, yds: "214+106 yds, 11 Rec" },
        { name: "Higbee", pos: "TE", td: 1, yds: "74 yds, 10 Rec" },
        { name: "Mumpfield", pos: "WR", td: 1, yds: "105 yds, 5 Rec" },
        { name: "Ferguson", pos: "TE", td: 1, yds: "63 yds, 7 Rec" },
        { name: "Corum", pos: "RB", td: 0, yds: "148 yds" },
        { name: "Puca Nacua", pos: "WR", td: 0, yds: "Lasissa+, 5 Rec" }
    ]},
    "Broncos": { record: "2-1", rush: 243, pass: 605, oppTD: 7, players: [
        { name: "Harvey", pos: "RB", td: 0, yds: "88 yds, 10 Rec" },
        { name: "Bryant II", pos: "WR", td: 1, yds: "98 yds, 6 Rec" },
        { name: "Dobbins", pos: "RB", td: 0, yds: "121 yds" },
        { name: "Waddle", pos: "WR", td: 0, yds: "150 yds, 11 Rec" },
        { name: "Adkins", pos: "TE", td: 2, yds: "40 yds, 4 Rec" },
        { name: "Engram", pos: "TE", td: 1, yds: "60 yds, 5 Rec" }
    ]},
    "Bills": { record: "3-0", rush: 465, pass: 786, oppTD: 9, players: [
        { name: "Allen", pos: "QB", td: 6, yds: "114 yds" },
        { name: "Cook", pos: "RB", td: 2, yds: "362 yds" },
        { name: "Moore", pos: "WR", td: 1, yds: "167 yds, 11 Rec" },
        { name: "Kincaid", pos: "TE", td: 1, yds: "263 yds, 14 Rec" },
        { name: "Coleman", pos: "WR", td: 0, yds: "101 yds, 8 Rec" }
    ]},
    "Chargers": { record: "0-3", rush: 339, pass: 627, oppTD: 8, players: [
        { name: "Hampton", pos: "RB", td: 2, yds: "193 yds" },
        { name: "McConkley", pos: "WR", td: 1, yds: "183 yds, 12 Rec" },
        { name: "Harris", pos: "WR", td: 0, yds: "149 yds, 10 Rec" }
    ]},
    "Browns": { record: "2-1", rush: 263, pass: 587, oppTD: 6, players: [
        { name: "Fannin Jr", pos: "WR", td: 2, yds: "126 yds, 14 Rec" },
        { name: "Boston", pos: "WR", td: 2, yds: "195 yds, 9 Rec" },
        { name: "Judkins", pos: "RB", td: 0, yds: "124 yds" }
    ]},
    "Panthers": { record: "1-2", rush: 291, pass: 939, oppTD: 10, players: [
        { name: "Hubbard", pos: "RB", td: 3, yds: "261 yds, 9 Rec" },
        { name: "Wallen", pos: "TE", td: 2, yds: "112 yds, 10 Rec" },
        { name: "Coker", pos: "WR", td: 2, yds: "222 yds, 18 Rec" },
        { name: "McMillan", pos: "WR", td: 0, yds: "193 yds, 12 Rec" }
    ]},
    "Cowboys": { record: "1-2", rush: 283, pass: 730, oppTD: 10, players: [
        { name: "Williams", pos: "RB", td: 3, yds: "225 yds, 10 Rec" },
        { name: "Lamb", pos: "WR", td: 3, yds: "309 yds, 20 Rec" },
        { name: "Ferguson", pos: "TE", td: 3, yds: "72 yds, 9 Rec" },
        { name: "Pickens", pos: "WR", td: 0, yds: "150 yds, 16 Rec" },
        { name: "Turpin", pos: "RB", td: 1, yds: "27 yds, 2 Rec" }
    ]},
    "Ravens": { record: "2-1", rush: 502, pass: 745, oppTD: 8, players: [
        { name: "Henry", pos: "RB", td: 6, yds: "339 yds, 5 Rec" },
        { name: "Flowers", pos: "WR", td: 1, yds: "234 yds, 10 Rec" },
        { name: "Jackson", pos: "QB", td: 1, yds: "124 yds" },
        { name: "Bateman", pos: "WR", td: 1, yds: "125 yds, 9 Rec" },
        { name: "Moore", pos: "WR", td: 1, yds: "63 yds, 3 Rec" },
        { name: "Andrews", pos: "TE", td: 0, yds: "122 yds, 13 Rec" }
    ]},
    "Saints": { record: "1-2", rush: 304, pass: 917, oppTD: 10, players: [
        { name: "Johnson", pos: "WR", td: 3, yds: "173 yds, 15 Rec" },
        { name: "Fant", pos: "TE", td: 3, yds: "66 yds, 8 Rec" },
        { name: "Olave", pos: "WR", td: 1, yds: "375 yds, 27 Rec" },
        { name: "Shough", pos: "QB", td: 1, yds: "67 yds" },
        { name: "Etienne", pos: "RB", td: 0, yds: "179 yds, 11 Rec" },
        { name: "Vele", pos: "WR", td: 1, yds: "172 yds, 15 Rec" }
    ]},
    "Raiders": { record: "3-0", rush: 300, pass: 661, oppTD: 7, players: [
        { name: "Bowers", pos: "TE", td: 1, yds: "116 yds, 10 Rec" },
        { name: "White", pos: "WR", td: 3, yds: "28 yds, 3 Rec" },
        { name: "Jeanty", pos: "RB", td: 2, yds: "303 yds, 13 Rec" },
        { name: "Mayer", pos: "TE", td: 1, yds: "87 yds, 12 Rec" },
        { name: "Tucker", pos: "WR", td: 1, yds: "187 yds, 11 Rec" }
    ]},
    "49yers": { record: "3-0", rush: 409, pass: 789, oppTD: 5, players: [
        { name: "McCaffrey", pos: "RB", td: 3, yds: "270 yds, 13 Rec" },
        { name: "Kittle", pos: "TE", td: 3, yds: "174 yds, 12 Rec" },
        { name: "Evans", pos: "WR", td: 2, yds: "137 yds (Lasassa+)" },
        { name: "Samuel", pos: "WR", td: 2, yds: "159 yds, 9 Rec" },
        { name: "Robinson", pos: "WR", td: 1, yds: "84 yds (Lasassa+)" }
    ]},
    "Cardinals": { record: "1-2", rush: 279, pass: 652, oppTD: 11, players: [
        { name: "Love", pos: "RB", td: 2, yds: "204 yds, 10 Rec" },
        { name: "McBride", pos: "TE", td: 2, yds: "211 yds, 26 Rec" },
        { name: "Wilson", pos: "WR", td: 1, yds: "163 yds, 18 Rec" },
        { name: "Bourne", pos: "WR", td: 0, yds: "108 yds, 10 Rec" },
        { name: "Harrison Jr", pos: "WR", td: 0, yds: "73 yds, 4 Rec" }
    ]},
    "Buccaneers": { record: "0-3", rush: 283, pass: 615, oppTD: 7, players: [
        { name: "Egbuka", pos: "WR", td: 1, yds: "141 yds, 13 Rec" },
        { name: "Irving", pos: "RB", td: 1, yds: "241 yds, 13 Rec" },
        { name: "Mayfield", pos: "QB", td: 1, yds: "65 yds" },
        { name: "Godwin Jr", pos: "WR", td: 0, yds: "111 yds, 10 Rec" },
        { name: "Otton", pos: "TE", td: 0, yds: "120 yds, 11 Rec" }
    ]},
    "Vikings": { record: "3-0", rush: 304, pass: 462, oppTD: 3, players: [
        { name: "Jefferson", pos: "WR", td: 2, yds: "179 yds, 13 Rec" },
        { name: "Jones", pos: "RB", td: 1, yds: "237 yds, 5 Rec" },
        { name: "Hockenson", pos: "TE", td: 1, yds: "76 yds, 9 Rec" },
        { name: "Addison", pos: "WR", td: 1, yds: "111 yds, 7 Rec" }
    ]},
    "Lions": { record: "2-1", rush: 362, pass: 802, oppTD: 13, players: [
        { name: "St. Brown", pos: "WR", td: 5, yds: "228 yds, 23 Rec" },
        { name: "Gibbs", pos: "RB", td: 6, yds: "463 yds, 18 Rec" },
        { name: "LaPorta", pos: "TE", td: 1, yds: "144 yds, 14 Rec" },
        { name: "Williams", pos: "WR", td: 0, yds: "127 yds, 10 Rec" }
    ]},
    "Jets": { record: "1-2", rush: 277, pass: 783, oppTD: 7, players: [
        { name: "Wilson", pos: "WR", td: 2, yds: "163 yds, 21 Rec" },
        { name: "Sadiq", pos: "TE", td: 1, yds: "143 yds, 12 Rec" },
        { name: "Hall", pos: "RB", td: 1, yds: "265 yds, 10 Rec" }
    ]},
    "Colts": { record: "1-2", rush: 310, pass: 611, oppTD: 10, players: [
        { name: "Taylor", pos: "RB", td: 4, yds: "325 yds, 9 Rec" },
        { name: "Warren", pos: "TE", td: 2, yds: "89 yds, 18 Rec" },
        { name: "Allen", pos: "WR", td: 1, yds: "100 yds, 13 Rec" },
        { name: "Downs", pos: "WR", td: 0, yds: "186 yds, 14 Rec" }
    ]},
    "Texans": { record: "0-3", rush: 254, pass: 794, oppTD: 7, players: [
        { name: "Montgomery", pos: "RB", td: 3, yds: "151 yds, 7 Rec" },
        { name: "Collins", pos: "WR", td: 1, yds: "75 yds (Lasassa+)" },
        { name: "Marks", pos: "RB", td: 1, yds: "96 yds, 7 Rec" },
        { name: "Hutchinson", pos: "WR", td: 0, yds: "120 yds, 9 Rec" },
        { name: "Schultz", pos: "TE", td: 0, yds: "205 yds, 19 Rec" }
    ]},
    "Jaguars": { record: "2-1", rush: 358, pass: 616, oppTD: 3, players: [
        { name: "Washington", pos: "WR", td: 2, yds: "221 yds, 15 Rec" },
        { name: "Tuten", pos: "RB", td: 2, yds: "240 yds, 5 Rec" },
        { name: "Rodriquez", pos: "RB", td: 1, yds: "73 yds" },
        { name: "Cameron", pos: "WR", td: 2, yds: "32 yds, 3 Rec" },
        { name: "Meyers", pos: "WR", td: 2, yds: "132 yds, 10 Rec" },
        { name: "Thomas Jr", pos: "WR", td: 0, yds: "88 yds, 7 Rec" }
    ]},
    "Patriots": { record: "1-2", rush: 328, pass: 631, oppTD: 6, players: [
        { name: "Hollins", pos: "WR", td: 0, yds: "156 yds, 12 Rec" },
        { name: "Henderson", pos: "RB", td: 1, yds: "99 yds" },
        { name: "Stevenson", pos: "RB", td: 0, yds: "179 yds, 9 Rec" },
        { name: "Henry", pos: "TE", td: 0, yds: "71 yds, 7 Rec" },
        { name: "Doubs", pos: "WR", td: 0, yds: "126 yds, 6 Rec" },
        { name: "Maye", pos: "QB", td: 0, yds: "82 yds" }
    ]},
    "Dolphins": { record: "0-3", rush: 295, pass: 627, oppTD: 11, players: [
        { name: "Archane", pos: "RB", td: 0, yds: "Loppukausi ohi" },
        { name: "Gordon", pos: "RB", td: 1, yds: "48 yds" },
        { name: "Washington", pos: "WR", td: 0, yds: "152 yds, 12 Rec" }
    ]},
    "Chiefs": { record: "3-0", rush: 460, pass: 812, oppTD: 5, players: [
        { name: "Walker III", pos: "RB", td: 4, yds: "442 yds, 11 Rec" },
        { name: "Kelce", pos: "TE", td: 2, yds: "231 yds, 14 Rec" },
        { name: "Worthy", pos: "WR", td: 1, yds: "63 yds, 10 Rec" },
        { name: "Rice", pos: "WR", td: 1, yds: "190 yds, 13 Rec" },
        { name: "Mahomes", pos: "QB", td: 1, yds: "41 yds" }
    ]},
    "Giants": { record: "2-1", rush: 355, pass: 479, oppTD: 8, players: [
        { name: "Likely", pos: "WR", td: 2, yds: "124 yds, 15 Rec" },
        { name: "Skattebo", pos: "RB", td: 1, yds: "236 yds, 7 Rec" },
        { name: "Nabers", pos: "WR", td: 0, yds: "96 yds, 12 Rec" },
        { name: "Singletary", pos: "WR", td: 1, yds: "47 yds, 4 Rec" }
    ]},
    "Titans": { record: "0-3", rush: 271, pass: 504, oppTD: 5, players: [
        { name: "Ward", pos: "QB", td: 2, yds: "30 yds" },
        { name: "Robinson", pos: "WR", td: 1, yds: "104 yds, 13 Rec" },
        { name: "Tate", pos: "WR", td: 0, yds: "123 yds, 13 Rec" },
        { name: "Ayomaoyr", pos: "WR", td: 1, yds: "91 yds, 4 Rec" },
        { name: "Pollard", pos: "RB", td: 0, yds: "195 yds, 3 Rec" }
    ]},
    "Steelers": { record: "2-1", rush: 287, pass: 700, oppTD: 6, players: [
        { name: "Warren", pos: "RB", td: 0, yds: "326 yds, 10 Rec" },
        { name: "Metcalf", pos: "WR", td: 1, yds: "98 yds, 11 Rec" },
        { name: "Freiermuth", pos: "TE", td: 1, yds: "108 yds, 11 Rec" },
        { name: "Wilson", pos: "WR", td: 1, yds: "114 yds, 11 Rec" }
    ]},
    "Bengals": { record: "2-1", rush: 274, pass: 743, oppTD: 6, players: [
        { name: "Brown", pos: "RB", td: 1, yds: "229 yds, 10 Rec" },
        { name: "Higgins", pos: "WR", td: 1, yds: "244 yds, 14 Rec" },
        { name: "Chase", pos: "WR", td: 3, yds: "185 yds, 18 Rec" },
        { name: "Gesicki", pos: "TE", td: 2, yds: "115 yds, 8 Rec" }
    ]},
    "Commanders": { record: "1-2", rush: 396, pass: 554, oppTD: 11, players: [
        { name: "Diggs", pos: "WR", td: 3, yds: "135 yds, 13 Rec" },
        { name: "Croskey-Merritt", pos: "RB", td: 1, yds: "142 yds" },
        { name: "White", pos: "RB", td: 1, yds: "151 yds, 9 Rec" },
        { name: "McLaurin", pos: "WR", td: 1, yds: "141 yds, 10 Rec" },
        { name: "Williams", pos: "WR", td: 1, yds: "103 yds, 9 Rec" }
    ]},
    "Seahawks": { record: "2-1", rush: 303, pass: 828, oppTD: 6, players: [
        { name: "Smith-Njigba", pos: "WR", td: 6, yds: "405 yds, 27 Rec" },
        { name: "Kupp", pos: "TE", td: 1, yds: "101 yds, 8 Rec" },
        { name: "Barner", pos: "TE", td: 0, yds: "90 yds, 8 Rec" },
        { name: "Shaheed", pos: "WR", td: 0, yds: "53 yds, 6 Rec" }
    ]},
    "Packers": { record: "1-2", rush: 146, pass: 844, oppTD: 11, players: [
        { name: "Watson", pos: "WR", td: 4, yds: "284 yds, 17 Rec" },
        { name: "Golden", pos: "WR", td: 1, yds: "253 yds, 15 Rec" },
        { name: "Kraft", pos: "TE", td: 0, yds: "106 yds, 9 Rec" }
    ]},
    "Eagles": { record: "2-0", rush: 225, pass: 467, oppTD: 5, players: [
        { name: "Barkley", pos: "RB", td: 0, yds: "92 yds" },
        { name: "Goedert", pos: "TE", td: 2, yds: "81 yds, 5 Rec" },
        { name: "Wicks", pos: "WR", td: 1, yds: "147 yds, 7 Rec" },
        { name: "Smith", pos: "WR", td: 1, yds: "170 yds, 13 Rec" }
    ]},
    "Bears": { record: "1-1", rush: 425, pass: 461, oppTD: 5, players: [
        { name: "Swift", pos: "RB", td: 3, yds: "233 yds, 6 Rec" },
        { name: "Williams", pos: "QB", td: 2, yds: "107 yds" },
        { name: "Monangai", pos: "RB", td: 1, yds: "182 yds, 4 Rec" },
        { name: "Raymond", pos: "WR", td: 0, yds: "123 yds, 13 Rec" },
        { name: "Odunze", pos: "WR", td: 0, yds: "95 yds, 5 Rec" }
    ]},
    "Falcons": { record: "1-2", rush: 519, pass: 544, oppTD: 8, players: [
        { name: "Bijan Robinson", pos: "RB", td: 3, yds: "467 yds, 13 Rec" },
        { name: "London", pos: "WR", td: 0, yds: "274 yds, 15 Rec" },
        { name: "Brian Robinson", pos: "RB", td: 1, yds: "132 yds" }
    ]}
};

window.addEventListener('DOMContentLoaded', () => {
    const homeSelect = document.getElementById('homeTeamSelect');
    const awaySelect = document.getElementById('awayTeamSelect');
    const compareBtn = document.getElementById('compareBtn');

    const teams = Object.keys(nflDatabase).sort();
    teams.forEach(team => {
        homeSelect.add(new Option(team, team));
        awaySelect.add(new Option(team, team));
    });

    if (teams.length >= 2) {
        homeSelect.value = "Chiefs";
        awaySelect.value = "Bills";
        runH2HComparison();
    }

    compareBtn.addEventListener('click', runH2HComparison);
});

function runH2HComparison() {
    const homeKey = document.getElementById('homeTeamSelect').value;
    const awayKey = document.getElementById('awayTeamSelect').value;

    const homeData = nflDatabase[homeKey];
    const awayData = nflDatabase[awayKey];

    if (!homeData || !awayData) return;

    let homeScore = getRandomScore();
    let awayScore = getRandomScore();
    if (homeScore === awayScore) homeScore += 3;

    document.getElementById('homeTitle').innerText = `${homeKey} (${homeData.record})`;
    document.getElementById('awayTitle').innerText = `${awayKey} (${awayData.record})`;

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

    document.getElementById('homeScoreNum').innerText = homeScore;
    document.getElementById('awayScoreNum').innerText = awayScore;

    let homeProb = homeScore > awayScore ? Math.floor(55 + Math.random() * 30) : Math.floor(20 + Math.random() * 30);
    let awayProb = 100 - homeProb;

    document.getElementById('homeWinProb').innerText = `${homeKey}: ${homeProb}%`;
    document.getElementById('awayWinProb').innerText = `${awayKey}: ${awayProb}%`;
    document.getElementById('probBar').style.width = `${homeProb}%`;

    renderPlayers('homePlayers', homeData.players, homeScore);
    renderPlayers('awayPlayers', awayData.players, awayScore);
}

function renderPlayers(containerId, players, teamScore) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    players.forEach(p => {
        let tdProb = teamScore <= 3 ? 10 : Math.min(85, Math.max(15, (p.td * 5) + (teamScore * 1.2)));
        
        const div = document.createElement('div');
        div.className = 'player-row';
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <span>${p.yds} | TD: ${p.td}</span>
            </div>
            <div class="odd-badge">
                <span>1+ TD</span>
                <strong>${tdProb}%</strong>
            </div>
        `;
        container.appendChild(div);
    });
}
