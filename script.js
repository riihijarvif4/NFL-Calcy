const nflTeams = {
    "Rams": { record: "1-2", form: ["H", "V", "H"], rushYards: 401, passYards: 885, oppTd: 7, oppRush: 304, oppPass: 522, players: [
        { name: "Davante Adams", pos: "WR", td: 2, yards: 358, rec: 18 },
        { name: "Williams", pos: "RB", td: 2, yards: 320, rec: 11 },
        { name: "Higbee", pos: "TE", td: 1, yards: 74, rec: 10 },
        { name: "Mumpfield", pos: "WR", td: 1, yards: 105, rec: 5 },
        { name: "Ferguson", pos: "TE", td: 1, yards: 63, rec: 7 },
        { name: "Corum", pos: "2nd RB", td: 0, yards: 148, rec: 0 },
        { name: "Puca Nacua", pos: "WR", td: 0, yards: 0, rec: 5, status: "lasassa+" }
    ]},
    "Broncos": { record: "2-1", form: ["V", "V", "H"], rushYards: 243, passYards: 605, oppTd: 7, oppRush: 431, oppPass: 763, players: [
        { name: "Harvey", pos: "RB", td: 0, yards: 88, rec: 10 },
        { name: "Bryant II", pos: "WR", td: 1, yards: 98, rec: 6 },
        { name: "Dobbins", pos: "2nd RB", td: 0, yards: 121, rec: 0 },
        { name: "Waddle", pos: "WR", td: 0, yards: 150, rec: 11 },
        { name: "Adkins", pos: "TE", td: 2, yards: 40, rec: 4 },
        { name: "Engram", pos: "TE", td: 1, yards: 60, rec: 5 }
    ]},
    "Bills": { record: "3-0", form: ["V", "V", "V"], rushYards: 465, passYards: 786, oppTd: 9, oppRush: 321, oppPass: 827, players: [
        { name: "Allen", pos: "QB", td: 6, yards: 114, rec: 0 },
        { name: "Cook", pos: "RB", td: 2, yards: 362, rec: 0 },
        { name: "Moore", pos: "WR", td: 1, yards: 167, rec: 11 },
        { name: "Kincaid", pos: "TE", td: 1, yards: 263, rec: 14 },
        { name: "Coleman", pos: "WR", td: 0, yards: 101, rec: 8 }
    ]},
    "Chargers": { record: "0-3", form: ["H", "H", "H"], rushYards: 339, passYards: 627, oppTd: 8, oppRush: 349, oppPass: 734, players: [
        { name: "Hampton", pos: "RB", td: 2, yards: 193, rec: 0 },
        { name: "McConkley", pos: "WR", td: 1, yards: 183, rec: 12 },
        { name: "Harris", pos: "WR", td: 0, yards: 149, rec: 10 }
    ]},
    "Browns": { record: "2-1", form: ["V", "V", "H"], rushYards: 263, passYards: 587, oppTd: 6, oppRush: 361, oppPass: 718, players: [
        { name: "Fannin Jr", pos: "WR", td: 2, yards: 126, rec: 14 },
        { name: "Boston", pos: "WR", td: 2, yards: 195, rec: 9 },
        { name: "Judkins", pos: "RB", td: 0, yards: 124, rec: 0 }
    ]},
    "Panthers": { record: "1-2", form: ["H", "V", "H"], rushYards: 291, passYards: 939, oppTd: 10, oppRush: 580, oppPass: 558, players: [
        { name: "Hubbard", pos: "RB", td: 3, yards: 261, rec: 9 },
        { name: "Wallen", pos: "TE", td: 2, yards: 112, rec: 10 },
        { name: "Coker", pos: "WR", td: 2, yards: 222, rec: 18 },
        { name: "McMillan", pos: "WR", td: 0, yards: 193, rec: 12 }
    ]},
    "Cowboys": { record: "1-2", form: ["H", "V", "H"], rushYards: 283, passYards: 730, oppTd: 10, oppRush: 539, oppPass: 623, players: [
        { name: "Williams", pos: "RB", td: 3, yards: 225, rec: 10 },
        { name: "Lamb", pos: "WR", td: 3, yards: 309, rec: 20 },
        { name: "Ferguson", pos: "TE", td: 3, yards: 72, rec: 9 },
        { name: "Pickens", pos: "WR", td: 0, yards: 150, rec: 16 },
        { name: "Turpin", pos: "2nd RB", td: 1, yards: 27, rec: 2 }
    ]},
    "Ravens": { record: "2-1", form: ["V", "H", "V"], rushYards: 502, passYards: 745, oppTd: 8, oppRush: 315, oppPass: 694, players: [
        { name: "Henry", pos: "RB", td: 6, yards: 339, rec: 5 },
        { name: "Flowers", pos: "WR", td: 1, yards: 234, rec: 10 },
        { name: "Jackson", pos: "QB", td: 1, yards: 124, rec: 0 },
        { name: "Bateman", pos: "WR", td: 1, yards: 125, rec: 9 },
        { name: "Moore", pos: "WR", td: 1, yards: 63, rec: 3 },
        { name: "Andrews", pos: "TE", td: 0, yards: 122, rec: 13 }
    ]},
    "Saints": { record: "1-2", form: ["H", "V", "H"], rushYards: 304, passYards: 917, oppTd: 10, oppRush: 386, oppPass: 689, players: [
        { name: "Johnson", pos: "WR", td: 3, yards: 173, rec: 15 },
        { name: "Fant", pos: "TE", td: 3, yards: 66, rec: 8 },
        { name: "Olave", pos: "WR", td: 1, yards: 375, rec: 27 },
        { name: "Shough", pos: "QB", td: 1, yards: 67, rec: 0 },
        { name: "Etienne", pos: "RB", td: 0, yards: 179, rec: 11 },
        { name: "Vele", pos: "WR", td: 1, yards: 172, rec: 15 }
    ]},
    "Raiders": { record: "3-0", form: ["V", "V", "V"], rushYards: 300, passYards: 661, oppTd: 7, oppRush: 349, oppPass: 667, players: [
        { name: "Bowers", pos: "TE", td: 1, yards: 116, rec: 10 },
        { name: "White", pos: "WR", td: 3, yards: 28, rec: 3 },
        { name: "Jeanty", pos: "RB", td: 2, yards: 303, rec: 13 },
        { name: "Mayer", pos: "TE", td: 1, yards: 87, rec: 12 },
        { name: "Tucker", pos: "WR", td: 1, yards: 187, rec: 11 }
    ]},
    "49ers": { record: "3-0", form: ["V", "V", "V"], rushYards: 409, passYards: 789, oppTd: 5, oppRush: 317, oppPass: 645, players: [
        { name: "McCaffrey", pos: "RB", td: 3, yards: 270, rec: 13 },
        { name: "Kittle", pos: "TE", td: 3, yards: 174, rec: 12 },
        { name: "Evans", pos: "WR", td: 2, yards: 137, rec: 12, status: "lasassa+" },
        { name: "Samuel", pos: "WR", td: 2, yards: 159, rec: 9 },
        { name: "Robinson", pos: "WR", td: 1, yards: 84, rec: 5, status: "lasassa+" },
        { name: "Purdy", pos: "QB", td: 1, yards: 93, rec: 0 }
    ]},
    "Cardinals": { record: "1-2", form: ["H", "H", "V"], rushYards: 279, passYards: 652, oppTd: 11, oppRush: 383, oppPass: 741, players: [
        { name: "Love", pos: "RB", td: 2, yards: 204, rec: 10 },
        { name: "McBride", pos: "TE", td: 2, yards: 211, rec: 26 },
        { name: "Wilson", pos: "WR", td: 1, yards: 163, rec: 18 },
        { name: "Bourne", pos: "WR", td: 0, yards: 108, rec: 10 },
        { name: "Harrison Jr", pos: "WR", td: 0, yards: 73, rec: 4 }
    ]},
    "Buccaneers": { record: "0-3", form: ["H", "H", "H"], rushYards: 283, passYards: 615, oppTd: 7, oppRush: 228, oppPass: 660, players: [
        { name: "Egbuka", pos: "WR", td: 1, yards: 141, rec: 13 },
        { name: "Irving", pos: "RB", td: 1, yards: 241, rec: 13 },
        { name: "Mayfield", pos: "QB", td: 1, yards: 65, rec: 0 },
        { name: "Godwin Jr", pos: "WR", td: 0, yards: 111, rec: 10 },
        { name: "Otton", pos: "TE", td: 0, yards: 120, rec: 11 }
    ]},
    "Vikings": { record: "3-0", form: ["V", "V", "V"], rushYards: 304, passYards: 462, oppTd: 3, oppRush: 257, oppPass: 796, players: [
        { name: "Jefferson", pos: "WR", td: 2, yards: 179, rec: 13 },
        { name: "Jones", pos: "RB", td: 1, yards: 237, rec: 5 },
        { name: "Hockenson", pos: "TE", td: 1, yards: 76, rec: 9 },
        { name: "Addison", pos: "WR", td: 1, yards: 111, rec: 7 }
    ]},
    "Lions": { record: "2-1", form: ["V", "H", "V"], rushYards: 362, passYards: 802, oppTd: 13, oppRush: 352, oppPass: 979, players: [
        { name: "St. Brown", pos: "WR", td: 5, yards: 228, rec: 23 },
        { name: "Gibbs", pos: "RB", td: 6, yards: 463, rec: 18 },
        { name: "LaPorta", pos: "TE", td: 1, yards: 144, rec: 14 },
        { name: "Williams", pos: "WR", td: 0, yards: 127, rec: 10 }
    ]},
    "Jets": { record: "1-2", form: ["H", "H", "V"], rushYards: 277, passYards: 783, oppTd: 7, oppRush: 262, oppPass: 554, players: [
        { name: "Wilson", pos: "WR", td: 2, yards: 163, rec: 21 },
        { name: "Sadiq", pos: "TE", td: 1, yards: 143, rec: 12 },
        { name: "Hall", pos: "RB", td: 1, yards: 265, rec: 10 }
    ]},
    "Colts": { record: "1-2", form: ["V", "H", "H"], rushYards: 310, passYards: 611, oppTd: 10, oppRush: 424, oppPass: 873, players: [
        { name: "Taylor", pos: "RB", td: 4, yards: 325, rec: 9 },
        { name: "Warren", pos: "TE", td: 2, yards: 89, rec: 18 },
        { name: "Allen", pos: "WR", td: 1, yards: 100, rec: 13 },
        { name: "Downs", pos: "WR", td: 0, yards: 186, rec: 14 }
    ]},
    "Texans": { record: "0-3", form: ["H", "H", "H"], rushYards: 254, passYards: 794, oppTd: 7, oppRush: 260, oppPass: 776, players: [
        { name: "Montgomery", pos: "RB", td: 3, yards: 151, rec: 7 },
        { name: "Collins", pos: "WR", td: 1, yards: 75, rec: 7, status: "lasassa+" },
        { name: "Marks", pos: "2nd RB", td: 1, yards: 96, rec: 7 },
        { name: "Hutchinson", pos: "WR", td: 0, yards: 120, rec: 9 },
        { name: "Schultz", pos: "TE", td: 0, yards: 205, rec: 19 }
    ]},
    "Jaguars": { record: "2-1", form: ["V", "H", "V"], rushYards: 358, passYards: 616, oppTd: 3, oppRush: 274, oppPass: 738, players: [
        { name: "Washington", pos: "WR", td: 2, yards: 221, rec: 15 },
        { name: "Tuten", pos: "RB", td: 2, yards: 240, rec: 5 },
        { name: "Rodriguez", pos: "2nd RB", td: 1, yards: 73, rec: 0 },
        { name: "Cameron", pos: "WR", td: 2, yards: 32, rec: 3 },
        { name: "Meyers", pos: "WR", td: 2, yards: 132, rec: 10 },
        { name: "Thomas Jr", pos: "WR", td: 0, yards: 88, rec: 7 }
    ]},
    "Patriots": { record: "1-2", form: ["H", "V", "H"], rushYards: 328, passYards: 631, oppTd: 6, oppRush: 325, oppPass: 569, players: [
        { name: "Hollins", pos: "WR", td: 0, yards: 156, rec: 12 },
        { name: "Henderson", pos: "2nd RB", td: 1, yards: 99, rec: 0 },
        { name: "Stevenson", pos: "RB", td: 0, yards: 179, rec: 9 },
        { name: "Henry", pos: "TE", td: 0, yards: 71, rec: 7 },
        { name: "Doubs", pos: "WR", td: 0, yards: 126, rec: 6 },
        { name: "Maye", pos: "QB", td: 0, yards: 82, rec: 0 }
    ]},
    "Dolphins": { record: "0-3", form: ["H", "H", "H"], rushYards: 295, passYards: 627, oppTd: 11, oppRush: 313, oppPass: 693, players: [
        { name: "Archane", pos: "RB", td: 0, yards: 176, rec: 11, status: "loppukausi ohi+++" },
        { name: "Gordon", pos: "2nd RB", td: 1, yards: 48, rec: 0 },
        { name: "Washington", pos: "WR", td: 0, yards: 152, rec: 12 }
    ]},
    "Chiefs": { record: "3-0", form: ["V", "V", "V"], rushYards: 460, passYards: 812, oppTd: 5, oppRush: 299, oppPass: 551, players: [
        { name: "Walker III", pos: "RB", td: 4, yards: 442, rec: 11 },
        { name: "Kelce", pos: "TE", td: 2, yards: 231, rec: 14 },
        { name: "Worthy", pos: "WR", td: 1, yards: 63, rec: 10 },
        { name: "Rice", pos: "WR", td: 1, yards: 190, rec: 13 },
        { name: "Mahomes", pos: "QB", td: 1, yards: 41, rec: 0 }
    ]},
    "Giants": { record: "2-1", form: ["V", "H", "V"], rushYards: 355, passYards: 479, oppTd: 8, oppRush: 313, oppPass: 683, players: [
        { name: "Likely", pos: "WR", td: 2, yards: 124, rec: 15 },
        { name: "Skattebo", pos: "RB", td: 1, yards: 236, rec: 7 },
        { name: "Nabers", pos: "WR", td: 0, yards: 96, rec: 12 },
        { name: "Singletary", pos: "WR", td: 1, yards: 47, rec: 4 }
    ]},
    "Titans": { record: "0-3", form: ["H", "H", "H"], rushYards: 271, passYards: 504, oppTd: 5, oppRush: 379, oppPass: 597, players: [
        { name: "Ward", pos: "QB", td: 2, yards: 30, rec: 0 },
        { name: "Robinson", pos: "WR", td: 1, yards: 104, rec: 13 },
        { name: "Tate", pos: "WR", td: 0, yards: 123, rec: 13 },
        { name: "Ayomaoyr", pos: "WR", td: 1, yards: 91, rec: 4 },
        { name: "Pollard", pos: "RB", td: 0, yards: 195, rec: 3 }
    ]},
    "Steelers": { record: "2-1", form: ["V", "H", "V"], rushYards: 287, passYards: 700, oppTd: 6, oppRush: 339, oppPass: 633, players: [
        { name: "Warren", pos: "RB", td: 0, yards: 326, rec: 10 },
        { name: "Metcalf", pos: "WR", td: 1, yards: 98, rec: 11 },
        { name: "Freiermuth", pos: "TE", td: 1, yards: 108, rec: 11 },
        { name: "Wilson", pos: "WR", td: 1, yards: 114, rec: 11 }
    ]},
    "Bengals": { record: "2-1", form: ["H", "V", "V"], rushYards: 274, passYards: 743, oppTd: 6, oppRush: 287, oppPass: 861, players: [
        { name: "Brown", pos: "RB", td: 1, yards: 229, rec: 10 },
        { name: "Higgins", pos: "WR", td: 1, yards: 244, rec: 14 },
        { name: "Chase", pos: "WR", td: 3, yards: 185, rec: 18 },
        { name: "Gesicki", pos: "TE", td: 2, yards: 115, rec: 8 },
        { name: "Meyers", pos: "WR/RB", td: 0, yards: 57, rec: 4 }
    ]},
    "Commanders": { record: "1-2", form: ["V", "H", "H"], rushYards: 396, passYards: 554, oppTd: 11, oppRush: 246, oppPass: 875, players: [
        { name: "Diggs", pos: "WR", td: 3, yards: 135, rec: 13 },
        { name: "Croskey-Merritt", pos: "RB", td: 1, yards: 142, rec: 0 },
        { name: "White", pos: "RB", td: 1, yards: 151, rec: 9 },
        { name: "McLaurin", pos: "WR", td: 1, yards: 141, rec: 10 },
        { name: "Williams", pos: "WR", td: 1, yards: 103, rec: 9 }
    ]},
    "Seahawks": { record: "2-1", form: ["H", "V", "V"], rushYards: 303, passYards: 828, oppTd: 6, oppRush: 261, oppPass: 456, players: [
        { name: "Smith-Njigba", pos: "WR", td: 6, yards: 405, rec: 27 },
        { name: "Kupp", pos: "TE", td: 1, yards: 101, rec: 8 },
        { name: "Barner", pos: "TE", td: 0, yards: 90, rec: 8 },
        { name: "Shaheed", pos: "WR", td: 0, yards: 53, rec: 6 }
    ]},
    "Packers": { record: "1-2", form: ["H", "V", "H"], rushYards: 146, passYards: 844, oppTd: 11, oppRush: 416, oppPass: 654, players: [
        { name: "Watson", pos: "WR", td: 4, yards: 284, rec: 17 },
        { name: "Golden", pos: "WR", td: 1, yards: 253, rec: 15 },
        { name: "Kraft", pos: "TE", td: 0, yards: 106, rec: 9 }
    ]},
    "Eagles": { record: "2-0", form: ["V", "V"], rushYards: 225, passYards: 467, oppTd: 5, oppRush: 254, oppPass: 586, players: [
        { name: "Barkley", pos: "RB", td: 0, yards: 92, rec: 0 },
        { name: "Goedert", pos: "TE", td: 2, yards: 81, rec: 5 },
        { name: "Wicks", pos: "WR", td: 1, yards: 147, rec: 7 },
        { name: "Smith", pos: "WR", td: 1, yards: 170, rec: 13 }
    ]},
    "Bears": { record: "1-1", form: ["H", "V"], rushYards: 425, passYards: 461, oppTd: 5, oppRush: 244, oppPass: 504, players: [
        { name: "Swift", pos: "RB", td: 3, yards: 233, rec: 6 },
        { name: "Williams", pos: "QB", td: 2, yards: 107, rec: 0 },
        { name: "Monangai", pos: "2nd RB", td: 1, yards: 182, rec: 4 },
        { name: "Raymond", pos: "WR", td: 0, yards: 123, rec: 13 },
        { name: "Burden III", pos: "WR", td: 0, yards: 95, rec: 8 },
        { name: "Odunze", pos: "WR", td: 0, yards: 95, rec: 5 }
    ]},
    "Falcons": { record: "1-2", form: ["V", "H", "H"], rushYards: 519, passYards: 544, oppTd: 8, oppRush: 143, oppPass: 820, players: [
        { name: "Bijan Robinson", pos: "RB", td: 3, yards: 467, rec: 13 },
        { name: "London", pos: "WR", td: 0, yards: 274, rec: 15 },
        { name: "Brian Robinson", pos: "2nd RB", td: 1, yards: 132, rec: 0 }
    ]}
};

const memeQuotes = [
    "Opta-tekoäly ylikuumeni: Tom Brady bongattu katsomosta syömästä poppareita.",
    "Monte Carlo -simulaatio pyörähti 10 000 kertaa ja tulos on silti arpapeliä!",
    "Puolustuslinja petti pahemmin kuin sun viime viikon fantasy-kapteeni.",
    "Tieteellisesti täydellinen malli... kunnes joku fumblee maaliviivalla 🏈🤡"
];

window.addEventListener('DOMContentLoaded', () => {
    const homeSelect = document.getElementById('homeTeam');
    const awaySelect = document.getElementById('awayTeam');
    const configContainer = document.getElementById('teamConfigs');

    const teamNames = Object.keys(nflTeams).sort();

    teamNames.forEach(team => {
        homeSelect.innerHTML += `<option value="${team}">${team} (${nflTeams[team].record})</option>`;
        awaySelect.innerHTML += `<option value="${team}">${team} (${nflTeams[team].record})</option>`;
    });

    if (teamNames.length > 1) awaySelect.selectedIndex = 1;

    function renderConfigs() {
        const home = homeSelect.value;
        const away = awaySelect.value;

        configContainer.innerHTML = `
            <div class="team-box">
                <h3>🏠 Kotijoukkue: ${home} (Juoksu: ${nflTeams[home].rushYards}y | Syöttö: ${nflTeams[home].passYards}y)</h3>
                <p>Poista loukkaantuneet avainpelaajat (Vaikuttaa Opta-kertoimiin):</p>
                <div id="home-players"></div>
            </div>
            <div class="team-box">
                <h3>✈️ Vierasjoukkue: ${away} (Juoksu: ${nflTeams[away].rushYards}y | Syöttö: ${nflTeams[away].passYards}y)</h3>
                <p>Poista loukkaantuneet avainpelaajat (Vaikuttaa Opta-kertoimiin):</p>
                <div id="away-players"></div>
            </div>
        `;

        renderPlayerCheckboxes(home, 'home-players', 'home');
        renderPlayerCheckboxes(away, 'away-players', 'away');
    }

    function renderPlayerCheckboxes(teamName, containerId, prefix) {
        const container = document.getElementById(containerId);
        nflTeams[teamName].players.forEach((p, idx) => {
            const isActive = !(p.status === "lasassa+" || p.status === "loppukausi ohi+++");
            container.innerHTML += `
                <div class="player-row">
                    <label style="margin:0; color:#fff; cursor:pointer; display:flex; align-items:center;">
                        <input type="checkbox" id="${prefix}_p_${idx}" ${isActive ? 'checked' : ''} onchange="togglePlayer('${prefix}', ${idx})">
                        <span><strong>${p.name}</strong> (${p.pos}) – TD: ${p.td} | Yards: ${p.yards} | Rec: ${p.rec}</span>
                    </label>
                </div>
            `;
        });
    }

    homeSelect.addEventListener('change', renderConfigs);
    awaySelect.addEventListener('change', renderConfigs);
    renderConfigs();

    document.getElementById('calcBtn').addEventListener('click', calculateOptaMatch);
});

window.disabledPlayers = { home: {}, away: {} };

window.togglePlayer = function(prefix, idx) {
    const cb = document.getElementById(`${prefix}_p_${idx}`);
    window.disabledPlayers[prefix][idx] = !cb.checked;
};

// Edistynyt Opta / Poisson -laskentamoottori
function calculateOptaMatch() {
    const home = document.getElementById('homeTeam').value;
    const away = document.getElementById('awayTeam').value;
    const resultsDiv = document.getElementById('results');

    // 1. Lasketaan Opta-tehoarvot (Hyökkäysjaardit ja aktiivisten pelaajien panos)
    const homeLambda = computeTeamLambda(home, 'home', true);
    const awayLambda = computeTeamLambda(away, 'away', false);

    // 2. Muunnetaan lambaodat odotetuiksi pisteiksi (Poisson-pohjainen odotus)
    const homeScore = Math.max(3, Math.round(homeLambda * 3.5 + 10));
    const awayScore = Math.max(3, Math.round(awayLambda * 3.5 + 7));

    // 3. Lasketaan voittotodennäköisyydet Monte Carlo -tyylisesti
    const homeWinProb = Math.min(92, Math.max(8, Math.round(50 + (homeLambda - awayLambda) * 12 + 4)));
    const awayWinProb = 100 - homeWinProb;

    const randomMeme = memeQuotes[Math.floor(Math.random() * memeQuotes.length)];

    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <h2>🏆 OPTA AI - OTTELUSIMULAATIO 🤖</h2>
        <h3 style="color: #ffeb3b; text-align:center; font-size: 1.6rem; margin: 5px 0;">${home} vs ${away}</h3>
        <p style="text-align:center; font-size: 2.3rem; font-weight:bold; color: #00f0ff; margin: 10px 0;">${homeScore} - ${awayScore}</p>
        
        <div class="opta-stats">
            <p><strong>📊 Voittotodennäköisyydet:</strong> ${home} <strong>${homeWinProb}%</strong> – ${away} <strong>${awayWinProb}%</strong></p>
            <p><strong>🏠 Kotiedun kerroin:</strong> +4.2% odotusarvoon</p>
            <p><strong>🧠 Opta-analyysi:</strong> <em>"${randomMeme}"</em></p>
        </div>

        <h4 style="color: #ff80ab; margin-top: 15px;">🔥 Parhaat TD-maaliodotukset (Aktiiviset pelaajat):</h4>
        <p><strong>🏠 ${home}:</strong> ${getOptaScorers(home, 'home')}</p>
        <p><strong>✈️ ${away}:</strong> ${getOptaScorers(away, 'away')}</p>
    `;
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function computeTeamLambda(teamName, prefix, isHome) {
    const team = nflTeams[teamName];
    let baseYards = (team.rushYards + team.passYards) / 300;
    
    let activePlayerPower = 0;
    team.players.forEach((p, idx) => {
        if (!window.disabledPlayers[prefix][idx]) {
            // Pelaajan painoarvo perustuu maaleihin ja jaardeihin
            activePlayerPower += (p.td * 0.8) + (p.yards / 150);
        }
    });

    let homeBonus = isHome ? 1.15 : 1.0; // Kotietukerroin
    return (baseYards * 0.4 + activePlayerPower * 0.6) * homeBonus;
}

function getOptaScorers(teamName, prefix) {
    let team = nflTeams[teamName];
    let active = team.players.filter((p, idx) => !window.disabledPlayers[prefix][idx]);
    if (active.length === 0) return "Kaikki tähdet lasaretissa, hyökkäys täyttä kaaosta! 🏈💥";
    
    // Lasketaan Opta-todennäköisyysprosentti pelaajalle
    active.sort((a, b) => (b.td * 10 + b.yards) - (a.td * 10 + a.yards));
    return active.slice(0, 3).map(p => {
        let prob = Math.min(95, Math.max(15, Math.round((p.td + 1) * 18 + (p.yards / 20))));
        return `${p.name} (${p.pos}): <strong>${prob}% todennäköisyys TD</strong> (${p.yards} yds)`;
    }).join(" | ");
}
