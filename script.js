// Funktio, joka hakee reaaliaikaisen NFL-datan ilmaiseksi ESPN:n rajapinnasta
async function fetchRealTimeNFLData(weekNumber = 5) {
    const cacheKey = `nfl_data_week_${weekNumber}_2026`;
    const cachedData = localStorage.getItem(cacheKey);
   
    if (cachedData) {
        try {
            const parsed = JSON.parse(cachedData);
            if (new Date().getTime() - parsed.timestamp < 24 * 60 * 60 * 1000) {
                console.log("Ladattu otteluohjelma selaimen muistista (cache)");
                return parsed.data;
            }
        } catch (e) {
            console.error("Virhe välimuistin luvussa:", e);
        }
    }

    try {
        console.log("Haetaan tuoretta otteludataa ESPN:n rajapinnasta...");
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${weekNumber}`);
        if (!response.ok) throw new Error("Verkkovastaus ei ollut kunnossa");
        
        const data = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: new Date().getTime(),
            data: data
        }));

        return data;
    } catch (error) {
        console.error("Virhe verkkoyhteydessä, käytetään staattista varakantaa:", error);
        return null;
    }
}

// Täydellinen 32 joukkueen NFL-tietokanta (Top 5 avainpelaajaa laskevassa TD-järjestyksessä)
const nflDatabase = {
    "Cardinals": {
        record: "1-3", games: 4, rush: 370, pass: 890, oppPass: 1040, oppRush: 490, oppTD: 14, turnovers: 7, sacks: 12, redZonePct: 48, thirdDownPct: 36, penalties: 28,
        injuredPlayers: [{name: "James Conner", pos: "RB"}, {name: "Trey Benson", pos: "RB"}, {name: "Tip Reiman", pos: "TE"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 105, allowedTDs: 3 } },
        players: [
            { name: "Jeremiyah Love", pos: "RB", td: 3, yds: "260 yds", rec: "15/21 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:1}, {w:4, yds:65, td:0}] },
            { name: "Trey McBride", pos: "TE", td: 3, yds: "280 yds", rec: "21/29 rec", marketOdds: 2.20, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:1}, {w:4, yds:70, td:0}] },
            { name: "Marvin Harrison Jr.", pos: "WR", td: 2, yds: "310 yds", rec: "20/33 rec", marketOdds: 2.50, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Michael Wilson", pos: "WR", td: 1, yds: "200 yds", rec: "14/21 rec", marketOdds: 3.30, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:50, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Kendrick Bourne", pos: "WR", td: 1, yds: "180 yds", rec: "13/18 rec", marketOdds: 3.40, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Budda Baker (S)", sacks: "1.0 Sacks", pressures: "8 Pressures", tackles: "41 Tackles", probability: "25%", status: "ACTIVE" },
            { name: "Zaven Collins (LB)", sacks: "2.5 Sacks", pressures: "12 Pressures", tackles: "24 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Falcons": {
        record: "1-3", games: 4, rush: 710, pass: 750, oppPass: 970, oppRush: 450, oppTD: 10, turnovers: 4, sacks: 8, redZonePct: 62, thirdDownPct: 42, penalties: 22,
        injuredPlayers: [{name: "A.J. Terrell Jr.", pos: "CB"}, {name: "JD Bertrand", pos: "ILB"}, {name: "Beaux Collins", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Bijan Robinson", pos: "RB", td: 5, yds: "610 yds", rec: "23/31 rec", marketOdds: 1.70, gameLog: [{w:1, yds:145, td:1}, {w:2, yds:150, td:1}, {w:3, yds:155, td:1}, {w:4, yds:160, td:2}] },
            { name: "Brian Robinson Jr.", pos: "RB", td: 2, yds: "190 yds", rec: "12/17 rec", marketOdds: 2.60, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Drake London", pos: "WR", td: 2, yds: "290 yds", rec: "21/30 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] },
            { name: "Jahan Dotson", pos: "WR", td: 1, yds: "190 yds", rec: "14/20 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Kyle Pitts Sr.", pos: "TE", td: 1, yds: "180 yds", rec: "14/20 rec", marketOdds: 3.10, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Matthew Judon (EDGE)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "19 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Grady Jarrett (DT)", sacks: "2.5 Sacks", pressures: "16 Pressures", tackles: "23 Tackles", probability: "42%", status: "ACTIVE" }
        ]
    },
    "Ravens": {
        record: "3-1", games: 4, rush: 660, pass: 980, oppPass: 900, oppRush: 370, oppTD: 10, turnovers: 4, sacks: 7, redZonePct: 67, thirdDownPct: 48, penalties: 21,
        injuredPlayers: [{name: "Lamar Jackson", pos: "QB"}, {name: "T.J. Tampa Jr.", pos: "CB"}, {name: "Ja'Kobi Lane", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Derrick Henry", pos: "RB", td: 7, yds: "440 yds", rec: "7/10 rec", marketOdds: 1.55, gameLog: [{w:1, yds:100, td:2}, {w:2, yds:110, td:2}, {w:3, yds:115, td:2}, {w:4, yds:115, td:1}] },
            { name: "Rashod Bateman", pos: "WR", td: 2, yds: "250 yds", rec: "18/25 rec", marketOdds: 2.70, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Zay Flowers", pos: "WR", td: 2, yds: "310 yds", rec: "23/32 rec", marketOdds: 2.60, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:0}, {w:4, yds:80, td:0}] },
            { name: "Mark Andrews", pos: "TE", td: 2, yds: "220 yds", rec: "17/22 rec", marketOdds: 2.40, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Justice Hill", pos: "RB", td: 1, yds: "120 yds", rec: "10/14 rec", marketOdds: 3.50, gameLog: [{w:1, yds:30, td:0}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Nnamdi Madubuike (DT)", sacks: "4.0 Sacks", pressures: "22 Pressures", tackles: "20 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Kyle Van Noy (EDGE)", sacks: "4.5 Sacks", pressures: "19 Pressures", tackles: "16 Tackles", probability: "65%", status: "ACTIVE" }
        ]
    },
    "Bills": {
        record: "3-1", games: 4, rush: 610, pass: 1040, oppPass: 860, oppRush: 390, oppTD: 11, turnovers: 3, sacks: 8, redZonePct: 70, thirdDownPct: 47, penalties: 20,
        injuredPlayers: [{name: "Jordan Hancock", pos: "S"}, {name: "Zane Durant", pos: "DT"}, {name: "Tyrell Shavers", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "James Cook III", pos: "RB", td: 3, yds: "470 yds", rec: "18/23 rec", marketOdds: 2.10, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:110, td:1}, {w:3, yds:120, td:1}, {w:4, yds:140, td:0}] },
            { name: "Josh Allen", pos: "QB", td: 3, yds: "160 rush yds", rec: "Dual Threat QB", marketOdds: 1.90, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:50, td:1}, {w:3, yds:30, td:0}, {w:4, yds:40, td:1}] },
            { name: "Keon Coleman", pos: "WR", td: 2, yds: "210 yds", rec: "14/20 rec", marketOdds: 2.80, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:40, td:0}, {w:4, yds:60, td:0}] },
            { name: "Khalil Shakir", pos: "WR", td: 2, yds: "230 yds", rec: "18/24 rec", marketOdds: 2.60, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Curtis Samuel", pos: "WR", td: 1, yds: "150 yds", rec: "13/18 rec", marketOdds: 3.30, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Greg Rousseau (EDGE)", sacks: "4.0 Sacks", pressures: "23 Pressures", tackles: "20 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Ed Oliver (DT)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "18 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Panthers": {
        record: "1-3", games: 4, rush: 430, pass: 800, oppPass: 1070, oppRush: 520, oppTD: 13, turnovers: 6, sacks: 9, redZonePct: 45, thirdDownPct: 35, penalties: 26,
        injuredPlayers: [{name: "Xavier Legette", pos: "WR"}, {name: "Jaycee Horn", pos: "CB"}, {name: "Mike Jackson", pos: "CB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 260, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Tetairoa McMillan", pos: "WR", td: 3, yds: "385 yds", rec: "26/38 rec", marketOdds: 1.95, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:100, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:0}] },
            { name: "Chuba Hubbard", pos: "RB", td: 3, yds: "380 yds", rec: "14/19 rec", marketOdds: 2.10, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:95, td:0}, {w:4, yds:100, td:1}] },
            { name: "Xavier Legette", pos: "WR", td: 2, yds: "190 yds", rec: "13/20 rec", marketOdds: 3.20, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:1}, {w:4, yds:50, td:0}] },
            { name: "Darren Waller", pos: "TE", td: 2, yds: "210 yds", rec: "16/22 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Jalen Coker", pos: "WR", td: 1, yds: "170 yds", rec: "11/16 rec", marketOdds: 3.40, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Derrick Brown (DT)", sacks: "2.0 Sacks", pressures: "14 Pressures", tackles: "27 Tackles", probability: "40%", status: "ACTIVE" },
            { name: "Jaycee Horn (CB)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "18 Tackles", probability: "30%", status: "ACTIVE" }
        ]
    },
    "Bears": {
        record: "2-2", games: 4, rush: 510, pass: 900, oppPass: 940, oppRush: 430, oppTD: 9, turnovers: 5, sacks: 10, redZonePct: 56, thirdDownPct: 40, penalties: 24,
        injuredPlayers: [{name: "Braxton Jones", pos: "OT"}, {name: "Coby Bryant", pos: "S"}, {name: "Hayden Large", pos: "TE"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "DJ Moore", pos: "WR", td: 3, yds: "320 yds", rec: "22/31 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:85, td:1}, {w:4, yds:80, td:0}] },
            { name: "D'Andre Swift", pos: "RB", td: 3, yds: "390 yds", rec: "16/22 rec", marketOdds: 2.00, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:100, td:1}, {w:3, yds:95, td:0}, {w:4, yds:105, td:1}] },
            { name: "Keenan Allen", pos: "WR", td: 2, yds: "260 yds", rec: "20/28 rec", marketOdds: 2.40, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Cole Kmet", pos: "TE", td: 2, yds: "190 yds", rec: "16/20 rec", marketOdds: 2.70, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:0}, {w:3, yds:45, td:1}, {w:4, yds:50, td:0}] },
            { name: "Rome Odunze", pos: "WR", td: 1, yds: "210 yds", rec: "15/23 rec", marketOdds: 2.90, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Montez Sweat (EDGE)", sacks: "4.5 Sacks", pressures: "22 Pressures", tackles: "17 Tackles", probability: "65%", status: "ACTIVE" },
            { name: "Jaylon Johnson (CB)", sacks: "0.0 Sacks", pressures: "1 Pressures", tackles: "15 Tackles", probability: "35%", status: "ACTIVE" }
        ]
    },
    "Bengals": {
        record: "2-2", games: 4, rush: 480, pass: 1110, oppPass: 960, oppRush: 460, oppTD: 11, turnovers: 4, sacks: 9, redZonePct: 65, thirdDownPct: 44, penalties: 23,
        injuredPlayers: [{name: "Jalen Davis", pos: "CB"}, {name: "Andrei Iosivas", pos: "WR"}, {name: "Brian Parker II", pos: "OG"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Ja'Marr Chase", pos: "WR", td: 4, yds: "410 yds", rec: "28/38 rec", marketOdds: 1.80, gameLog: [{w:1, yds:95, td:1}, {w:2, yds:100, td:1}, {w:3, yds:105, td:1}, {w:4, yds:110, td:1}] },
            { name: "Chase Brown", pos: "RB", td: 3, yds: "310 yds", rec: "14/18 rec", marketOdds: 2.20, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "Tee Higgins", pos: "WR", td: 2, yds: "270 yds", rec: "19/27 rec", marketOdds: 2.30, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:70, td:0}] },
            { name: "Andrei Iosivas", pos: "WR", td: 1, yds: "160 yds", rec: "12/17 rec", marketOdds: 3.40, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] },
            { name: "Mike Gesicki", pos: "TE", td: 1, yds: "180 yds", rec: "15/20 rec", marketOdds: 3.00, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Trey Hendrickson (EDGE)", sacks: "5.0 Sacks", pressures: "25 Pressures", tackles: "15 Tackles", probability: "70%", status: "ACTIVE" },
            { name: "Logan Wilson (LB)", sacks: "1.0 Sacks", pressures: "8 Pressures", tackles: "38 Tackles", probability: "40%", status: "ACTIVE" }
        ]
    },
    "Browns": {
        record: "1-3", games: 4, rush: 440, pass: 830, oppPass: 890, oppRush: 440, oppTD: 10, turnovers: 7, sacks: 13, redZonePct: 46, thirdDownPct: 34, penalties: 29,
        injuredPlayers: [{name: "Dylan Sampson", pos: "RB"}, {name: "Dillon Gabriel", pos: "QB"}, {name: "Kalia Davis", pos: "DT"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "H. Fannin Jr.", pos: "TE", td: 3, yds: "220 yds", rec: "18/24 rec", marketOdds: 2.20, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:55, td:1}, {w:4, yds:60, td:0}] },
            { name: "Amari Cooper", pos: "WR", td: 2, yds: "280 yds", rec: "20/32 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] },
            { name: "David Njoku", pos: "TE", td: 2, yds: "210 yds", rec: "17/23 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Jerome Ford", pos: "RB", td: 2, yds: "340 yds", rec: "15/19 rec", marketOdds: 2.30, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:0}, {w:3, yds:85, td:1}, {w:4, yds:90, td:0}] },
            { name: "D. Boston", pos: "WR", td: 2, yds: "210 yds", rec: "15/22 rec", marketOdds: 2.50, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Myles Garrett (EDGE)", sacks: "5.5 Sacks", pressures: "28 Pressures", tackles: "16 Tackles", probability: "75%", status: "ACTIVE" },
            { name: "Denzel Ward (CB)", sacks: "0.0 Sacks", pressures: "1 Pressures", tackles: "19 Tackles", probability: "35%", status: "ACTIVE" }
        ]
    },
    "Cowboys": {
        record: "3-1", games: 4, rush: 460, pass: 1080, oppPass: 930, oppRush: 490, oppTD: 10, turnovers: 5, sacks: 11, redZonePct: 68, thirdDownPct: 46, penalties: 27,
        injuredPlayers: [{name: "Jalen Thompson", pos: "S"}, {name: "Jonathan Bullard", pos: "DT"}, {name: "P.J. Locke", pos: "S"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 225, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 3 } },
        players: [
            { name: "J. Williams", pos: "RB", td: 6, yds: "310 yds", rec: "13/18 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:2}, {w:2, yds:75, td:1}, {w:3, yds:80, td:2}, {w:4, yds:85, td:1}] },
            { name: "CeeDee Lamb", pos: "WR", td: 3, yds: "380 yds", rec: "27/38 rec", marketOdds: 1.85, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:95, td:0}] },
            { name: "George Pickens", pos: "WR", td: 2, yds: "250 yds", rec: "17/25 rec", marketOdds: 2.30, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Jake Ferguson", pos: "TE", td: 2, yds: "240 yds", rec: "21/28 rec", marketOdds: 2.30, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Kavontae Turpin", pos: "WR", td: 1, yds: "180 yds", rec: "12/17 rec", marketOdds: 3.20, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Micah Parsons (EDGE)", sacks: "5.0 Sacks", pressures: "26 Pressures", tackles: "18 Tackles", probability: "75%", status: "ACTIVE" },
            { name: "Trevon Diggs (CB)", sacks: "0.0 Sacks", pressures: "1 Pressures", tackles: "17 Tackles", probability: "35%", status: "ACTIVE" }
        ]
    },
    "Broncos": {
        record: "2-2", games: 4, rush: 530, pass: 790, oppPass: 860, oppRush: 400, oppTD: 8, turnovers: 4, sacks: 12, redZonePct: 58, thirdDownPct: 41, penalties: 21,
        injuredPlayers: [{name: "Jonah Coleman", pos: "RB"}, {name: "Caleb Lohner", pos: "TE"}, {name: "Frank Crum", pos: "OT"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Courtland Sutton", pos: "WR", td: 3, yds: "290 yds", rec: "20/32 rec", marketOdds: 2.30, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:1}, {w:4, yds:75, td:0}] },
            { name: "J.K. Dobbins", pos: "RB", td: 3, yds: "380 yds", rec: "14/19 rec", marketOdds: 2.05, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:95, td:0}, {w:4, yds:100, td:1}] },
            { name: "Jaylen Waddle", pos: "WR", td: 2, yds: "250 yds", rec: "18/25 rec", marketOdds: 2.40, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Evan Engram", pos: "TE", td: 2, yds: "220 yds", rec: "19/26 rec", marketOdds: 2.20, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Marvin Mims Jr.", pos: "WR", td: 1, yds: "150 yds", rec: "10/15 rec", marketOdds: 3.50, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Pat Surtain II (CB)", sacks: "0.0 Sacks", pressures: "0 Pressures", tackles: "16 Tackles", probability: "45%", status: "ACTIVE" },
            { name: "Jonathon Cooper (EDGE)", sacks: "4.5 Sacks", pressures: "20 Pressures", tackles: "18 Tackles", probability: "60%", status: "ACTIVE" }
        ]
    },
    "Lions": {
        record: "3-1", games: 4, rush: 650, pass: 1010, oppPass: 930, oppRush: 350, oppTD: 9, turnovers: 3, sacks: 11, redZonePct: 72, thirdDownPct: 50, penalties: 19,
        injuredPlayers: [{name: "Thomas Harper", pos: "S"}, {name: "Avonte Maddox", pos: "S"}, {name: "Cade Mays", pos: "C"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 2 } },
        players: [
            { name: "Jahmyr Gibbs", pos: "RB", td: 7, yds: "420 yds", rec: "18/23 rec", marketOdds: 1.85, gameLog: [{w:1, yds:100, td:2}, {w:2, yds:105, td:2}, {w:3, yds:105, td:1}, {w:4, yds:110, td:2}] },
            { name: "Amon-Ra St. Brown", pos: "WR", td: 5, yds: "360 yds", rec: "30/38 rec", marketOdds: 1.80, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:2}, {w:3, yds:95, td:1}, {w:4, yds:90, td:1}] },
            { name: "Jameson Williams", pos: "WR", td: 2, yds: "290 yds", rec: "16/24 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}] },
            { name: "Sam LaPorta", pos: "TE", td: 2, yds: "250 yds", rec: "20/27 rec", marketOdds: 2.20, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Tom Kennedy", pos: "WR", td: 1, yds: "140 yds", rec: "10/14 rec", marketOdds: 3.60, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Aidan Hutchinson (EDGE)", sacks: "6.5 Sacks", pressures: "30 Pressures", tackles: "19 Tackles", probability: "80%", status: "ACTIVE" },
            { name: "Alex Anzalone (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "40 Tackles", probability: "40%", status: "ACTIVE" }
        ]
    },
    "Packers": {
        record: "2-2", games: 4, rush: 600, pass: 950, oppPass: 900, oppRush: 420, oppTD: 9, turnovers: 5, sacks: 10, redZonePct: 60, thirdDownPct: 43, penalties: 22,
        injuredPlayers: [{name: "Warren Brinson", pos: "DE"}, {name: "Zach Bako-Bewele", pos: "OT"}, {name: "Savion Williams", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Christian Watson", pos: "WR", td: 4, yds: "310 yds", rec: "21/28 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:1}, {w:4, yds:80, td:1}] },
            { name: "MarShawn Lloyd", pos: "RB", td: 3, yds: "460 yds", rec: "15/21 rec", marketOdds: 1.80, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:115, td:1}, {w:3, yds:110, td:1}, {w:4, yds:125, td:0}] },
            { name: "Matthew Golden", pos: "WR", td: 2, yds: "230 yds", rec: "17/25 rec", marketOdds: 2.60, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Skyy Moore", pos: "WR", td: 1, yds: "190 yds", rec: "11/17 rec", marketOdds: 2.90, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Tucker Kraft", pos: "TE", td: 1, yds: "160 yds", rec: "14/19 rec", marketOdds: 3.10, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Rashan Gary (EDGE)", sacks: "3.5 Sacks", pressures: "20 Pressures", tackles: "17 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Xavier McKinney (S)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "28 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Texans": {
        record: "3-1", games: 4, rush: 500, pass: 1070, oppPass: 840, oppRush: 380, oppTD: 8, turnovers: 3, sacks: 12, redZonePct: 65, thirdDownPct: 45, penalties: 20,
        injuredPlayers: [{name: "British Brooks", pos: "FB"}, {name: "Jake Hummel", pos: "LB"}, {name: "Henry To'oTo'o", pos: "LB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "David Montgomery", pos: "RB", td: 4, yds: "390 yds", rec: "12/17 rec", marketOdds: 1.90, gameLog: [{w:1, yds:120, td:2}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:90, td:0}] },
            { name: "Nico Collins", pos: "WR", td: 3, yds: "420 yds", rec: "28/38 rec", marketOdds: 1.85, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:105, td:1}, {w:3, yds:110, td:1}, {w:4, yds:105, td:0}] },
            { name: "Woody Marks", pos: "RB", td: 2, yds: "210 yds", rec: "14/19 rec", marketOdds: 2.50, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:50, td:1}, {w:3, yds:55, td:1}, {w:4, yds:55, td:0}] },
            { name: "Kayshon Boutte", pos: "WR", td: 2, yds: "260 yds", rec: "19/28 rec", marketOdds: 2.30, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Xavier Hutchinson", pos: "WR", td: 2, yds: "310 yds", rec: "25/35 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] }
        ],
        defenders: [
            { name: "Will Anderson Jr. (EDGE)", sacks: "5.0 Sacks", pressures: "25 Pressures", tackles: "18 Tackles", probability: "70%", status: "ACTIVE" },
            { name: "Danielle Hunter (EDGE)", sacks: "4.5 Sacks", pressures: "23 Pressures", tackles: "17 Tackles", probability: "65%", status: "ACTIVE" }
        ]
    },
    "Colts": {
        record: "2-2", games: 4, rush: 560, pass: 920, oppPass: 1000, oppRush: 530, oppTD: 12, turnovers: 5, sacks: 9, redZonePct: 58, thirdDownPct: 39, penalties: 25,
        injuredPlayers: [{name: "Alec Pierce", pos: "WR"}, {name: "Micheal Clemons", pos: "DE"}, {name: "Will Mallory", pos: "TE"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 105, allowedTDs: 3 } },
        players: [
            { name: "Jonathan Taylor", pos: "RB", td: 4, yds: "450 yds", rec: "11/15 rec", marketOdds: 1.70, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:115, td:1}, {w:3, yds:110, td:1}, {w:4, yds:115, td:1}] },
            { name: "Laquon Treadwell", pos: "WR", td: 2, yds: "310 yds", rec: "23/33 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Keenan Allen", pos: "WR", td: 2, yds: "240 yds", rec: "13/18 rec", marketOdds: 2.80, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Josh Downs", pos: "WR", td: 1, yds: "190 yds", rec: "16/21 rec", marketOdds: 2.70, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Tyler Warren", pos: "TE", td: 1, yds: "120 yds", rec: "10/14 rec", marketOdds: 3.50, gameLog: [{w:1, yds:30, td:0}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "DeForest Buckner (DT)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "21 Tackles", probability: "50%", status: "ACTIVE" },
            { name: "Zaire Franklin (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "44 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Jaguars": {
        record: "1-3", games: 4, rush: 420, pass: 900, oppPass: 1030, oppRush: 470, oppTD: 13, turnovers: 6, sacks: 8, redZonePct: 48, thirdDownPct: 37, penalties: 26,
        injuredPlayers: [{name: "B.J. Green II", pos: "DE"}, {name: "Patrick Mekari", pos: "OG"}, {name: "Zach Durfee", pos: "DE"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Brian Thomas Jr.", pos: "WR", td: 3, yds: "330 yds", rec: "21/30 rec", marketOdds: 2.20, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "Bhayshul Tuten", pos: "RB", td: 3, yds: "350 yds", rec: "17/22 rec", marketOdds: 2.05, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:85, td:1}, {w:4, yds:90, td:0}] },
            { name: "Jakobi Meyers", pos: "WR", td: 2, yds: "270 yds", rec: "20/29 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Parker Washington", pos: "WR", td: 1, yds: "200 yds", rec: "13/20 rec", marketOdds: 3.00, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:50, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Brenton Strange", pos: "TE", td: 1, yds: "220 yds", rec: "21/28 rec", marketOdds: 2.30, gameLog: [{w:1, yds:55, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Josh Hines-Allen (EDGE)", sacks: "4.0 Sacks", pressures: "22 Pressures", tackles: "17 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Travon Walker (EDGE)", sacks: "3.5 Sacks", pressures: "19 Pressures", tackles: "20 Tackles", probability: "55%", status: "ACTIVE" }
        ]
    },
    "Chiefs": {
        record: "4-0", games: 4, rush: 540, pass: 1040, oppPass: 830, oppRush: 340, oppTD: 7, turnovers: 3, sacks: 13, redZonePct: 75, thirdDownPct: 52, penalties: 18,
        injuredPlayers: [{name: "Cooper McDonald", pos: "LB"}, {name: "John Michael Gyllenborg", pos: "TE"}, {name: "Jimmy Holiday", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 185, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Kenneth Walker III", pos: "RB", td: 4, yds: "410 yds", rec: "14/18 rec", marketOdds: 1.90, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "Tyquan Thornton", pos: "WR", td: 3, yds: "390 yds", rec: "29/37 rec", marketOdds: 1.80, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:0}] },
            { name: "Xavier Worthy", pos: "WR", td: 2, yds: "240 yds", rec: "15/22 rec", marketOdds: 2.30, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Travis Kelce", pos: "TE", td: 2, yds: "280 yds", rec: "24/32 rec", marketOdds: 1.95, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] },
            { name: "Rashee Rice", pos: "WR", td: 1, yds: "180 yds", rec: "14/20 rec", marketOdds: 2.90, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Chris Jones (DT)", sacks: "4.5 Sacks", pressures: "24 Pressures", tackles: "15 Tackles", probability: "70%", status: "ACTIVE" },
            { name: "Trent McDuffie (CB)", sacks: "0.0 Sacks", pressures: "1 Pressures", tackles: "20 Tackles", probability: "40%", status: "ACTIVE" }
        ]
    },
    "Chargers": {
        record: "2-2", games: 4, rush: 570, pass: 820, oppPass: 880, oppRush: 380, oppTD: 7, turnovers: 3, sacks: 12, redZonePct: 62, thirdDownPct: 44, penalties: 20,
        injuredPlayers: [{name: "Trey Pipkins III", pos: "OT"}, {name: "David Njoku", pos: "TE"}, {name: "KeAndre Lambert-Smith", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Omarion Hampton", pos: "RB", td: 4, yds: "480 yds", rec: "12/16 rec", marketOdds: 1.75, gameLog: [{w:1, yds:130, td:1}, {w:2, yds:110, td:1}, {w:3, yds:115, td:1}, {w:4, yds:125, td:1}] },
            { name: "Tre' Harris", pos: "WR", td: 3, yds: "230 yds", rec: "15/22 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:1}, {w:4, yds:60, td:0}] },
            { name: "Quentin Johnston", pos: "WR", td: 2, yds: "270 yds", rec: "20/28 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Ladd McConkey", pos: "WR", td: 1, yds: "180 yds", rec: "13/19 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Charlie Kolar", pos: "TE", td: 1, yds: "150 yds", rec: "14/18 rec", marketOdds: 3.30, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Khalil Mack (EDGE)", sacks: "4.5 Sacks", pressures: "22 Pressures", tackles: "15 Tackles", probability: "65%", status: "ACTIVE" },
            { name: "Joey Bosa (EDGE)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "14 Tackles", probability: "55%", status: "ACTIVE" }
        ]
    },
    "Rams": {
        record: "1-3", games: 4, rush: 450, pass: 980, oppPass: 1040, oppRush: 500, oppTD: 12, turnovers: 6, sacks: 9, redZonePct: 50, thirdDownPct: 37, penalties: 25,
        injuredPlayers: [{name: "Terrance Ferguson", pos: "TE"}, {name: "Ronnie Rivers", pos: "RB"}, {name: "Myles Garrett", pos: "OLB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", rec: "19/25 rec", marketOdds: 1.65, gameLog: [{w:1, yds:90, td:2}, {w:2, yds:95, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}] },
            { name: "Davante Adams", pos: "WR", td: 3, yds: "360 yds", rec: "28/38 rec", marketOdds: 1.85, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}] },
            { name: "Konata Mumpfield", pos: "WR", td: 2, yds: "230 yds", rec: "16/24 rec", marketOdds: 2.70, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Puka Nacua", pos: "WR", td: 1, yds: "210 yds", rec: "15/20 rec", marketOdds: 2.20, gameLog: [{w:1, yds:210, td:1}, {w:2, yds:0, td:0}, {w:3, yds:0, td:0}, {w:4, yds:0, td:0}] },
            { name: "Colby Parkinson", pos: "TE", td: 1, yds: "190 yds", rec: "17/23 rec", marketOdds: 2.80, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Kobie Turner (DT)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "22 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Ernest Jones IV (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "40 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Raiders": {
        record: "2-2", games: 4, rush: 400, pass: 940, oppPass: 960, oppRush: 460, oppTD: 10, turnovers: 5, sacks: 11, redZonePct: 54, thirdDownPct: 38, penalties: 24,
        injuredPlayers: [{name: "Jack Bech", pos: "WR"}, {name: "Carter Runyon", pos: "TE"}, {name: "Dont'e Thornton Jr.", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Jalen Nailor", pos: "WR", td: 3, yds: "350 yds", rec: "25/36 rec", marketOdds: 1.90, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}] },
            { name: "Cody White", pos: "WR", td: 2, yds: "270 yds", rec: "20/28 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Brock Bowers", pos: "TE", td: 2, yds: "310 yds", rec: "26/34 rec", marketOdds: 2.05, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:80, td:0}, {w:4, yds:85, td:0}] },
            { name: "Ashton Jeanty", pos: "RB", td: 2, yds: "300 yds", rec: "10/14 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Tre Tucker", pos: "WR", td: 1, yds: "180 yds", rec: "12/18 rec", marketOdds: 3.30, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Maxx Crosby (EDGE)", sacks: "6.0 Sacks", pressures: "29 Pressures", tackles: "21 Tackles", probability: "80%", status: "ACTIVE" },
            { name: "Robert Spillane (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "42 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Dolphins": {
        record: "2-2", games: 4, rush: 530, pass: 910, oppPass: 910, oppRush: 410, oppTD: 9, turnovers: 6, sacks: 10, redZonePct: 58, thirdDownPct: 41, penalties: 23,
        injuredPlayers: [{name: "Ronnie Harrison Jr.", pos: "LB"}, {name: "Kyle Louis", pos: "S"}, {name: "Trey Moore", pos: "LB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Ollie Gordon II", pos: "RB", td: 4, yds: "360 yds", rec: "24/31 rec", marketOdds: 1.80, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:110, td:2}, {w:3, yds:80, td:0}, {w:4, yds:80, td:1}] },
            { name: "Chris Bell", pos: "WR", td: 3, yds: "390 yds", rec: "27/38 rec", marketOdds: 1.75, gameLog: [{w:1, yds:130, td:1}, {w:2, yds:90, td:1}, {w:3, yds:85, td:1}, {w:4, yds:85, td:0}] },
            { name: "Caleb Douglas", pos: "WR", td: 2, yds: "310 yds", rec: "22/30 rec", marketOdds: 2.10, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Malik Washington", pos: "WR", td: 1, yds: "140 yds", rec: "10/14 rec", marketOdds: 3.60, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] },
            { name: "Greg Dulcich", pos: "TE", td: 1, yds: "190 yds", rec: "16/21 rec", marketOdds: 2.70, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:5, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Jaelan Phillips (EDGE)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "16 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Jevon Holland (S)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "26 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Vikings": {
        record: "4-0", games: 4, rush: 480, pass: 1020, oppPass: 890, oppRush: 330, oppTD: 6, turnovers: 3, sacks: 15, redZonePct: 70, thirdDownPct: 49, penalties: 19,
        injuredPlayers: [{name: "Josh Oliver", pos: "TE"}, {name: "Nick Samac", pos: "C"}, {name: "Jordan Mason", pos: "RB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "Justin Jefferson", pos: "WR", td: 4, yds: "450 yds", rec: "28/37 rec", marketOdds: 1.70, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:120, td:1}, {w:3, yds:110, td:1}, {w:4, yds:110, td:1}] },
            { name: "Jauan Jennings", pos: "WR", td: 3, yds: "190 yds", rec: "12/16 rec", marketOdds: 2.80, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:1}, {w:4, yds:50, td:0}] },
            { name: "Aaron Jones Sr.", pos: "RB", td: 3, yds: "410 yds", rec: "18/23 rec", marketOdds: 1.85, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:0}] },
            { name: "Jordan Addison", pos: "WR", td: 2, yds: "220 yds", rec: "15/22 rec", marketOdds: 2.60, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}] },
            { name: "T.J. Hockenson", pos: "TE", td: 2, yds: "270 yds", rec: "23/30 rec", marketOdds: 2.10, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] }
        ],
        defenders: [
            { name: "Jonathan Greenard (EDGE)", sacks: "5.5 Sacks", pressures: "26 Pressures", tackles: "17 Tackles", probability: "75%", status: "ACTIVE" },
            { name: "Blake Cashman (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "39 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Patriots": {
        record: "1-3", games: 4, rush: 440, pass: 740, oppPass: 960, oppRush: 450, oppTD: 11, turnovers: 6, sacks: 8, redZonePct: 45, thirdDownPct: 34, penalties: 27,
        injuredPlayers: [{name: "Greg Van Roten", pos: "OG"}, {name: "Quintayvious Hutchins", pos: "OLB"}, {name: "Dell Pettus", pos: "S"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "TreVeyon Henderson", pos: "RB", td: 4, yds: "380 yds", rec: "12/17 rec", marketOdds: 1.95, gameLog: [{w:1, yds:120, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:80, td:1}] },
            { name: "DeMario Douglas", pos: "WR", td: 2, yds: "190 yds", rec: "15/23 rec", marketOdds: 2.90, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Romeo Doubs", pos: "WR", td: 1, yds: "230 yds", rec: "19/26 rec", marketOdds: 2.60, gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Mack Hollins", pos: "WR", td: 1, yds: "180 yds", rec: "14/20 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Hunter Henry", pos: "TE", td: 1, yds: "210 yds", rec: "18/25 rec", marketOdds: 2.50, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Keion White (EDGE)", sacks: "4.0 Sacks", pressures: "18 Pressures", tackles: "20 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Christian Gonzalez (CB)", sacks: "0.0 Sacks", pressures: "1 Pressures", tackles: "22 Tackles", probability: "40%", status: "ACTIVE" }
        ]
    },
    "Saints": {
        record: "2-2", games: 4, rush: 590, pass: 920, oppPass: 940, oppRush: 400, oppTD: 8, turnovers: 4, sacks: 12, redZonePct: 68, thirdDownPct: 45, penalties: 21,
        injuredPlayers: [{name: "Kelvin Banks Jr.", pos: "OT"}, {name: "Zach Wood", pos: "LS"}, {name: "Jordyn Tyson", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Alvin Kamara", pos: "RB", td: 6, yds: "480 yds", rec: "22/28 rec", marketOdds: 1.55, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:120, td:3}, {w:3, yds:115, td:1}, {w:4, yds:135, td:1}] },
            { name: "Chris Olave", pos: "WR", td: 3, yds: "350 yds", rec: "26/36 rec", marketOdds: 1.90, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}] },
            { name: "Bryce Lance", pos: "WR", td: 3, yds: "310 yds", rec: "17/24 rec", marketOdds: 2.20, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:1}, {w:4, yds:80, td:0}] },
            { name: "Devaughn Vele", pos: "WR", td: 1, yds: "150 yds", rec: "11/16 rec", marketOdds: 3.50, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] },
            { name: "Juwan Johnson", pos: "TE", td: 1, yds: "180 yds", rec: "15/21 rec", marketOdds: 2.80, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Cameron Jordan (EDGE)", sacks: "2.5 Sacks", pressures: "15 Pressures", tackles: "17 Tackles", probability: "50%", status: "ACTIVE" },
            { name: "Demario Davis (LB)", sacks: "1.0 Sacks", pressures: "8 Pressures", tackles: "41 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Giants": {
        record: "1-3", games: 4, rush: 430, pass: 890, oppPass: 990, oppRush: 480, oppTD: 12, turnovers: 6, sacks: 10, redZonePct: 48, thirdDownPct: 36, penalties: 26,
        injuredPlayers: [{name: "Braxton Berrios", pos: "WR"}, {name: "Paulson Adebo", pos: "CB"}, {name: "Korie Black", pos: "CB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Malik Nabers", pos: "WR", td: 4, yds: "440 yds", rec: "32/45 rec", marketOdds: 1.80, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:110, td:2}, {w:3, yds:115, td:1}, {w:4, yds:115, td:0}] },
            { name: "Cam Skattebo", pos: "RB", td: 3, yds: "330 yds", rec: "14/19 rec", marketOdds: 2.15, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "Malachi Fields", pos: "WR", td: 1, yds: "240 yds", rec: "25/34 rec", marketOdds: 2.50, gameLog: [{w:1, yds:60, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:60, td:0}] },
            { name: "Darnell Mooney", pos: "WR", td: 1, yds: "190 yds", rec: "13/20 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Isaiah Likely", pos: "TE", td: 1, yds: "150 yds", rec: "13/18 rec", marketOdds: 3.30, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Dexter Lawrence (DT)", sacks: "5.0 Sacks", pressures: "24 Pressures", tackles: "19 Tackles", probability: "70%", status: "ACTIVE" },
            { name: "Brian Burns (EDGE)", sacks: "3.0 Sacks", pressures: "20 Pressures", tackles: "17 Tackles", probability: "60%", status: "ACTIVE" }
        ]
    },
    "Jets": {
        record: "2-2", games: 4, rush: 520, pass: 880, oppPass: 920, oppRush: 410, oppTD: 8, turnovers: 4, sacks: 11, redZonePct: 60, thirdDownPct: 42, penalties: 20,
        injuredPlayers: [{name: "David Onyemata", pos: "DE"}, {name: "Marcelino McCrary-Ball", pos: "ILB"}, {name: "Arian Smith", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Breece Hall", pos: "RB", td: 4, yds: "450 yds", rec: "16/22 rec", marketOdds: 1.70, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:115, td:1}, {w:3, yds:110, td:1}, {w:4, yds:115, td:1}] },
            { name: "Garrett Wilson", pos: "WR", td: 3, yds: "380 yds", rec: "27/38 rec", marketOdds: 1.80, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:95, td:0}] },
            { name: "Adonai Mitchell", pos: "WR", td: 2, yds: "260 yds", rec: "19/28 rec", marketOdds: 2.40, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Isaiah Williams", pos: "WR", td: 1, yds: "180 yds", rec: "13/19 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Mason Taylor", pos: "TE", td: 1, yds: "150 yds", rec: "14/18 rec", marketOdds: 3.30, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Demario Davis (LB)", sacks: "2.0 Sacks", pressures: "15 Pressures", tackles: "40 Tackles", probability: "50%", status: "ACTIVE" },
            { name: "Minkah Fitzpatrick (S)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "30 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Eagles": {
        record: "2-2", games: 4, rush: 660, pass: 920, oppPass: 970, oppRush: 430, oppTD: 9, turnovers: 5, sacks: 11, redZonePct: 65, thirdDownPct: 44, penalties: 22,
        injuredPlayers: [{name: "Landon Dickerson", pos: "OG"}, {name: "Eli Stowers", pos: "TE"}, {name: "Jakorian Bennett", pos: "CB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Saquon Barkley", pos: "RB", td: 5, yds: "490 yds", rec: "16/22 rec", marketOdds: 1.60, gameLog: [{w:1, yds:120, td:2}, {w:2, yds:110, td:1}, {w:3, yds:125, td:1}, {w:4, yds:135, td:1}] },
            { name: "A.J. Brown", pos: "WR", td: 3, yds: "340 yds", rec: "23/32 rec", marketOdds: 1.85, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:0, td:0}, {w:3, yds:0, td:0}, {w:4, yds:115, td:2}] },
            { name: "Jalen Hurts", pos: "QB", td: 3, yds: "230 rush yds", rec: "Dual Threat QB", marketOdds: 1.85, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:35, td:0}, {w:3, yds:40, td:1}, {w:4, yds:35, td:1}] },
            { name: "DeVonta Smith", pos: "WR", td: 2, yds: "310 yds", rec: "21/29 rec", marketOdds: 2.10, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}] },
            { name: "Dontayvion Wicks", pos: "WR", td: 1, yds: "190 yds", rec: "13/19 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Jalen Carter (DT)", sacks: "2.5 Sacks", pressures: "17 Pressures", tackles: "18 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Josh Sweat (EDGE)", sacks: "3.0 Sacks", pressures: "19 Pressures", tackles: "15 Tackles", probability: "60%", status: "ACTIVE" }
        ]
    },
    "Steelers": {
        record: "3-1", games: 4, rush: 530, pass: 810, oppPass: 830, oppRush: 330, oppTD: 6, turnovers: 2, sacks: 14, redZonePct: 62, thirdDownPct: 47, penalties: 18,
        injuredPlayers: [{name: "Derrick Harmon", pos: "DE"}, {name: "Gennings Dunker", pos: "OG"}, {name: "DeShon Elliott", pos: "S"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 180, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 40, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "DK Metcalf", pos: "WR", td: 3, yds: "380 yds", rec: "25/35 rec", marketOdds: 1.85, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:95, td:0}] },
            { name: "Michael Pittman Jr.", pos: "WR", td: 2, yds: "320 yds", rec: "21/32 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:0}, {w:4, yds:85, td:0}] },
            { name: "Pat Freiermuth", pos: "TE", td: 2, yds: "210 yds", rec: "19/24 rec", marketOdds: 2.40, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Jaylen Warren", pos: "RB", td: 2, yds: "360 yds", rec: "13/18 rec", marketOdds: 2.20, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:0}, {w:4, yds:95, td:0}] },
            { name: "Roman Wilson", pos: "WR", td: 1, yds: "160 yds", rec: "12/18 rec", marketOdds: 3.40, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "T.J. Watt (EDGE)", sacks: "6.0 Sacks", pressures: "28 Pressures", tackles: "19 Tackles", probability: "85%", status: "ACTIVE" },
            { name: "Minkah Fitzpatrick (S)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "31 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Seahawks": {
        record: "3-1", games: 4, rush: 500, pass: 1060, oppPass: 910, oppRush: 390, oppTD: 8, turnovers: 4, sacks: 12, redZonePct: 66, thirdDownPct: 46, penalties: 21,
        injuredPlayers: [{name: "Jadarian Price", pos: "RB"}, {name: "Anthony Bradford", pos: "OG"}, {name: "Irv Charles", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Emanuel Wilson", pos: "RB", td: 4, yds: "340 yds", rec: "11/15 rec", marketOdds: 1.90, gameLog: [{w:1, yds:110, td:2}, {w:2, yds:75, td:1}, {w:3, yds:75, td:1}, {w:4, yds:80, td:0}] },
            { name: "Rashid Shaheed", pos: "WR", td: 3, yds: "380 yds", rec: "25/35 rec", marketOdds: 1.85, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:95, td:0}] },
            { name: "Jaxon Smith-Njigba", pos: "WR", td: 2, yds: "310 yds", rec: "24/33 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Cooper Kupp", pos: "WR", td: 2, yds: "270 yds", rec: "20/28 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "AJ Barner", pos: "TE", td: 1, yds: "180 yds", rec: "16/22 rec", marketOdds: 2.90, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Boye Mafe (EDGE)", sacks: "4.5 Sacks", pressures: "21 Pressures", tackles: "16 Tackles", probability: "65%", status: "ACTIVE" },
            { name: "Devon Witherspoon (CB)", sacks: "1.0 Sacks", pressures: "3 Pressures", tackles: "24 Tackles", probability: "40%", status: "ACTIVE" }
        ]
    },
    "49ers": {
        record: "2-2", games: 4, rush: 600, pass: 1040, oppPass: 880, oppRush: 380, oppTD: 8, turnovers: 4, sacks: 13, redZonePct: 66, thirdDownPct: 47, penalties: 21,
        injuredPlayers: [{name: "Demarcus Robinson", pos: "WR"}, {name: "C.J. West", pos: "DT"}, {name: "Jake Tonges", pos: "TE"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Christian McCaffrey", pos: "RB", td: 4, yds: "520 yds", rec: "11/15 rec", marketOdds: 1.65, gameLog: [{w:1, yds:130, td:1}, {w:2, yds:120, td:1}, {w:3, yds:135, td:1}, {w:4, yds:135, td:1}] },
            { name: "Mike Evans", pos: "WR", td: 3, yds: "340 yds", rec: "24/33 rec", marketOdds: 1.90, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:85, td:1}, {w:4, yds:80, td:0}] },
            { name: "George Kittle", pos: "TE", td: 3, yds: "290 yds", rec: "23/30 rec", marketOdds: 1.95, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:1}, {w:4, yds:75, td:0}] },
            { name: "Brandin Cooks", pos: "WR", td: 2, yds: "320 yds", rec: "22/31 rec", marketOdds: 2.05, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:0}, {w:4, yds:85, td:0}] },
            { name: "Deebo Samuel Sr.", pos: "WR", td: 2, yds: "240 yds", rec: "15/21 rec", marketOdds: 2.60, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] }
        ],
        defenders: [
            { name: "Nick Bosa (EDGE)", sacks: "5.0 Sacks", pressures: "27 Pressures", tackles: "17 Tackles", probability: "80%", status: "ACTIVE" },
            { name: "Fred Warner (LB)", sacks: "1.5 Sacks", pressures: "9 Pressures", tackles: "42 Tackles", probability: "55%", status: "ACTIVE" }
        ]
    },
    "Buccaneers": {
        record: "3-1", games: 4, rush: 470, pass: 1000, oppPass: 940, oppRush: 420, oppTD: 9, turnovers: 4, sacks: 10, redZonePct: 65, thirdDownPct: 45, penalties: 22,
        injuredPlayers: [{name: "Jalen McMillan", pos: "WR"}, {name: "Josh Hayes", pos: "CB"}, {name: "David Sills V", pos: "WR"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Emeka Egbuka", pos: "WR", td: 4, yds: "330 yds", rec: "22/33 rec", marketOdds: 1.80, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:1}] },
            { name: "Chris Godwin Jr.", pos: "WR", td: 3, yds: "380 yds", rec: "30/38 rec", marketOdds: 1.85, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:95, td:0}] },
            { name: "Bucky Irving", pos: "RB", td: 2, yds: "350 yds", rec: "15/20 rec", marketOdds: 2.25, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:90, td:0}, {w:3, yds:90, td:1}, {w:4, yds:90, td:0}] },
            { name: "Tez Johnson", pos: "WR", td: 1, yds: "160 yds", rec: "12/18 rec", marketOdds: 3.30, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] },
            { name: "Cade Otton", pos: "TE", td: 1, yds: "190 yds", rec: "17/23 rec", marketOdds: 2.70, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Vita Vea (DT)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "18 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Antoine Winfield Jr. (S)", sacks: "1.0 Sacks", pressures: "4 Pressures", tackles: "29 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Titans": {
        record: "1-3", games: 4, rush: 480, pass: 780, oppPass: 880, oppRush: 390, oppTD: 11, turnovers: 8, sacks: 10, redZonePct: 46, thirdDownPct: 35, penalties: 28,
        injuredPlayers: [{name: "Fernando Carmona Jr.", pos: "OG"}, {name: "Jackson Slater", pos: "OG"}, {name: "Joshua Williams", pos: "CB"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Tony Pollard", pos: "RB", td: 3, yds: "380 yds", rec: "14/19 rec", marketOdds: 2.05, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:0}] },
            { name: "Elic Ayomanor", pos: "WR", td: 2, yds: "260 yds", rec: "18/31 rec", marketOdds: 2.30, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Calvin Ridley", pos: "WR", td: 2, yds: "220 yds", rec: "16/24 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Wan'Dale Robinson", pos: "WR", td: 1, yds: "180 yds", rec: "15/21 rec", marketOdds: 3.00, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Gunnar Helm", pos: "TE", td: 1, yds: "150 yds", rec: "13/18 rec", marketOdds: 3.20, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Jeffery Simmons (DT)", sacks: "3.0 Sacks", pressures: "17 Pressures", tackles: "19 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Harold Landry III (EDGE)", sacks: "4.5 Sacks", pressures: "21 Pressures", tackles: "17 Tackles", probability: "65%", status: "ACTIVE" }
        ]
    },
    "Commanders": {
        record: "3-1", games: 4, rush: 630, pass: 940, oppPass: 1000, oppRush: 460, oppTD: 10, turnovers: 3, sacks: 9, redZonePct: 70, thirdDownPct: 48, penalties: 19,
        injuredPlayers: [],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 3 } },
        players: [
            { name: "Jacory Croskey-Merritt", pos: "RB", td: 5, yds: "410 yds", rec: "9/13 rec", marketOdds: 1.70, gameLog: [{w:1, yds:100, td:2}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "Terry McLaurin", pos: "WR", td: 3, yds: "350 yds", rec: "25/34 rec", marketOdds: 1.85, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}] },
            { name: "Stefon Diggs", pos: "WR", td: 2, yds: "280 yds", rec: "20/29 rec", marketOdds: 2.15, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:70, td:0}] },
            { name: "Chig Okonkwo", pos: "TE", td: 2, yds: "210 yds", rec: "19/26 rec", marketOdds: 2.40, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Dyami Brown", pos: "WR", td: 1, yds: "190 yds", rec: "13/19 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Daron Payne (DT)", sacks: "2.5 Sacks", pressures: "15 Pressures", tackles: "20 Tackles", probability: "45%", status: "ACTIVE" },
            { name: "Frankie Luvu (LB)", sacks: "2.0 Sacks", pressures: "10 Pressures", tackles: "38 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    }
};

let nflSchedule = {
    "5": [
        { away: "New York Jets", home: "Miami Dolphins", weather: "🏟 Sisäkenttä (Dome)" },
        { away: "Baltimore Ravens", home: "Houston Texans", weather: "🏟 Sisäkenttä (Dome)" },
        { away: "Carolina Panthers", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Minnesota Vikings", home: "Cleveland Browns", weather: "🌧️ Sade (10°C)" },
        { away: "New England Patriots", home: "Denver Broncos", weather: "☀ Poutainen (14°C)" },
        { away: "Philadelphia Eagles", home: "New York Giants", weather: "❄️ Viileä (6°C)" },
        { away: "Green Bay Packers", home: "Los Angeles Rams", weather: "☀ Aurinkoinen (20°C)" },
        { away: "Las Vegas Raiders", home: "Washington Commanders", weather: "🌧️ Kevyt sade (12°C)" },
        { away: "Arizona Cardinals", home: "San Francisco 49ers", weather: "☀️ Kirkas (18°C)" },
        { away: "Kansas City Chiefs", home: "Jacksonville Jaguars", weather: "☀️ Puolipilvinen (22°C)" },
        { away: "Seattle Seahawks", home: "Dallas Cowboys", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Cincinnati Bengals", home: "Pittsburgh Steelers", weather: "💨 Tuulinen (8°C)" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', async () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    const selectedWeek = weekSelect ? weekSelect.value : "5";
    
    let liveData = null;
    try {
        const fetchPromise = fetchRealTimeNFLData(selectedWeek);
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 4000));
        liveData = await Promise.race([fetchPromise, timeoutPromise]);
    } catch (e) {
        console.warn("Verkkohaku kesti liikaa tai epäonnistui, siirrytään suoraan paikalliseen ohjelmaan.");
    }

    if (liveData && liveData.events && liveData.events.length > 0) {
        const liveMatches = liveData.events.map(event => {
            const competition = event.competitions[0];
            const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home');
            const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away');
            
            let weather = "🏟️ Sisäkenttä (Dome)";
            if (competition.weather && competition.weather.displayValue) {
                weather = `🌤 ${competition.weather.displayValue}`;
            }

            return {
                away: awayCompetitor ? awayCompetitor.team.displayName : "Away Team",
                home: homeCompetitor ? homeCompetitor.team.displayName : "Home Team",
                weather: weather
            };
        });

        if (liveMatches.length > 0) {
            nflSchedule[selectedWeek] = liveMatches;
        }
    }

    function updateMatches() {
        const currentWeek = weekSelect.value;
        matchSelect.innerHTML = '';
        const matches = nflSchedule[currentWeek] || [];
        
        matches.forEach((m, index) => {
            const opt = document.createElement('option');
            opt.value = index;
            opt.textContent = `${m.away} @ ${m.home}`;
            matchSelect.appendChild(opt);
        });
        runMonteCarloSimulation();
    }

    if (weekSelect) weekSelect.addEventListener('change', updateMatches);
    if (matchSelect) matchSelect.addEventListener('change', runMonteCarloSimulation);
    if (compareBtn) compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

function findTeamKey(teamName) {
    if (teamName.includes("49ers")) return "49ers";
    return Object.keys(nflDatabase).find(k => teamName.includes(k)) || "Chiefs";
}

function calculateTeamInjuryFactor(injuredList) {
    let penalty = 1.0;
    injuredList.forEach(p => {
        if (p.pos === "QB") penalty -= 0.22;
        else if (p.pos === "RB" || p.pos === "WR" || p.pos === "TE") penalty -= 0.05;
        else penalty -= 0.03;
    });
    return Math.max(0.5, penalty);
}

function calculateWeatherFactor(weatherString) {
    if (weatherString.includes("Dome") || weatherString.includes("Sisäkenttä")) {
        return 1.03; 
    }
    if (weatherString.includes("Sade") || weatherString.includes("Rankkasade")) {
        return 0.90; 
    }
    if (weatherString.includes("Tuulinen")) {
        return 0.94; 
    }
    if (weatherString.includes("Viileä") || weatherString.includes("Kylmä")) {
        return 0.97;
    }
    return 1.0; 
}

function runMonteCarloSimulation() {
    const selectedWeek = document.getElementById('weekSelect').value;
    const matchIndex = document.getElementById('matchSelect').value;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const homeData = nflDatabase[homeKey] || nflDatabase["Chiefs"];
    const awayData = nflDatabase[awayKey] || nflDatabase["Rams"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData.injuredPlayers);

    let weatherFactor = calculateWeatherFactor(match.weather);

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    function simulateAdvancedScore(team, opp, isHome, injuryPenalty) {
        let totalYds = team.rush + team.pass;
        let oppDefFactor = (opp.oppPass + opp.oppRush) / (team.games * 700);
        
        let basePower = ((totalYds / (team.games * 350)) / Math.max(0.8, oppDefFactor)) * (team.redZonePct / 60) * (team.thirdDownPct / 40);
        
        if (isHome) basePower *= 1.06;
        basePower *= weatherFactor;
        basePower *= injuryPenalty;

        let penaltiesDeduction = (team.penalties * 0.005) + (opp.sacks * 0.01) + (opp.turnovers * 0.02);
        let netFactor = Math.max(0.4, basePower - penaltiesDeduction);

        let index = Math.floor(Math.random() * VALID_SCORES.length);
        if (netFactor > 1.25 && index < VALID_SCORES.length - 4) index += 3;
        else if (netFactor > 1.1 && index < VALID_SCORES.length - 2) index += 2;
        else if (netFactor < 0.8 && index > 3) index -= 2;

        return VALID_SCORES[Math.max(0, Math.min(VALID_SCORES.length - 1, index))];
    }

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let hScore = simulateAdvancedScore(homeData, awayData, true, homeInjuryPenalty);
        let aScore = simulateAdvancedScore(awayData, homeData, false, awayInjuryPenalty);
        
        if (hScore === aScore) hScore += Math.random() > 0.45 ? 3 : 0;

        homeScoreSum += hScore;
        awayScoreSum += aScore;
        if (hScore > aScore) homeWins++;
    }

    let avgHomeScore = Math.round((homeScoreSum / SIM_ITERATIONS) / 3) * 3;
    let avgAwayScore = Math.round((awayScoreSum / SIM_ITERATIONS) / 3) * 3;
    if (avgHomeScore === avgAwayScore) avgHomeScore += 3;

    let homeWinProb = Math.round((homeWins / SIM_ITERATIONS) * 100);

    const homePassPG = Math.round(homeData.pass / homeData.games);
    const homeRushPG = Math.round(homeData.rush / homeData.games);
    const awayPassPG = Math.round(awayData.pass / awayData.games);
    const awayRushPG = Math.round(awayData.rush / awayData.games);

    const homeOppPassPG = Math.round(homeData.oppPass / homeData.games);
    const homeOppRushPG = Math.round(homeData.oppRush / homeData.games);
    const awayOppPassPG = Math.round(awayData.oppPass / awayData.games);
    const awayOppRushPG = Math.round(awayData.oppRush / awayData.games);

    const homeTDEval = getTDProbabilityText(homePassPG, homeRushPG, awayOppPassPG, awayOppRushPG);
    const awayTDEval = getTDProbabilityText(awayPassPG, awayRushPG, homeOppPassPG, homeOppRushPG);

    let homeInjuriesText = homeData.injuredPlayers.length > 0 ? `<br>🚑 <strong>Poissaolot:</strong> <span style="color: #f87171;">${homeData.injuredPlayers.map(p => `${p.name} (${p.pos})`).join(', ')}</span>` : `<br>🟢 Kokoonpano kunnossa`;
    let awayInjuriesText = awayData.injuredPlayers.length > 0 ? `<br>🚑 <strong>Poissaolot:</strong> <span style="color: #f87171;">${awayData.injuredPlayers.map(p => `${p.name} (${p.pos})`).join(', ')}</span>` : `<br>🟢 Kokoonpano kunnossa`;

    document.getElementById('homeTitle').innerText = `${match.home} (${homeData.record}) 🏟️`;
    document.getElementById('awayTitle').innerText = `${match.away} (${awayData.record})`;

    document.getElementById('homeStats').innerHTML = `
        🌤 <strong>Olosuhteet:</strong> ${match.weather}<br>
        📊 <strong>Hyökkäys / peli:</strong> Heitto ${homePassPG} yds | Juoksu ${homeRushPG} yds<br>
        🛡 <strong>Vastustaja (${match.away}) päästää / peli:</strong> Heitto ${awayOppPassPG} yds | Juoksu ${awayOppRushPG} yds<br>
        ⚡ <strong>TD-arvio:</strong> <span style="color: #38bdf8;">${homeTDEval}</span>
        ${homeInjuriesText}
    `;
    
    document.getElementById('awayStats').innerHTML = `
        🌤️ <strong>Olosuhteet:</strong> ${match.weather}<br>
        📊 <strong>Hyökkäys / peli:</strong> Heitto ${awayPassPG} yds | Juoksu ${awayRushPG} yds<br>
        🛡️ <strong>Vastustaja (${match.home}) päästää / peli:</strong> Heitto ${homeOppPassPG} yds | Juoksu ${homeOppRushPG} yds<br>
        ⚡ <strong>TD-arvio:</strong> <span style="color: #38bdf8;">${awayTDEval}</span>
        ${awayInjuriesText}
    `;

    document.getElementById('homeScoreNum').innerText = avgHomeScore;
    document.getElementById('awayScoreNum').innerText = avgAwayScore;

    document.getElementById('homeWinProb').innerText = `${homeKey}: ${homeWinProb}%`;
    document.getElementById('awayWinProb').innerText = `${awayKey}: ${100 - homeWinProb}%`;
    document.getElementById('probBar').style.width = `${homeWinProb}%`;

    let homeEstimatedTDs = avgHomeScore / 7;
    let awayEstimatedTDs = avgAwayScore / 7;

    renderPlayersWithRecencyAndPoisson('homePlayers', homeData.players, homeData.defenders, homeEstimatedTDs, awayData.defensiveVsPosition, homeData.injuredPlayers);
    renderPlayersWithRecencyAndPoisson('awayPlayers', awayData.players, awayData.defenders, awayEstimatedTDs, homeData.defensiveVsPosition, awayData.injuredPlayers);

    renderSmartBettingTipsWithValue(match, homeData.players, awayData.players, homeEstimatedTDs, awayEstimatedTDs, awayData.defensiveVsPosition, homeData.defensiveVsPosition);
}

function getTDProbabilityText(teamPass, teamRush, oppPassAllowed, oppRushAllowed) {
    let passDiff = teamPass - oppPassAllowed;
    let rushDiff = teamRush - oppRushAllowed;
    let totalAdvantage = passDiff + rushDiff;

    if (totalAdvantage > 60) return "Erittäin korkea todennäköisyys murtaa vastustajan puolustus (Useita TD-mahdollisuuksia)";
    if (totalAdvantage > 0) return "Hyvä todennäköisyys; hyökkäys tuottaa tasaisesti jaardeja ja paikkoja";
    if (totalAdvantage > -50) return "Kohtalainen todennäköisyys; vastustajan puolustus pitää pintansa tiukoissa paikoissa";
    return "Matala todennäköisyys; vaikeuksia edetä red zonelle asti";
}

function renderPlayersWithRecencyAndPoisson(containerId, players, defenders, teamEstimatedTDs, oppDefVsPos, injuredList) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    let injuredNames = injuredList.map(i => i.name.toLowerCase());
    
    let uniquePlayers = [];
    let seenNames = new Set();
    players.forEach(p => {
        let cleanName = p.name.trim();
        if (!seenNames.has(cleanName)) {
            seenNames.add(cleanName);
            uniquePlayers.push(p);
        }
    });

    let processedPlayers = uniquePlayers.map(p => {
        let isInjured = injuredNames.some(inj => inj.includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(inj));
        return { ...p, isInjured };
    });

    let healthyPlayers = processedPlayers.filter(p => !p.isInjured);
    let totalHealthyTDs = healthyPlayers.reduce((sum, p) => sum + (p.pos === "QB" ? 0 : p.td), 0);
    if (totalHealthyTDs === 0) totalHealthyTDs = 1;

    processedPlayers.forEach(p => {
        let recentFormMultiplier = 1.0;
        if (p.gameLog && p.gameLog.length > 0) {
            let lastGame = p.gameLog[p.gameLog.length - 1];
            let avgYds = p.gameLog.reduce((sum, g) => sum + g.yds, 0) / p.gameLog.length;
            if (lastGame.yds > avgYds * 1.2) recentFormMultiplier = 1.15;
            else if (lastGame.yds < avgYds * 0.8) recentFormMultiplier = 0.85;
        }

        let posKey = `vs${p.pos}`;
        let defFactor = 1.0;
        if (oppDefVsPos && oppDefVsPos[posKey]) {
            defFactor = oppDefVsPos[posKey].allowedTDs > 3 ? 1.15 : 0.90;
        }

        let lambda = 0;
        if (!p.isInjured) {
            if (p.pos === "QB") {
                let hasRushStats = p.yds && p.yds.toLowerCase().includes("rush");
                let qbBaseTDs = p.td || 0;
                
                if (hasRushStats || qbBaseTDs > 0) {
                    let rushFactor = hasRushStats ? 0.25 : 0.08;
                    lambda = (teamEstimatedTDs * rushFactor * recentFormMultiplier);
                } else {
                    lambda = (teamEstimatedTDs * 0.03) * recentFormMultiplier;
                }
            } else {
                let marketShare = p.td / totalHealthyTDs;
                lambda = (teamEstimatedTDs * marketShare * recentFormMultiplier * defFactor);
            }
            if (lambda < 0.02) lambda = 0.02;
        }

        let probability = p.isInjured ? 0 : (1 - Math.exp(-lambda));
        let tdProbPercent = Math.round(probability * 100);

        const div = document.createElement('div');
        div.className = 'player-row';
        
        if (p.isInjured) {
            div.style.borderColor = '#ef4444';
            div.style.backgroundColor = '#450a0a';
        }

        div.innerHTML = `
            <div>
                <strong>${p.name} (${p.pos})</strong> ${p.isInjured ? '<span style="color: #f87171; font-size: 11px; font-weight: bold;">(OUT 🚑)</span>' : ''}
                <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">
                    <span style="color: #38bdf8; font-weight: bold;">${p.td} TD</span> | ${p.yds} | Rec: <strong>${p.rec}</strong>
                </div>
            </div>
            <div class="odd-badge" style="${p.isInjured ? 'background: #7f1d1d; border-color: #ef4444;' : ''}">
                <span>1+ TD</span>
                <strong style="${p.isInjured ? 'color: #fca5a5;' : ''}">${p.isInjured ? 'OUT' : tdProbPercent + '%'}</strong>
            </div>
        `;
        container.appendChild(div);
    });

    if (defenders && defenders.length > 0) {
        const defenseTitle = document.createElement('div');
        defenseTitle.className = 'players-section-title';
        defenseTitle.style.cssText = 'margin-top: 20px; margin-bottom: 8px; font-weight: bold; color: #38bdf8; font-size: 14px; border-top: 1px solid #334155; pt: 10px;';
        defenseTitle.innerHTML = '⭐ Puolustuksen Avainpelaajat & Säkkitodennäköisyydet';
        container.appendChild(defenseTitle);

        defenders.forEach(def => {
            const isOut = def.status === "OUT";
            const defDiv = document.createElement('div');
            defDiv.className = `player-row ${isOut ? 'player-out' : ''}`;
            if (isOut) {
                defDiv.style.borderColor = '#ef4444';
                defDiv.style.backgroundColor = '#450a0a';
            }

            defDiv.innerHTML = `
                <div>
                    <strong>${def.name}</strong> ${isOut ? '<span style="color: #f87171; font-size: 11px; font-weight: bold;">(OUT 🚑)</span>' : ''}
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">
                        <span>${def.sacks}</span> | <span>${def.pressures}</span> | <span>${def.tackles}</span>
                    </div>
                </div>
                <div class="odd-badge" style="${isOut ? 'background: #7f1d1d; border-color: #ef4444;' : ''}">
                    <span>1+ Sack</span>
                    <strong style="${isOut ? 'color: #fca5a5;' : ''}">${isOut ? 'OUT' : def.probability}</strong>
                </div>
            `;
            container.appendChild(defDiv);
        });
    }
}

function renderSmartBettingTipsWithValue(match, homePlayers, awayPlayers, homeEstimatedTDs, awayEstimatedTDs, homeOppDef, awayOppDef) {
    let tipBox = document.getElementById('smartBettingTipsContainer');
    if (!tipBox) {
        tipBox = document.createElement('div');
        tipBox.id = 'smartBettingTipsContainer';
        tipBox.style.marginTop = '20px';
        tipBox.style.padding = '15px';
        tipBox.style.background = '#1e293b';
        tipBox.style.borderRadius = '12px';
        tipBox.style.border = '1px solid #334155';
        document.querySelector('.container').appendChild(tipBox);
    }

    let valueBets = [];

    function evaluateTeamValue(players, teamTDs, oppDef) {
        let totalPlayerTDs = players.reduce((sum, p) => sum + (p.pos === "QB" ? 0 : p.td), 0);
        if (totalPlayerTDs === 0) totalPlayerTDs = 1;

        players.forEach(p => {
            if (p.pos === "QB") return;
            let marketShare = p.td / totalPlayerTDs;
            let defFactor = oppDef?.[`vs${p.pos}`]?.allowedTDs > 3 ? 1.15 : 0.95;
            let lambda = (teamTDs * marketShare) * defFactor;
            if (lambda < 0.02) lambda = 0.02;

            let calcProb = 1 - Math.exp(-lambda);
            if (p.marketOdds) {
                let impliedMarketProb = 1 / p.marketOdds;
                let edge = calcProb - impliedMarketProb;
                valueBets.push({
                    name: p.name,
                    pos: p.pos,
                    odds: p.marketOdds,
                    calcProb: Math.round(calcProb * 100),
                    edge: Math.round(edge * 100)
                });
            }
        });
    }

    evaluateTeamValue(homePlayers, homeEstimatedTDs, awayOppDef);
    evaluateTeamValue(awayPlayers, awayEstimatedTDs, homeOppDef);

    valueBets.sort((a, b) => b.edge - a.edge);
    let topValue = valueBets[0] ? `🔥 ${valueBets[0].name} (${valueBets[0].pos}) – Kerroin: ${valueBets[0].odds} (Mallin arvio: ${valueBets[0].calcProb}%, Edge: +${valueBets[0].edge}%)` : "Ei löydetty ylikertoimia";

    tipBox.innerHTML = `
        <h3 style="margin-top: 0; color: #38bdf8; margin-bottom: 10px;">📈 TD-Vetovihjeet & Markkinoiden ylikertoimet (Value Bets)</h3>
        <div style="font-size: 13px; line-height: 1.6;">
            <div>⭐ <strong>Paras löydetty arvokohde:</strong> <span style="color: #f59e0b;">${topValue}</span></div>
            <div style="color: #94a3b8; font-size: 11px; margin-top: 5px;">* Perustuu Poisson-todennäköisyyden, viikoittaisen vireen, loukkaantumisten ja markkinakertoimien vertailuun.</div>
        </div>
    `;
}
