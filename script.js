const nflTeams = {
    "Rams": { record: "1-2", rushYards: 401, passYards: 885, defRushAllowed: 304, defPassAllowed: 522, players: [
        { name: "Davante Adams", pos: "WR", td: 2, yards: 358 },
        { name: "Williams", pos: "RB", td: 2, yards: 320 },
        { name: "Higbee", pos: "TE", td: 1, yards: 74 },
        { name: "Mumpfield", pos: "WR", td: 1, yards: 105 },
        { name: "Ferguson", pos: "TE", td: 1, yards: 63 }
    ]},
    "Broncos": { record: "2-1", rushYards: 243, passYards: 605, defRushAllowed: 431, defPassAllowed: 763, players: [
        { name: "Harvey", pos: "RB", td: 0, yards: 88 },
        { name: "Bryant II", pos: "WR", td: 1, yards: 98 },
        { name: "Waddle", pos: "WR", td: 0, yards: 150 },
        { name: "Adkins", pos: "TE", td: 2, yards: 40 },
        { name: "Engram", pos: "TE", td: 1, yards: 60 }
    ]},
    "Bills": { record: "3-0", rushYards: 465, passYards: 786, defRushAllowed: 321, defPassAllowed: 827, players: [
        { name: "Allen", pos: "QB", td: 6, yards: 114 },
        { name: "Cook", pos: "RB", td: 2, yards: 362 },
        { name: "Moore", pos: "WR", td: 1, yards: 167 },
        { name: "Kincaid", pos: "TE", td: 1, yards: 263 }
    ]},
    "Chargers": { record: "0-3", rushYards: 339, passYards: 627, defRushAllowed: 349, defPassAllowed: 734, players: [
        { name: "Hampton", pos: "RB", td: 2, yards: 193 },
        { name: "McConkley", pos: "WR", td: 1, yards: 183 },
        { name: "Harris", pos: "WR", td: 0, yards: 149 }
    ]},
    "Browns": { record: "2-1", rushYards: 263, passYards: 587, defRushAllowed: 361, defPassAllowed: 718, players: [
        { name: "Fannin Jr", pos: "WR", td: 2, yards: 126 },
        { name: "Boston", pos: "WR", td: 2, yards: 195 },
        { name: "Judkins", pos: "RB", td: 0, yards: 124 }
    ]},
    "Panthers": { record: "1-2", rushYards: 291, passYards: 939, defRushAllowed: 580, defPassAllowed: 558, players: [
        { name: "Hubbard", pos: "RB", td: 3, yards: 261 },
        { name: "Wallen", pos: "TE", td: 2, yards: 112 },
        { name: "Coker", pos: "WR", td: 2, yards: 222 }
    ]},
    "Cowboys": { record: "1-2", rushYards: 283, passYards: 730, defRushAllowed: 539, defPassAllowed: 623, players: [
        { name: "Williams", pos: "RB", td: 3, yards: 225 },
        { name: "Lamb", pos: "WR", td: 3, yards: 309 },
        { name: "Ferguson", pos: "TE", td: 3, yards: 72 }
    ]},
    "Ravens": { record: "2-1", rushYards: 502, passYards: 745, defRushAllowed: 315, defPassAllowed: 694, players: [
        { name: "Henry", pos: "RB", td: 6, yards: 339 },
        { name: "Flowers", pos: "WR", td: 1, yards: 234 },
        { name: "Jackson", pos: "QB", td: 1, yards: 124 }
    ]},
    "Saints": { record: "1-2", rushYards: 304, passYards: 917, defRushAllowed: 386, defPassAllowed: 689, players: [
        { name: "Johnson", pos: "WR", td: 3, yards: 173 },
        { name: "Fant", pos: "TE", td: 3, yards: 66 },
        { name: "Olave", pos: "WR", td: 1, yards: 375 }
    ]},
    "Raiders": { record: "3-0", rushYards: 300, passYards: 661, defRushAllowed: 349, defPassAllowed: 667, players: [
        { name: "Bowers", pos: "TE", td: 1, yards: 116 },
        { name: "White", pos: "WR", td: 3, yards: 28 },
        { name: "Jeanty", pos: "RB", td: 2, yards: 303 }
    ]},
    "49ers": { record: "3-0", rushYards: 409, passYards: 789, defRushAllowed: 317, defPassAllowed: 645, players: [
        { name: "McCaffrey", pos: "RB", td: 3, yards: 270 },
        { name: "Kittle", pos: "TE", td: 3, yards: 174 },
        { name: "Samuel", pos: "WR", td: 2, yards: 159 }
    ]},
    "Cardinals": { record: "1-2", rushYards: 279, passYards: 652, defRushAllowed: 383, defPassAllowed: 741, players: [
        { name: "Love", pos: "RB", td: 2, yards: 204 },
        { name: "McBride", pos: "TE", td: 2, yards: 211 },
        { name: "Wilson", pos: "WR", td: 1, yards: 163 }
    ]},
    "Buccaneers": { record: "0-3", rushYards: 283, passYards: 615, defRushAllowed: 228, defPassAllowed: 660, players: [
        { name: "Egbuka", pos: "WR", td: 1, yards: 141 },
        { name: "Irving", pos: "RB", td: 1, yards: 241 },
        { name: "Mayfield", pos: "QB", td: 1, yards: 65 }
    ]},
    "Vikings": { record: "3-0", rushYards: 304, passYards: 462, defRushAllowed: 257, defPassAllowed: 796, players: [
        { name: "Jefferson", pos: "WR", td: 2, yards: 179 },
        { name: "Jones", pos: "RB", td: 1, yards: 237 },
        { name: "Hockenson", pos: "TE", td: 1, yards: 76 }
    ]},
    "Lions": { record: "2-1", rushYards: 362, passYards: 802, defRushAllowed: 352, defPassAllowed: 979, players: [
        { name: "St. Brown", pos: "WR", td: 5, yards: 228 },
        { name: "Gibbs", pos: "RB", td: 6, yards: 463 },
        { name: "LaPorta", pos: "TE", td: 1, yards: 144 }
    ]},
    "Jets": { record: "1-2", rushYards: 277, passYards: 783, defRushAllowed: 262, defPassAllowed: 554, players: [
        { name: "Wilson", pos: "WR", td: 2, yards: 163 },
        { name: "Sadiq", pos: "TE", td: 1, yards: 143 },
        { name: "Hall", pos: "RB", td: 1, yards: 265 }
    ]},
    "Colts": { record: "1-2", rushYards: 310, passYards: 611, defRushAllowed: 424, defPassAllowed: 873, players: [
        { name: "Taylor", pos: "RB", td: 4, yards: 325 },
        { name: "Warren", pos: "TE", td: 2, yards: 89 },
        { name: "Allen", pos: "WR", td: 1, yards: 100 }
    ]},
    "Texans": { record: "0-3", rushYards: 254, passYards: 794, defRushAllowed: 260, defPassAllowed: 776, players: [
        { name: "Montgomery", pos: "RB", td: 3, yards: 151 },
        { name: "Collins", pos: "WR", td: 1, yards: 75 },
        { name: "Schultz", pos: "TE", td: 0, yards: 205 }
    ]},
    "Jaguars": { record: "2-1", rushYards: 358, passYards: 616, defRushAllowed: 274, defPassAllowed: 738, players: [
        { name: "Washington", pos: "WR", td: 2, yards: 221 },
        { name: "Tuten", pos: "RB", td: 2, yards: 240 },
        { name: "Meyers", pos: "WR", td: 2, yards: 132 }
    ]},
    "Patriots": { record: "1-2", rushYards: 328, passYards: 631, defRushAllowed: 325, defPassAllowed: 569, players: [
        { name: "Hollins", pos: "WR", td: 0, yards: 156 },
        { name: "Stevenson", pos: "RB", td: 0, yards: 179 },
        { name: "Henry", pos: "TE", td: 0, yards: 71 }
    ]},
    "Dolphins": { record: "0-3", rushYards: 295, passYards: 627, defRushAllowed: 313, defPassAllowed: 693, players: [
        { name: "Gordon", pos: "2nd RB", td: 1, yards: 48 },
        { name: "Washington", pos: "WR", td: 0, yards: 152 }
    ]},
    "Chiefs": { record: "3-0", rushYards: 460, passYards: 812, defRushAllowed: 299, defPassAllowed: 551, players: [
        { name: "Walker III", pos: "RB", td: 4, yards: 442 },
        { name: "Kelce", pos: "TE", td: 2, yards: 231 },
        { name: "Rice", pos: "WR", td: 1, yards: 190 }
    ]},
    "Giants": { record: "2-1", rushYards: 355, passYards: 479, defRushAllowed: 313, defPassAllowed: 683, players: [
        { name: "Likely", pos: "WR", td: 2, yards: 124 },
        { name: "Skattebo", pos: "RB", td: 1, yards: 236 },
        { name: "Nabers", pos: "WR", td: 0, yards: 96 }
    ]},
    "Titans": { record: "0-3", rushYards: 271, passYards: 504, defRushAllowed: 379, defPassAllowed: 597, players: [
        { name: "Ward", pos: "QB", td: 2, yards: 30 },
        { name: "Robinson", pos: "WR", td: 1, yards: 104 },
        { name: "Pollard", pos: "RB", td: 0, yards: 195 }
    ]},
    "Steelers": { record: "2-1", rushYards: 287, passYards: 700, defRushAllowed: 339, defPassAllowed: 633, players: [
        { name: "Warren", pos: "RB", td: 0, yards: 326 },
        { name: "Metcalf", pos: "WR", td: 1, yards: 98 },
        { name: "Freiermuth", pos: "TE", td: 1, yards: 108 }
    ]},
    "Bengals": { record: "2-1", rushYards: 274, passYards: 743, defRushAllowed: 287, defPassAllowed: 861, players: [
        { name: "Brown", pos: "RB", td: 1, yards: 229 },
        { name: "Higgins", pos: "WR", td: 1, yards: 244 },
        { name: "Chase", pos: "WR", td: 3, yards: 185 }
    ]},
    "Commanders": { record: "1-2", rushYards: 396, passYards: 554, defRushAllowed: 246, defPassAllowed: 875, players: [
        { name: "Diggs", pos: "WR", td: 3, yards: 135 },
        { name: "White", pos: "RB", td: 1, yards: 151 },
        { name: "McLaurin", pos: "WR", td: 1, yards: 141 }
    ]},
    "Seahawks": { record: "2-1", rushYards: 303, passYards: 828, defRushAllowed: 261, defPassAllowed: 456, players: [
        { name: "Smith-Njigba", pos: "WR", td: 6, yards: 405 },
        { name: "Kupp", pos: "TE", td: 1, yards: 101 }
    ]},
    "Packers": { record: "1-2", rushYards: 146, passYards: 844, defRushAllowed: 416, defPassAllowed: 654, players: [
        { name: "Watson", pos: "WR", td: 4, yards: 284 },
        { name: "Golden", pos: "WR", td: 1, yards: 253 }
    ]},
    "Eagles": { record: "2-0", rushYards: 225, passYards: 467, defRushAllowed: 254, defPassAllowed: 586, players: [
        { name: "Barkley", pos: "RB", td: 0, yards: 92 },
        { name: "Goedert", pos: "TE", td: 2, yards: 81 },
        { name: "Smith", pos: "WR", td: 1, yards: 170 }
    ]},
    "Bears": { record: "1-1", rushYards: 425, passYards: 461, defRushAllowed: 244, defPassAllowed: 504, players: [
        { name: "Swift", pos: "RB", td: 3, yards: 233 },
        { name: "Williams", pos: "QB", td: 2, yards: 107 }
    ]},
    "Falcons": { record: "1-2", rushYards: 519, passYards: 544, defRushAllowed: 143, defPassAllowed: 820, players: [
        { name: "Bijan Robinson", pos: "RB", td: 3, yards: 467 },
        { name: "London", pos: "WR", td: 0, yards: 274 }
    ]}
};

window.addEventListener('DOMContentLoaded', () => {
    const homeOffSelect = document.getElementById('homeOffense');
    const homeDefSelect = document.getElementById('homeDefense');
    const awayOffSelect = document.getElementById('awayOffense');
    const awayDefSelect = document.getElementById('awayDefense');
    const configContainer = document.getElementById('teamConfigs');

    const teamNames = Object.keys(nflTeams).sort();

    teamNames.forEach(team => {
        homeOffSelect.innerHTML += `<option value="${team}">${team} (${nflTeams[team].record})</option>`;
        homeDefSelect.innerHTML += `<option value="${team}">${team} (${nflTeams[team].record})</option>`;
        awayOffSelect.innerHTML += `<option value="${team}">${team} (${nflTeams[team].record})</option>`;
        awayDefSelect.innerHTML += `<option value="${team}">${team} (${nflTeams[team].record})</option>`;
    });

    if (teamNames.length > 1) {
        awayOffSelect.selectedIndex = 1;
        awayDefSelect.selectedIndex = 1;
    }

    function renderConfigs() {
        const homeOff = homeOffSelect.value;
        const awayOff = awayOffSelect.value;

        configContainer.innerHTML = `
            <div class="team-box">
                <h3>🏠 Kotijoukkueen Hyökkäys (${homeOff})</h3>
                <p>Poista loukkaantuneet pelaajat:</p>
                <div id="home-players"></div>
            </div>
            <div class="team-box">
                <h3>✈️ Vierasjoukkueen Hyökkäys (${awayOff})</h3>
                <p>Poista loukkaantuneet pelaajat:</p>
                <div id="away-players"></div>
            </div>
        `;

        renderPlayerCheckboxes(homeOff, 'home-players', 'home');
        renderPlayerCheckboxes(awayOff, 'away-players', 'away');
    }

    function renderPlayerCheckboxes(teamName, containerId, prefix) {
        const container = document.getElementById(containerId);
        nflTeams[teamName].players.forEach((p, idx) => {
            container.innerHTML += `
                <div class="player-row">
                    <label style="margin:0; color:#cbd5e1; cursor:pointer; display:flex; align-items:center;">
                        <input type="checkbox" id="${prefix}_p_${idx}" checked onchange="togglePlayer('${prefix}', ${idx})">
                        <span><strong>${p.name}</strong> (${p.pos}) – TD: ${p.td} | Yards: ${p.yards}</span>
                    </label>
                </div>
            `;
        });
    }

    homeOffSelect.addEventListener('change', renderConfigs);
    awayOffSelect.addEventListener('change', renderConfigs);
    renderConfigs();

    document.getElementById('calcBtn').addEventListener('click', calculateOptaMatch);
});

window.disabledPlayers = { home: {}, away: {} };

window.togglePlayer = function(prefix, idx) {
    const cb = document.getElementById(`${prefix}_p_${idx}`);
    window.disabledPlayers[prefix][idx] = !cb.checked;
};

function calculateOptaMatch() {
    const homeOff = document.getElementById('homeOffense').value;
    const homeDef = document.getElementById('homeDefense').value;
    const awayOff = document.getElementById('awayOffense').value;
    const awayDef = document.getElementById('awayDefense').value;
    const resultsDiv = document.getElementById('results');

    // Lasketaan realistiset tehot ottaen huomioon hyökkäys, vastustajan puolustus ja loukkaantumiset
    const homePower = computeTeamPower(homeOff, awayDef, 'home', true);
    const awayPower = computeTeamPower(awayOff, homeDef, 'away', false);

    // Skaalataan jaardit realistisiksi NFL-lukemiksi (tyypillisesti 260 - 420 jaardia per joukkue)
    const homeYards = Math.min(460, Math.max(220, Math.round(330 + (homePower - awayPower) * 35)));
    const awayYards = Math.min(460, Math.max(220, Math.round(310 + (awayPower - homePower) * 35)));

    // Realistiset pisteet NFL-keskiarvojen mukaisesti
    const homeScore = Math.max(6, Math.min(45, Math.round(homeYards / 28 + (homePower > awayPower ? 3 : -2))));
    const awayScore = Math.max(3, Math.min(42, Math.round(awayYards / 29 + (awayPower > homePower ? 2 : -3))));

    // Voittotodennäköisyydet
    const homeWinProb = Math.min(88, Math.max(12, Math.round(50 + (homePower - awayPower) * 14 + 4)));
    const awayWinProb = 100 - homeWinProb;

    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <h2 style="text-align:center; margin-top:0; font-size:1.05rem; color:#94a3b8;">REALISTINEN OTTELUSIMULAATIO</h2>
        
        <div class="matchup-field">
            <div class="field-team">
                <h3>🏠 ${homeOff}</h3>
                <span style="font-size:0.8rem; color:#94a3b8;">Voitto: ${homeWinProb}%</span>
            </div>
            <div class="field-score">${homeScore} - ${awayScore}</div>
            <div class="field-team">
                <h3>✈️ ${awayOff}</h3>
                <span style="font-size:0.8rem; color:#94a3b8;">Voitto: ${awayWinProb}%</span>
            </div>
        </div>

        <div class="opta-stats">
            <p><strong>📊 Arvioidut kokonaisjaardit:</strong> 🏠 ${homeOff}: <strong>${homeYards} yds</strong> | ✈️ ${awayOff}: <strong>${awayYards} yds</strong></p>
            <p><strong>🏈 Arvioidut tehopelaajat:</strong></p>
            <p><strong>🏠 ${homeOff}:</strong> ${getOptaScorers(homeOff, 'home')}</p>
            <p><strong>✈️ ${awayOff}:</strong> ${getOptaScorers(awayOff, 'away')}</p>
        </div>
    `;
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

function computeTeamPower(offTeamName, defTeamName, prefix, isHome) {
    const offTeam = nflTeams[offTeamName];
    const defTeam = nflTeams[defTeamName];

    let baseOffense = (offTeam.rushYards + offTeam.passYards) / 350;
    
    let activePlayerPower = 0;
    offTeam.players.forEach((p, idx) => {
        if (!window.disabledPlayers[prefix][idx]) {
            activePlayerPower += (p.td * 0.7) + (p.yards / 180);
        }
    });

    // Vastustajan puolustuksen vaikutus (mitä vähemmän puolustus on päästänyt jaardeja, sitä kovempi vastus)
    let defResistance = (defTeam.defRushAllowed + defTeam.defPassAllowed) / 750;
    let homeBonus = isHome ? 1.08 : 1.0;

    return ((baseOffense * 0.4 + activePlayerPower * 0.6) / defResistance) * homeBonus;
}

function getOptaScorers(teamName, prefix) {
    let team = nflTeams[teamName];
    let active = team.players.filter((p, idx) => !window.disabledPlayers[prefix][idx]);
    if (active.length === 0) return "Ei aktiivisia pelaajia";
    
    active.sort((a, b) => (b.td * 10 + b.yards) - (a.td * 10 + a.yards));
    return active.slice(0, 2).map(p => {
        let prob = Math.min(90, Math.max(12, Math.round((p.td + 1) * 16 + (p.yards / 25))));
        return `${p.name} (${p.pos}) – ${prob}% TD`;
    }).join(" | ");
}
