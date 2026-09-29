// Aito NFL pistematriisi (suodattaa pois mahdottomat tulokset)
const VALID_NFL_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];
function getValidScore() {
    return VALID_NFL_SCORES[Math.floor(Math.random() * VALID_NFL_SCORES.length)];
}

// Koko liigan kattava tietokanta antamiesi tietojen pohjalta (Viikot 1-3 pohjalla, valmiina viikkoon 4+)
const nflFullDatabase = {
    "Rams": { record: "1-2", rushYds: 401, passYds: 885, oppTD: 7, oppRush: 304, oppPass: 522, players: [
        { name: "Davante Adams", pos: "WR", td: 2, yds: "358 passing yds", status: "Active" },
        { name: "Williams", pos: "RB", td: 2, yds: "214 rush + 106 pass yds", status: "Active" },
        { name: "Higbee", pos: "TE", td: 1, yds: "74 passing yds", status: "Active" },
        { name: "Mumpfield", pos: "WR", td: 1, yds: "105 passing yds", status: "Active" },
        { name: "Ferguson", pos: "TE", td: 1, yds: "63 passing yds", status: "Active" },
        { name: "Corum", pos: "RB", td: 0, yds: "148 rush yds", status: "Active" },
        { name: "Puca Nacua", pos: "WR", td: 0, yds: "Lasissa+", status: "Injured" }
    ]},
    "Broncos": { record: "2-1", rushYds: 243, passYds: 605, oppTD: 7, oppRush: 431, oppPass: 763, players: [
        { name: "Harvey", pos: "RB", td: 0, yds: "88 total yds", status: "Active" },
        { name: "Bryant II", pos: "WR", td: 1, yds: "98 total yds", status: "Active" },
        { name: "Dobbins", pos: "RB", td: 0, yds: "121 rush yds", status: "Active" },
        { name: "Waddle", pos: "WR", td: 0, yds: "150 passing yds", status: "Active" },
        { name: "Adkins", pos: "TE", td: 2, yds: "40 passing yds", status: "Active" },
        { name: "Engram", pos: "TE", td: 1, yds: "60 passing yds", status: "Active" }
    ]},
    "Bills": { record: "3-0", rushYds: 465, passYds: 786, oppTD: 9, oppRush: 321, oppPass: 827, players: [
        { name: "Allen", pos: "QB", td: 6, yds: "114 rush yds", status: "Active" },
        { name: "Cook", pos: "RB", td: 2, yds: "362 total yds", status: "Active" },
        { name: "Moore", pos: "WR", td: 1, yds: "167 passing yds", status: "Active" },
        { name: "Kincaid", pos: "TE", td: 1, yds: "263 passing yds", status: "Active" },
        { name: "Coleman", pos: "WR", td: 0, yds: "101 passing yds", status: "Active" }
    ]},
    "Chargers": { record: "0-3", rushYds: 339, passYds: 627, oppTD: 8, oppRush: 349, oppPass: 734, players: [
        { name: "Hampton", pos: "RB", td: 2, yds: "193 rush yds", status: "Active" },
        { name: "McConkley", pos: "WR", td: 1, yds: "183 passing yds", status: "Active" },
        { name: "Harris", pos: "WR", td: 0, yds: "149 passing yds", status: "Active" }
    ]},
    "Browns": { record: "2-1", rushYds: 263, passYds: 587, oppTD: 6, oppRush: 361, oppPass: 718, players: [
        { name: "Fannin Jr", pos: "WR", td: 2, yds: "126 passing yds", status: "Active" },
        { name: "Boston", pos: "WR", td: 2, yds: "195 passing yds", status: "Active" },
        { name: "Judkins", pos: "RB", td: 0, yds: "124 rush yds", status: "Active" }
    ]},
    "Panthers": { record: "1-2", rushYds: 291, passYds: 939, oppTD: 10, oppRush: 580, oppPass: 558, players: [
        { name: "Hubbard", pos: "RB", td: 3, yds: "261 total yds", status: "Active" },
        { name: "Wallen", pos: "TE", td: 2, yds: "112 passing yds", status: "Active" },
        { name: "Coker", pos: "WR", td: 2, yds: "222 passing yds", status: "Active" },
        { name: "McMillan", pos: "WR", td: 0, yds: "193 passing yds", status: "Active" }
    ]},
    "Cowboys": { record: "1-2", rushYds: 283, passYds: 730, oppTD: 10, oppRush: 539, oppPass: 623, players: [
        { name: "Williams", pos: "RB", td: 3, yds: "225 total yds", status: "Active" },
        { name: "Lamb", pos: "WR", td: 3, yds: "309 passing yds", status: "Active" },
        { name: "Ferguson", pos: "TE", td: 3, yds: "72 passing yds", status: "Active" },
        { name: "Pickens", pos: "WR", td: 0, yds: "150 passing yds", status: "Active" },
        { name: "Turpin", pos: "RB", td: 1, yds: "27 total yds", status: "Active" }
    ]},
    "Ravens": { record: "2-1", rushYds: 502, passYds: 745, oppTD: 8, oppRush: 315, oppPass: 694, players: [
        { name: "Henry", pos: "RB", td: 6, yds: "339 total yds", status: "Active" },
        { name: "Flowers", pos: "WR", td: 1, yds: "234 passing yds", status: "Active" },
        { name: "Jackson", pos: "QB", td: 1, yds: "124 rush yds", status: "Active" },
        { name: "Bateman", pos: "WR", td: 1, yds: "125 passing yds", status: "Active" },
        { name: "Moore", pos: "WR", td: 1, yds: "63 passing yds", status: "Active" },
        { name: "Andrews", pos: "TE", td: 0, yds: "122 passing yds", status: "Active" }
    ]},
    "Saints": { record: "1-2", rushYds: 304, passYds: 917, oppTD: 10, oppRush: 386, oppPass: 689, players: [
        { name: "Johnson", pos: "WR", td: 3, yds: "173 passing yds", status: "Active" },
        { name: "Fant", pos: "TE", td: 3, yds: "66 passing yds", status: "Active" },
        { name: "Olave", pos: "WR", td: 1, yds: "375 passing yds", status: "Active" },
        { name: "Shough", pos: "QB", td: 1, yds: "67 rush yds", status: "Active" },
        { name: "Etienne", pos: "RB", td: 0, yds: "179 total yds", status: "Active" },
        { name: "Vele", pos: "WR", td: 1, yds: "172 passing yds", status: "Active" }
    ]},
    "Raiders": { record: "3-0", rushYds: 300, passYds: 661, oppTD: 7, oppRush: 349, oppPass: 667, players: [
        { name: "Bowers", pos: "TE", td: 1, yds: "116 passing yds", status: "Active" },
        { name: "White", pos: "WR", td: 3, yds: "28 passing yds", status: "Active" },
        { name: "Jeanty", pos: "RB", td: 2, yds: "303 total yds", status: "Active" },
        { name: "Mayer", pos: "TE", td: 1, yds: "87 passing yds", status: "Active" },
        { name: "Tucker", pos: "WR", td: 1, yds: "187 passing yds", status: "Active" }
    ]},
    "49yers": { record: "3-0", rushYds: 409, passYds: 789, oppTD: 5, oppRush: 317, oppPass: 645, players: [
        { name: "McCaffrey", pos: "RB", td: 3, yds: "270 total yds", status: "Active" },
        { name: "Kittle", pos: "TE", td: 3, yds: "174 passing yds", status: "Active" },
        { name: "Evans", pos: "WR", td: 2, yds: "137 passing yds", status: "Injured" },
        { name: "Samuel", pos: "WR", td: 2, yds: "159 passing yds", status: "Active" },
        { name: "Robinson", pos: "WR", td: 1, yds: "84 passing yds", status: "Injured" },
        { name: "Purdy", pos: "QB", td: 1, yds: "93 rush yds", status: "Active" }
    ]},
    "Cardinals": { record: "1-2", rushYds: 279, passYds: 652, oppTD: 11, oppRush: 383, oppPass: 741, players: [
        { name: "Love", pos: "RB", td: 2, yds: "204 total yds", status: "Active" },
        { name: "McBride", pos: "TE", td: 2, yds: "211 passing yds", status: "Active" },
        { name: "Wilson", pos: "WR", td: 1, yds: "163 passing yds", status: "Active" },
        { name: "Bourne", pos: "WR", td: 0, yds: "108 passing yds", status: "Active" },
        { name: "Harrison Jr", pos: "WR", td: 0, yds: "73 passing yds", status: "Active" }
    ]},
    "Buccaneers": { record: "0-3", rushYds: 283, passYds: 615, oppTD: 7, oppRush: 228, oppPass: 660, players: [
        { name: "Egbuka", pos: "WR", td: 1, yds: "141 passing yds", status: "Active" },
        { name: "Irving", pos: "RB", td: 1, yds: "241 total yds", status: "Active" },
        { name: "Mayfield", pos: "QB", td: 1, yds: "65 rush yds", status: "Active" },
        { name: "Godwin Jr", pos: "WR", td: 0, yds: "111 passing yds", status: "Active" },
        { name: "Otton", pos: "TE", td: 0, yds: "120 passing yds", status: "Active" }
    ]},
    "Vikings": { record: "3-0", rushYds: 304, passYds: 462, oppTD: 3, oppRush: 257, oppPass: 796, players: [
        { name: "Jefferson", pos: "WR", td: 2, yds: "179 passing yds", status: "Active" },
        { name: "Jones", pos: "RB", td: 1, yds: "237 total yds", status: "Active" },
        { name: "Hockenson", pos: "TE", td: 1, yds: "76 passing yds", status: "Active" },
        { name: "Addison", pos: "WR", td: 1, yds: "111 passing yds", status: "Active" }
    ]},
    "Lions": { record: "2-1", rushYds: 362, passYds: 802, oppTD: 13, oppRush: 352, oppPass: 979, players: [
        { name: "St. Brown", pos: "WR", td: 5, yds: "228 passing yds", status: "Active" },
        { name: "Gibbs", pos: "RB", td: 6, yds: "463 total yds", status: "Active" },
        { name: "LaPorta", pos: "TE", td: 1, yds: "144 passing yds", status: "Active" },
        { name: "Williams", pos: "WR", td: 0, yds: "127 passing yds", status: "Active" }
    ]},
    "Jets": { record: "1-2", rushYds: 277, passYds: 783, oppTD: 7, oppRush: 262, oppPass: 554, players: [
        { name: "Wilson", pos: "WR", td: 2, yds: "163 passing yds", status: "Active" },
        { name: "Sadiq", pos: "TE", td: 1, yds: "143 passing yds", status: "Active" },
        { name: "Hall", pos: "RB", td: 1, yds: "265 total yds", status: "Active" }
    ]},
    "Colts": { record: "1-2", rushYds: 310, passYds: 611, oppTD: 10, oppRush: 424, oppPass: 873, players: [
        { name: "Taylor", pos: "RB", td: 4, yds: "325 total yds", status: "Active" },
        { name: "Warren", pos: "TE", td: 2, yds: "89 passing yds", status: "Active" },
        { name: "Allen", pos: "WR", td: 1, yds: "100 passing yds", status: "Active" },
        { name: "Downs", pos: "WR", td: 0, yds: "186 passing yds", status: "Active" }
    ]},
    "Texans": { record: "0-3", rushYds: 254, passYds: 794, oppTD: 7, oppRush: 260, oppPass: 776, players: [
        { name: "Montgomery", pos: "RB", td: 3, yds: "151 total yds", status: "Active" },
        { name: "Collins", pos: "WR", td: 1, yds: "75 passing yds", status: "Injured" },
        { name: "Marks", pos: "RB", td: 1, yds: "96 total yds", status: "Active" },
        { name: "Hutchinson", pos: "WR", td: 0, yds: "120 passing yds", status: "Active" },
        { name: "Schultz", pos: "TE", td: 0, yds: "205 passing yds", status: "Active" }
    ]},
    "Jaguars": { record: "2-1", rushYds: 358, passYds: 616, oppTD: 3, oppRush: 274, oppPass: 738, players: [
        { name: "Washington", pos: "WR", td: 2, yds: "221 passing yds", status: "Active" },
        { name: "Tuten", pos: "RB", td: 2, yds: "240 total yds", status: "Active" },
        { name: "Rodriquez", pos: "RB", td: 1, yds: "73 rush yds", status: "Active" },
        { name: "Cameron", pos: "WR", td: 2, yds: "32 passing yds", status: "Active" },
        { name: "Meyers", pos: "WR", td: 2, yds: "132 passing yds", status: "Active" },
        { name: "Thomas Jr", pos: "WR", td: 0, yds: "88 passing yds", status: "Active" }
    ]},
    "Patriots": { record: "1-2", rushYds: 328, passYds: 631, oppTD: 6, oppRush: 325, oppPass: 569, players: [
        { name: "Hollins", pos: "WR", td: 0, yds: "156 passing yds", status: "Active" },
        { name: "Henderson", pos: "RB", td: 1, yds: "99 rush yds", status: "Active" },
        { name: "Stevenson", pos: "RB", td: 0, yds: "179 total yds", status: "Active" },
        { name: "Henry", pos: "TE", td: 0, yds: "71 passing yds", status: "Active" },
        { name: "Doubs", pos: "WR", td: 0, yds: "126 passing yds", status: "Active" },
        { name: "Maye", pos: "QB", td: 0, yds: "82 rush yds", status: "Active" }
    ]},
    "Dolphins": { record: "0-3", rushYds: 295, passYds: 627, oppTD: 11, oppRush: 313, oppPass: 693, players: [
        { name: "Archane", pos: "RB", td: 0, yds: "176 total yds", status: "Out (Loppukausi ohi)" },
        { name: "Gordon", pos: "RB", td: 1, yds: "48 rush yds", status: "Active" },
        { name: "Washington", pos: "WR", td: 0, yds: "152 passing yds", status: "Active" }
    ]},
    "Chiefs": { record: "3-0", rushYds: 460, passYds: 812, oppTD: 5, oppRush: 299, oppPass: 551, players: [
        { name: "Walker III", pos: "RB", td: 4, yds: "442 total yds", status: "Active" },
        { name: "Kelce", pos: "TE", td: 2, yds: "231 passing yds", status: "Active" },
        { name: "Worthy", pos: "WR", td: 1, yds: "63 passing yds", status: "Active" },
        { name: "Rice", pos: "WR", td: 1, yds: "190 passing yds", status: "Active" },
        { name: "Mahomes", pos: "QB", td: 1, yds: "41 rush yds", status: "Active" }
    ]},
    "Giants": { record: "2-1", rushYds: 355, passYds: 479, oppTD: 8, oppRush: 313, oppPass: 683, players: [
        { name: "Likely", pos: "WR", td: 2, yds: "124 passing yds", status: "Active" },
        { name: "Skattebo", pos: "RB", td: 1, yds: "236 total yds", status: "Active" },
        { name: "Nabers", pos: "WR", td: 0, yds: "96 passing yds", status: "Active" },
        { name: "Singletary", pos: "WR", td: 1, yds: "47 total yds", status: "Active" }
    ]},
    "Titans": { record: "0-3", rushYds: 271, passYds: 504, oppTD: 5, oppRush: 379, oppPass: 597, players: [
        { name: "Ward", pos: "QB", td: 2, yds: "30 rush yds", status: "Active" },
        { name: "Robinson", pos: "WR", td: 1, yds: "104 passing yds", status: "Active" },
        { name: "Tate", pos: "WR", td: 0, yds: "123 passing yds", status: "Active" },
        { name: "Ayomaoyr", pos: "WR", td: 1, yds: "91 passing yds", status: "Active" },
        { name: "Pollard", pos: "RB", td: 0, yds: "195 total yds", status: "Active" }
    ]},
    "Steelers": { record: "2-1", rushYds: 287, passYds: 700, oppTD: 6, oppRush: 339, oppPass: 633, players: [
        { name: "Warren", pos: "RB", td: 0, yds: "326 total yds", status: "Active" },
        { name: "Metcalf", pos: "WR", td: 1, yds: "98 passing yds", status: "Active" },
        { name: "Freiermuth", pos: "TE", td: 1, yds: "108 passing yds", status: "Active" },
        { name: "Wilson", pos: "WR", td: 1, yds: "114 passing yds", status: "Active" }
    ]},
    "Bengals": { record: "2-1", rushYds: 274, passYds: 743, oppTD: 6, oppRush: 287, oppPass: 861, players: [
        { name: "Brown", pos: "RB", td: 1, yds: "229 total yds", status: "Active" },
        { name: "Higgins", pos: "WR", td: 1, yds: "244 passing yds", status: "Active" },
        { name: "Chase", pos: "WR", td: 3, yds: "185 passing yds", status: "Active" },
        { name: "Gesicki", pos: "TE", td: 2, yds: "115 passing yds", status: "Active" }
    ]},
    "Commanders": { record: "1-2", rushYds: 396, passYds: 554, oppTD: 11, oppRush: 246, oppPass: 875, players: [
        { name: "Diggs", pos: "WR", td: 3, yds: "135 passing yds", status: "Active" },
        { name: "Croskey-Merritt", pos: "RB", td: 1, yds: "142 rush yds", status: "Active" },
        { name: "White", pos: "RB", td: 1, yds: "151 total yds", status: "Active" },
        { name: "McLaurin", pos: "WR", td: 1, yds: "141 passing yds", status: "Active" },
        { name: "Williams", pos: "WR", td: 1, yds: "103 passing yds", status: "Active" }
    ]},
    "Seahawks": { record: "2-1", rushYds: 303, passYds: 828, oppTD: 6, oppRush: 261, oppPass: 456, players: [
        { name: "Smith-Njigba", pos: "WR", td: 6, yds: "405 passing yds", status: "Active" },
        { name: "Kupp", pos: "TE", td: 1, yds: "101 passing yds", status: "Active" },
        { name: "Barner", pos: "TE", td: 0, yds: "90 passing yds", status: "Active" },
        { name: "Shaheed", pos: "WR", td: 0, yds: "53 passing yds", status: "Active" }
    ]},
    "Packers": { record: "1-2", rushYds: 146, passYds: 844, oppTD: 11, oppRush: 416, oppPass: 654, players: [
        { name: "Watson", pos: "WR", td: 4, yds: "284 passing yds", status: "Active" },
        { name: "Golden", pos: "WR", td: 1, yds: "253 passing yds", status: "Active" },
        { name: "Kraft", pos: "TE", td: 0, yds: "106 passing yds", status: "Active" }
    ]},
    "Eagles": { record: "2-0", rushYds: 225, passYds: 467, oppTD: 5, oppRush: 254, oppPass: 586, players: [
        { name: "Barkley", pos: "RB", td: 0, yds: "92 rush yds", status: "Active" },
        { name: "Goedert", pos: "TE", td: 2, yds: "81 passing yds", status: "Active" },
        { name: "Wicks", pos: "WR", td: 1, yds: "147 passing yds", status: "Active" },
        { name: "Smith", pos: "WR", td: 1, yds: "170 passing yds", status: "Active" }
    ]},
    "Bears": { record: "1-1", rushYds: 425, passYds: 461, oppTD: 5, oppRush: 244, oppPass: 504, players: [
        { name: "Swift", pos: "RB", td: 3, yds: "233 total yds", status: "Active" },
        { name: "Williams", pos: "QB", td: 2, yds: "107 rush yds", status: "Active" },
        { name: "Monangai", pos: "RB", td: 1, yds: "182 total yds", status: "Active" },
        { name: "Raymond", pos: "WR", td: 0, yds: "123 passing yds", status: "Active" },
        { name: "Odunze", pos: "WR", td: 0, yds: "95 passing yds", status: "Active" }
    ]},
    "Falcons": { record: "1-2", rushYds: 519, passYds: 544, oppTD: 8, oppRush: 143, oppPass: 820, players: [
        { name: "Bijan Robinson", pos: "RB", td: 3, yds: "467 total yds", status: "Active" },
        { name: "London", pos: "WR", td: 0, yds: "274 passing yds", status: "Active" },
        { name: "Brian Robinson", pos: "RB", td: 1, yds: "132 rush yds", status: "Active" }
    ]}
};

// Täytetään valikot automaattisesti tällä koko tietokannalla
window.addEventListener('DOMContentLoaded', () => {
    const homeSelect = document.getElementById('homeTeamSelect');
    const awaySelect = document.getElementById('awayTeamSelect');
    
    if (homeSelect && awaySelect) {
        const teams = Object.keys(nflFullDatabase).sort();
        teams.forEach(team => {
            homeSelect.add(new Option(team, team));
            awaySelect.add(new Option(team, team));
        });
        // Asetetaan oletukset
        homeSelect.value = "Chiefs";
        awaySelect.value = "Bills";
        runCustomH2H();
    }
});

function runCustomH2H() {
    const homeKey = document.getElementById('homeTeamSelect').value;
    const awayKey = document.getElementById('awayTeamSelect').value;
    
    const home = nflFullDatabase[homeKey];
    const away = nflFullDatabase[awayKey];

    // Pisteiden arvonta sallitusta pistematriisista
    let homeScore = getValidScore();
    let awayScore = getValidScore();
    if (homeScore === awayScore) homeScore += 3;

    // Päivitetään näkymä
    document.getElementById('homeTitle').innerText = `${homeKey} (${home.record})`;
    document.getElementById('awayTitle').innerText = `${awayKey} (${away.record})`;

    document.getElementById('homeStats').innerHTML = `
        🏈 Rush: <strong>${home.rushYds} yds</strong> | Pass: <strong>${home.passYds} yds</strong><br>
        🛡️ Vastustajat tehneet: <strong>${home.oppTD} TD</strong> (Rush: ${home.oppRush} / Pass: ${home.oppPass})
    `;
    document.getElementById('awayStats').innerHTML = `
        🏈 Rush: <strong>${away.rushYds} yds</strong> | Pass: <strong>${away.passYds} yds</strong><br>
        🛡️ Vastustajat tehneet: <strong>${away.oppTD} TD</strong> (Rush: ${away.oppRush} / Pass: ${away.oppPass})
    `;

    document.getElementById('homeScoreNum').innerText = homeScore;
    document.getElementById('awayScoreNum').innerText = awayScore;

    let homeProb = homeScore > awayScore ? Math.floor(58 + Math.random() * 25) : Math.floor(20 + Math.random() * 25);
    document.getElementById('homeWinProb').innerText = `Voitto: ${homeProb}%`;
    document.getElementById('awayWinProb').innerText = `Voitto: ${100 - homeProb}%`;

    // Renderöidään pelaajat
    renderTeamPlayers('homePlayers', home.players, homeScore);
    renderTeamPlayers('awayPlayers', away.players, awayScore);
}

function renderTeamPlayers(containerId, players, teamScore) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    players.forEach(p => {
        let tdProb = 0;
        if (teamScore > 3 && p.status === "Active") {
            tdProb = Math.min(88, Math.max(15, (p.td * 5) + (teamScore * 1.2)));
        }

        const div = document.createElement('div');
        div.className = 'player-row';
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <span>${p.yds} | Maalit: ${p.td} ${p.status !== "Active" ? '⚠️ ' + p.status : ''}</span>
            </div>
            <div class="odd-badge">
                <span>1+ TD</span>
                <strong>${p.status === "Active" ? tdProb + '%' : '0%'}</strong>
            </div>
        `;
        container.appendChild(div);
    });
}
