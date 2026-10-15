const nflData = {
    "Jets": {
        record: "1-4", games: 5, rush: 410, pass: 1132, oppPass: 980, oppRush: 610, oppTD: 12, turnovers: 2, sacks: 11, redZonePct: 54, thirdDownPct: 33, penalties: 45,
        injuredPlayers: [{name: "David Onyemata", pos: "DT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Geno Smith", pos: "QB", td: 0, yds: "1132 pass yds", rec: "QB / Starter", marketOdds: 4.50, pressuresFaced: 19, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:242, td:0}, {w:3, yds:210, td:0}, {w:4, yds:230, td:0}, {w:5, yds:230, td:0}] },
            { name: "Breece Hall", pos: "RB", td: 2, yds: "205 yds", rec: "15/21 rec", marketOdds: 1.70, yac: "95 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:38, td:0}, {w:4, yds:30, td:0}, {w:5, yds:42, td:1}] },
            { name: "Garrett Wilson", pos: "WR", td: 3, yds: "335 yds", rec: "33/46 rec", marketOdds: 1.80, yac: "135 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:65, td:0}, {w:4, yds:55, td:0}, {w:5, yds:65, td:1}] },
            { name: "Adonai Mitchell", pos: "WR", td: 0, yds: "155 yds", rec: "11/19 rec", marketOdds: 2.80, yac: "55 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:40, td:0}, {w:3, yds:25, td:0}, {w:4, yds:28, td:0}, {w:5, yds:32, td:0}] },
            { name: "Isaiah Williams", pos: "WR", td: 0, yds: "120 yds", rec: "9/15 rec", marketOdds: 3.40, yac: "45 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:0}, {w:3, yds:25, td:0}, {w:4, yds:25, td:0}, {w:5, yds:25, td:0}] },
            { name: "Saqid", pos: "TE", td: 1, yds: "145 yds", rec: "15/22 rec", marketOdds: 3.20, yac: "40 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:20, td:1}, {w:3, yds:25, td:0}, {w:4, yds:20, td:0}, {w:5, yds:60, td:0}] }
        ],
        defenders: [
            { name: "Demario Davis (LB)", sacks: "2.5 Sacks", pressures: "10 Pressures", tackles: "39 Tackles", tacklesForLoss: 5, probability: "50%", status: "ACTIVE" },
            { name: "Will McDonald IV (DE)", sacks: "2.5 Sacks", pressures: "13 Pressures", tackles: "18 Tackles", tacklesForLoss: 4, probability: "55%", status: "ACTIVE" }
        ]
    },
    "Dolphins": {
        record: "0-5", games: 5, rush: 510, pass: 890, oppPass: 1120, oppRush: 540, oppTD: 14, turnovers: 6, sacks: 12, redZonePct: 35, thirdDownPct: 37, penalties: 39,
        injuredPlayers: [{name: "Ronnie Harrison Jr.", pos: "LB", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Malik Willis", pos: "QB", td: 1, yds: "900 pass yds / 120 rush yds", rec: "QB / Starter", marketOdds: 4.00, pressuresFaced: 22, gameLog: [{w:1, yds:170, td:0}, {w:2, yds:180, td:0}, {w:3, yds:175, td:0}, {w:4, yds:187, td:0}, {w:5, yds:188, td:1}] },
            { name: "Ollie Gordon II", pos: "RB", td: 3, yds: "188 yds", rec: "15/22 rec", marketOdds: 2.10, yac: "75 YAC", gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:38, td:0}, {w:4, yds:35, td:0}, {w:5, yds:40, td:1}] },
            { name: "Malik Washington", pos: "WR", td: 0, yds: "275 yds", rec: "23/32 rec", marketOdds: 2.50, yac: "110 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:60, td:0}, {w:3, yds:55, td:0}, {w:4, yds:54, td:0}, {w:5, yds:56, td:0}] },
            { name: "Ryan Miller", pos: "WR", td: 1, yds: "198 yds", rec: "15/22 rec", marketOdds: 3.10, yac: "80 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}, {w:5, yds:38, td:0}] },
            { name: "Chris Bell", pos: "WR", td: 0, yds: "162 yds", rec: "13/18 rec", marketOdds: 3.30, yac: "65 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:0}, {w:3, yds:35, td:0}, {w:4, yds:30, td:0}, {w:5, yds:32, td:0}] },
            { name: "Greg Dulcich", pos: "TE", td: 0, yds: "175 yds", rec: "16/23 rec", marketOdds: 2.90, yac: "70 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:0}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}, {w:5, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Jacob Rodriguez (LB)", sacks: "1.5 Sacks", pressures: "9 Pressures", tackles: "56 Tackles", tacklesForLoss: 6, probability: "45%", status: "ACTIVE" },
            { name: "Zach Sieler (DE)", sacks: "2.5 Sacks", pressures: "15 Pressures", tackles: "27 Tackles", tacklesForLoss: 5, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Patriots": {
        record: "3-2", games: 5, rush: 510, pass: 1130, oppPass: 1120, oppRush: 500, oppTD: 11, turnovers: 5, sacks: 13, redZonePct: 58, thirdDownPct: 41, penalties: 31,
        injuredPlayers: [],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Drake Maye", pos: "QB", td: 1, yds: "1130 pass yds / 90 rush yds", rec: "QB / Starter", marketOdds: 2.00, pressuresFaced: 18, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:230, td:1}, {w:3, yds:220, td:0}, {w:4, yds:230, td:0}, {w:5, yds:230, td:0}] },
            { name: "Rhamondre Stevenson", pos: "RB", td: 4, yds: "405 yds", rec: "19/25 rec", marketOdds: 1.80, yac: "140 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}, {w:5, yds:85, td:1}] },
            { name: "DeMario Douglas", pos: "WR", td: 2, yds: "330 yds", rec: "25/35 rec", marketOdds: 2.10, yac: "115 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}, {w:5, yds:70, td:0}] },
            { name: "Kendrick Bourne", pos: "WR", td: 2, yds: "265 yds", rec: "20/28 rec", marketOdds: 2.40, yac: "95 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}, {w:5, yds:55, td:1}] },
            { name: "Hunter Henry", pos: "TE", td: 1, yds: "235 yds", rec: "21/29 rec", marketOdds: 2.50, yac: "85 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Christian Barmore (DT)", sacks: "3.0 Sacks", pressures: "17 Pressures", tackles: "22 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Bills": {
        record: "4-1", games: 5, rush: 690, pass: 1290, oppPass: 1270, oppRush: 580, oppTD: 19, turnovers: 8, sacks: 11, redZonePct: 71, thirdDownPct: 52, penalties: 31,
        injuredPlayers: [{name: "Jordan Hancock", pos: "S"}, {name: "Zane Durant", pos: "DT"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Josh Allen", pos: "QB", td: 5, yds: "1290 pass yds / 145 rush yds", rec: "QB / Dual Threat", marketOdds: 1.90, pressuresFaced: 17, gameLog: [{w:1, yds:23, td:1}, {w:2, yds:69, td:1}, {w:3, yds:22, td:1}, {w:4, yds:4, td:1}, {w:5, yds:251, td:1}] },
            { name: "James Cook III", pos: "RB", td: 5, yds: "520 yds", rec: "22/29 rec", marketOdds: 2.10, yac: "210 YAC", gameLog: [{w:1, yds:86, td:1}, {w:2, yds:203, td:3}, {w:3, yds:126, td:0}, {w:4, yds:105, td:0}, {w:5, yds:0, td:1}] },
            { name: "Dalton Kincaid", pos: "TE", td: 2, yds: "335 yds", rec: "19/23 rec", marketOdds: 2.30, yac: "115 YAC", gameLog: [{w:1, yds:60, td:0}, {w:2, yds:70, td:1}, {w:3, yds:80, td:0}, {w:4, yds:60, td:0}, {w:5, yds:65, td:1}] },
            { name: "Keon Coleman", pos: "WR", td: 1, yds: "275 yds", rec: "18/25 rec", marketOdds: 2.80, yac: "105 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:67, td:0}, {w:5, yds:58, td:0}] },
            { name: "DJ Moore", pos: "WR", td: 2, yds: "230 yds", rec: "16/38 rec", marketOdds: 2.10, yac: "90 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:0}, {w:3, yds:50, td:1}, {w:4, yds:43, td:0}, {w:5, yds:52, td:1}] },
            { name: "Khalil Shakir", pos: "WR", td: 0, yds: "220 yds", rec: "19/30 rec", marketOdds: 2.60, yac: "95 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:0}, {w:3, yds:45, td:0}, {w:4, yds:46, td:0}, {w:5, yds:44, td:0}] }
        ],
        defenders: [
            { name: "Terrel Bernard (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "44 Tackles", tacklesForLoss: 5, probability: "50%", status: "ACTIVE" },
            { name: "Greg Rousseau (EDGE)", sacks: "7.0 Sacks", pressures: "28 Pressures", tackles: "24 Tackles", tacklesForLoss: 8, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Ravens": {
        record: "4-1", games: 5, rush: 822, pass: 1149, oppPass: 1118, oppRush: 510, oppTD: 11, turnovers: 3, sacks: 7, redZonePct: 56, thirdDownPct: 34, penalties: 44,
        injuredPlayers: [{name: "Keaton Mitchell", pos: "RB", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 78, allowedTDs: 2 } },
        players: [
            { name: "Lamar Jackson", pos: "QB", td: 5, yds: "1149 pass yds / 270 rush yds", rec: "QB / Dual Threat", marketOdds: 1.80, pressuresFaced: 15, gameLog: [{w:1, yds:250, td:1}, {w:2, yds:260, td:1}, {w:3, yds:240, td:0}, {w:4, yds:280, td:1}, {w:5, yds:183, td:2}] },
            { name: "Derrick Henry", pos: "RB", td: 7, yds: "509 yds", rec: "8/11 rec", marketOdds: 1.60, yac: "135 YAC", gameLog: [{w:1, yds:85, td:2}, {w:2, yds:90, td:2}, {w:3, yds:70, td:1}, {w:4, yds:56, td:1}, {w:5, yds:208, td:1}] },
            { name: "Zay Flowers", pos: "WR", td: 2, yds: "290 yds", rec: "13/20 rec", marketOdds: 2.20, yac: "110 YAC", gameLog: [{w:1, yds:60, td:0}, {w:2, yds:75, td:1}, {w:3, yds:50, td:0}, {w:4, yds:49, td:0}, {w:5, yds:56, td:1}] },
            { name: "Mark Andrews", pos: "TE", td: 2, yds: "225 yds", rec: "17/23 rec", marketOdds: 2.30, yac: "80 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}, {w:5, yds:45, td:1}] },
            { name: "Hibner", pos: "TE", td: 1, yds: "75 yds", rec: "6/6 rec", marketOdds: 3.00, yac: "30 YAC", gameLog: [{w:1, yds:10, td:0}, {w:2, yds:15, td:0}, {w:3, yds:15, td:0}, {w:4, yds:20, td:1}, {w:5, yds:15, td:0}] },
            { name: "Rashod Bateman", pos: "WR", td: 1, yds: "190 yds", rec: "13/21 rec", marketOdds: 2.80, yac: "70 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:50, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}, {w:5, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Roquan Smith (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "51 Tackles", tacklesForLoss: 6, probability: "65%", status: "ACTIVE" },
            { name: "Kyle Hamilton (S)", sacks: "1.5 Sacks", pressures: "9 Pressures", tackles: "41 Tackles", tacklesForLoss: 4, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Bengals": {
        record: "3-2", games: 5, rush: 414, pass: 1361, oppPass: 1225, oppRush: 615, oppTD: 10, turnovers: 6, sacks: 9, redZonePct: 49, thirdDownPct: 50, penalties: 40,
        injuredPlayers: [{name: "Tee Higgins", pos: "WR", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 245, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 68, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 88, allowedTDs: 2 } },
        players: [
            { name: "Joe Burrow", pos: "QB", td: 0, yds: "1361 pass yds / 45 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 22, gameLog: [{w:1, yds:245, td:0}, {w:2, yds:182, td:0}, {w:3, yds:269, td:0}, {w:4, yds:414, td:0}, {w:5, yds:190, td:0}] },
            { name: "Ja'Marr Chase", pos: "WR", td: 4, yds: "380 yds", rec: "25/35 rec", marketOdds: 1.70, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:65, td:1}, {w:3, yds:80, td:1}, {w:4, yds:115, td:1}, {w:5, yds:50, td:0}] },
            { name: "Tee Higgins", pos: "WR", td: 3, yds: "423 yds", rec: "24/33 rec", marketOdds: 1.95, yac: "140 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:70, td:0}, {w:3, yds:85, td:1}, {w:4, yds:120, td:1}, {w:5, yds:73, td:0}] },
            { name: "Chase Brown", pos: "RB", td: 2, yds: "246 yds", rec: "13/19 rec", marketOdds: 2.10, yac: "95 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:47, td:0}, {w:5, yds:49, td:1}] },
            { name: "Mike Gesicki", pos: "TE", td: 4, yds: "165 yds", rec: "11/16 rec", marketOdds: 2.60, yac: "65 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:20, td:0}, {w:4, yds:40, td:1}, {w:5, yds:50, td:2}] },
            { name: "Samaje Perine", pos: "RB", td: 0, yds: "45 yds", rec: "6/10 rec", marketOdds: 3.40, yac: "20 YAC", gameLog: [{w:1, yds:10, td:0}, {w:2, yds:10, td:0}, {w:3, yds:5, td:0}, {w:4, yds:10, td:0}, {w:5, yds:10, td:0}] }
        ],
        defenders: [
            { name: "Demetrius Knight Jr. (LB)", sacks: "0.0 Sacks", pressures: "5 Pressures", tackles: "42 Tackles", tacklesForLoss: 3, probability: "50%", status: "ACTIVE" },
            { name: "Jordan Battle (S)", sacks: "0.0 Sacks", pressures: "3 Pressures", tackles: "26 Tackles", tacklesForLoss: 1, probability: "45%", status: "ACTIVE" }
        ]
    },
    "Browns": {
        record: "3-2", games: 5, rush: 471, pass: 897, oppPass: 1083, oppRush: 587, oppTD: 10, turnovers: 7, sacks: 14, redZonePct: 59, thirdDownPct: 37, penalties: 49,
        injuredPlayers: [{name: "Nick Chubb", pos: "RB", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 74, allowedTDs: 1 } },
        players: [
            { name: "Deshaun Watson", pos: "QB", td: 1, yds: "1010 pass yds / 115 rush yds", rec: "QB / Starter", marketOdds: 3.50, pressuresFaced: 21, gameLog: [{w:1, yds:185, td:0}, {w:2, yds:223, td:0}, {w:3, yds:127, td:0}, {w:4, yds:260, td:1}, {w:5, yds:102, td:0}] },
            { name: "Quinshon Judkins", pos: "RB", td: 4, yds: "295 yds", rec: "18/25 rec", marketOdds: 1.85, yac: "110 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:70, td:1}, {w:3, yds:55, td:1}, {w:4, yds:55, td:0}, {w:5, yds:55, td:1}] },
            { name: "Jerry Jeudy", pos: "WR", td: 2, yds: "305 yds", rec: "22/32 rec", marketOdds: 2.10, yac: "120 YAC", gameLog: [{w:1, yds:65, td:0}, {w:2, yds:70, td:1}, {w:3, yds:60, td:0}, {w:4, yds:55, td:0}, {w:5, yds:55, td:1}] },
            { name: "Boston", pos: "WR", td: 2, yds: "210 yds", rec: "15/25 rec", marketOdds: 2.35, yac: "80 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:1}, {w:5, yds:30, td:0}] },
            { name: "Fannin Jr", pos: "TE", td: 3, yds: "245 yds", rec: "20/26 rec", marketOdds: 2.80, yac: "95 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:1}, {w:4, yds:55, td:0}, {w:5, yds:35, td:0}] },
            { name: "KC Concepcion", pos: "WR", td: 0, yds: "165 yds", rec: "15/22 rec", marketOdds: 3.00, yac: "65 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:0}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}, {w:5, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Myles Garrett (DE)", sacks: "6.5 Sacks", pressures: "29 Pressures", tackles: "22 Tackles", tacklesForLoss: 7, probability: "80%", status: "ACTIVE" },
            { name: "Denzel Ward (CB)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "24 Tackles", tacklesForLoss: 1, probability: "55%", status: "ACTIVE" }
        ]
    },
    "Steelers": {
        record: "3-2", games: 5, rush: 506, pass: 1234, oppPass: 1110, oppRush: 502, oppTD: 10, turnovers: 6, sacks: 15, redZonePct: 53, thirdDownPct: 33, penalties: 33,
        injuredPlayers: [{name: "Russell Wilson", pos: "QB", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Aaron Rodgers", pos: "QB", td: 0, yds: "1234 pass yds", rec: "QB / Starter", marketOdds: 3.20, pressuresFaced: 16, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:0}, {w:3, yds:269, td:0}, {w:4, yds:260, td:0}, {w:5, yds:215, td:0}] },
            { name: "Jaylen Warren", pos: "RB", td: 3, yds: "410 yds", rec: "19/26 rec", marketOdds: 1.90, yac: "145 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:138, td:1}, {w:4, yds:65, td:0}, {w:5, yds:72, td:0}] },
            { name: "D.K. Metcalf", pos: "WR", td: 4, yds: "380 yds", rec: "26/38 rec", marketOdds: 1.75, yac: "140 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}, {w:5, yds:70, td:1}] },
            { name: "Pat Freiermuth", pos: "TE", td: 4, yds: "245 yds", rec: "21/28 rec", marketOdds: 2.30, yac: "85 YAC", gameLog: [{w:1, yds:45, td:1}, {w:2, yds:50, td:1}, {w:3, yds:50, td:1}, {w:4, yds:50, td:0}, {w:5, yds:50, td:1}] },
            { name: "Roman Wilson", pos: "WR", td: 1, yds: "210 yds", rec: "15/21 rec", marketOdds: 2.70, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:0}, {w:3, yds:40, td:1}, {w:4, yds:45, td:0}, {w:5, yds:40, td:0}] },
            { name: "Darnell Washington", pos: "TE", td: 1, yds: "135 yds", rec: "12/17 rec", marketOdds: 3.10, yac: "50 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] }
        ],
        defenders: [
            { name: "T.J. Watt (EDGE)", sacks: "4.5 Sacks", pressures: "26 Pressures", tackles: "21 Tackles", tacklesForLoss: 7, probability: "80%", status: "ACTIVE" },
            { name: "Patrick Queen (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "46 Tackles", tacklesForLoss: 5, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Texans": {
        record: "1-4", games: 5, rush: 395, pass: 1402, oppPass: 1170, oppRush: 392, oppTD: 12, turnovers: 2, sacks: 14, redZonePct: 55, thirdDownPct: 38, penalties: 42,
        injuredPlayers: [{name: "Will Anderson Jr.", pos: "DE", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "C.J. Stroud", pos: "QB", td: 0, yds: "1402 pass yds", rec: "QB / Starter", marketOdds: 2.00, pressuresFaced: 19, gameLog: [{w:1, yds:257, td:0}, {w:2, yds:314, td:0}, {w:3, yds:153, td:0}, {w:4, yds:335, td:0}, {w:5, yds:250, td:0}] },
            { name: "W. Marks", pos: "RB", td: 2, yds: "149 yds", rec: "11/16 rec", marketOdds: 1.85, yac: "50 YAC", gameLog: [{w:1, yds:30, td:1}, {w:2, yds:40, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}, {w:5, yds:19, td:0}] },
            { name: "Hutchinson", pos: "WR", td: 1, yds: "210 yds", rec: "15/22 rec", marketOdds: 2.30, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:0}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}, {w:5, yds:50, td:1}] },
            { name: "Dalton Schultz", pos: "TE", td: 1, yds: "250 yds", rec: "19/26 rec", marketOdds: 2.50, yac: "85 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:54, td:0}, {w:5, yds:36, td:0}] },
            { name: "David Montgomery", pos: "RB", td: 2, yds: "155 yds", rec: "10/14 rec", marketOdds: 1.85, yac: "55 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:40, td:1}, {w:3, yds:27, td:0}, {w:4, yds:30, td:1}, {w:5, yds:28, td:0}] }
        ],
        defenders: [
            { name: "Will Anderson Jr. (DE)", sacks: "7.5 Sacks", pressures: "22 Pressures", tackles: "26 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" },
            { name: "Azeez Al-Shaair (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "42 Tackles", tacklesForLoss: 4, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Colts": {
        record: "2-3", games: 5, rush: 504, pass: 1021, oppPass: 1270, oppRush: 651, oppTD: 15, turnovers: 8, sacks: 9, redZonePct: 67, thirdDownPct: 35, penalties: 25,
        injuredPlayers: [{name: "DeForest Buckner", pos: "DT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Daniel Jones", pos: "QB", td: 1, yds: "1021 pass yds / 25 rush yds", rec: "QB / Starter", marketOdds: 3.20, pressuresFaced: 18, gameLog: [{w:1, yds:149, td:0}, {w:2, yds:210, td:0}, {w:3, yds:211, td:1}, {w:4, yds:129, td:0}, {w:5, yds:322, td:0}] },
            { name: "Jonathan Taylor", pos: "RB", td: 6, yds: "398 yds", rec: "13/18 rec", marketOdds: 1.55, yac: "140 YAC", gameLog: [{w:1, yds:90, td:2}, {w:2, yds:95, td:2}, {w:3, yds:85, td:1}, {w:4, yds:83, td:1}, {w:5, yds:45, td:0}] },
            { name: "Josh Downs", pos: "WR", td: 0, yds: "249 yds", rec: "20/29 rec", marketOdds: 2.20, yac: "100 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:0}, {w:3, yds:50, td:0}, {w:4, yds:47, td:0}, {w:5, yds:47, td:0}] },
            { name: "Tyler Warren", pos: "TE", td: 2, yds: "213 yds", rec: "30/38 rec", marketOdds: 2.60, yac: "75 YAC", gameLog: [{w:1, yds:40, td:1}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:40, td:0}, {w:5, yds:48, td:0}] },
            { name: "Keenan Allen", pos: "WR", td: 1, yds: "145 yds", rec: "18/25 rec", marketOdds: 2.30, yac: "55 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:0}, {w:3, yds:50, td:1}, {w:4, yds:40, td:0}, {w:5, yds:0, td:0}] },
            { name: "Alec Pierce", pos: "WR", td: 0, yds: "72 yds", rec: "5/9 rec", marketOdds: 3.10, yac: "30 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:0, td:0}, {w:3, yds:0, td:0}, {w:4, yds:37, td:0}, {w:5, yds:0, td:0}] }
        ],
        defenders: [
            { name: "DeForest Buckner (DT)", sacks: "4.0 Sacks", pressures: "16 Pressures", tackles: "24 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" },
            { name: "Akeem Davis-Gaither (LB)", sacks: "0.0 Sacks", pressures: "5 Pressures", tackles: "44 Tackles", tacklesForLoss: 4, probability: "55%", status: "ACTIVE" }
        ]
    },
    "Jaguars": {
        record: "4-1", games: 5, rush: 571, pass: 1103, oppPass: 1331, oppRush: 319, oppTD: 4, turnovers: 3, sacks: 10, redZonePct: 64, thirdDownPct: 46, penalties: 41,
        injuredPlayers: [{name: "Josh Hines-Allen", pos: "EDGE", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "Trevor Lawrence", pos: "QB", td: 1, yds: "1174 pass yds / 105 rush yds", rec: "QB / Starter", marketOdds: 2.40, pressuresFaced: 15, gameLog: [{w:1, yds:234, td:0}, {w:2, yds:173, td:0}, {w:3, yds:178, td:0}, {w:4, yds:212, td:0}, {w:5, yds:306, td:1}] },
            { name: "Bhayshul Tuten", pos: "RB", td: 3, yds: "330 yds", rec: "13/18 rec", marketOdds: 1.80, yac: "125 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:65, td:1}, {w:4, yds:67, td:0}, {w:5, yds:53, td:0}] },
            { name: "Parker Washington", pos: "WR", td: 1, yds: "275 yds", rec: "19/26 rec", marketOdds: 2.10, yac: "105 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:58, td:0}, {w:5, yds:47, td:0}] },
            { name: "J. Cameron", pos: "WR", td: 2, yds: "95 yds", rec: "6/8 rec", marketOdds: 2.40, yac: "35 YAC", gameLog: [{w:1, yds:15, td:0}, {w:2, yds:20, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:1}, {w:5, yds:15, td:0}] },
            { name: "B. Strange", pos: "TE", td: 1, yds: "210 yds", rec: "16/21 rec", marketOdds: 2.50, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:30, td:0}] },
            { name: "Brian Thomas Jr.", pos: "WR", td: 2, yds: "240 yds", rec: "16/24 rec", marketOdds: 2.40, yac: "90 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}, {w:5, yds:45, td:1}] }
        ],
        defenders: [
            { name: "Josh Hines-Allen (EDGE)", sacks: "2.0 Sacks", pressures: "19 Pressures", tackles: "28 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" },
            { name: "Ventrell Miller (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "34 Tackles", tacklesForLoss: 3, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Titans": {
        record: "0-5", games: 5, rush: 435, pass: 976, oppPass: 1200, oppRush: 559, oppTD: 14, turnovers: 7, sacks: 12, redZonePct: 41, thirdDownPct: 34, penalties: 36,
        injuredPlayers: [{name: "Jeffery Simmons", pos: "DT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 225, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Cam Ward", pos: "QB", td: 1, yds: "976 pass yds / 145 rush yds", rec: "QB / Starter", marketOdds: 3.50, pressuresFaced: 20, gameLog: [{w:1, yds:170, td:0}, {w:2, yds:180, td:0}, {w:3, yds:185, td:0}, {w:4, yds:191, td:0}, {w:5, yds:250, td:1}] },
            { name: "Tony Pollard", pos: "RB", td: 2, yds: "270 yds", rec: "17/23 rec", marketOdds: 2.10, yac: "100 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:52, td:0}, {w:4, yds:54, td:0}, {w:5, yds:49, td:1}] },
            { name: "Carnell Tate", pos: "WR", td: 1, yds: "310 yds", rec: "22/32 rec", marketOdds: 2.30, yac: "110 YAC", gameLog: [{w:1, yds:65, td:0}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:68, td:0}, {w:5, yds:42, td:0}] },
            { name: "Wan'Dale Robinson", pos: "WR", td: 2, yds: "220 yds", rec: "19/27 rec", marketOdds: 2.50, yac: "85 YAC", gameLog: [{w:1, yds:40, td:1}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}, {w:5, yds:35, td:0}] },
            { name: "Elic Ayomanor", pos: "WR", td: 1, yds: "170 yds", rec: "12/19 rec", marketOdds: 3.20, yac: "60 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}, {w:5, yds:30, td:0}] },
            { name: "Gunnar Helm", pos: "TE", td: 0, yds: "140 yds", rec: "13/19 rec", marketOdds: 3.40, yac: "50 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:0}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Jeffery Simmons (DT)", sacks: "2.5 Sacks", pressures: "14 Pressures", tackles: "29 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" },
            { name: "Anthony Hill Jr. (LB)", sacks: "0.0 Sacks", pressures: "4 Pressures", tackles: "49 Tackles", tacklesForLoss: 6, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Chiefs": {
        record: "4-1", games: 5, rush: 649, pass: 1037, oppPass: 900, oppRush: 371, oppTD: 7, turnovers: 2, sacks: 12, redZonePct: 63.2, thirdDownPct: 44.0, penalties: 31,
        injuredPlayers: [{name: "Hollywood Brown", pos: "WR", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Patrick Mahomes", pos: "QB", td: 0, yds: "1037 pass yds / 41 rush yds", rec: "QB / Starter", marketOdds: 1.80, pressuresFaced: 30, gameLog: [{w:1, yds:260, td:0}, {w:2, yds:270, td:0}, {w:3, yds:250, td:0}, {w:4, yds:257, td:0}] },
            { name: "Travis Kelce", pos: "TE", td: 2, yds: "246 yds", rec: "16/22 rec", marketOdds: 1.70, yac: "168 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:65, td:0}, {w:3, yds:55, td:1}, {w:4, yds:56, td:0}] },
            { name: "Rashee Rice", pos: "WR", td: 2, yds: "190 yds", rec: "13/17 rec", marketOdds: 1.85, yac: "119 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:45, td:0}, {w:3, yds:55, td:1}, {w:4, yds:40, td:0}] },
            { name: "Xavier Worthy", pos: "WR", td: 1, yds: "133 yds", rec: "14/22 rec", marketOdds: 2.10, yac: "65 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:30, td:1}, {w:3, yds:38, td:0}, {w:4, yds:30, td:0}] },
            { name: "Walker III", pos: "RB", td: 4, yds: "537 yds", rec: "12/19 rec", marketOdds: 1.60, yac: "279 YAC", gameLog: [{w:1, yds:120, td:1}, {w:2, yds:145, td:1}, {w:3, yds:130, td:1}, {w:4, yds:142, td:1}] },
            { name: "Noah Gray", pos: "TE", td: 1, yds: "61 yds", rec: "6/8 rec", marketOdds: 3.10, yac: "26 YAC", gameLog: [{w:1, yds:15, td:0}, {w:2, yds:20, td:1}, {w:3, yds:12, td:0}, {w:4, yds:14, td:0}] }
        ],
        defenders: [
            { name: "Chris Jones (DT)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "18 Tackles", tacklesForLoss: 5, probability: "80%", status: "ACTIVE" },
            { name: "Nick Bolton (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "43 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Chargers": {
        record: "0-5", games: 5, rush: 641, pass: 937, oppPass: 965, oppRush: 593, oppTD: 7, turnovers: 13, sacks: 14, redZonePct: 45, thirdDownPct: 34.8, penalties: 47,
        injuredPlayers: [{name: "Rashawn Slater", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Justin Herbert", pos: "QB", td: 0, yds: "937 pass yds / 85 rush yds", rec: "QB / Starter", marketOdds: 1.90, pressuresFaced: 18, gameLog: [{w:1, yds:187, td:0}, {w:2, yds:183, td:0}, {w:3, yds:217, td:0}, {w:4, yds:154, td:0}, {w:5, yds:196, td:0}] },
            { name: "Omarion Hampton", pos: "RB", td: 3, yds: "271 yds", rec: "15/22 rec", marketOdds: 1.75, yac: "110 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:65, td:1}, {w:3, yds:50, td:1}, {w:4, yds:51, td:0}, {w:5, yds:50, td:1}] },
            { name: "Ladd McConkey", pos: "WR", td: 2, yds: "280 yds", rec: "22/30 rec", marketOdds: 2.00, yac: "100 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}, {w:5, yds:0, td:0}] },
            { name: "Quentin Johnston", pos: "WR", td: 2, yds: "220 yds", rec: "15/22 rec", marketOdds: 2.40, yac: "80 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:0}, {w:3, yds:55, td:1}, {w:4, yds:55, td:0}, {w:5, yds:0, td:0}] },
            { name: "Oronde Gadsden", pos: "TE", td: 1, yds: "175 yds", rec: "14/19 rec", marketOdds: 2.70, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}, {w:5, yds:0, td:0}] },
            { name: "Kimani Vidal", pos: "RB", td: 0, yds: "125 yds", rec: "10/14 rec", marketOdds: 3.10, yac: "45 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:0}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}, {w:5, yds:0, td:0}] }
        ],
        defenders: [
            { name: "Khalil Mack (OLB)", sacks: "3.0 Sacks", pressures: "18 Pressures", tackles: "20 Tackles", tacklesForLoss: 4, probability: "75%", status: "ACTIVE" },
            { name: "Derwin James Jr. (S)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "39 Tackles", tacklesForLoss: 3, probability: "65%", status: "ACTIVE" }
        ]
    },
    "Raiders": {
        record: "3-2", games: 5, rush: 410, pass: 1268, oppPass: 1182, oppRush: 703, oppTD: 11, turnovers: 7, sacks: 10, redZonePct: 52, thirdDownPct: 39.5, penalties: 31,
        injuredPlayers: [{name: "Malcolm Koonce", pos: "DE", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 88, allowedTDs: 2 } },
        players: [
            { name: "Kirk Cousins", pos: "QB", td: 0, yds: "1268 pass yds", rec: "QB / Starter", marketOdds: 3.40, pressuresFaced: 21, gameLog: [{w:1, yds:160, td:0}, {w:2, yds:248, td:0}, {w:3, yds:227, td:0}, {w:4, yds:365, td:0}, {w:5, yds:268, td:0}] },
            { name: "Ashton Jeanty", pos: "RB", td: 3, yds: "310 yds", rec: "15/21 rec", marketOdds: 1.85, yac: "120 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:1}, {w:4, yds:80, td:0}, {w:5, yds:0, td:0}] },
            { name: "Brock Bowers", pos: "TE", td: 2, yds: "295 yds", rec: "25/34 rec", marketOdds: 1.95, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}, {w:5, yds:0, td:0}] },
            { name: "Michael Mayer", pos: "TE", td: 1, yds: "180 yds", rec: "15/22 rec", marketOdds: 2.60, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:45, td:0}, {w:5, yds:0, td:0}] },
            { name: "Tre Tucker", pos: "WR", td: 1, yds: "190 yds", rec: "13/20 rec", marketOdds: 2.80, yac: "75 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:0, td:0}] },
            { name: "White", pos: "WR", td: 3, yds: "110 yds", rec: "5/10 rec", marketOdds: 2.50, yac: "45 YAC", gameLog: [{w:1, yds:25, td:1}, {w:2, yds:30, td:1}, {w:3, yds:25, td:1}, {w:4, yds:30, td:0}, {w:5, yds:0, td:0}] }
        ],
        defenders: [
            { name: "Maxx Crosby (DE)", sacks: "6.0 Sacks", pressures: "29 Pressures", tackles: "25 Tackles", tacklesForLoss: 7, probability: "85%", status: "ACTIVE" },
            { name: "Quay Walker (LB)", sacks: "0.5 Sacks", pressures: "5 Pressures", tackles: "48 Tackles", tacklesForLoss: 5, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Broncos": {
        record: "3-2", games: 5, rush: 431, pass: 914, oppPass: 1011, oppRush: 726, oppTD: 7, turnovers: 6, sacks: 13, redZonePct: 56.3, thirdDownPct: 33.8, penalties: 36,
        injuredPlayers: [{name: "Mike McGlinchey", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 46, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Bo Nix", pos: "QB", td: 1, yds: "942 pass yds / 155 rush yds", rec: "QB / Dual Threat", marketOdds: 2.80, pressuresFaced: 18, gameLog: [{w:1, yds:115, td:0}, {w:2, yds:288, td:0}, {w:3, yds:179, td:0}, {w:4, yds:214, td:0}, {w:5, yds:118, td:1}] },
            { name: "J.K. Dobbins", pos: "RB", td: 1, yds: "229 yds", rec: "13/18 rec", marketOdds: 1.70, yac: "85 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:52, td:1}, {w:3, yds:42, td:0}, {w:4, yds:50, td:0}, {w:5, yds:40, td:0}] },
            { name: "Courtland Sutton", pos: "WR", td: 2, yds: "270 yds", rec: "20/30 rec", marketOdds: 2.05, yac: "95 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:65, td:1}, {w:3, yds:60, td:1}, {w:4, yds:50, td:0}, {w:5, yds:40, td:0}] },
            { name: "Evan Engram", pos: "TE", td: 2, yds: "230 yds", rec: "19/26 rec", marketOdds: 2.20, yac: "85 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:1}, {w:4, yds:45, td:0}, {w:5, yds:35, td:0}] },
            { name: "Waddle", pos: "WR", td: 1, yds: "204 yds", rec: "16/26 rec", marketOdds: 2.10, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:40, td:0}, {w:5, yds:29, td:0}] },
            { name: "Harvey", pos: "RB", td: 0, yds: "150 yds", rec: "20/21 rec", marketOdds: 2.90, yac: "50 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:0}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Patrick Surtain II (CB)", sacks: "0.0 Sacks", pressures: "1 Pressure", tackles: "21 Tackles", tacklesForLoss: 1, probability: "60%", status: "ACTIVE" },
            { name: "Zach Allen (DE)", sacks: "4.0 Sacks", pressures: "19 Pressures", tackles: "27 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Cowboys": {
        record: "2-3", games: 5, rush: 545, pass: 1381, oppPass: 1180, oppRush: 590, oppTD: 14, turnovers: 7, sacks: 15, redZonePct: 60, thirdDownPct: 41, penalties: 32,
        injuredPlayers: [{name: "Marist Liufau", pos: "LB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 76, allowedTDs: 2 } },
        players: [
            { name: "Dak Prescott", pos: "QB", td: 1, yds: "1381 pass yds / 66 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 18, gameLog: [{w:1, yds:175, td:0}, {w:2, yds:279, td:0}, {w:3, yds:276, td:0}, {w:4, yds:335, td:0}, {w:5, yds:316, td:1}] },
            { name: "CeeDee Lamb", pos: "WR", td: 4, yds: "507 yds", rec: "39/51 rec", marketOdds: 1.65, yac: "185 YAC", gameLog: [{w:1, yds:44, td:1}, {w:2, yds:153, td:2}, {w:3, yds:112, td:0}, {w:4, yds:189, td:1}, {w:5, yds:9, td:0}] },
            { name: "Javonte Williams", pos: "RB", td: 4, yds: "395 yds", rec: "17/23 rec", marketOdds: 1.70, yac: "155 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:90, td:2}, {w:3, yds:95, td:1}, {w:4, yds:85, td:0}, {w:5, yds:45, td:0}] },
            { name: "George Pickens", pos: "WR", td: 2, yds: "340 yds", rec: "23/34 rec", marketOdds: 1.95, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:0}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}, {w:5, yds:50, td:0}] },
            { name: "Jake Ferguson", pos: "TE", td: 1, yds: "225 yds", rec: "20/27 rec", marketOdds: 2.40, yac: "85 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:35, td:0}] },
            { name: "KaVontae Turpin", pos: "WR", td: 1, yds: "145 yds", rec: "12/17 rec", marketOdds: 3.10, yac: "70 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Quinnen Williams (DT)", sacks: "4.5 Sacks", pressures: "21 Pressures", tackles: "24 Tackles", tacklesForLoss: 6, probability: "80%", status: "ACTIVE" },
            { name: "Rashan Gary (EDGE)", sacks: "4.0 Sacks", pressures: "20 Pressures", tackles: "20 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Eagles": {
        record: "3-2", games: 5, rush: 680, pass: 1120, oppPass: 1090, oppRush: 420, oppTD: 9, turnovers: 4, sacks: 18, redZonePct: 68, thirdDownPct: 44, penalties: 28,
        injuredPlayers: [{name: "A.J. Epenesa", pos: "LB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Jalen Hurts", pos: "QB", td: 5, yds: "1120 pass yds / 260 rush yds", rec: "QB / Dual Threat", marketOdds: 1.75, pressuresFaced: 17, gameLog: [{w:1, yds:220, td:1}, {w:2, yds:230, td:1}, {w:3, yds:235, td:1}, {w:4, yds:235, td:1}, {w:5, yds:200, td:1}] },
            { name: "Saquon Barkley", pos: "RB", td: 6, yds: "520 yds", rec: "20/27 rec", marketOdds: 1.50, yac: "220 YAC", gameLog: [{w:1, yds:100, td:2}, {w:2, yds:105, td:1}, {w:3, yds:95, td:1}, {w:4, yds:110, td:1}, {w:5, yds:110, td:1}] },
            { name: "A.J. Brown", pos: "WR", td: 4, yds: "410 yds", rec: "27/38 rec", marketOdds: 1.70, yac: "140 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}, {w:5, yds:80, td:1}] },
            { name: "DeVonta Smith", pos: "WR", td: 3, yds: "350 yds", rec: "25/35 rec", marketOdds: 1.90, yac: "130 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}, {w:5, yds:70, td:1}] },
            { name: "Wicks", pos: "WR", td: 1, yds: "180 yds", rec: "14/22 rec", marketOdds: 2.60, yac: "60 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}, {w:5, yds:30, td:0}] },
            { name: "D. Cooper", pos: "WR", td: 3, yds: "110 yds", rec: "6/12 rec", marketOdds: 2.30, yac: "35 YAC", gameLog: [{w:1, yds:15, td:1}, {w:2, yds:20, td:1}, {w:3, yds:20, td:0}, {w:4, yds:35, td:1}, {w:5, yds:20, td:0}] }
        ],
        defenders: [
            { name: "Nolan Smith Jr. (OLB)", sacks: "5.0 Sacks", pressures: "22 Pressures", tackles: "22 Tackles", tacklesForLoss: 7, probability: "75%", status: "ACTIVE" },
            { name: "Marcus Epps (SAF)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "41 Tackles", tacklesForLoss: 3, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Giants": {
        record: "3-1-1", games: 5, rush: 545, pass: 996, oppPass: 997, oppRush: 638, oppTD: 9, turnovers: 7, sacks: 13, redZonePct: 64.3, thirdDownPct: 44.3, penalties: 36,
        injuredPlayers: [{name: "Brian Burns", pos: "EDGE", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 62, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 89, allowedTDs: 2 } },
        players: [
            { name: "Jameis Winston", pos: "QB", td: 0, yds: "996 pass yds", rec: "QB / Starter", marketOdds: 3.50, pressuresFaced: 22, gameLog: [{w:1, yds:229, td:0}, {w:2, yds:130, td:0}, {w:3, yds:100, td:0}, {w:4, yds:232, td:0}, {w:5, yds:305, td:0}] },
            { name: "Cam Skattebo", pos: "RB", td: 1, yds: "383 yds", rec: "18/24 rec", marketOdds: 1.90, yac: "130 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:52, td:0}, {w:3, yds:138, td:0}, {w:4, yds:87, td:0}, {w:5, yds:103, td:0}] },
            { name: "Malik Nabers", pos: "WR", td: 4, yds: "420 yds", rec: "32/45 rec", marketOdds: 1.70, yac: "150 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:70, td:1}, {w:3, yds:75, td:1}, {w:4, yds:90, td:1}, {w:5, yds:100, td:0}] },
            { name: "Darnell Mooney", pos: "WR", td: 1, yds: "250 yds", rec: "19/28 rec", marketOdds: 2.40, yac: "85 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:50, td:0}, {w:5, yds:40, td:0}] },
            { name: "Theo Johnson", pos: "TE", td: 1, yds: "195 yds", rec: "16/23 rec", marketOdds: 2.80, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:40, td:0}, {w:5, yds:30, td:0}] },
            { name: "Likely", pos: "TE", td: 2, yds: "270 yds", rec: "25/39 rec", marketOdds: 2.10, yac: "95 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:1}, {w:4, yds:65, td:0}, {w:5, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Kayvon Thibodeaux (EDGE)", sacks: "4.5 Sacks", pressures: "21 Pressures", tackles: "20 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" },
            { name: "Bobby Okereke (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "49 Tackles", tacklesForLoss: 7, probability: "65%", status: "ACTIVE" }
        ]
    },
    "Commanders": {
        record: "1-3-1", games: 5, rush: 698, pass: 939, oppPass: 1275, oppRush: 477, oppTD: 14, turnovers: 2, sacks: 10, redZonePct: 50.0, thirdDownPct: 31.9, penalties: 39,
        injuredPlayers: [{name: "Daron Payne", pos: "DT", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 74, allowedTDs: 1 } },
        players: [
            { name: "Jayden Daniels", pos: "QB", td: 3, yds: "939 pass yds / 310 rush yds", rec: "QB / Dual Threat", marketOdds: 1.70, pressuresFaced: 16, gameLog: [{w:1, yds:163, td:1}, {w:2, yds:207, td:1}, {w:3, yds:176, td:1}, {w:4, yds:217, td:0}, {w:5, yds:176, td:0}] },
            { name: "Croskey-Merritt", pos: "RB", td: 5, yds: "250 yds", rec: "15/20 rec", marketOdds: 1.85, yac: "90 YAC", gameLog: [{w:1, yds:40, td:1}, {w:2, yds:45, td:0}, {w:3, yds:45, td:1}, {w:4, yds:50, td:0}, {w:5, yds:70, td:3}] },
            { name: "Williams", pos: "WR", td: 1, yds: "190 yds", rec: "14/22 rec", marketOdds: 2.30, yac: "70 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}, {w:5, yds:30, td:0}] },
            { name: "Rachaad White", pos: "RB", td: 1, yds: "120 yds", rec: "11/12 rec", marketOdds: 2.10, yac: "50 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:0}, {w:3, yds:25, td:1}, {w:4, yds:25, td:0}, {w:5, yds:25, td:0}] },
            { name: "Terry McLaurin", pos: "WR", td: 3, yds: "380 yds", rec: "26/37 rec", marketOdds: 1.75, yac: "130 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:85, td:1}, {w:4, yds:80, td:0}, {w:5, yds:60, td:0}] },
            { name: "Stefon Diggs", pos: "WR", td: 2, yds: "340 yds", rec: "28/39 rec", marketOdds: 1.90, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}, {w:5, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Frankie Luvu (LB)", sacks: "2.5 Sacks", pressures: "11 Pressures", tackles: "46 Tackles", tacklesForLoss: 6, probability: "70%", status: "ACTIVE" },
            { name: "Dorance Armstrong (EDGE)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "19 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Bears": {
        record: "3-2", games: 5, rush: 866, pass: 1096, oppPass: 1120, oppRush: 445, oppTD: 9, turnovers: 7, sacks: 16, redZonePct: 65, thirdDownPct: 43.7, penalties: 30,
        injuredPlayers: [{name: "Teven Jenkins", pos: "G", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Caleb Williams", pos: "QB", td: 1, yds: "1096 pass yds / 165 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 19, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:240, td:0}, {w:3, yds:250, td:0}, {w:4, yds:240, td:0}, {w:5, yds:146, td:1}] },
            { name: "D'Andre Swift", pos: "RB", td: 4, yds: "354 yds", rec: "18/24 rec", marketOdds: 1.75, yac: "155 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:85, td:2}, {w:3, yds:90, td:1}, {w:4, yds:90, td:0}, {w:5, yds:14, td:0}] },
            { name: "Burden III", pos: "WR", td: 2, yds: "290 yds", rec: "23/34 rec", marketOdds: 2.10, yac: "100 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}, {w:5, yds:50, td:1}] },
            { name: "Raymond", pos: "WR", td: 2, yds: "280 yds", rec: "25/28 rec", marketOdds: 2.30, yac: "95 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}, {w:5, yds:50, td:1}] },
            { name: "Cole Kmet", pos: "TE", td: 1, yds: "220 yds", rec: "19/26 rec", marketOdds: 2.50, yac: "80 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}, {w:5, yds:35, td:0}] },
            { name: "Roschon Johnson", pos: "RB", td: 1, yds: "135 yds", rec: "10/15 rec", marketOdds: 3.10, yac: "50 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Jaylon Johnson (CB)", sacks: "0.0 Sacks", pressures: "1 Pressure", tackles: "21 Tackles", tacklesForLoss: 1, probability: "65%", status: "ACTIVE" },
            { name: "Montez Sweat (DE)", sacks: "4.5 Sacks", pressures: "20 Pressures", tackles: "22 Tackles", tacklesForLoss: 6, probability: "80%", status: "ACTIVE" }
        ]
    },
    "Lions": {
        record: "3-2", games: 5, rush: 645, pass: 1350, oppPass: 1190, oppRush: 450, oppTD: 10, turnovers: 4, sacks: 16, redZonePct: 71, thirdDownPct: 47, penalties: 28,
        injuredPlayers: [{name: "Frank Ragnow", pos: "C", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 46, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Jared Goff", pos: "QB", td: 0, yds: "1350 pass yds", rec: "QB / Starter", marketOdds: 1.80, pressuresFaced: 14, gameLog: [{w:1, yds:260, td:0}, {w:2, yds:280, td:0}, {w:3, yds:275, td:0}, {w:4, yds:265, td:0}, {w:5, yds:270, td:0}] },
            { name: "Jahmyr Gibbs", pos: "RB", td: 7, yds: "504 yds", rec: "22/29 rec", marketOdds: 1.55, yac: "195 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:95, td:2}, {w:3, yds:100, td:1}, {w:4, yds:100, td:1}, {w:5, yds:124, td:2}] },
            { name: "TeSlaa", pos: "WR", td: 0, yds: "135 yds", rec: "11/20 rec", marketOdds: 3.20, yac: "45 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:0}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] },
            { name: "Amon-Ra St. Brown", pos: "WR", td: 5, yds: "490 yds", rec: "38/50 rec", marketOdds: 1.60, yac: "180 YAC", gameLog: [{w:1, yds:95, td:1}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:110, td:1}, {w:5, yds:80, td:1}] },
            { name: "Jameson Williams", pos: "WR", td: 3, yds: "350 yds", rec: "19/30 rec", marketOdds: 2.05, yac: "120 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:0}, {w:3, yds:75, td:1}, {w:4, yds:80, td:0}, {w:5, yds:60, td:1}] },
            { name: "Sam LaPorta", pos: "TE", td: 2, yds: "275 yds", rec: "24/33 rec", marketOdds: 2.15, yac: "95 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:0}, {w:3, yds:60, td:1}, {w:4, yds:60, td:0}, {w:5, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Aidan Hutchinson (EDGE)", sacks: "6.5 Sacks", pressures: "31 Pressures", tackles: "24 Tackles", tacklesForLoss: 8, probability: "85%", status: "ACTIVE" },
            { name: "Brian Branch (S)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "39 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Packers": {
        record: "3-2", games: 5, rush: 590, pass: 1240, oppPass: 1100, oppRush: 470, oppTD: 10, turnovers: 5, sacks: 17, redZonePct: 65, thirdDownPct: 42, penalties: 31,
        injuredPlayers: [{name: "Jordan Love", pos: "QB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Jordan Love", pos: "QB", td: 1, yds: "1240 pass yds / 65 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 16, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:0}, {w:3, yds:240, td:0}, {w:4, yds:240, td:0}, {w:5, yds:270, td:1}] },
            { name: "Josh Jacobs", pos: "RB", td: 5, yds: "450 yds", rec: "17/23 rec", marketOdds: 1.65, yac: "170 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}, {w:5, yds:80, td:1}] },
            { name: "Jayden Reed", pos: "WR", td: 3, yds: "380 yds", rec: "29/39 rec", marketOdds: 1.80, yac: "135 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:0}, {w:4, yds:80, td:1}, {w:5, yds:70, td:0}] },
            { name: "Christian Watson", pos: "WR", td: 4, yds: "330 yds", rec: "19/28 rec", marketOdds: 2.20, yac: "110 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:70, td:0}, {w:5, yds:80, td:2}] },
            { name: "Tucker Kraft", pos: "TE", td: 2, yds: "250 yds", rec: "21/28 rec", marketOdds: 2.40, yac: "90 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:55, td:1}, {w:4, yds:60, td:0}, {w:5, yds:40, td:0}] },
            { name: "M. Lloyd", pos: "RB", td: 1, yds: "110 yds", rec: "8/12 rec", marketOdds: 2.80, yac: "45 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:0}, {w:5, yds:20, td:0}] }
        ],
        defenders: [
            { name: "Rashan Gary (EDGE)", sacks: "5.0 Sacks", pressures: "22 Pressures", tackles: "21 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" },
            { name: "Xavier McKinney (S)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "41 Tackles", tacklesForLoss: 3, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Vikings": {
        record: "5-0", games: 5, rush: 540, pass: 1250, oppPass: 1120, oppRush: 420, oppTD: 5, turnovers: 2, sacks: 19, redZonePct: 75, thirdDownPct: 48, penalties: 27,
        injuredPlayers: [{name: "T.J. Hockenson", pos: "TE", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 185, allowedTDs: 1 }, vsTE: { allowedYdsPerGame: 40, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "Kyler Murray", pos: "QB", td: 2, yds: "1250 pass yds / 230 rush yds", rec: "QB / Dual Threat", marketOdds: 1.75, pressuresFaced: 14, gameLog: [{w:1, yds:250, td:0}, {w:2, yds:260, td:0}, {w:3, yds:240, td:1}, {w:4, yds:260, td:0}, {w:5, yds:240, td:1}] },
            { name: "Justin Jefferson", pos: "WR", td: 6, yds: "590 yds", rec: "43/58 rec", marketOdds: 1.50, yac: "210 YAC", gameLog: [{w:1, yds:110, td:1}, {w:2, yds:120, td:2}, {w:3, yds:115, td:1}, {w:4, yds:135, td:1}, {w:5, yds:110, td:1}] },
            { name: "Aaron Jones", pos: "RB", td: 4, yds: "410 yds", rec: "20/26 rec", marketOdds: 1.75, yac: "150 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:85, td:0}, {w:4, yds:90, td:1}, {w:5, yds:80, td:1}] },
            { name: "Jordan Addison", pos: "WR", td: 3, yds: "360 yds", rec: "26/37 rec", marketOdds: 1.95, yac: "120 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:1}, {w:5, yds:70, td:0}] },
            { name: "T.J. Hockenson", pos: "TE", td: 3, yds: "280 yds", rec: "23/31 rec", marketOdds: 2.30, yac: "95 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}, {w:5, yds:60, td:1}] },
            { name: "Jordan Mason", pos: "RB", td: 1, yds: "185 yds", rec: "11/16 rec", marketOdds: 2.70, yac: "60 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}, {w:5, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Andrew Van Ginkel (OLB)", sacks: "5.5 Sacks", pressures: "23 Pressures", tackles: "32 Tackles", tacklesForLoss: 7, probability: "80%", status: "ACTIVE" },
            { name: "Harrison Smith (S)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "42 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Falcons": {
        record: "3-2", games: 5, rush: 560, pass: 1180, oppPass: 1140, oppRush: 470, oppTD: 10, turnovers: 5, sacks: 15, redZonePct: 67, thirdDownPct: 44, penalties: 29,
        injuredPlayers: [{name: "Bralen Trice", pos: "EDGE", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 68, allowedTDs: 1 } },
        players: [
            { name: "Michael Penix Jr.", pos: "QB", td: 0, yds: "1180 pass yds / 45 rush yds", rec: "QB / Starter", marketOdds: 1.90, pressuresFaced: 17, gameLog: [{w:1, yds:230, td:0}, {w:2, yds:240, td:0}, {w:3, yds:235, td:0}, {w:4, yds:235, td:0}, {w:5, yds:240, td:0}] },
            { name: "Brian Robinson Jr", pos: "RB", td: 5, yds: "494 yds", rec: "19/25 rec", marketOdds: 1.65, yac: "165 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:90, td:1}, {w:4, yds:95, td:1}, {w:5, yds:144, td:1}] },
            { name: "Drake London", pos: "WR", td: 4, yds: "430 yds", rec: "31/42 rec", marketOdds: 1.70, yac: "150 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:90, td:0}, {w:5, yds:80, td:1}] },
            { name: "Dotson", pos: "WR", td: 1, yds: "220 yds", rec: "8/17 rec", marketOdds: 2.50, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:40, td:0}] },
            { name: "Kyle Pitts", pos: "TE", td: 3, yds: "300 yds", rec: "24/33 rec", marketOdds: 2.25, yac: "105 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}, {w:5, yds:60, td:1}] }
        ],
        defenders: [
            { name: "Jessie Bates III (S)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "40 Tackles", tacklesForLoss: 4, probability: "75%", status: "ACTIVE" },
            { name: "Matthew Judon (EDGE)", sacks: "4.5 Sacks", pressures: "19 Pressures", tackles: "21 Tackles", tacklesForLoss: 6, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Panthers": {
        record: "2-3", games: 5, rush: 418, pass: 1205, oppPass: 923, oppRush: 626, oppTD: 14, turnovers: 4, sacks: 10, redZonePct: 64.7, thirdDownPct: 38.0, penalties: 35,
        injuredPlayers: [{name: "Derrick Brown", pos: "DT", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 82, allowedTDs: 2 } },
        players: [
            { name: "Bryce Young", pos: "QB", td: 1, yds: "1205 pass yds / 110 rush yds", rec: "QB / Starter", marketOdds: 3.20, pressuresFaced: 21, gameLog: [{w:1, yds:200, td:0}, {w:2, yds:215, td:0}, {w:3, yds:210, td:0}, {w:4, yds:225, td:0}, {w:5, yds:355, td:1}] },
            { name: "McMillan", pos: "WR", td: 3, yds: "380 yds", rec: "31/45 rec", marketOdds: 1.95, yac: "135 YAC", gameLog: [{w:1, yds:70, td:0}, {w:2, yds:75, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}, {w:5, yds:70, td:1}] },
            { name: "Coker", pos: "WR", td: 2, yds: "300 yds", rec: "22/28 rec", marketOdds: 2.10, yac: "110 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:65, td:0}, {w:5, yds:50, td:0}] },
            { name: "Waller", pos: "TE", td: 2, yds: "230 yds", rec: "16/23 rec", marketOdds: 2.30, yac: "85 YAC", gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:0}, {w:3, yds:50, td:1}, {w:4, yds:50, td:0}, {w:5, yds:40, td:0}] },
            { name: "Chuba Hubbard", pos: "RB", td: 4, yds: "360 yds", rec: "18/24 rec", marketOdds: 1.85, yac: "130 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}, {w:5, yds:70, td:1}] }
        ],
        defenders: [
            { name: "Jaycee Horn (CB)", sacks: "0.0 Sacks", pressures: "1 Pressure", tackles: "24 Tackles", tacklesForLoss: 1, probability: "65%", status: "ACTIVE" },
            { name: "Jadeveon Clowney (EDGE)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "19 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Saints": {
        record: "1-4", games: 5, rush: 409, pass: 1201, oppPass: 1061, oppRush: 744, oppTD: 18, turnovers: 11, sacks: 13, redZonePct: 81.3, thirdDownPct: 45.8, penalties: 33,
        injuredPlayers: [{name: "Demario Davis", pos: "LB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 95, allowedTDs: 3 } },
        players: [
            { name: "Shough", pos: "QB", td: 0, yds: "1201 pass yds", rec: "QB / Starter", marketOdds: 2.20, pressuresFaced: 19, gameLog: [{w:1, yds:378, td:0}, {w:2, yds:233, td:0}, {w:3, yds:233, td:0}, {w:4, yds:270, td:0}, {w:5, yds:87, td:0}] },
            { name: "Alvin Kamara", pos: "RB", td: 5, yds: "410 yds", rec: "28/38 rec", marketOdds: 1.55, yac: "155 YAC", gameLog: [{w:1, yds:80, td:2}, {w:2, yds:90, td:1}, {w:3, yds:95, td:1}, {w:4, yds:95, td:1}, {w:5, yds:50, td:0}] },
            { name: "Chris Olave", pos: "WR", td: 3, yds: "410 yds", rec: "31/43 rec", marketOdds: 1.70, yac: "135 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}, {w:5, yds:70, td:0}] },
            { name: "Vele", pos: "WR", td: 2, yds: "290 yds", rec: "24/35 rec", marketOdds: 2.10, yac: "95 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:65, td:0}, {w:5, yds:40, td:0}] },
            { name: "Fant", pos: "TE", td: 3, yds: "170 yds", rec: "10/15 rec", marketOdds: 2.30, yac: "60 YAC", gameLog: [{w:1, yds:30, td:1}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:1}, {w:5, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Tyrann Mathieu (S)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "34 Tackles", tacklesForLoss: 2, probability: "70%", status: "ACTIVE" },
            { name: "Carl Granderson (DE)", sacks: "4.5 Sacks", pressures: "19 Pressures", tackles: "23 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Buccaneers": {
        record: "1-4", games: 5, rush: 665, pass: 867, oppPass: 1133, oppRush: 364, oppTD: 9, turnovers: 9, sacks: 17, redZonePct: 47.1, thirdDownPct: 38.2, penalties: 40,
        injuredPlayers: [{name: "Antoine Winfield Jr.", pos: "S", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Baker Mayfield", pos: "QB", td: 2, yds: "867 pass yds / 311 rush yds", rec: "QB / Starter", marketOdds: 1.75, pressuresFaced: 17, gameLog: [{w:1, yds:193, td:0}, {w:2, yds:176, td:0}, {w:3, yds:186, td:0}, {w:4, yds:134, td:0}, {w:5, yds:178, td:2}] },
            { name: "T. Hurst III", pos: "WR", td: 1, yds: "145 yds", rec: "10/20 rec", marketOdds: 2.40, yac: "55 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] },
            { name: "Gainwell", pos: "RB", td: 1, yds: "135 yds", rec: "12/17 rec", marketOdds: 2.50, yac: "50 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}, {w:5, yds:25, td:0}] },
            { name: "Chris Godwin", pos: "WR", td: 3, yds: "410 yds", rec: "33/44 rec", marketOdds: 1.70, yac: "130 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:85, td:0}, {w:4, yds:90, td:1}, {w:5, yds:70, td:0}] },
            { name: "Cade Otton", pos: "TE", td: 1, yds: "230 yds", rec: "19/27 rec", marketOdds: 2.40, yac: "85 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Vita Vea (DT)", sacks: "4.0 Sacks", pressures: "18 Pressures", tackles: "22 Tackles", tacklesForLoss: 5, probability: "80%", status: "ACTIVE" },
            { name: "Lavonte David (LB)", sacks: "1.5 Sacks", pressures: "7 Pressures", tackles: "45 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" }
        ]
    },
    "49ers": {
        record: "5-0", games: 5, rush: 643, pass: 1182, oppPass: 998, oppRush: 488, oppTD: 8, turnovers: 5, sacks: 16, redZonePct: 87.5, thirdDownPct: 51.9, penalties: 25,
        injuredPlayers: [{name: "Nick Bosa", pos: "DE", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 180, allowedTDs: 1 }, vsTE: { allowedYdsPerGame: 38, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 60, allowedTDs: 1 } },
        players: [
            { name: "Brock Purdy", pos: "QB", td: 1, yds: "1182 pass yds / 110 rush yds", rec: "QB / Starter", marketOdds: 1.70, pressuresFaced: 15, gameLog: [{w:1, yds:250, td:0}, {w:2, yds:270, td:0}, {w:3, yds:260, td:0}, {w:4, yds:260, td:0}, {w:5, yds:142, td:1}] },
            { name: "Christian McCaffrey", pos: "RB", td: 7, yds: "510 yds", rec: "27/34 rec", marketOdds: 1.45, yac: "215 YAC", gameLog: [{w:1, yds:100, td:2}, {w:2, yds:105, td:1}, {w:3, yds:105, td:2}, {w:4, yds:110, td:1}, {w:5, yds:90, td:1}] },
            { name: "George Kittle", pos: "TE", td: 4, yds: "350 yds", rec: "28/36 rec", marketOdds: 1.85, yac: "120 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:1}, {w:5, yds:60, td:1}] },
            { name: "Deebo Samuel Sr.", pos: "WR", td: 3, yds: "295 yds", rec: "21/30 rec", marketOdds: 2.10, yac: "135 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:60, td:0}, {w:5, yds:55, td:1}] },
            { name: "Kyle Juszczyk", pos: "FB", td: 1, yds: "110 yds", rec: "11/14 rec", marketOdds: 3.20, yac: "50 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:0}, {w:5, yds:20, td:0}] }
        ],
        defenders: [
            { name: "Fred Warner (LB)", sacks: "1.5 Sacks", pressures: "8 Pressures", tackles: "48 Tackles", tacklesForLoss: 6, probability: "85%", status: "ACTIVE" },
            { name: "Nick Bosa (DE)", sacks: "5.5 Sacks", pressures: "26 Pressures", tackles: "20 Tackles", tacklesForLoss: 7, probability: "80%", status: "QUESTIONABLE" }
        ]
    },
    "Rams": {
        record: "2-3", games: 5, rush: 520, pass: 1572, oppPass: 1180, oppRush: 510, oppTD: 13, turnovers: 6, sacks: 14, redZonePct: 61, thirdDownPct: 41, penalties: 31,
        injuredPlayers: [{name: "Rob Havenstein", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 54, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 78, allowedTDs: 1 } },
        players: [
            { name: "Matthew Stafford", pos: "QB", td: 0, yds: "1572 pass yds / 15 rush yds", rec: "QB / Starter", marketOdds: 1.90, pressuresFaced: 19, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:0}, {w:3, yds:245, td:0}, {w:4, yds:245, td:0}, {w:5, yds:592, td:0}] },
            { name: "Kyren Williams", pos: "RB", td: 6, yds: "465 yds", rec: "23/30 rec", marketOdds: 1.55, yac: "175 YAC", gameLog: [{w:1, yds:90, td:2}, {w:2, yds:95, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}, {w:5, yds:85, td:1}] },
            { name: "Adams", pos: "WR", td: 3, yds: "420 yds", rec: "28/48 rec", marketOdds: 1.70, yac: "145 YAC", gameLog: [{w:1, yds:70, td:0}, {w:2, yds:75, td:1}, {w:3, yds:80, td:0}, {w:4, yds:85, td:1}, {w:5, yds:110, td:1}] },
            { name: "Higbee", pos: "TE", td: 1, yds: "215 yds", rec: "19/24 rec", marketOdds: 2.50, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}, {w:5, yds:45, td:0}] },
            { name: "Blake Corum", pos: "RB", td: 1, yds: "175 yds", rec: "10/15 rec", marketOdds: 2.80, yac: "65 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}, {w:5, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Kobie Turner (DT)", sacks: "4.0 Sacks", pressures: "21 Pressures", tackles: "26 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" },
            { name: "Ernest Jones IV (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "48 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Cardinals": {
        record: "1-4", games: 5, rush: 510, pass: 1160, oppPass: 1240, oppRush: 550, oppTD: 14, turnovers: 7, sacks: 12, redZonePct: 56, thirdDownPct: 37, penalties: 33,
        injuredPlayers: [{name: "James Conner", pos: "RB", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 225, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 58, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 82, allowedTDs: 2 } },
        players: [
            { name: "Jacoby Brissett", pos: "QB", td: 0, yds: "1160 pass yds / 85 rush yds", rec: "QB / Starter", marketOdds: 2.10, pressuresFaced: 20, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:235, td:0}, {w:3, yds:235, td:0}, {w:4, yds:240, td:0}, {w:5, yds:230, td:0}] },
            { name: "Marvin Harrison Jr.", pos: "WR", td: 5, yds: "480 yds", rec: "33/47 rec", marketOdds: 1.65, yac: "165 YAC", gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}, {w:5, yds:90, td:1}] },
            { name: "Love", pos: "RB", td: 2, yds: "235 yds", rec: "15/20 rec", marketOdds: 1.90, yac: "85 YAC", gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}, {w:5, yds:45, td:0}] },
            { name: "Allgeier", pos: "RB", td: 1, yds: "195 yds", rec: "12/17 rec", marketOdds: 2.30, yac: "75 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}, {w:5, yds:35, td:0}] },
            { name: "Trey McBride", pos: "TE", td: 2, yds: "345 yds", rec: "30/41 rec", marketOdds: 1.85, yac: "120 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:0}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}, {w:5, yds:65, td:0}] }
        ],
        defenders: [
            { name: "Budda Baker (S)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "51 Tackles", tacklesForLoss: 5, probability: "80%", status: "ACTIVE" },
            { name: "Josh Sweat (OLB)", sacks: "4.0 Sacks", pressures: "19 Pressures", tackles: "21 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Seahawks": {
        record: "3-2", games: 5, rush: 540, pass: 1210, oppPass: 1110, oppRush: 440, oppTD: 10, turnovers: 5, sacks: 15, redZonePct: 65, thirdDownPct: 42, penalties: 28,
        injuredPlayers: [{name: "Abraham Lucas", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Sam Darnold", pos: "QB", td: 0, yds: "1210 pass yds / 65 rush yds", rec: "QB / Starter", marketOdds: 1.80, pressuresFaced: 17, gameLog: [{w:1, yds:235, td:0}, {w:2, yds:250, td:0}, {w:3, yds:250, td:0}, {w:4, yds:255, td:0}, {w:5, yds:220, td:0}] },
            { name: "Zach Charbonnet", pos: "RB", td: 5, yds: "420 yds", rec: "22/30 rec", marketOdds: 1.70, yac: "150 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:90, td:1}, {w:4, yds:95, td:1}, {w:5, yds:70, td:1}] },
            { name: "Jaxon Smith-Njigba", pos: "WR", td: 5, yds: "480 yds", rec: "35/47 rec", marketOdds: 1.65, yac: "165 YAC", gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}, {w:5, yds:90, td:1}] },
            { name: "Cooper Kupp", pos: "WR", td: 3, yds: "410 yds", rec: "31/43 rec", marketOdds: 1.75, yac: "140 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:85, td:1}, {w:4, yds:90, td:0}, {w:5, yds:70, td:0}] },
            { name: "AJ Barner", pos: "TE", td: 1, yds: "235 yds", rec: "20/27 rec", marketOdds: 2.50, yac: "80 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}, {w:5, yds:45, td:0}] }
        ],
        defenders: [
            { name: "Leonard Williams (DE)", sacks: "4.0 Sacks", pressures: "22 Pressures", tackles: "26 Tackles", tacklesForLoss: 6, probability: "80%", status: "ACTIVE" },
            { name: "Devon Witherspoon (CB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "38 Tackles", tacklesForLoss: 4, probability: "75%", status: "ACTIVE" }
        ]
    }
};
