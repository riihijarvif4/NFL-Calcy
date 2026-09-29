// Kaikkien 32 joukkueen kattavat tilastot (lisätty rec/targets tietoja pelaajille)
const nflDatabase = {
    "Rams": { record: "1-2", games: 3, rush: 401, pass: 885, oppTD: 7, turnovers: 4, sacks: 8, redZonePct: 58, thirdDownPct: 41, penalties: 18, players: [
        { name: "Davante Adams", pos: "WR", td: 2, yds: "358 yds", rec: "24/32 rec" },
        { name: "Williams", pos: "RB", td: 2, yds: "320 total yds", rec: "12/15 rec" },
        { name: "Higbee", pos: "TE", td: 1, yds: "74 yds", rec: "8/11 rec" }
    ]},
    "Broncos": { record: "2-1", games: 3, rush: 243, pass: 605, oppTD: 7, turnovers: 3, sacks: 10, redZonePct: 52, thirdDownPct: 39, penalties: 21, players: [
        { name: "Bryant II", pos: "WR", td: 1, yds: "98 yds", rec: "7/10 rec" },
        { name: "Adkins", pos: "TE", td: 2, yds: "40 yds", rec: "5/7 rec" },
        { name: "Engram", pos: "TE", td: 1, yds: "60 yds", rec: "6/9 rec" }
    ]},
    "Bills": { record: "3-0", games: 3, rush: 465, pass: 786, oppTD: 9, turnovers: 2, sacks: 6, redZonePct: 71, thirdDownPct: 48, penalties: 15, players: [
        { name: "Allen", pos: "QB", td: 6, yds: "114 rush yds", rec: "Passing QB" },
        { name: "Cook", pos: "RB", td: 2, yds: "362 yds", rec: "14/18 rec" },
        { name: "Moore", pos: "WR", td: 1, yds: "167 yds", rec: "11/16 rec" }
    ]},
    "Chargers": { record: "0-3", games: 3, rush: 339, pass: 627, oppTD: 8, turnovers: 6, sacks: 11, redZonePct: 40, thirdDownPct: 32, penalties: 24, players: [
        { name: "Hampton", pos: "RB", td: 2, yds: "193 yds", rec: "10/14 rec" },
        { name: "McConkley", pos: "WR", td: 1, yds: "183 yds", rec: "13/20 rec" }
    ]},
    "Browns": { record: "2-1", games: 3, rush: 263, pass: 587, oppTD: 6, turnovers: 3, sacks: 9, redZonePct: 55, thirdDownPct: 38, penalties: 19, players: [
        { name: "Fannin Jr", pos: "WR", td: 2, yds: "126 yds", rec: "9/13 rec" },
        { name: "Boston", pos: "WR", td: 2, yds: "195 yds", rec: "12/17 rec" },
        { name: "Judkins", pos: "RB", td: 0, yds: "124 yds", rec: "8/10 rec" }
    ]},
    "Panthers": { record: "1-2", games: 3, rush: 291, pass: 939, oppTD: 10, turnovers: 5, sacks: 12, redZonePct: 48, thirdDownPct: 35, penalties: 22, players: [
        { name: "Hubbard", pos: "RB", td: 3, yds: "261 yds", rec: "11/14 rec" },
        { name: "Wallen", pos: "TE", td: 2, yds: "112 yds", rec: "9/12 rec" },
        { name: "Coker", pos: "WR", td: 2, yds: "222 yds", rec: "15/22 rec" }
    ]},
    "Cowboys": { record: "1-2", games: 3, rush: 283, pass: 730, oppTD: 10, turnovers: 5, sacks: 7, redZonePct: 60, thirdDownPct: 42, penalties: 20, players: [
        { name: "Williams", pos: "RB", td: 3, yds: "225 yds", rec: "14/18 rec" },
        { name: "Lamb", pos: "WR", td: 3, yds: "309 yds", rec: "22/31 rec" },
        { name: "Ferguson", pos: "TE", td: 3, yds: "72 yds", rec: "10/13 rec" }
    ]},
    "Ravens": { record: "2-1", games: 3, rush: 502, pass: 745, oppTD: 8, turnovers: 3, sacks: 5, redZonePct: 68, thirdDownPct: 49, penalties: 16, players: [
        { name: "Henry", pos: "RB", td: 6, yds: "339 yds", rec: "5/7 rec" },
        { name: "Flowers", pos: "WR", td: 1, yds: "234 yds", rec: "18/25 rec" },
        { name: "Jackson", pos: "QB", td: 1, yds: "124 yds", rec: "Passing QB" }
    ]},
    "Saints": { record: "1-2", games: 3, rush: 304, pass: 917, oppTD: 10, turnovers: 4, sacks: 8, redZonePct: 53, thirdDownPct: 40, penalties: 18, players: [
        { name: "Johnson", pos: "WR", td: 3, yds: "173 yds", rec: "12/18 rec" },
        { name: "Fant", pos: "TE", td: 3, yds: "66 yds", rec: "7/10 rec" },
        { name: "Olave", pos: "WR", td: 1, yds: "375 yds", rec: "25/35 rec" }
    ]},
    "Raiders": { record: "3-0", games: 3, rush: 300, pass: 661, oppTD: 7, turnovers: 2, sacks: 6, redZonePct: 65, thirdDownPct: 45, penalties: 14, players: [
        { name: "White", pos: "WR", td: 3, yds: "28 yds", rec: "4/6 rec" },
        { name: "Jeanty", pos: "RB", td: 2, yds: "303 yds", rec: "15/19 rec" },
        { name: "Bowers", pos: "TE", td: 1, yds: "116 yds", rec: "11/15 rec" }
    ]},
    "49ers": { record: "3-0", games: 3, rush: 409, pass: 789, oppTD: 5, turnovers: 2, sacks: 4, redZonePct: 70, thirdDownPct: 50, penalties: 12, players: [
        { name: "McCaffrey", pos: "RB", td: 3, yds: "270 yds", rec: "18/22 rec" },
        { name: "Kittle", pos: "TE", td: 3, yds: "174 yds", rec: "14/18 rec" },
        { name: "Samuel", pos: "WR", td: 2, yds: "159 yds", rec: "13/18 rec" }
    ]},
    "Cardinals": { record: "1-2", games: 3, rush: 279, pass: 652, oppTD: 11, turnovers: 5, sacks: 9, redZonePct: 50, thirdDownPct: 37, penalties: 21, players: [
        { name: "Love", pos: "RB", td: 2, yds: "204 yds", rec: "12/16 rec" },
        { name: "McBride", pos: "TE", td: 2, yds: "211 yds", rec: "16/22 rec" },
        { name: "Wilson", pos: "WR", td: 1, yds: "163 yds", rec: "11/17 rec" }
    ]},
    "Buccaneers": { record: "0-3", games: 3, rush: 283, pass: 615, oppTD: 7, turnovers: 6, sacks: 10, redZonePct: 42, thirdDownPct: 34, penalties: 23, players: [
        { name: "Egbuka", pos: "WR", td: 1, yds: "141 yds", rec: "10/15 rec" },
        { name: "Irving", pos: "RB", td: 1, yds: "241 yds", rec: "13/17 rec" },
        { name: "Mayfield", pos: "QB", td: 1, yds: "65 yds", rec: "Passing QB" }
    ]},
    "Vikings": { record: "3-0", games: 3, rush: 304, pass: 462, oppTD: 3, turnovers: 1, sacks: 5, redZonePct: 72, thirdDownPct: 52, penalties: 13, players: [
        { name: "Jefferson", pos: "WR", td: 2, yds: "179 yds", rec: "15/22 rec" },
        { name: "Jones", pos: "RB", td: 1, yds: "237 yds", rec: "14/18 rec" },
        { name: "Hockenson", pos: "TE", td: 1, yds: "76 yds", rec: "8/11 rec" }
    ]},
    "Lions": { record: "2-1", games: 3, rush: 362, pass: 802, oppTD: 13, turnovers: 3, sacks: 6, redZonePct: 75, thirdDownPct: 53, penalties: 15, players: [
        { name: "St. Brown", pos: "WR", td: 5, yds: "228 yds", rec: "20/26 rec" },
        { name: "Gibbs", pos: "RB", td: 6, yds: "463 yds", rec: "16/20 rec" },
        { name: "LaPorta", pos: "TE", td: 1, yds: "144 yds", rec: "12/16 rec" }
    ]},
    "Jets": { record: "1-2", games: 3, rush: 277, pass: 783, oppTD: 7, turnovers: 4, sacks: 8, redZonePct: 54, thirdDownPct: 38, penalties: 19, players: [
        { name: "Wilson", pos: "WR", td: 2, yds: "163 yds", rec: "13/20 rec" },
        { name: "Sadiq", pos: "TE", td: 1, yds: "143 yds", rec: "9/12 rec" },
        { name: "Hall", pos: "RB", td: 1, yds: "265 yds", rec: "15/19 rec" }
    ]},
    "Colts": { record: "1-2", games: 3, rush: 310, pass: 611, oppTD: 10, turnovers: 5, sacks: 9, redZonePct: 51, thirdDownPct: 39, penalties: 20, players: [
        { name: "Taylor", pos: "RB", td: 4, yds: "325 yds", rec: "10/14 rec" },
        { name: "Warren", pos: "TE", td: 2, yds: "89 yds", rec: "7/10 rec" },
        { name: "Allen", pos: "WR", td: 1, yds: "100 yds", rec: "8/13 rec" }
    ]},
    "Texans": { record: "0-3", games: 3, rush: 254, pass: 794, oppTD: 7, turnovers: 6, sacks: 12, redZonePct: 39, thirdDownPct: 31, penalties: 25, players: [
        { name: "Montgomery", pos: "RB", td: 3, yds: "151 yds", rec: "12/16 rec" },
        { name: "Collins", pos: "WR", td: 1, yds: "75 yds", rec: "6/10 rec" },
        { name: "Marks", pos: "RB", td: 1, yds: "96 yds", rec: "9/12 rec" }
    ]},
    "Jaguars": { record: "2-1", games: 3, rush: 358, pass: 616, oppTD: 3, turnovers: 2, sacks: 5, redZonePct: 66, thirdDownPct: 46, penalties: 14, players: [
        { name: "Washington", pos: "WR", td: 2, yds: "221 yds", rec: "15/21 rec" },
        { name: "Tuten", pos: "RB", td: 2, yds: "240 yds", rec: "12/15 rec" },
        { name: "Meyers", pos: "WR", td: 2, yds: "132 yds", rec: "10/14 rec" }
    ]},
    "Patriots": { record: "1-2", games: 3, rush: 328, pass: 631, oppTD: 6, turnovers: 4, sacks: 7, redZonePct: 55, thirdDownPct: 40, penalties: 17, players: [
        { name: "Henderson", pos: "RB", td: 1, yds: "99 yds", rec: "8/11 rec" },
        { name: "Hollins", pos: "WR", td: 0, yds: "156 yds", rec: "11/17 rec" }
    ]},
    "Dolphins": { record: "0-3", games: 3, rush: 295, pass: 627, oppTD: 11, turnovers: 6, sacks: 11, redZonePct: 38, thirdDownPct: 30, penalties: 26, players: [
        { name: "Gordon", pos: "RB", td: 1, yds: "48 yds", rec: "5/8 rec" },
        { name: "Washington", pos: "WR", td: 0, yds: "152 yds", rec: "10/16 rec" }
    ]},
    "Chiefs": { record: "3-0", games: 3, rush: 460, pass: 812, oppTD: 5, turnovers: 2, sacks: 4, redZonePct: 74, thirdDownPct: 51, penalties: 13, players: [
        { name: "Walker III", pos: "RB", td: 4, yds: "442 yds", rec: "14/18 rec" },
        { name: "Kelce", pos: "TE", td: 2, yds: "231 yds", rec: "18/24 rec" },
        { name: "Worthy", pos: "WR", td: 1, yds: "63 yds", rec: "5/9 rec" }
    ]},
    "Giants": { record: "2-1", games: 3, rush: 355, pass: 479, oppTD: 8, turnovers: 3, sacks: 7, redZonePct: 60, thirdDownPct: 42, penalties: 16, players: [
        { name: "Likely", pos: "WR", td: 2, yds: "124 yds", rec: "10/14 rec" },
        { name: "Skattebo", pos: "RB", td: 1, yds: "236 yds", rec: "12/16 rec" },
        { name: "Singletary", pos: "WR", td: 1, yds: "47 yds", rec: "5/8 rec" }
    ]},
    "Titans": { record: "0-3", games: 3, rush: 271, pass: 504, oppTD: 5, turnovers: 5, sacks: 10, redZonePct: 41, thirdDownPct: 33, penalties: 22, players: [
        { name: "Ward", pos: "QB", td: 2, yds: "30 yds", rec: "Passing QB" },
        { name: "Robinson", pos: "WR", td: 1, yds: "104 yds", rec: "8/12 rec" },
        { name: "Ayomaoyr", pos: "WR", td: 1, yds: "91 yds", rec: "7/11 rec" }
    ]},
    "Steelers": { record: "2-1", games: 3, rush: 287, pass: 700, oppTD: 6, turnovers: 3, sacks: 6, redZonePct: 62, thirdDownPct: 44, penalties: 15, players: [
        { name: "Metcalf", pos: "WR", td: 1, yds: "98 yds", rec: "7/12 rec" },
        { name: "Freiermuth", pos: "TE", td: 1, yds: "108 yds", rec: "9/13 rec" },
        { name: "Wilson", pos: "WR", td: 1, yds: "114 yds", rec: "8/14 rec" }
    ]},
    "Bengals": { record: "2-1", games: 3, rush: 274, pass: 743, oppTD: 6, turnovers: 3, sacks: 6, redZonePct: 64, thirdDownPct: 45, penalties: 16, players: [
        { name: "Chase", pos: "WR", td: 3, yds: "185 yds", rec: "16/24 rec" },
        { name: "Gesicki", pos: "TE", td: 2, yds: "115 yds", rec: "10/14 rec" },
        { name: "Brown", pos: "RB", td: 1, yds: "229 yds", rec: "14/18 rec" }
    ]},
    "Commanders": { record: "1-2", games: 3, rush: 396, pass: 554, oppTD: 11, turnovers: 4, sacks: 8, redZonePct: 52, thirdDownPct: 39, penalties: 18, players: [
        { name: "Diggs", pos: "WR", td: 3, yds: "135 yds", rec: "11/16 rec" },
        { name: "Croskey-Merritt", pos: "RB", td: 1, yds: "142 yds", rec: "9/12 rec" },
        { name: "McLaurin", pos: "WR", td: 1, yds: "141 yds", rec: "10/15 rec" }
    ]},
    "Seahawks": { record: "2-1", games: 3, rush: 303, pass: 828, oppTD: 6, turnovers: 3, sacks: 5, redZonePct: 67, thirdDownPct: 47, penalties: 15, players: [
        { name: "Smith-Njigba", pos: "WR", td: 6, yds: "405 yds", rec: "28/38 rec" },
        { name: "Kupp", pos: "TE", td: 1, yds: "101 yds", rec: "9/13 rec" }
    ]},
    "Packers": { record: "1-2", games: 3, rush: 146, pass: 844, oppTD: 11, turnovers: 4, sacks: 7, redZonePct: 56, thirdDownPct: 41, penalties: 17, players: [
        { name: "Watson", pos: "WR", td: 4, yds: "284 yds", rec: "17/25 rec" },
        { name: "Golden", pos: "WR", td: 1, yds: "253 yds", rec: "15/22 rec" }
    ]},
    "Eagles": { record: "2-0", games: 2, rush: 225, pass: 467, oppTD: 5, turnovers: 2, sacks: 4, redZonePct: 71, thirdDownPct: 48, penalties: 13, players: [
        { name: "Goedert", pos: "TE", td: 2, yds: "81 yds", rec: "7/10 rec" },
        { name: "Wicks", pos: "WR", td: 1, yds: "147 yds", rec: "9/13 rec" },
        { name: "Smith", pos: "WR", td: 1, yds: "170 yds", rec: "11/16 rec" }
    ]},
    "Bears": { record: "1-1", games: 2, rush: 425, pass: 461, oppTD: 5, turnovers: 3, sacks: 5, redZonePct: 65, thirdDownPct: 44, penalties: 15, players: [
        { name: "Swift", pos: "RB", td: 3, yds: "233 yds", rec: "12/15 rec" },
        { name: "Williams", pos: "QB", td: 2, yds: "107 yds", rec: "Passing QB" },
        { name: "Monangai", pos: "RB", td: 1, yds: "182 yds", rec: "8/11 rec" }
    ]},
    "Falcons": { record: "1-2", games: 3, rush: 519, pass: 544, oppTD: 8, turnovers: 3, sacks: 6, redZonePct: 63, thirdDownPct: 43, penalties: 16, players: [
        { name: "Bijan Robinson", pos: "RB", td: 3, yds: "467 yds", rec: "18/24 rec" },
        { name: "Brian Robinson", pos: "RB", td: 1, yds: "132 yds", rec: "9/13 rec" }
    ]}
};

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

function findTeamKey(teamName) {
    if (teamName.includes("49ers")) return "49ers";
    return Object.keys(nflDatabase).find(k => teamName.includes(k)) || "Chiefs";
}

function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect').value;
    const matchIndex = document.getElementById('matchSelect').value;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const homeData = nflDatabase[homeKey];
    const awayData = nflDatabase[awayKey];

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    function simulateAdvancedScore(team, opp) {
        let totalYds = team.rush + team.pass;
        let basePower = (totalYds / (team.games * 350)) * (team.redZonePct / 60) * (team.thirdDownPct / 40);
        
        let penaltiesDeduction = (team.penalties * 0.005) + (opp.sacks * 0.01) + (opp.turnovers * 0.02);
        let netFactor = Math.max(0.5, basePower - penaltiesDeduction);

        let index = Math.floor(Math.random() * VALID_SCORES.length);
        if (netFactor > 1.25 && index < VALID_SCORES.length - 4) index += 3;
        else if (netFactor > 1.1 && index < VALID_SCORES.length - 2) index += 2;
        else if (netFactor < 0.8 && index > 3) index -= 2;

        return VALID_SCORES[Math.max(0, Math.min(VALID_SCORES.length - 1, index))];
    }

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let hScore = simulateAdvancedScore(homeData, awayData);
        let aScore = simulateAdvancedScore(awayData, homeData);
        
        if (hScore === aScore) {
            hScore += Math.random() > 0.5 ? 3 : 0;
        }

        homeScoreSum += hScore;
        awayScoreSum += aScore;

        if (hScore > aScore) homeWins++;
    }

    let avgHomeScore = Math.round((homeScoreSum / SIM_ITERATIONS) / 3) * 3;
    let avgAwayScore = Math.round((awayScoreSum / SIM_ITERATIONS) / 3) * 3;

    if (!VALID_SCORES.includes(avgHomeScore)) avgHomeScore = 24;
    if (!VALID_SCORES.includes(avgAwayScore)) avgAwayScore = 17;
    if (avgHomeScore === avgAwayScore) avgHomeScore += 3;

    let homeWinProb = Math.round((homeWins / SIM_ITERATIONS) * 100);
    let awayWinProb = 100 - homeWinProb;

    const homePassPG = Math.round(homeData.pass / homeData.games);
    const homeRushPG = Math.round(homeData.rush / homeData.games);
    const awayPassPG = Math.round(awayData.pass / awayData.games);
    const awayRushPG = Math.round(awayData.rush / awayData.games);

    document.getElementById('homeTitle').innerText = `${match.home} (${homeData.record})`;
    document.getElementById('awayTitle').innerText = `${match.away} (${awayData.record})`;

    document.getElementById('homeStats').innerHTML = `
        📊 <strong>Tilastot (Per Game):</strong><br>
        • Heittojaardit (Pass): <strong>${homePassPG} yds/peli</strong><br>
        • Juoksujaardit (Rush): <strong>${homeRushPG} yds/peli</strong><br>
        • Red Zone: ${homeData.redZonePct}% | 3rd Down: ${homeData.thirdDownPct}%<br>
        • Turnovers: ${homeData.turnovers} | Sacks: ${homeData.sacks} | Pens: ${homeData.penalties}
    `;
    document.getElementById('awayStats').innerHTML = `
        📊 <strong>Tilastot (Per Game):</strong><br>
        • Heittojaardit (Pass): <strong>${awayPassPG} yds/peli</strong><br>
        • Juoksujaardit (Rush): <strong>${awayRushPG} yds/peli</strong><br>
        • Red Zone: ${awayData.redZonePct}% | 3rd Down: ${awayData.thirdDownPct}%<br>
        • Turnovers: ${awayData.turnovers} | Sacks: ${awayData.sacks} | Pens: ${awayData.penalties}
    `;

    document.getElementById('homeScoreNum').innerText = avgHomeScore;
    document.getElementById('awayScoreNum').innerText = avgAwayScore;

    document.getElementById('homeWinProb').innerText = `${homeKey}: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `${awayKey}: ${awayWinProb}%`;
    document.getElementById('probBar').style.width = `${homeWinProb}%`;

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
        // Näytetään nyt myös vastaanotot/targetit (p.rec) selvästi pelaajakortissa
        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong>
                <span>${p.yds} | Vastaanotot: <strong>${p.rec}</strong> | TD: ${p.td}</span>
            </div>
            <div class="odd-badge">
                <span>1+ TD</span>
                <strong>${tdProbPercent}%</strong>
            </div>
        `;
        container.appendChild(div);
    });
}
