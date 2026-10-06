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

// Täydellinen 32 joukkueen NFL-tietokanta hyökkääjillä JA puolustuksen avainpelaajilla
const nflDatabase = {
    "Rams": { 
        record: "2-2", games: 4, rush: 520, pass: 1100, oppPass: 950, oppRush: 440, oppTD: 9, turnovers: 5, sacks: 10, redZonePct: 58, thirdDownPct: 41, penalties: 22, 
        injuredPlayers: [{name: "Terrance Ferguson", pos: "TE"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 2 } },
        players: [
            { name: "Davante Adams", pos: "WR", td: 4, yds: "490 yds", rec: "34/44 rec", marketOdds: 1.85, gameLog: [{w:1, yds:110, td:1}, {w:2, yds:90, td:0}, {w:3, yds:140, td:2}, {w:4, yds:150, td:1}] },
            { name: "Williams", pos: "RB", td: 3, yds: "410 total yds", rec: "16/20 rec", marketOdds: 2.10, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:120, td:1}, {w:3, yds:90, td:0}, {w:4, yds:120, td:1}] },
            { name: "Higbee", pos: "TE", td: 1, yds: "95 yds", rec: "10/14 rec", marketOdds: 3.50, gameLog: [{w:1, yds:20, td:0}, {w:2, yds:35, td:1}, {w:3, yds:10, td:0}, {w:4, yds:30, td:0}] },
            { name: "Stafford", pos: "QB", td: 1, yds: "45 yds", rec: "Passing QB", marketOdds: 4.20, gameLog: [{w:1, yds:10, td:0}, {w:2, yds:15, td:0}, {w:3, yds:0, td:0}, {w:4, yds:20, td:1}] }
        ],
        defenders: [
            { name: "Kobie Turner (DT)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "24 Tackles", probability: "62%", status: "ACTIVE" },
            { name: "Byron Young (EDGE)", sacks: "3.5 Sacks", pressures: "19 Pressures", tackles: "18 Tackles", probability: "55%", status: "ACTIVE" }
        ]
    },
    "Broncos": { 
        record: "2-2", games: 4, rush: 310, pass: 780, oppPass: 890, oppRush: 400, oppTD: 9, turnovers: 4, sacks: 12, redZonePct: 52, thirdDownPct: 39, penalties: 26, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Bryant II", pos: "WR", td: 2, yds: "130 yds", rec: "9/13 rec", marketOdds: 2.60, gameLog: [{w:1, yds:30, td:0}, {w:2, yds:40, td:1}, {w:3, yds:20, td:0}, {w:4, yds:40, td:1}] },
            { name: "Adkins", pos: "TE", td: 2, yds: "55 yds", rec: "7/10 rec", marketOdds: 3.10, gameLog: [{w:1, yds:10, td:0}, {w:2, yds:15, td:1}, {w:3, yds:10, td:0}, {w:4, yds:20, td:1}] },
            { name: "Engram", pos: "TE", td: 1, yds: "75 yds", rec: "8/12 rec", marketOdds: 3.40, gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:1}, {w:3, yds:15, td:0}, {w:4, yds:15, td:0}] },
            { name: "Williams", pos: "RB", td: 1, yds: "210 yds", rec: "11/15 rec", marketOdds: 2.30, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:60, td:1}, {w:3, yds:40, td:0}, {w:4, yds:60, td:0}] }
        ],
        defenders: [
            { name: "Nik Bonitto (EDGE)", sacks: "5.0 Sacks", pressures: "26 Pressures", tackles: "19 Tackles", probability: "74%", status: "ACTIVE" },
            { name: "Zach Allen (DE)", sacks: "3.0 Sacks", pressures: "22 Pressures", tackles: "27 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Bills": { 
        record: "3-1", games: 4, rush: 590, pass: 1020, oppPass: 850, oppRush: 380, oppTD: 11, turnovers: 3, sacks: 8, redZonePct: 70, thirdDownPct: 47, penalties: 20, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Allen", pos: "QB", td: 8, yds: "160 rush yds", rec: "Passing QB", marketOdds: 1.90, gameLog: [{w:1, yds:40, td:2}, {w:2, yds:50, td:2}, {w:3, yds:30, td:1}, {w:4, yds:40, td:3}] },
            { name: "Cook", pos: "RB", td: 3, yds: "470 yds", rec: "18/23 rec", marketOdds: 2.10, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:110, td:1}, {w:3, yds:120, td:1}, {w:4, yds:140, td:0}] },
            { name: "Moore", pos: "WR", td: 2, yds: "210 yds", rec: "14/20 rec", marketOdds: 2.80, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:40, td:0}, {w:4, yds:60, td:0}] },
            { name: "Kincaid", pos: "TE", td: 1, yds: "130 yds", rec: "12/16 rec", marketOdds: 3.20, gameLog: [{w:1, yds:30, td:0}, {w:2, yds:40, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Greg Rousseau (EDGE)", sacks: "4.0 Sacks", pressures: "23 Pressures", tackles: "20 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "A.J. Epenesa (DE)", sacks: "2.5 Sacks", pressures: "14 Pressures", tackles: "15 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Chargers": { 
        record: "0-4", games: 4, rush: 430, pass: 810, oppPass: 1010, oppRush: 490, oppTD: 11, turnovers: 8, sacks: 14, redZonePct: 39, thirdDownPct: 31, penalties: 31, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 110, allowedTDs: 3 } },
        players: [
            { name: "Hampton", pos: "RB", td: 2, yds: "240 yds", rec: "13/18 rec", marketOdds: 2.50, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:50, td:0}, {w:3, yds:70, td:1}, {w:4, yds:60, td:0}] },
            { name: "McConkley", pos: "WR", td: 2, yds: "230 yds", rec: "16/25 rec", marketOdds: 2.70, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:60, td:0}] },
            { name: "Palmer", pos: "WR", td: 1, yds: "170 yds", rec: "12/19 rec", marketOdds: 3.30, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Khalil Mack (EDGE)", sacks: "4.5 Sacks", pressures: "25 Pressures", tackles: "17 Tackles", probability: "68%", status: "ACTIVE" },
            { name: "Joey Bosa (EDGE)", sacks: "3.0 Sacks", pressures: "18 Pressures", tackles: "12 Tackles", probability: "52%", status: "ACTIVE" }
        ]
    },
    "Browns": { 
        record: "3-1", games: 4, rush: 360, pass: 790, oppPass: 810, oppRush: 350, oppTD: 8, turnovers: 3, sacks: 11, redZonePct: 56, thirdDownPct: 39, penalties: 24, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Boston", pos: "WR", td: 3, yds: "260 yds", rec: "16/22 rec", marketOdds: 2.30, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:70, td:1}, {w:3, yds:60, td:1}, {w:4, yds:70, td:0}] },
            { name: "Fannin Jr", pos: "WR", td: 2, yds: "160 yds", rec: "11/16 rec", marketOdds: 2.90, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] },
            { name: "Chubb", pos: "RB", td: 2, yds: "190 yds", rec: "6/8 rec", marketOdds: 2.20, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Judkins", pos: "RB", td: 1, yds: "155 yds", rec: "10/13 rec", marketOdds: 3.10, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Myles Garrett (EDGE)", sacks: "6.0 Sacks", pressures: "32 Pressures", tackles: "21 Tackles", probability: "85%", status: "ACTIVE" },
            { name: "Za'Darius Smith (DE)", sacks: "3.5 Sacks", pressures: "20 Pressures", tackles: "19 Tackles", probability: "58%", status: "ACTIVE" }
        ]
    },
    "Panthers": { 
        record: "2-2", games: 4, rush: 400, pass: 1220, oppPass: 1060, oppRush: 500, oppTD: 12, turnovers: 6, sacks: 15, redZonePct: 50, thirdDownPct: 36, penalties: 28, 
        injuredPlayers: [{name: "Jalen Coker", pos: "WR"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 260, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Tetairoa McMillan", pos: "WR", td: 4, yds: "385 yds", rec: "26/38 rec", marketOdds: 1.95, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:100, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}] },
            { name: "Hubbard", pos: "RB", td: 3, yds: "340 yds", rec: "14/18 rec", marketOdds: 2.20, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:90, td:1}, {w:3, yds:80, td:1}, {w:4, yds:90, td:0}] },
            { name: "Coker", pos: "WR", td: 3, yds: "290 yds", rec: "19/28 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}] },
            { name: "Wallen", pos: "TE", td: 2, yds: "145 yds", rec: "11/15 rec", marketOdds: 3.10, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:1}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Derrick Brown (DT)", sacks: "2.0 Sacks", pressures: "16 Pressures", tackles: "31 Tackles", probability: "40%", status: "ACTIVE" },
            { name: "Jadeveon Clowney (EDGE)", sacks: "3.0 Sacks", pressures: "18 Pressures", tackles: "20 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Cowboys": { 
        record: "2-2", games: 4, rush: 380, pass: 980, oppPass: 970, oppRush: 450, oppTD: 12, turnovers: 6, sacks: 9, redZonePct: 62, thirdDownPct: 43, penalties: 26, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Lamb", pos: "WR", td: 4, yds: "410 yds", rec: "29/40 rec", marketOdds: 1.80, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "Williams", pos: "RB", td: 3, yds: "290 yds", rec: "18/23 rec", marketOdds: 2.20, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:1}, {w:4, yds:75, td:0}] },
            { name: "Ferguson", pos: "TE", td: 3, yds: "105 yds", rec: "14/18 rec", marketOdds: 2.60, gameLog: [{w:1, yds:25, td:1}, {w:2, yds:30, td:1}, {w:3, yds:25, td:1}, {w:4, yds:25, td:0}] },
            { name: "Prescott", pos: "QB", td: 1, yds: "50 yds", rec: "Passing QB", marketOdds: 3.80, gameLog: [{w:1, yds:10, td:0}, {w:2, yds:15, td:1}, {w:3, yds:10, td:0}, {w:4, yds:15, td:0}] }
        ],
        defenders: [
            { name: "Micah Parsons (EDGE)", sacks: "5.5 Sacks", pressures: "30 Pressures", tackles: "22 Tackles", probability: "80%", status: "ACTIVE" },
            { name: "DeMarcus Lawrence (DE)", sacks: "3.0 Sacks", pressures: "17 Pressures", tackles: "24 Tackles", probability: "52%", status: "ACTIVE" }
        ]
    },
    "Ravens": { 
        record: "3-1", games: 4, rush: 640, pass: 960, oppPass: 890, oppRush: 360, oppTD: 10, turnovers: 4, sacks: 7, redZonePct: 67, thirdDownPct: 48, penalties: 21, 
        injuredPlayers: [{name: "Lamar Jackson", pos: "QB"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Henry", pos: "RB", td: 7, yds: "440 yds", rec: "7/10 rec", marketOdds: 1.55, gameLog: [{w:1, yds:100, td:2}, {w:2, yds:110, td:2}, {w:3, yds:115, td:2}, {w:4, yds:115, td:1}] },
            { name: "Flowers", pos: "WR", td: 2, yds: "310 yds", rec: "23/32 rec", marketOdds: 2.60, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:0}, {w:4, yds:80, td:0}] },
            { name: "Jackson", pos: "QB", td: 2, yds: "180 yds", rec: "Passing QB", marketOdds: 2.40, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Likely", pos: "TE", td: 1, yds: "140 yds", rec: "11/15 rec", marketOdds: 3.20, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Nnamdi Madubuike (DT)", sacks: "4.0 Sacks", pressures: "22 Pressures", tackles: "20 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Kyle Van Noy (EDGE)", sacks: "4.5 Sacks", pressures: "19 Pressures", tackles: "16 Tackles", probability: "65%", status: "ACTIVE" }
        ]
    },
    "Saints": { 
        record: "1-3", games: 4, rush: 380, pass: 1150, oppPass: 990, oppRush: 470, oppTD: 13, turnovers: 6, sacks: 10, redZonePct: 51, thirdDownPct: 39, penalties: 24, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 3 } },
        players: [
            { name: "Johnson", pos: "WR", td: 4, yds: "220 yds", rec: "15/22 rec", marketOdds: 2.10, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:1}, {w:4, yds:55, td:1}] },
            { name: "Olave", pos: "WR", td: 2, yds: "480 yds", rec: "32/45 rec", marketOdds: 2.30, gameLog: [{w:1, yds:115, td:1}, {w:2, yds:120, td:1}, {w:3, yds:120, td:0}, {w:4, yds:125, td:0}] },
            { name: "Fant", pos: "TE", td: 3, yds: "85 yds", rec: "9/13 rec", marketOdds: 2.80, gameLog: [{w:1, yds:20, td:1}, {w:2, yds:20, td:1}, {w:3, yds:20, td:1}, {w:4, yds:25, td:0}] },
            { name: "Kamara", pos: "RB", td: 2, yds: "310 yds", rec: "20/26 rec", marketOdds: 2.20, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] }
        ],
        defenders: [
            { name: "Cameron Jordan (DE)", sacks: "2.5 Sacks", pressures: "15 Pressures", tackles: "21 Tackles", probability: "45%", status: "ACTIVE" },
            { name: "Carl Granderson (DE)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "23 Tackles", probability: "60%", status: "ACTIVE" }
        ]
    },
    "Raiders": { 
        record: "3-1", games: 4, rush: 380, pass: 850, oppPass: 800, oppRush: 340, oppTD: 10, turnovers: 3, sacks: 8, redZonePct: 64, thirdDownPct: 44, penalties: 19, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 2 } },
        players: [
            { name: "Jeanty", pos: "RB", td: 4, yds: "400 yds", rec: "19/25 rec", marketOdds: 1.95, gameLog: [{w:1, yds:95, td:1}, {w:2, yds:100, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "White", pos: "WR", td: 3, yds: "45 yds", rec: "5/8 rec", marketOdds: 2.50, gameLog: [{w:1, yds:10, td:1}, {w:2, yds:10, td:1}, {w:3, yds:10, td:1}, {w:4, yds:15, td:0}] },
            { name: "Bowers", pos: "TE", td: 2, yds: "160 yds", rec: "15/20 rec", marketOdds: 2.70, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] },
            { name: "Meyers", pos: "WR", td: 1, yds: "190 yds", rec: "14/21 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Maxx Crosby (EDGE)", sacks: "6.5 Sacks", pressures: "34 Pressures", tackles: "28 Tackles", probability: "90%", status: "ACTIVE" },
            { name: "Christian Wilkins (DT)", sacks: "2.0 Sacks", pressures: "15 Pressures", tackles: "25 Tackles", probability: "38%", status: "ACTIVE" }
        ]
    },
    "49ers": { 
        record: "4-0", games: 4, rush: 540, pass: 1020, oppPass: 760, oppRush: 310, oppTD: 6, turnovers: 2, sacks: 5, redZonePct: 72, thirdDownPct: 51, penalties: 16, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 180, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 2 } },
        players: [
            { name: "McCaffrey", pos: "RB", td: 4, yds: "360 yds", rec: "23/28 rec", marketOdds: 1.70, gameLog: [{w:1, yds:90, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:90, td:1}] },
            { name: "Kittle", pos: "TE", td: 3, yds: "230 yds", rec: "18/23 rec", marketOdds: 2.30, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:1}, {w:4, yds:60, td:0}] },
            { name: "Samuel", pos: "WR", td: 2, yds: "210 yds", rec: "17/23 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:50, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}] },
            { name: "Aiyuk", pos: "WR", td: 1, yds: "190 yds", rec: "14/20 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Nick Bosa (EDGE)", sacks: "5.0 Sacks", pressures: "29 Pressures", tackles: "19 Tackles", probability: "75%", status: "ACTIVE" },
            { name: "Fred Warner (LB)", sacks: "2.0 Sacks", pressures: "12 Pressures", tackles: "44 Tackles", probability: "40%", status: "ACTIVE" }
        ]
    },
    "Cardinals": { 
        record: "1-3", games: 4, rush: 350, pass: 840, oppPass: 1020, oppRush: 480, oppTD: 14, turnovers: 7, sacks: 12, redZonePct: 48, thirdDownPct: 36, penalties: 28, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 105, allowedTDs: 3 } },
        players: [
            { name: "McBride", pos: "TE", td: 3, yds: "280 yds", rec: "21/29 rec", marketOdds: 2.20, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:1}, {w:4, yds:70, td:0}] },
            { name: "Love", pos: "RB", td: 3, yds: "260 yds", rec: "15/21 rec", marketOdds: 2.40, gameLog: [{w:1, yds:65, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:1}, {w:4, yds:65, td:0}] },
            { name: "Harrison Jr", pos: "WR", td: 2, yds: "310 yds", rec: "20/33 rec", marketOdds: 2.50, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Wilson", pos: "WR", td: 1, yds: "200 yds", rec: "14/21 rec", marketOdds: 3.30, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:50, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Budda Baker (S)", sacks: "1.0 Sacks", pressures: "8 Pressures", tackles: "41 Tackles", probability: "25%", status: "ACTIVE" },
            { name: "Zaven Collins (LB)", sacks: "2.5 Sacks", pressures: "12 Pressures", tackles: "24 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Buccaneers": { 
        record: "0-4", games: 4, rush: 360, pass: 780, oppPass: 980, oppRush: 440, oppTD: 9, turnovers: 8, sacks: 13, redZonePct: 40, thirdDownPct: 33, penalties: 30, 
        injuredPlayers: [{name: "Bucky Irving", pos: "RB"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 2 } },
        players: [
            { name: "Irving", pos: "RB", td: 2, yds: "310 yds", rec: "16/22 rec", marketOdds: 2.60, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Egbuka", pos: "WR", td: 2, yds: "190 yds", rec: "13/19 rec", marketOdds: 2.80, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Evans", pos: "WR", td: 1, yds: "220 yds", rec: "15/24 rec", marketOdds: 3.10, gameLog: [{w:1, yds:55, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}] },
            { name: "Mayfield", pos: "QB", td: 1, yds: "80 yds", rec: "Passing QB", marketOdds: 4.00, gameLog: [{w:1, yds:20, td:0}, {w:2, yds:20, td:1}, {w:3, yds:20, td:0}, {w:4, yds:20, td:0}] }
        ],
        defenders: [
            { name: "Vita Vea (DT)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "17 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Yaya Diaby (EDGE)", sacks: "3.0 Sacks", pressures: "20 Pressures", tackles: "22 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Vikings": { 
        record: "4-0", games: 4, rush: 400, pass: 610, oppPass: 710, oppRush: 300, oppTD: 4, turnovers: 1, sacks: 6, redZonePct: 74, thirdDownPct: 53, penalties: 17, 
        injuredPlayers: [{name: "Justin Jefferson", pos: "WR"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 175, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 40, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "Jefferson", pos: "WR", td: 3, yds: "240 yds", rec: "20/29 rec", marketOdds: 1.85, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:1}, {w:4, yds:0, td:0}] },
            { name: "Jones", pos: "RB", td: 2, yds: "310 yds", rec: "18/23 rec", marketOdds: 2.30, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Hockenson", pos: "TE", td: 1, yds: "110 yds", rec: "11/15 rec", marketOdds: 3.20, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] },
            { name: "Addison", pos: "WR", td: 1, yds: "160 yds", rec: "12/18 rec", marketOdds: 3.00, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Jonathan Greenard (EDGE)", sacks: "5.5 Sacks", pressures: "28 Pressures", tackles: "18 Tackles", probability: "80%", status: "ACTIVE" },
            { name: "Andrew Van Ginkel (LB)", sacks: "4.0 Sacks", pressures: "19 Pressures", tackles: "24 Tackles", probability: "62%", status: "ACTIVE" }
        ]
    },
    "Lions": { 
        record: "2-2", games: 4, rush: 460, pass: 1040, oppPass: 1090, oppRush: 420, oppTD: 15, turnovers: 4, sacks: 8, redZonePct: 73, thirdDownPct: 52, penalties: 20, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 265, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Gibbs", pos: "RB", td: 7, yds: "580 yds", rec: "21/26 rec", marketOdds: 1.50, gameLog: [{w:1, yds:140, td:2}, {w:2, yds:150, td:2}, {w:3, yds:140, td:2}, {w:4, yds:150, td:1}] },
            { name: "St. Brown", pos: "WR", td: 6, yds: "310 yds", rec: "26/34 rec", marketOdds: 1.65, gameLog: [{w:1, yds:75, td:2}, {w:2, yds:80, td:2}, {w:3, yds:75, td:1}, {w:4, yds:80, td:1}] },
            { name: "LaPorta", pos: "TE", td: 2, yds: "190 yds", rec: "16/21 rec", marketOdds: 2.60, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Montgomery", pos: "RB", td: 2, yds: "280 yds", rec: "10/14 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:70, td:0}] }
        ],
        defenders: [
            { name: "Aidan Hutchinson (EDGE)", sacks: "7.5 Sacks", pressures: "38 Pressures", tackles: "22 Tackles", probability: "95%", status: "ACTIVE" },
            { name: "Alim McNeill (DT)", sacks: "3.0 Sacks", pressures: "17 Pressures", tackles: "19 Tackles", probability: "48%", status: "ACTIVE" }
        ]
    },
    "Jets": { 
        record: "1-3", games: 4, rush: 350, pass: 990, oppPass: 910, oppRush: 390, oppTD: 9, turnovers: 5, sacks: 10, redZonePct: 52, thirdDownPct: 37, penalties: 25, 
        injuredPlayers: [{name: "Breece Hall", pos: "RB"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Wilson", pos: "WR", td: 3, yds: "230 yds", rec: "17/26 rec", marketOdds: 2.20, gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:1}, {w:4, yds:60, td:0}] },
            { name: "Hall", pos: "RB", td: 2, yds: "330 yds", rec: "19/25 rec", marketOdds: 2.40, gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:80, td:0}, {w:4, yds:85, td:0}] },
            { name: "Sadiq", pos: "TE", td: 1, yds: "170 yds", rec: "11/15 rec", marketOdds: 3.40, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}] },
            { name: "Conklin", pos: "TE", td: 1, yds: "120 yds", rec: "10/14 rec", marketOdds: 3.60, gameLog: [{w:1, yds:30, td:0}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Will McDonald IV (EDGE)", sacks: "5.0 Sacks", pressures: "22 Pressures", tackles: "14 Tackles", probability: "70%", status: "ACTIVE" },
            { name: "Quinnen Williams (DT)", sacks: "2.5 Sacks", pressures: "19 Pressures", tackles: "21 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Colts": { 
        record: "2-2", games: 4, rush: 410, pass: 810, oppPass: 920, oppRush: 430, oppTD: 11, turnovers: 6, sacks: 11, redZonePct: 52, thirdDownPct: 39, penalties: 26, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Taylor", pos: "RB", td: 5, yds: "430 yds", rec: "13/18 rec", marketOdds: 1.65, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:110, td:2}, {w:3, yds:105, td:1}, {w:4, yds:115, td:1}] },
            { name: "Warren", pos: "TE", td: 2, yds: "120 yds", rec: "10/14 rec", marketOdds: 2.80, gameLog: [{w:1, yds:30, td:1}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] },
            { name: "Allen", pos: "WR", td: 2, yds: "150 yds", rec: "11/17 rec", marketOdds: 2.90, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] },
            { name: "Pittman Jr", pos: "WR", td: 1, yds: "210 yds", rec: "16/24 rec", marketOdds: 3.10, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Kwity Paye (DE)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "19 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "DeForest Buckner (DT)", sacks: "2.5 Sacks", pressures: "16 Pressures", tackles: "22 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Texans": { 
        record: "0-4", games: 4, rush: 320, pass: 1010, oppPass: 960, oppRush: 460, oppTD: 9, turnovers: 8, sacks: 15, redZonePct: 37, thirdDownPct: 30, penalties: 33, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 2 } },
        players: [
            { name: "Montgomery", pos: "RB", td: 3, yds: "210 yds", rec: "15/20 rec", marketOdds: 2.30, gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:1}, {w:4, yds:55, td:0}] },
            { name: "Collins", pos: "WR", td: 2, yds: "160 yds", rec: "11/16 rec", marketOdds: 2.70, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] },
            { name: "Nico Collins", pos: "WR", td: 1, yds: "240 yds", rec: "18/25 rec", marketOdds: 3.00, gameLog: [{w:1, yds:60, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:60, td:0}] },
            { name: "Marks", pos: "RB", td: 1, yds: "120 yds", rec: "11/15 rec", marketOdds: 3.50, gameLog: [{w:1, yds:30, td:0}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Will Anderson Jr. (EDGE)", sacks: "5.0 Sacks", pressures: "31 Pressures", tackles: "20 Tackles", probability: "75%", status: "ACTIVE" },
            { name: "Danielle Hunter (EDGE)", sacks: "4.5 Sacks", pressures: "27 Pressures", tackles: "22 Tackles", probability: "70%", status: "ACTIVE" }
        ]
    },
    "Jaguars": { 
        record: "3-1", games: 4, rush: 460, pass: 790, oppPass: 810, oppRush: 340, oppTD: 5, turnovers: 3, sacks: 7, redZonePct: 67, thirdDownPct: 47, penalties: 19, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Tuten", pos: "RB", td: 3, yds: "320 yds", rec: "15/19 rec", marketOdds: 2.10, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "Washington", pos: "WR", td: 2, yds: "290 yds", rec: "19/27 rec", marketOdds: 2.60, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] },
            { name: "Meyers", pos: "WR", td: 2, yds: "180 yds", rec: "14/19 rec", marketOdds: 2.70, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Engram", pos: "TE", td: 1, yds: "150 yds", rec: "13/17 rec", marketOdds: 3.20, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Josh Hines-Allen (EDGE)", sacks: "4.0 Sacks", pressures: "24 Pressures", tackles: "19 Tackles", probability: "62%", status: "ACTIVE" },
            { name: "Travon Walker (EDGE)", sacks: "4.5 Sacks", pressures: "22 Pressures", tackles: "21 Tackles", probability: "65%", status: "ACTIVE" }
        ]
    },
    "Patriots": { 
        record: "2-2", games: 4, rush: 420, pass: 850, oppPass: 860, oppRush: 390, oppTD: 8, turnovers: 5, sacks: 9, redZonePct: 56, thirdDownPct: 41, penalties: 23, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Henderson", pos: "RB", td: 2, yds: "150 yds", rec: "11/15 rec", marketOdds: 2.50, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] },
            { name: "Maye", pos: "QB", td: 2, yds: "110 yds", rec: "Passing QB", marketOdds: 2.80, gameLog: [{w:1, yds:25, td:1}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] },
            { name: "Hollins", pos: "WR", td: 1, yds: "210 yds", rec: "15/23 rec", marketOdds: 3.10, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Bourne", pos: "WR", td: 1, yds: "140 yds", rec: "11/16 rec", marketOdds: 3.40, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Keion White (DE)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "20 Tackles", probability: "52%", status: "ACTIVE" },
            { name: "Christian Barmore (DT)", sacks: "2.0 Sacks", pressures: "14 Pressures", tackles: "15 Tackles", probability: "38%", status: "ACTIVE" }
        ]
    },
    "Dolphins": { 
        record: "0-4", games: 4, rush: 380, pass: 810, oppPass: 1050, oppRush: 520, oppTD: 14, turnovers: 8, sacks: 14, redZonePct: 36, thirdDownPct: 29, penalties: 35, 
        injuredPlayers: [{name: "De'Von Achane", pos: "RB"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 260, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 75, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 110, allowedTDs: 3 } },
        players: [
            { name: "Gordon", pos: "RB", td: 2, yds: "90 yds", rec: "7/11 rec", marketOdds: 2.60, gameLog: [{w:1, yds:20, td:1}, {w:2, yds:25, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:0}] },
            { name: "Washington", pos: "WR", td: 1, yds: "210 yds", rec: "14/22 rec", marketOdds: 3.10, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Hill", pos: "WR", td: 1, yds: "260 yds", rec: "18/27 rec", marketOdds: 2.10, gameLog: [{w:1, yds:60, td:0}, {w:2, yds:70, td:1}, {w:3, yds:60, td:0}, {w:4, yds:70, td:0}] },
            { name: "Waddle", pos: "WR", td: 1, yds: "220 yds", rec: "16/24 rec", marketOdds: 2.40, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:60, td:1}, {w:3, yds:50, td:0}, {w:4, yds:60, td:0}] }
        ],
        defenders: [
            { name: "Jaelan Phillips (EDGE)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "19 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Zach Sieler (DT)", sacks: "3.0 Sacks", pressures: "17 Pressures", tackles: "24 Tackles", probability: "48%", status: "ACTIVE" }
        ]
    },
    "Chiefs": { 
        record: "4-0", games: 4, rush: 590, pass: 1080, oppPass: 750, oppRush: 290, oppTD: 6, turnovers: 2, sacks: 5, redZonePct: 75, thirdDownPct: 52, penalties: 17, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 180, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 2 } },
        players: [
            { name: "Walker III", pos: "RB", td: 5, yds: "560 yds", rec: "18/23 rec", marketOdds: 1.75, gameLog: [{w:1, yds:120, td:1}, {w:2, yds:140, td:2}, {w:3, yds:130, td:1}, {w:4, yds:170, td:1}] },
            { name: "Kelce", pos: "TE", td: 3, yds: "310 yds", rec: "24/32 rec", marketOdds: 2.05, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:60, td:0}, {w:4, yds:100, td:1}] },
            { name: "Worthy", pos: "WR", td: 2, yds: "110 yds", rec: "8/13 rec", marketOdds: 2.60, gameLog: [{w:1, yds:25, td:1}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] },
            { name: "Mahomes", pos: "QB", td: 1, yds: "70 yds", rec: "Passing QB", marketOdds: 3.50, gameLog: [{w:1, yds:15, td:0}, {w:2, yds:20, td:1}, {w:3, yds:15, td:0}, {w:4, yds:20, td:0}] }
        ],
        defenders: [
            { name: "Chris Jones (DT)", sacks: "4.5 Sacks", pressures: "28 Pressures", tackles: "17 Tackles", probability: "68%", status: "ACTIVE" },
            { name: "George Karlaftis (EDGE)", sacks: "3.5 Sacks", pressures: "22 Pressures", tackles: "20 Tackles", probability: "55%", status: "ACTIVE" }
        ]
    },
    "Giants": { 
        record: "3-1", games: 4, rush: 470, pass: 640, oppPass: 840, oppRush: 380, oppTD: 9, turnovers: 4, sacks: 9, redZonePct: 61, thirdDownPct: 43, penalties: 22, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Likely", pos: "WR", td: 3, yds: "170 yds", rec: "14/19 rec", marketOdds: 2.30, gameLog: [{w:1, yds:40, td:1}, {w:2, yds:45, td:1}, {w:3, yds:40, td:1}, {w:4, yds:45, td:0}] },
            { name: "Skattebo", pos: "RB", td: 2, yds: "310 yds", rec: "16/22 rec", marketOdds: 2.40, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Singletary", pos: "RB", td: 2, yds: "110 yds", rec: "8/12 rec", marketOdds: 2.70, gameLog: [{w:1, yds:25, td:1}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] },
            { name: "Nabers", pos: "WR", td: 1, yds: "290 yds", rec: "22/33 rec", marketOdds: 2.50, gameLog: [{w:1, yds:70, td:0}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] }
        ],
        defenders: [
            { name: "Dexter Lawrence (DT)", sacks: "5.5 Sacks", pressures: "26 Pressures", tackles: "21 Tackles", probability: "78%", status: "ACTIVE" },
            { name: "Brian Burns (EDGE)", sacks: "4.0 Sacks", pressures: "23 Pressures", tackles: "19 Tackles", probability: "60%", status: "ACTIVE" }
        ]
    },
    "Titans": { 
        record: "0-4", games: 4, rush: 350, pass: 670, oppPass: 970, oppRush: 470, oppTD: 7, turnovers: 7, sacks: 13, redZonePct: 39, thirdDownPct: 31, penalties: 30, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Ward", pos: "QB", td: 3, yds: "50 yds", rec: "Passing QB", marketOdds: 2.80, gameLog: [{w:1, yds:10, td:1}, {w:2, yds:15, td:1}, {w:3, yds:10, td:1}, {w:4, yds:15, td:0}] },
            { name: "Robinson", pos: "WR", td: 2, yds: "140 yds", rec: "11/16 rec", marketOdds: 2.90, gameLog: [{w:1, yds:30, td:1}, {w:2, yds:35, td:1}, {w:3, yds:30, td:0}, {w:4, yds:35, td:0}] },
            { name: "Ayomaoyr", pos: "WR", td: 1, yds: "120 yds", rec: "9/14 rec", marketOdds: 3.40, gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] },
            { name: "Pollard", pos: "RB", td: 1, yds: "210 yds", rec: "12/17 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Jeffery Simmons (DT)", sacks: "3.0 Sacks", pressures: "17 Pressures", tackles: "19 Tackles", probability: "48%", status: "ACTIVE" },
            { name: "Harold Landry III (EDGE)", sacks: "4.5 Sacks", pressures: "21 Pressures", tackles: "23 Tackles", probability: "65%", status: "ACTIVE" }
        ]
    },
    "Steelers": { 
        record: "2-2", games: 4, rush: 370, pass: 920, oppPass: 850, oppRush: 360, oppTD: 8, turnovers: 4, sacks: 8, redZonePct: 61, thirdDownPct: 43, penalties: 20, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Metcalf", pos: "WR", td: 2, yds: "150 yds", rec: "10/16 rec", marketOdds: 2.40, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] },
            { name: "Freiermuth", pos: "TE", td: 2, yds: "140 yds", rec: "12/17 rec", marketOdds: 2.70, gameLog: [{w:1, yds:30, td:1}, {w:2, yds:35, td:1}, {w:3, yds:30, td:0}, {w:4, yds:35, td:0}] },
            { name: "Wilson", pos: "WR", td: 2, yds: "160 yds", rec: "11/18 rec", marketOdds: 2.50, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] },
            { name: "Harris", pos: "RB", td: 1, yds: "240 yds", rec: "9/13 rec", marketOdds: 2.30, gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] }
        ],
        defenders: [
            { name: "T.J. Watt (EDGE)", sacks: "7.0 Sacks", pressures: "35 Pressures", tackles: "24 Tackles", probability: "92%", status: "ACTIVE" },
            { name: "Alex Highsmith (EDGE)", sacks: "4.0 Sacks", pressures: "22 Pressures", tackles: "18 Tackles", probability: "60%", status: "ACTIVE" }
        ]
    },
    "Bengals": { 
        record: "3-1", games: 4, rush: 360, pass: 980, oppPass: 930, oppRush: 400, oppTD: 8, turnovers: 4, sacks: 8, redZonePct: 65, thirdDownPct: 46, penalties: 21, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Chase", pos: "WR", td: 4, yds: "260 yds", rec: "22/32 rec", marketOdds: 1.75, gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:1}, {w:4, yds:70, td:1}] },
            { name: "Gesicki", pos: "TE", td: 3, yds: "160 yds", rec: "14/19 rec", marketOdds: 2.50, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:40, td:1}, {w:4, yds:45, td:0}] },
            { name: "Brown", pos: "RB", td: 2, yds: "290 yds", rec: "18/23 rec", marketOdds: 2.30, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] },
            { name: "Higgins", pos: "WR", td: 1, yds: "210 yds", rec: "15/22 rec", marketOdds: 2.60, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Trey Hendrickson (EDGE)", sacks: "6.0 Sacks", pressures: "30 Pressures", tackles: "17 Tackles", probability: "82%", status: "ACTIVE" },
            { name: "Sam Hubbard (DE)", sacks: "2.0 Sacks", pressures: "14 Pressures", tackles: "22 Tackles", probability: "38%", status: "ACTIVE" }
        ]
    },
    "Commanders": { 
        record: "1-3", games: 4, rush: 500, pass: 710, oppPass: 1040, oppRush: 500, oppTD: 13, turnovers: 6, sacks: 11, redZonePct: 50, thirdDownPct: 37, penalties: 24, 
        injuredPlayers: [{name: "Jayden Daniels", pos: "QB"}, {name: "Terry McLaurin", pos: "WR"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 250, allowedTDs: 6 }, vsTE: { allowedYdsPerGame: 70, allowedTDs: 3 }, vsRB: { allowedYdsPerGame: 100, allowedTDs: 3 } },
        players: [
            { name: "Diggs", pos: "WR", td: 4, yds: "190 yds", rec: "15/22 rec", marketOdds: 2.05, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:1}, {w:4, yds:50, td:1}] },
            { name: "Croskey-Merritt", pos: "RB", td: 2, yds: "190 yds", rec: "12/16 rec", marketOdds: 2.50, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "McLaurin", pos: "WR", td: 1, yds: "141 yds", rec: "10/15 rec", marketOdds: 2.90, gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:36, td:0}] },
            { name: "Robinson Jr", pos: "RB", td: 1, yds: "220 yds", rec: "11/15 rec", marketOdds: 2.40, gameLog: [{w:1, yds:55, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}] }
        ],
        defenders: [
            { name: "Dorance Armstrong (DE)", sacks: "3.5 Sacks", pressures: "19 Pressures", tackles: "18 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Frankie Luvu (LB)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "35 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Seahawks": { 
        record: "3-1", games: 4, rush: 390, pass: 1100, oppPass: 870, oppRush: 380, oppTD: 8, turnovers: 4, sacks: 7, redZonePct: 68, thirdDownPct: 48, penalties: 20, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Smith-Njigba", pos: "WR", td: 7, yds: "520 yds", rec: "35/47 rec", marketOdds: 1.60, gameLog: [{w:1, yds:120, td:2}, {w:2, yds:130, td:2}, {w:3, yds:135, td:2}, {w:4, yds:135, td:1}] },
            { name: "Kupp", pos: "TE", td: 2, yds: "150 yds", rec: "13/18 rec", marketOdds: 2.70, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] },
            { name: "Walker", pos: "RB", td: 1, yds: "270 yds", rec: "12/16 rec", marketOdds: 2.20, gameLog: [{w:1, yds:65, td:0}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] }
        ],
        defenders: [
            { name: "Boye Mafe (EDGE)", sacks: "4.5 Sacks", pressures: "23 Pressures", tackles: "16 Tackles", probability: "65%", status: "ACTIVE" },
            { name: "Leonard Williams (DT)", sacks: "3.0 Sacks", pressures: "19 Pressures", tackles: "24 Tackles", probability: "48%", status: "ACTIVE" }
        ]
    },
    "Packers": { 
        record: "2-2", games: 4, rush: 200, pass: 1120, oppPass: 1010, oppRush: 470, oppTD: 13, turnovers: 5, sacks: 10, redZonePct: 55, thirdDownPct: 40, penalties: 23, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 5 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 3 } },
        players: [
            { name: "Watson", pos: "WR", td: 5, yds: "370 yds", rec: "22/32 rec", marketOdds: 1.85, gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:2}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}] },
            { name: "Golden", pos: "WR", td: 2, yds: "310 yds", rec: "19/27 rec", marketOdds: 2.50, gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Jacobs", pos: "RB", td: 2, yds: "300 yds", rec: "14/19 rec", marketOdds: 2.10, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:0}, {w:4, yds:80, td:0}] },
            { name: "Reed", pos: "WR", td: 1, yds: "240 yds", rec: "17/24 rec", marketOdds: 2.80, gameLog: [{w:1, yds:60, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:60, td:0}] }
        ],
        defenders: [
            { name: "Rashan Gary (EDGE)", sacks: "4.0 Sacks", pressures: "25 Pressures", tackles: "18 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Lukas Van Ness (DE)", sacks: "2.5 Sacks", pressures: "15 Pressures", tackles: "16 Tackles", probability: "42%", status: "ACTIVE" }
        ]
    },
    "Eagles": { 
        record: "3-0", games: 3, rush: 340, pass: 710, oppPass: 730, oppRush: 300, oppTD: 7, turnovers: 3, sacks: 6, redZonePct: 72, thirdDownPct: 49, penalties: 19, 
        injuredPlayers: [{name: "DeVonta Smith", pos: "WR"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 180, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 2 } },
        players: [
            { name: "Goedert", pos: "TE", td: 3, yds: "120 yds", rec: "10/14 rec", marketOdds: 2.40, gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:45, td:1}] },
            { name: "Saquon Barkley", pos: "RB", td: 3, yds: "380 yds", rec: "14/18 rec", marketOdds: 1.70, gameLog: [{w:1, yds:120, td:1}, {w:2, yds:130, td:1}, {w:3, yds:130, td:1}] },
            { name: "Wicks", pos: "WR", td: 1, yds: "147 yds", rec: "9/13 rec", marketOdds: 3.10, gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:52, td:0}] },
            { name: "Smith", pos: "WR", td: 1, yds: "170 yds", rec: "11/16 rec", marketOdds: 2.80, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}] }
        ],
        defenders: [
            { name: "Jalen Carter (DT)", sacks: "3.5 Sacks", pressures: "20 Pressures", tackles: "19 Tackles", probability: "55%", status: "ACTIVE" },
            { name: "Bryce Huff (EDGE)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "12 Tackles", probability: "50%", status: "ACTIVE" }
        ]
    },
    "Bears": { 
        record: "2-1", games: 3, rush: 620, pass: 700, oppPass: 760, oppRush: 310, oppTD: 7, turnovers: 4, sacks: 7, redZonePct: 66, thirdDownPct: 45, penalties: 22, 
        injuredPlayers: [{name: "Caleb Williams", pos: "QB"}], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Swift", pos: "RB", td: 4, yds: "340 yds", rec: "16/20 rec", marketOdds: 1.90, gameLog: [{w:1, yds:100, td:1}, {w:2, yds:115, td:2}, {w:3, yds:125, td:1}] },
            { name: "Williams", pos: "QB", td: 2, yds: "107 yds", rec: "Passing QB", marketOdds: 3.00, gameLog: [{w:1, yds:30, td:1}, {w:2, yds:40, td:1}, {w:3, yds:37, td:0}] },
            { name: "Monangai", pos: "RB", td: 1, yds: "182 yds", rec: "8/11 rec", marketOdds: 3.20, gameLog: [{w:1, yds:50, td:0}, {w:2, yds:60, td:1}, {w:3, yds:72, td:0}] },
            { name: "Moore", pos: "WR", td: 1, yds: "210 yds", rec: "15/22 rec", marketOdds: 2.70, gameLog: [{w:1, yds:65, td:0}, {w:2, yds:70, td:1}, {w:3, yds:75, td:0}] }
        ],
        defenders: [
            { name: "Montez Sweat (EDGE)", sacks: "4.5 Sacks", pressures: "22 Pressures", tackles: "18 Tackles", probability: "68%", status: "ACTIVE" },
            { name: "Gervon Dexter Sr. (DT)", sacks: "3.0 Sacks", pressures: "15 Pressures", tackles: "20 Tackles", probability: "45%", status: "ACTIVE" }
        ]
    },
    "Falcons": { 
        record: "1-3", games: 4, rush: 680, pass: 720, oppPass: 960, oppRush: 440, oppTD: 10, turnovers: 4, sacks: 8, redZonePct: 62, thirdDownPct: 42, penalties: 22, 
        injuredPlayers: [], 
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Bijan Robinson", pos: "RB", td: 4, yds: "610 yds", rec: "23/31 rec", marketOdds: 1.70, gameLog: [{w:1, yds:145, td:1}, {w:2, yds:150, td:1}, {w:3, yds:155, td:1}, {w:4, yds:160, td:1}] },
            { name: "Brian Robinson", pos: "RB", td: 2, yds: "190 yds", rec: "12/17 rec", marketOdds: 2.60, gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "London", pos: "WR", td: 2, yds: "290 yds", rec: "21/30 rec", marketOdds: 2.40, gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:0}] },
            { name: "Pitts", pos: "TE", td: 1, yds: "180 yds", rec: "14/20 rec", marketOdds: 3.10, gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Matthew Judon (EDGE)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "19 Tackles", probability: "60%", status: "ACTIVE" },
            { name: "Grady Jarrett (DT)", sacks: "2.5 Sacks", pressures: "16 Pressures", tackles: "23 Tackles", probability: "42%", status: "ACTIVE" }
        ]
    }
};

let nflSchedule = {
    "5": [
        { away: "New York Jets", home: "Miami Dolphins", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Baltimore Ravens", home: "Houston Texans", weather: "🏟️️ Sisäkenttä (Dome)" },
        { away: "Carolina Panthers", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Minnesota Vikings", home: "Cleveland Browns", weather: "🌧️ Sade (10°C)" },
        { away: "New England Patriots", home: "Denver Broncos", weather: "☀ Poutainen (14°C)" },
        { away: "Philadelphia Eagles", home: "New York Giants", weather: "❄️ Viileä (6°C)" },
        { away: "Green Bay Packers", home: "Los Angeles Rams", weather: "☀️ Aurinkoinen (20°C)" },
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
    const liveData = await fetchRealTimeNFLData(selectedWeek);

    if (liveData && liveData.events && liveData.events.length > 0) {
        const liveMatches = liveData.events.map(event => {
            const competition = event.competitions[0];
            const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home');
            const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away');
            
            let weather = "🏟️ Sisäkenttä (Dome)";
            if (competition.weather && competition.weather.displayValue) {
                weather = `🌤️ ${competition.weather.displayValue}`;
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
        🌤️️ <strong>Olosuhteet:</strong> ${match.weather}<br>
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

// Päivitetty renderöinti, joka piirtää hyökkääjien lisäksi myös puolustuksen avainpelaajat ja säkkitodennäköisyydet
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
    let totalHealthyTDs = healthyPlayers.reduce((sum, p) => sum + p.td, 0);
    if (totalHealthyTDs === 0) totalHealthyTDs = 1;

    // Piirretään hyökkäyspelaajat
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
            let marketShare = p.td / totalHealthyTDs;
            lambda = (teamEstimatedTDs * marketShare * recentFormMultiplier * defFactor);
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

    // Lisätään puolustuksen avainpelaajat ja säkkitodennäköisyydet osio hyökkäyksen alle
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
        let totalPlayerTDs = players.reduce((sum, p) => sum + p.td, 0);
        if (totalPlayerTDs === 0) totalPlayerTDs = 1;

        players.forEach(p => {
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
