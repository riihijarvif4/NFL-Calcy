const nflData = {
    "Jets": {
        record: "1-3", games: 4, rush: 336, pass: 808, oppPass: 773, oppRush: 494, oppTD: 10, turnovers: 1, sacks: 9, redZonePct: 55, thirdDownPct: 32, penalties: 37,
        injuredPlayers: [{name: "David Onyemata", pos: "DT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Geno Smith", pos: "QB", td: 0, yds: "902 pass yds", rec: "QB / Starter", marketOdds: 4.50, pressuresFaced: 16, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:242, td:0}, {w:3, yds:210, td:0}, {w:4, yds:230, td:0}] },
            { name: "Breece Hall", pos: "RB", td: 1, yds: "163 yds", rec: "12/16 rec", marketOdds: 1.70, yac: "75 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:38, td:0}, {w:4, yds:30, td:0}] },
            { name: "Garrett Wilson", pos: "WR", td: 2, yds: "270 yds", rec: "27/38 rec", marketOdds: 1.80, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:65, td:0}, {w:4, yds:55, td:0}] },
            { name: "Adonai Mitchell", pos: "WR", td: 0, yds: "123 yds", rec: "9/15 rec", marketOdds: 2.80, yac: "45 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:40, td:0}, {w:3, yds:25, td:0}, {w:4, yds:28, td:0}] },
            { name: "Isaiah Williams", pos: "WR", td: 0, yds: "95 yds", rec: "7/12 rec", marketOdds: 3.40, yac: "35 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:0}, {w:3, yds:25, td:0}, {w:4, yds:25, td:0}] },
            { name: "Saqid", pos: "TE", td: 1, yds: "120 yds", rec: "12/18 rec", marketOdds: 3.20, yac: "30 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:20, td:1}, {w:3, yds:25, td:0}, {w:4, yds:20, td:0}] }
        ],
        defenders: [
            { name: "Demario Davis (LB)", sacks: "2.0 Sacks", pressures: "8 Pressures", tackles: "32 Tackles", tacklesForLoss: 4, probability: "50%", status: "ACTIVE" },
            { name: "Will McDonald IV (DE)", sacks: "2.0 Sacks", pressures: "10 Pressures", tackles: "14 Tackles", tacklesForLoss: 3, probability: "55%", status: "ACTIVE" }
        ]
    },
    "Dolphins": {
        record: "0-4", games: 4, rush: 416, pass: 654, oppPass: 906, oppRush: 436, oppTD: 11, turnovers: 5, sacks: 10, redZonePct: 33, thirdDownPct: 38, penalties: 32,
        injuredPlayers: [{name: "Ronnie Harrison Jr.", pos: "LB", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Malik Willis", pos: "QB", td: 0, yds: "712 pass yds", rec: "QB / Starter", marketOdds: 4.00, pressuresFaced: 18, gameLog: [{w:1, yds:170, td:0}, {w:2, yds:180, td:0}, {w:3, yds:175, td:0}, {w:4, yds:187, td:0}] },
            { name: "Ollie Gordon II", pos: "RB", td: 2, yds: "148 yds", rec: "12/17 rec", marketOdds: 2.10, yac: "60 YAC", gameLog: [{w:1, yds:35, td:1}, {w:2, yds:40, td:1}, {w:3, yds:38, td:0}, {w:4, yds:35, td:0}] },
            { name: "Malik Washington", pos: "WR", td: 0, yds: "219 yds", rec: "18/25 rec", marketOdds: 2.50, yac: "90 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:60, td:0}, {w:3, yds:55, td:0}, {w:4, yds:54, td:0}] },
            { name: "Ryan Miller", pos: "WR", td: 1, yds: "160 yds", rec: "12/18 rec", marketOdds: 3.10, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}] },
            { name: "Chris Bell", pos: "WR", td: 0, yds: "130 yds", rec: "10/14 rec", marketOdds: 3.30, yac: "50 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:0}, {w:3, yds:35, td:0}, {w:4, yds:30, td:0}] },
            { name: "Greg Dulcich", pos: "TE", td: 0, yds: "140 yds", rec: "13/18 rec", marketOdds: 2.90, yac: "55 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:0}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Jacob Rodriguez (LB)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "46 Tackles", tacklesForLoss: 5, probability: "45%", status: "ACTIVE" },
            { name: "Zach Sieler (DE)", sacks: "2.0 Sacks", pressures: "12 Pressures", tackles: "22 Tackles", tacklesForLoss: 4, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Patriots": {
        record: "2-2", games: 4, rush: 400, pass: 900, oppPass: 900, oppRush: 400, oppTD: 9, turnovers: 4, sacks: 10, redZonePct: 55, thirdDownPct: 40, penalties: 25,
        injuredPlayers: [],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Drake Maye", pos: "QB", td: 1, yds: "900 pass yds", rec: "QB / Starter", marketOdds: 2.00, pressuresFaced: 15, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:230, td:1}, {w:3, yds:220, td:0}, {w:4, yds:230, td:0}] },
            { name: "Rhamondre Stevenson", pos: "RB", td: 3, yds: "320 yds", rec: "15/20 rec", marketOdds: 1.80, yac: "110 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "DeMario Douglas", pos: "WR", td: 2, yds: "260 yds", rec: "20/28 rec", marketOdds: 2.10, yac: "90 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:65, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Kendrick Bourne", pos: "WR", td: 1, yds: "210 yds", rec: "16/22 rec", marketOdds: 2.40, yac: "75 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Hunter Henry", pos: "TE", td: 1, yds: "190 yds", rec: "17/23 rec", marketOdds: 2.50, yac: "70 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Christian Barmore (DT)", sacks: "2.5 Sacks", pressures: "14 Pressures", tackles: "18 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Bills": {
        record: "3-1", games: 4, rush: 556, pass: 1039, oppPass: 1025, oppRush: 464, oppTD: 16, turnovers: 7, sacks: 9, redZonePct: 69, thirdDownPct: 53, penalties: 25,
        injuredPlayers: [{name: "Jordan Hancock", pos: "S"}, {name: "Zane Durant", pos: "DT"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 80, allowedTDs: 2 } },
        players: [
            { name: "Josh Allen", pos: "QB", td: 4, yds: "1039 pass yds / 118 rush yds", rec: "QB / Dual Threat", marketOdds: 1.90, pressuresFaced: 14, gameLog: [{w:1, yds:23, td:1}, {w:2, yds:69, td:1}, {w:3, yds:22, td:1}, {w:4, yds:4, td:1}] },
            { name: "James Cook III", pos: "RB", td: 4, yds: "421 yds", rec: "18/23 rec", marketOdds: 2.10, yac: "170 YAC", gameLog: [{w:1, yds:86, td:1}, {w:2, yds:203, td:3}, {w:3, yds:126, td:0}, {w:4, yds:105, td:0}] },
            { name: "Dalton Kincaid", pos: "TE", td: 1, yds: "270 yds", rec: "15/18 rec", marketOdds: 2.30, yac: "95 YAC", gameLog: [{w:1, yds:60, td:0}, {w:2, yds:70, td:1}, {w:3, yds:80, td:0}, {w:4, yds:60, td:0}] },
            { name: "Keon Coleman", pos: "WR", td: 1, yds: "217 yds", rec: "14/20 rec", marketOdds: 2.80, yac: "85 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:67, td:0}] },
            { name: "DJ Moore", pos: "WR", td: 1, yds: "178 yds", rec: "12/31 rec", marketOdds: 2.10, yac: "70 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:0}, {w:3, yds:50, td:1}, {w:4, yds:43, td:0}] },
            { name: "Khalil Shakir", pos: "WR", td: 0, yds: "176 yds", rec: "15/24 rec", marketOdds: 2.60, yac: "75 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:0}, {w:3, yds:45, td:0}, {w:4, yds:46, td:0}] }
        ],
        defenders: [
            { name: "Terrel Bernard (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "35 Tackles", tacklesForLoss: 4, probability: "50%", status: "ACTIVE" },
            { name: "Greg Rousseau (EDGE)", sacks: "6.0 Sacks", pressures: "23 Pressures", tackles: "19 Tackles", tacklesForLoss: 7, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Ravens": {
        record: "3-1", games: 4, rush: 614, pass: 1030, oppPass: 916, oppRush: 400, oppTD: 10, turnovers: 3, sacks: 7, redZonePct: 65, thirdDownPct: 32, penalties: 26,
        injuredPlayers: [{name: "Keaton Mitchell", pos: "RB", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Lamar Jackson", pos: "QB", td: 3, yds: "1030 pass yds / 220 rush yds", rec: "QB / Dual Threat", marketOdds: 1.85, pressuresFaced: 12, gameLog: [{w:1, yds:250, td:1}, {w:2, yds:260, td:1}, {w:3, yds:240, td:0}, {w:4, yds:280, td:1}] },
            { name: "Derrick Henry", pos: "RB", td: 6, yds: "301 yds", rec: "6/8 rec", marketOdds: 1.65, yac: "110 YAC", gameLog: [{w:1, yds:85, td:2}, {w:2, yds:90, td:2}, {w:3, yds:70, td:1}, {w:4, yds:56, td:1}] },
            { name: "Zay Flowers", pos: "WR", td: 1, yds: "234 yds", rec: "10/16 rec", marketOdds: 2.30, yac: "95 YAC", gameLog: [{w:1, yds:60, td:0}, {w:2, yds:75, td:1}, {w:3, yds:50, td:0}, {w:4, yds:49, td:0}] },
            { name: "Mark Andrews", pos: "TE", td: 1, yds: "180 yds", rec: "14/19 rec", marketOdds: 2.40, yac: "65 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}] },
            { name: "Hibner", pos: "TE", td: 1, yds: "60 yds", rec: "5/5 rec", marketOdds: 3.10, yac: "25 YAC", gameLog: [{w:1, yds:10, td:0}, {w:2, yds:15, td:0}, {w:3, yds:15, td:0}, {w:4, yds:20, td:1}] },
            { name: "Rashod Bateman", pos: "WR", td: 1, yds: "160 yds", rec: "11/18 rec", marketOdds: 2.90, yac: "60 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:50, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Roquan Smith (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "42 Tackles", tacklesForLoss: 5, probability: "65%", status: "ACTIVE" },
            { name: "Kyle Hamilton (S)", sacks: "1.5 Sacks", pressures: "8 Pressures", tackles: "34 Tackles", tacklesForLoss: 3, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Bengals": {
        record: "2-2", games: 4, rush: 297, pass: 1171, oppPass: 1088, oppRush: 398, oppTD: 8, turnovers: 9, sacks: 9, redZonePct: 58, thirdDownPct: 45, penalties: 29,
        injuredPlayers: [{name: "Tee Higgins", pos: "WR", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Joe Burrow", pos: "QB", td: 0, yds: "1171 pass yds / 32 rush yds", rec: "QB / Starter", marketOdds: 1.95, pressuresFaced: 19, gameLog: [{w:1, yds:280, td:0}, {w:2, yds:215, td:0}, {w:3, yds:248, td:0}, {w:4, yds:428, td:0}] },
            { name: "Ja'Marr Chase", pos: "WR", td: 3, yds: "185 yds", rec: "18/25 rec", marketOdds: 1.75, yac: "75 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:45, td:1}, {w:3, yds:40, td:1}, {w:4, yds:50, td:0}] },
            { name: "Tee Higgins", pos: "WR", td: 1, yds: "244 yds", rec: "14/20 rec", marketOdds: 2.10, yac: "90 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:0}, {w:3, yds:42, td:1}, {w:4, yds:157, td:0}] },
            { name: "Chase Brown", pos: "RB", td: 1, yds: "197 yds", rec: "10/15 rec", marketOdds: 2.20, yac: "80 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:47, td:0}] },
            { name: "Mike Gesicki", pos: "TE", td: 2, yds: "115 yds", rec: "8/12 rec", marketOdds: 2.80, yac: "45 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:20, td:0}, {w:4, yds:40, td:1}] },
            { name: "Samaje Perine", pos: "RB", td: 0, yds: "35 yds", rec: "5/8 rec", marketOdds: 3.50, yac: "15 YAC", gameLog: [{w:1, yds:10, td:0}, {w:2, yds:10, td:0}, {w:3, yds:5, td:0}, {w:4, yds:10, td:0}] }
        ],
        defenders: [
            { name: "Demetrius Knight Jr. (LB)", sacks: "0.0 Sacks", pressures: "4 Pressures", tackles: "28 Tackles", tacklesForLoss: 2, probability: "50%", status: "ACTIVE" },
            { name: "Jordan Battle (S)", sacks: "0.0 Sacks", pressures: "3 Pressures", tackles: "21 Tackles", tacklesForLoss: 1, probability: "45%", status: "ACTIVE" }
        ]
    },
    "Browns": {
        record: "3-1", games: 4, rush: 410, pass: 920, oppPass: 890, oppRush: 380, oppTD: 7, turnovers: 4, sacks: 14, redZonePct: 60, thirdDownPct: 38, penalties: 24,
        injuredPlayers: [{name: "Nick Chubb", pos: "RB", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Deshaun Watson", pos: "QB", td: 0, yds: "920 pass yds / 95 rush yds", rec: "QB / Starter", marketOdds: 3.80, pressuresFaced: 17, gameLog: [{w:1, yds:230, td:0}, {w:2, yds:240, td:0}, {w:3, yds:220, td:0}, {w:4, yds:230, td:0}] },
            { name: "Quinshon Judkins", pos: "RB", td: 3, yds: "240 yds", rec: "15/20 rec", marketOdds: 1.90, yac: "95 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:70, td:1}, {w:3, yds:55, td:1}, {w:4, yds:55, td:0}] },
            { name: "Jerry Jeudy", pos: "WR", td: 1, yds: "250 yds", rec: "18/26 rec", marketOdds: 2.20, yac: "100 YAC", gameLog: [{w:1, yds:65, td:0}, {w:2, yds:70, td:1}, {w:3, yds:60, td:0}, {w:4, yds:55, td:0}] },
            { name: "Boston", pos: "WR", td: 2, yds: "180 yds", rec: "13/22 rec", marketOdds: 2.40, yac: "70 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:1}] },
            { name: "Fannin Jr", pos: "TE", td: 3, yds: "210 yds", rec: "17/22 rec", marketOdds: 2.90, yac: "80 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:55, td:1}, {w:3, yds:50, td:1}, {w:4, yds:55, td:0}] },
            { name: "KC Concepcion", pos: "WR", td: 0, yds: "140 yds", rec: "13/19 rec", marketOdds: 3.10, yac: "55 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:35, td:0}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Myles Garrett (DE)", sacks: "5.5 Sacks", pressures: "24 Pressures", tackles: "18 Tackles", tacklesForLoss: 6, probability: "80%", status: "ACTIVE" },
            { name: "Denzel Ward (CB)", sacks: "0.0 Sacks", pressures: "2 Pressures", tackles: "20 Tackles", tacklesForLoss: 1, probability: "55%", status: "ACTIVE" }
        ]
    },
    "Steelers": {
        record: "2-2", games: 4, rush: 440, pass: 980, oppPass: 910, oppRush: 410, oppTD: 9, turnovers: 5, sacks: 12, redZonePct: 52, thirdDownPct: 40, penalties: 27,
        injuredPlayers: [{name: "Russell Wilson", pos: "QB", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 78, allowedTDs: 2 } },
        players: [
            { name: "Aaron Rodgers", pos: "QB", td: 0, yds: "980 pass yds", rec: "QB / Starter", marketOdds: 3.50, pressuresFaced: 13, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:0}, {w:3, yds:230, td:0}, {w:4, yds:260, td:0}] },
            { name: "Jaylen Warren", pos: "RB", td: 2, yds: "260 yds", rec: "14/19 rec", marketOdds: 2.00, yac: "100 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "D.K. Metcalf", pos: "WR", td: 3, yds: "310 yds", rec: "21/31 rec", marketOdds: 1.80, yac: "120 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}] },
            { name: "Pat Freiermuth", pos: "TE", td: 1, yds: "195 yds", rec: "17/23 rec", marketOdds: 2.40, yac: "70 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Roman Wilson", pos: "WR", td: 1, yds: "170 yds", rec: "12/17 rec", marketOdds: 2.80, yac: "60 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:0}, {w:3, yds:40, td:1}, {w:4, yds:45, td:0}] },
            { name: "Darnell Washington", pos: "TE", td: 1, yds: "110 yds", rec: "10/14 rec", marketOdds: 3.20, yac: "40 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "T.J. Watt (EDGE)", sacks: "5.0 Sacks", pressures: "22 Pressures", tackles: "17 Tackles", tacklesForLoss: 6, probability: "80%", status: "ACTIVE" },
            { name: "Patrick Queen (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "38 Tackles", tacklesForLoss: 4, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Texans": {
        record: "0-4", games: 4, rush: 316, pass: 1059, oppPass: 1000, oppRush: 500, oppTD: 14, turnovers: 5, sacks: 12, redZonePct: 45, thirdDownPct: 35, penalties: 28,
        injuredPlayers: [{name: "Will Anderson Jr.", pos: "DE", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 220, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "C.J. Stroud", pos: "QB", td: 0, yds: "1141 pass yds", rec: "QB / Starter", marketOdds: 2.10, pressuresFaced: 16, gameLog: [{w:1, yds:280, td:0}, {w:2, yds:300, td:0}, {w:3, yds:270, td:0}, {w:4, yds:291, td:0}] },
            { name: "W. Marks", pos: "RB", td: 2, yds: "130 yds", rec: "9/13 rec", marketOdds: 1.85, yac: "45 YAC", gameLog: [{w:1, yds:30, td:1}, {w:2, yds:40, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] },
            { name: "Hutchinson", pos: "WR", td: 0, yds: "160 yds", rec: "12/17 rec", marketOdds: 2.30, yac: "60 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:0}, {w:3, yds:40, td:0}, {w:4, yds:40, td:0}] },
            { name: "Dalton Schultz", pos: "TE", td: 1, yds: "214 yds", rec: "16/22 rec", marketOdds: 2.50, yac: "75 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:54, td:0}] },
            { name: "Tank Dell", pos: "WR", td: 1, yds: "190 yds", rec: "15/24 rec", marketOdds: 2.30, yac: "80 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Will Anderson Jr. (DE)", sacks: "4.5 Sacks", pressures: "18 Pressures", tackles: "22 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" },
            { name: "Azeez Al-Shaair (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "31 Tackles", tacklesForLoss: 3, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Colts": {
        record: "2-2", games: 4, rush: 438, pass: 699, oppPass: 1045, oppRush: 524, oppTD: 12, turnovers: 10, sacks: 9, redZonePct: 75, thirdDownPct: 38, penalties: 26,
        injuredPlayers: [{name: "DeForest Buckner", pos: "DT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 90, allowedTDs: 3 } },
        players: [
            { name: "Daniel Jones", pos: "QB", td: 1, yds: "754 pass yds / 110 rush yds", rec: "QB / Starter", marketOdds: 3.20, pressuresFaced: 15, gameLog: [{w:1, yds:190, td:0}, {w:2, yds:185, td:0}, {w:3, yds:195, td:1}, {w:4, yds:184, td:0}] },
            { name: "Jonathan Taylor", pos: "RB", td: 6, yds: "353 yds", rec: "12/16 rec", marketOdds: 1.55, yac: "130 YAC", gameLog: [{w:1, yds:90, td:2}, {w:2, yds:95, td:2}, {w:3, yds:85, td:1}, {w:4, yds:83, td:1}] },
            { name: "Josh Downs", pos: "WR", td: 1, yds: "202 yds", rec: "17/25 rec", marketOdds: 2.20, yac: "85 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:47, td:0}] },
            { name: "Tyler Warren", pos: "TE", td: 2, yds: "165 yds", rec: "14/19 rec", marketOdds: 2.60, yac: "60 YAC", gameLog: [{w:1, yds:40, td:1}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:40, td:0}] },
            { name: "Keenan Allen", pos: "WR", td: 1, yds: "180 yds", rec: "15/22 rec", marketOdds: 2.30, yac: "70 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:45, td:0}, {w:3, yds:50, td:1}, {w:4, yds:40, td:0}] },
            { name: "Alec Pierce", pos: "WR", td: 1, yds: "150 yds", rec: "10/16 rec", marketOdds: 3.10, yac: "55 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "DeForest Buckner (DT)", sacks: "3.0 Sacks", pressures: "14 Pressures", tackles: "20 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" },
            { name: "Akeem Davis-Gaither (LB)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "37 Tackles", tacklesForLoss: 3, probability: "55%", status: "ACTIVE" }
        ]
    },
    "Jaguars": {
        record: "3-1", games: 4, rush: 469, pass: 797, oppPass: 1121, oppRush: 297, oppTD: 5, turnovers: 2, sacks: 10, redZonePct: 82, thirdDownPct: 51, penalties: 28,
        injuredPlayers: [{name: "Josh Hines-Allen", pos: "EDGE", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "Trevor Lawrence", pos: "QB", td: 2, yds: "843 pass yds / 90 rush yds", rec: "QB / Starter", marketOdds: 2.40, pressuresFaced: 13, gameLog: [{w:1, yds:210, td:0}, {w:2, yds:215, td:1}, {w:3, yds:205, td:0}, {w:4, yds:213, td:1}] },
            { name: "Bhayshul Tuten", pos: "RB", td: 3, yds: "277 yds", rec: "11/15 rec", marketOdds: 1.80, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:65, td:1}, {w:4, yds:67, td:0}] },
            { name: "Parker Washington", pos: "WR", td: 1, yds: "228 yds", rec: "16/22 rec", marketOdds: 2.10, yac: "90 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:58, td:0}] },
            { name: "J. Cameron", pos: "WR", td: 2, yds: "80 yds", rec: "5/6 rec", marketOdds: 2.40, yac: "30 YAC", gameLog: [{w:1, yds:15, td:0}, {w:2, yds:20, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:1}] },
            { name: "B. Strange", pos: "TE", td: 1, yds: "180 yds", rec: "14/18 rec", marketOdds: 2.50, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Brian Thomas Jr.", pos: "WR", td: 1, yds: "195 yds", rec: "13/20 rec", marketOdds: 2.40, yac: "75 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Josh Hines-Allen (EDGE)", sacks: "1.5 Sacks", pressures: "16 Pressures", tackles: "24 Tackles", tacklesForLoss: 4, probability: "75%", status: "ACTIVE" },
            { name: "Ventrell Miller (LB)", sacks: "1.0 Sacks", pressures: "4 Pressures", tackles: "29 Tackles", tacklesForLoss: 3, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Titans": {
        record: "0-4", games: 4, rush: 356, pass: 726, oppPass: 950, oppRush: 480, oppTD: 11, turnovers: 6, sacks: 10, redZonePct: 40, thirdDownPct: 35, penalties: 30,
        injuredPlayers: [{name: "Jeffery Simmons", pos: "DT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 225, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 55, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 85, allowedTDs: 2 } },
        players: [
            { name: "Cam Ward", pos: "QB", td: 2, yds: "726 pass yds / 120 rush yds", rec: "QB / Starter", marketOdds: 3.50, pressuresFaced: 17, gameLog: [{w:1, yds:170, td:0}, {w:2, yds:180, td:1}, {w:3, yds:185, td:0}, {w:4, yds:191, td:1}] },
            { name: "Tony Pollard", pos: "RB", td: 1, yds: "221 yds", rec: "14/19 rec", marketOdds: 2.10, yac: "85 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:52, td:0}, {w:4, yds:54, td:0}] },
            { name: "Carnell Tate", pos: "WR", td: 1, yds: "268 yds", rec: "19/28 rec", marketOdds: 2.30, yac: "95 YAC", gameLog: [{w:1, yds:65, td:0}, {w:2, yds:70, td:1}, {w:3, yds:65, td:0}, {w:4, yds:68, td:0}] },
            { name: "Wan'Dale Robinson", pos: "WR", td: 2, yds: "185 yds", rec: "16/23 rec", marketOdds: 2.50, yac: "70 YAC", gameLog: [{w:1, yds:40, td:1}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Elic Ayomanor", pos: "WR", td: 1, yds: "140 yds", rec: "10/16 rec", marketOdds: 3.20, yac: "50 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}] },
            { name: "Gunnar Helm", pos: "TE", td: 0, yds: "115 yds", rec: "11/16 rec", marketOdds: 3.40, yac: "40 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:0}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Jeffery Simmons (DT)", sacks: "2.0 Sacks", pressures: "12 Pressures", tackles: "24 Tackles", tacklesForLoss: 3, probability: "70%", status: "ACTIVE" },
            { name: "Anthony Hill Jr. (LB)", sacks: "0.0 Sacks", pressures: "3 Pressures", tackles: "42 Tackles", tacklesForLoss: 5, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Chiefs": {
        record: "3-1", games: 4, rush: 480, pass: 1050, oppPass: 890, oppRush: 360, oppTD: 8, turnovers: 4, sacks: 12, redZonePct: 68, thirdDownPct: 45, penalties: 24,
        injuredPlayers: [{name: "Hollywood Brown", pos: "WR", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Patrick Mahomes", pos: "QB", td: 1, yds: "1050 pass yds / 115 rush yds", rec: "QB / Starter", marketOdds: 1.80, pressuresFaced: 13, gameLog: [{w:1, yds:260, td:0}, {w:2, yds:270, td:1}, {w:3, yds:250, td:0}, {w:4, yds:270, td:0}] },
            { name: "Travis Kelce", pos: "TE", td: 3, yds: "290 yds", rec: "24/32 rec", marketOdds: 1.70, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:1}, {w:4, yds:65, td:0}] },
            { name: "Rashee Rice", pos: "WR", td: 2, yds: "310 yds", rec: "26/35 rec", marketOdds: 1.85, yac: "120 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}] },
            { name: "Xavier Worthy", pos: "WR", td: 2, yds: "240 yds", rec: "16/24 rec", marketOdds: 2.10, yac: "90 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:0}, {w:3, yds:70, td:1}, {w:4, yds:60, td:0}] },
            { name: "Walker III", pos: "RB", td: 4, yds: "280 yds", rec: "15/20 rec", marketOdds: 1.60, yac: "100 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:1}, {w:4, yds:75, td:1}] },
            { name: "Noah Gray", pos: "TE", td: 1, yds: "145 yds", rec: "13/17 rec", marketOdds: 3.10, yac: "50 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:35, td:0}] }
        ],
        defenders: [
            { name: "Chris Jones (DT)", sacks: "3.5 Sacks", pressures: "19 Pressures", tackles: "16 Tackles", tacklesForLoss: 4, probability: "80%", status: "ACTIVE" },
            { name: "Nick Bolton (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "40 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Chargers": {
        record: "3-1", games: 4, rush: 510, pass: 960, oppPass: 920, oppRush: 380, oppTD: 9, turnovers: 3, sacks: 14, redZonePct: 65, thirdDownPct: 42, penalties: 25,
        injuredPlayers: [{name: "Rashawn Slater", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 2 } },
        players: [
            { name: "Justin Herbert", pos: "QB", td: 1, yds: "960 pass yds / 75 rush yds", rec: "QB / Starter", marketOdds: 1.90, pressuresFaced: 14, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:1}, {w:3, yds:235, td:0}, {w:4, yds:235, td:0}] },
            { name: "Omarion Hampton", pos: "RB", td: 4, yds: "340 yds", rec: "14/19 rec", marketOdds: 1.75, yac: "130 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:2}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "Ladd McConkey", pos: "WR", td: 2, yds: "280 yds", rec: "22/30 rec", marketOdds: 2.00, yac: "100 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Quentin Johnston", pos: "WR", td: 2, yds: "220 yds", rec: "15/22 rec", marketOdds: 2.40, yac: "80 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:0}, {w:3, yds:55, td:1}, {w:4, yds:55, td:0}] },
            { name: "Oronde Gadsden", pos: "TE", td: 1, yds: "175 yds", rec: "14/19 rec", marketOdds: 2.70, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Kimani Vidal", pos: "RB", td: 0, yds: "125 yds", rec: "10/14 rec", marketOdds: 3.10, yac: "45 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:0}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Khalil Mack (OLB)", sacks: "4.5 Sacks", pressures: "20 Pressures", tackles: "17 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" },
            { name: "Derwin James Jr. (S)", sacks: "1.0 Sacks", pressures: "7 Pressures", tackles: "36 Tackles", tacklesForLoss: 3, probability: "65%", status: "ACTIVE" }
        ]
    },
    "Raiders": {
        record: "1-3", games: 4, rush: 380, pass: 890, oppPass: 1010, oppRush: 450, oppTD: 12, turnovers: 7, sacks: 9, redZonePct: 48, thirdDownPct: 36, penalties: 31,
        injuredPlayers: [{name: "Malcolm Koonce", pos: "DE", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 230, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 60, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 88, allowedTDs: 2 } },
        players: [
            { name: "Kirk Cousins", pos: "QB", td: 0, yds: "890 pass yds", rec: "QB / Starter", marketOdds: 3.40, pressuresFaced: 18, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:230, td:0}, {w:3, yds:215, td:0}, {w:4, yds:225, td:0}] },
            { name: "Ashton Jeanty", pos: "RB", td: 3, yds: "310 yds", rec: "15/21 rec", marketOdds: 1.85, yac: "120 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:1}, {w:4, yds:80, td:0}] },
            { name: "Brock Bowers", pos: "TE", td: 2, yds: "295 yds", rec: "25/34 rec", marketOdds: 1.95, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}] },
            { name: "Michael Mayer", pos: "TE", td: 1, yds: "180 yds", rec: "15/22 rec", marketOdds: 2.60, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:45, td:0}] },
            { name: "Tre Tucker", pos: "WR", td: 1, yds: "190 yds", rec: "13/20 rec", marketOdds: 2.80, yac: "75 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "White", pos: "WR", td: 3, yds: "110 yds", rec: "5/10 rec", marketOdds: 2.50, yac: "45 YAC", gameLog: [{w:1, yds:25, td:1}, {w:2, yds:30, td:1}, {w:3, yds:25, td:1}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Maxx Crosby (DE)", sacks: "5.0 Sacks", pressures: "25 Pressures", tackles: "21 Tackles", tacklesForLoss: 6, probability: "85%", status: "ACTIVE" },
            { name: "Quay Walker (LB)", sacks: "0.5 Sacks", pressures: "4 Pressures", tackles: "41 Tackles", tacklesForLoss: 4, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Broncos": {
        record: "2-2", games: 4, rush: 430, pass: 910, oppPass: 870, oppRush: 395, oppTD: 9, turnovers: 5, sacks: 13, redZonePct: 58, thirdDownPct: 40, penalties: 26,
        injuredPlayers: [{name: "Mike McGlinchey", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 46, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Bo Nix", pos: "QB", td: 2, yds: "910 pass yds / 140 rush yds", rec: "QB / Dual Threat", marketOdds: 2.80, pressuresFaced: 15, gameLog: [{w:1, yds:220, td:1}, {w:2, yds:230, td:0}, {w:3, yds:225, td:1}, {w:4, yds:235, td:0}] },
            { name: "J.K. Dobbins", pos: "RB", td: 4, yds: "325 yds", rec: "13/18 rec", marketOdds: 1.70, yac: "120 YAC", gameLog: [{w:1, yds:80, td:2}, {w:2, yds:85, td:1}, {w:3, yds:80, td:1}, {w:4, yds:80, td:0}] },
            { name: "Courtland Sutton", pos: "WR", td: 2, yds: "270 yds", rec: "20/30 rec", marketOdds: 2.05, yac: "95 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:70, td:0}, {w:4, yds:65, td:0}] },
            { name: "Evan Engram", pos: "TE", td: 2, yds: "230 yds", rec: "19/26 rec", marketOdds: 2.20, yac: "85 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:55, td:0}] },
            { name: "Waddle", pos: "WR", td: 1, yds: "210 yds", rec: "16/26 rec", marketOdds: 2.10, yac: "80 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:50, td:0}, {w:4, yds:55, td:0}] },
            { name: "Harvey", pos: "RB", td: 0, yds: "150 yds", rec: "20/21 rec", marketOdds: 2.90, yac: "50 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:0}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Patrick Surtain II (CB)", sacks: "0.0 Sacks", pressures: "1 Pressure", tackles: "18 Tackles", tacklesForLoss: 1, probability: "60%", status: "ACTIVE" },
            { name: "Zach Allen (DE)", sacks: "3.0 Sacks", pressures: "16 Pressures", tackles: "23 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Cowboys": {
        record: "2-2", games: 4, rush: 460, pass: 1065, oppPass: 930, oppRush: 410, oppTD: 10, turnovers: 5, sacks: 13, redZonePct: 62, thirdDownPct: 41, penalties: 25,
        injuredPlayers: [{name: "Marist Liufau", pos: "LB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 76, allowedTDs: 2 } },
        players: [
            { name: "Dak Prescott", pos: "QB", td: 1, yds: "1065 pass yds / 60 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 15, gameLog: [{w:1, yds:250, td:0}, {w:2, yds:270, td:1}, {w:3, yds:265, td:0}, {w:4, yds:280, td:0}] },
            { name: "CeeDee Lamb", pos: "WR", td: 4, yds: "498 yds", rec: "37/50 rec", marketOdds: 1.65, yac: "180 YAC", gameLog: [{w:1, yds:110, td:1}, {w:2, yds:125, td:1}, {w:3, yds:130, td:1}, {w:4, yds:133, td:1}] },
            { name: "Javonte Williams", pos: "RB", td: 4, yds: "350 yds", rec: "15/20 rec", marketOdds: 1.70, yac: "140 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:90, td:2}, {w:3, yds:95, td:1}, {w:4, yds:85, td:0}] },
            { name: "George Pickens", pos: "WR", td: 2, yds: "290 yds", rec: "20/30 rec", marketOdds: 1.95, yac: "95 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:0}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}] },
            { name: "Jake Ferguson", pos: "TE", td: 1, yds: "190 yds", rec: "17/23 rec", marketOdds: 2.40, yac: "70 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "KaVontae Turpin", pos: "WR", td: 1, yds: "120 yds", rec: "10/14 rec", marketOdds: 3.10, yac: "60 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Quinnen Williams (DT)", sacks: "4.0 Sacks", pressures: "18 Pressures", tackles: "19 Tackles", tacklesForLoss: 5, probability: "80%", status: "ACTIVE" },
            { name: "Rashan Gary (EDGE)", sacks: "3.5 Sacks", pressures: "17 Pressures", tackles: "16 Tackles", tacklesForLoss: 4, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Eagles": {
        record: "2-2", games: 4, rush: 540, pass: 920, oppPass: 880, oppRush: 350, oppTD: 7, turnovers: 3, sacks: 15, redZonePct: 70, thirdDownPct: 46, penalties: 22,
        injuredPlayers: [{name: "A.J. Epenesa", pos: "LB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 68, allowedTDs: 1 } },
        players: [
            { name: "Jalen Hurts", pos: "QB", td: 4, yds: "920 pass yds / 210 rush yds", rec: "QB / Dual Threat", marketOdds: 1.75, pressuresFaced: 14, gameLog: [{w:1, yds:220, td:1}, {w:2, yds:230, td:1}, {w:3, yds:235, td:1}, {w:4, yds:235, td:1}] },
            { name: "Saquon Barkley", pos: "RB", td: 5, yds: "410 yds", rec: "16/22 rec", marketOdds: 1.50, yac: "190 YAC", gameLog: [{w:1, yds:100, td:2}, {w:2, yds:105, td:1}, {w:3, yds:95, td:1}, {w:4, yds:110, td:1}] },
            { name: "A.J. Brown", pos: "WR", td: 3, yds: "330 yds", rec: "22/31 rec", marketOdds: 1.70, yac: "120 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "DeVonta Smith", pos: "WR", td: 2, yds: "280 yds", rec: "20/28 rec", marketOdds: 1.90, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:65, td:0}, {w:4, yds:70, td:0}] },
            { name: "Wicks", pos: "WR", td: 1, yds: "150 yds", rec: "12/19 rec", marketOdds: 2.60, yac: "50 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:35, td:0}] },
            { name: "D. Cooper", pos: "WR", td: 3, yds: "90 yds", rec: "5/10 rec", marketOdds: 2.30, yac: "30 YAC", gameLog: [{w:1, yds:15, td:1}, {w:2, yds:20, td:1}, {w:3, yds:20, td:0}, {w:4, yds:35, td:1}] }
        ],
        defenders: [
            { name: "Nolan Smith Jr. (OLB)", sacks: "4.0 Sacks", pressures: "19 Pressures", tackles: "18 Tackles", tacklesForLoss: 6, probability: "75%", status: "ACTIVE" },
            { name: "Marcus Epps (SAF)", sacks: "0.5 Sacks", pressures: "3 Pressures", tackles: "35 Tackles", tacklesForLoss: 2, probability: "60%", status: "ACTIVE" }
        ]
    },
    "Giants": {
        record: "3-1", games: 4, rush: 390, pass: 870, oppPass: 1040, oppRush: 460, oppTD: 11, turnovers: 6, sacks: 10, redZonePct: 48, thirdDownPct: 34, penalties: 29,
        injuredPlayers: [{name: "Brian Burns", pos: "EDGE", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 235, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 62, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 89, allowedTDs: 2 } },
        players: [
            { name: "Jameis Winston", pos: "QB", td: 0, yds: "870 pass yds", rec: "QB / Starter", marketOdds: 3.50, pressuresFaced: 19, gameLog: [{w:1, yds:210, td:0}, {w:2, yds:220, td:0}, {w:3, yds:215, td:0}, {w:4, yds:225, td:0}] },
            { name: "Cam Skattebo", pos: "RB", td: 3, yds: "280 yds", rec: "14/19 rec", marketOdds: 1.90, yac: "100 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:1}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}] },
            { name: "Malik Nabers", pos: "WR", td: 3, yds: "350 yds", rec: "27/39 rec", marketOdds: 1.70, yac: "130 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:85, td:1}, {w:4, yds:90, td:0}] },
            { name: "Darnell Mooney", pos: "WR", td: 1, yds: "210 yds", rec: "16/24 rec", marketOdds: 2.40, yac: "75 YAC", gameLog: [{w:1, yds:50, td:0}, {w:2, yds:55, td:1}, {w:3, yds:55, td:0}, {w:4, yds:50, td:0}] },
            { name: "Theo Johnson", pos: "TE", td: 1, yds: "165 yds", rec: "14/20 rec", marketOdds: 2.80, yac: "55 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:40, td:0}] },
            { name: "Likely", pos: "TE", td: 2, yds: "240 yds", rec: "22/35 rec", marketOdds: 2.10, yac: "85 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:1}, {w:4, yds:65, td:0}] }
        ],
        defenders: [
            { name: "Kayvon Thibodeaux (EDGE)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "17 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" },
            { name: "Bobby Okereke (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "42 Tackles", tacklesForLoss: 6, probability: "65%", status: "ACTIVE" }
        ]
    },
    "Commanders": {
        record: "1-3", games: 4, rush: 450, pass: 950, oppPass: 910, oppRush: 390, oppTD: 9, turnovers: 4, sacks: 11, redZonePct: 60, thirdDownPct: 40, penalties: 25,
        injuredPlayers: [{name: "Daron Payne", pos: "DT", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 74, allowedTDs: 1 } },
        players: [
            { name: "Jayden Daniels", pos: "QB", td: 3, yds: "950 pass yds / 240 rush yds", rec: "QB / Dual Threat", marketOdds: 1.70, pressuresFaced: 13, gameLog: [{w:1, yds:230, td:1}, {w:2, yds:240, td:1}, {w:3, yds:245, td:0}, {w:4, yds:235, td:1}] },
            { name: "Croskey-Merritt", pos: "RB", td: 2, yds: "180 yds", rec: "12/16 rec", marketOdds: 1.85, yac: "70 YAC", gameLog: [{w:1, yds:40, td:1}, {w:2, yds:45, td:0}, {w:3, yds:45, td:1}, {w:4, yds:50, td:0}] },
            { name: "Williams", pos: "WR", td: 1, yds: "160 yds", rec: "12/19 rec", marketOdds: 2.30, yac: "60 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}] },
            { name: "Rachaad White", pos: "RB", td: 1, yds: "95 yds", rec: "9/9 rec", marketOdds: 2.10, yac: "40 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:0}, {w:3, yds:25, td:1}, {w:4, yds:25, td:0}] },
            { name: "Terry McLaurin", pos: "WR", td: 3, yds: "320 yds", rec: "22/31 rec", marketOdds: 1.75, yac: "110 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:85, td:1}, {w:4, yds:80, td:0}] },
            { name: "Stefon Diggs", pos: "WR", td: 2, yds: "290 yds", rec: "24/33 rec", marketOdds: 1.90, yac: "95 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:0}, {w:4, yds:70, td:0}] }
        ],
        defenders: [
            { name: "Frankie Luvu (LB)", sacks: "2.0 Sacks", pressures: "9 Pressures", tackles: "39 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" },
            { name: "Dorance Armstrong (EDGE)", sacks: "3.0 Sacks", pressures: "15 Pressures", tackles: "16 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Bears": {
        record: "3-1", games: 4, rush: 480, pass: 950, oppPass: 870, oppRush: 350, oppTD: 8, turnovers: 3, sacks: 14, redZonePct: 68, thirdDownPct: 44, penalties: 24,
        injuredPlayers: [{name: "Teven Jenkins", pos: "G", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 70, allowedTDs: 1 } },
        players: [
            { name: "Caleb Williams", pos: "QB", td: 2, yds: "950 pass yds / 130 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 16, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:240, td:1}, {w:3, yds:250, td:1}, {w:4, yds:240, td:0}] },
            { name: "D'Andre Swift", pos: "RB", td: 4, yds: "340 yds", rec: "15/20 rec", marketOdds: 1.75, yac: "135 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:85, td:2}, {w:3, yds:90, td:1}, {w:4, yds:90, td:0}] },
            { name: "Burden III", pos: "WR", td: 1, yds: "240 yds", rec: "19/29 rec", marketOdds: 2.10, yac: "85 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] },
            { name: "Raymond", pos: "WR", td: 1, yds: "230 yds", rec: "21/23 rec", marketOdds: 2.30, yac: "80 YAC", gameLog: [{w:1, yds:55, td:0}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:60, td:0}] },
            { name: "Cole Kmet", pos: "TE", td: 1, yds: "185 yds", rec: "16/22 rec", marketOdds: 2.50, yac: "65 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Roschon Johnson", pos: "RB", td: 1, yds: "110 yds", rec: "8/12 rec", marketOdds: 3.10, yac: "40 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] }
        ],
        defenders: [
            { name: "Jaylon Johnson (CB)", sacks: "0.0 Sacks", pressures: "1 Pressure", tackles: "17 Tackles", tacklesForLoss: 1, probability: "65%", status: "ACTIVE" },
            { name: "Montez Sweat (DE)", sacks: "4.0 Sacks", pressures: "17 Pressures", tackles: "18 Tackles", tacklesForLoss: 5, probability: "80%", status: "ACTIVE" }
        ]
    },
    "Lions": {
        record: "3-1", games: 4, rush: 530, pass: 1080, oppPass: 950, oppRush: 370, oppTD: 9, turnovers: 4, sacks: 13, redZonePct: 72, thirdDownPct: 48, penalties: 22,
        injuredPlayers: [{name: "Frank Ragnow", pos: "C", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Jared Goff", pos: "QB", td: 0, yds: "1080 pass yds", rec: "QB / Starter", marketOdds: 1.80, pressuresFaced: 11, gameLog: [{w:1, yds:260, td:0}, {w:2, yds:280, td:0}, {w:3, yds:275, td:0}, {w:4, yds:265, td:0}] },
            { name: "Jahmyr Gibbs", pos: "RB", td: 5, yds: "380 yds", rec: "18/23 rec", marketOdds: 1.55, yac: "160 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:95, td:2}, {w:3, yds:100, td:1}, {w:4, yds:100, td:1}] },
            { name: "TeSlaa", pos: "WR", td: 0, yds: "110 yds", rec: "9/17 rec", marketOdds: 3.20, yac: "40 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:0}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] },
            { name: "Amon-Ra St. Brown", pos: "WR", td: 4, yds: "410 yds", rec: "32/42 rec", marketOdds: 1.60, yac: "150 YAC", gameLog: [{w:1, yds:95, td:1}, {w:2, yds:105, td:1}, {w:3, yds:100, td:1}, {w:4, yds:110, td:1}] },
            { name: "Jameson Williams", pos: "WR", td: 2, yds: "290 yds", rec: "16/25 rec", marketOdds: 2.05, yac: "100 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:0}, {w:3, yds:75, td:1}, {w:4, yds:80, td:0}] },
            { name: "Sam LaPorta", pos: "TE", td: 2, yds: "230 yds", rec: "20/27 rec", marketOdds: 2.15, yac: "80 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:0}, {w:3, yds:60, td:1}, {w:4, yds:60, td:0}] }
        ],
        defenders: [
            { name: "Aidan Hutchinson (EDGE)", sacks: "5.5 Sacks", pressures: "26 Pressures", tackles: "20 Tackles", tacklesForLoss: 7, probability: "85%", status: "ACTIVE" },
            { name: "Brian Branch (S)", sacks: "1.0 Sacks", pressures: "4 Pressures", tackles: "32 Tackles", tacklesForLoss: 3, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Packers": {
        record: "3-1", games: 4, rush: 490, pass: 970, oppPass: 890, oppRush: 380, oppTD: 8, turnovers: 4, sacks: 14, redZonePct: 66, thirdDownPct: 43, penalties: 25,
        injuredPlayers: [{name: "Jordan Love", pos: "QB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 50, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 1 } },
        players: [
            { name: "Jordan Love", pos: "QB", td: 1, yds: "970 pass yds / 50 rush yds", rec: "QB / Starter", marketOdds: 1.85, pressuresFaced: 13, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:1}, {w:3, yds:240, td:0}, {w:4, yds:240, td:0}] },
            { name: "Josh Jacobs", pos: "RB", td: 4, yds: "370 yds", rec: "14/19 rec", marketOdds: 1.65, yac: "140 YAC", gameLog: [{w:1, yds:85, td:1}, {w:2, yds:90, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}] },
            { name: "Jayden Reed", pos: "WR", td: 3, yds: "310 yds", rec: "24/32 rec", marketOdds: 1.80, yac: "110 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:80, td:1}, {w:3, yds:80, td:0}, {w:4, yds:80, td:1}] },
            { name: "Christian Watson", pos: "WR", td: 2, yds: "250 yds", rec: "15/22 rec", marketOdds: 2.20, yac: "85 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:70, td:0}] },
            { name: "Tucker Kraft", pos: "TE", td: 2, yds: "210 yds", rec: "17/23 rec", marketOdds: 2.40, yac: "75 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:55, td:1}, {w:4, yds:60, td:0}] },
            { name: "M. Lloyd", pos: "RB", td: 1, yds: "90 yds", rec: "7/10 rec", marketOdds: 2.80, yac: "40 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Rashan Gary (EDGE)", sacks: "4.0 Sacks", pressures: "18 Pressures", tackles: "17 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" },
            { name: "Xavier McKinney (S)", sacks: "0.5 Sacks", pressures: "3 Pressures", tackles: "34 Tackles", tacklesForLoss: 2, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Vikings": {
        record: "3-1", games: 4, rush: 420, pass: 1010, oppPass: 920, oppRush: 360, oppTD: 8, turnovers: 3, sacks: 15, redZonePct: 69, thirdDownPct: 45, penalties: 23,
        injuredPlayers: [{name: "T.J. Hockenson", pos: "TE", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 198, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 47, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 71, allowedTDs: 1 } },
        players: [
            { name: "Kyler Murray", pos: "QB", td: 3, yds: "1010 pass yds / 180 rush yds", rec: "QB / Dual Threat", marketOdds: 1.75, pressuresFaced: 12, gameLog: [{w:1, yds:250, td:1}, {w:2, yds:260, td:1}, {w:3, yds:240, td:0}, {w:4, yds:260, td:1}] },
            { name: "Justin Jefferson", pos: "WR", td: 5, yds: "480 yds", rec: "35/48 rec", marketOdds: 1.50, yac: "170 YAC", gameLog: [{w:1, yds:110, td:1}, {w:2, yds:120, td:2}, {w:3, yds:115, td:1}, {w:4, yds:135, td:1}] },
            { name: "Aaron Jones", pos: "RB", td: 3, yds: "330 yds", rec: "16/21 rec", marketOdds: 1.75, yac: "120 YAC", gameLog: [{w:1, yds:75, td:1}, {w:2, yds:80, td:1}, {w:3, yds:85, td:0}, {w:4, yds:90, td:1}] },
            { name: "Jordan Addison", pos: "WR", td: 3, yds: "290 yds", rec: "21/30 rec", marketOdds: 1.95, yac: "95 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:1}] },
            { name: "T.J. Hockenson", pos: "TE", td: 2, yds: "220 yds", rec: "18/25 rec", marketOdds: 2.30, yac: "75 YAC", gameLog: [{w:1, yds:50, td:1}, {w:2, yds:60, td:1}, {w:3, yds:55, td:0}, {w:4, yds:55, td:0}] },
            { name: "Jordan Mason", pos: "RB", td: 1, yds: "150 yds", rec: "9/13 rec", marketOdds: 2.70, yac: "50 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Andrew Van Ginkel (OLB)", sacks: "4.5 Sacks", pressures: "19 Pressures", tackles: "26 Tackles", tacklesForLoss: 6, probability: "80%", status: "ACTIVE" },
            { name: "Harrison Smith (S)", sacks: "0.5 Sacks", pressures: "3 Pressures", tackles: "35 Tackles", tacklesForLoss: 3, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Falcons": {
        record: "2-2", games: 4, rush: 440, pass: 940, oppPass: 910, oppRush: 380, oppTD: 9, turnovers: 4, sacks: 12, redZonePct: 64, thirdDownPct: 42, penalties: 24,
        injuredPlayers: [{name: "Bralen Trice", pos: "EDGE", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 205, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Michael Penix Jr.", pos: "QB", td: 1, yds: "940 pass yds / 30 rush yds", rec: "QB / Starter", marketOdds: 1.90, pressuresFaced: 14, gameLog: [{w:1, yds:230, td:0}, {w:2, yds:240, td:1}, {w:3, yds:235, td:0}, {w:4, yds:235, td:0}] },
            { name: "Brian Robinson Jr", pos: "RB", td: 4, yds: "350 yds", rec: "15/20 rec", marketOdds: 1.65, yac: "130 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:90, td:1}, {w:4, yds:95, td:1}] },
            { name: "Drake London", pos: "WR", td: 3, yds: "350 yds", rec: "25/34 rec", marketOdds: 1.70, yac: "120 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:90, td:1}, {w:3, yds:90, td:1}, {w:4, yds:90, td:0}] },
            { name: "Dotson", pos: "WR", td: 1, yds: "180 yds", rec: "6/14 rec", marketOdds: 2.50, yac: "60 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:45, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] },
            { name: "Kyle Pitts", pos: "TE", td: 2, yds: "240 yds", rec: "19/26 rec", marketOdds: 2.25, yac: "85 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:1}, {w:3, yds:60, td:0}, {w:4, yds:65, td:0}] }
        ],
        defenders: [
            { name: "Jessie Bates III (S)", sacks: "0.5 Sacks", pressures: "3 Pressures", tackles: "33 Tackles", tacklesForLoss: 3, probability: "75%", status: "ACTIVE" },
            { name: "Matthew Judon (EDGE)", sacks: "3.5 Sacks", pressures: "16 Pressures", tackles: "17 Tackles", tacklesForLoss: 5, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Panthers": {
        record: "1-3", games: 4, rush: 370, pass: 850, oppPass: 1050, oppRush: 470, oppTD: 12, turnovers: 7, sacks: 8, redZonePct: 45, thirdDownPct: 33, penalties: 30,
        injuredPlayers: [{name: "Derrick Brown", pos: "DT", status: "Out"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 240, allowedTDs: 4 }, vsTE: { allowedYdsPerGame: 65, allowedTDs: 2 }, vsRB: { allowedYdsPerGame: 92, allowedTDs: 2 } },
        players: [
            { name: "Bryce Young", pos: "QB", td: 1, yds: "850 pass yds / 90 rush yds", rec: "QB / Starter", marketOdds: 3.20, pressuresFaced: 18, gameLog: [{w:1, yds:200, td:0}, {w:2, yds:215, td:1}, {w:3, yds:210, td:0}, {w:4, yds:225, td:0}] },
            { name: "McMillan", pos: "WR", td: 2, yds: "310 yds", rec: "26/39 rec", marketOdds: 1.95, yac: "110 YAC", gameLog: [{w:1, yds:70, td:0}, {w:2, yds:75, td:1}, {w:3, yds:80, td:1}, {w:4, yds:85, td:0}] },
            { name: "Coker", pos: "WR", td: 2, yds: "250 yds", rec: "18/22 rec", marketOdds: 2.10, yac: "90 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:65, td:0}] },
            { name: "Waller", pos: "TE", td: 2, yds: "190 yds", rec: "13/19 rec", marketOdds: 2.30, yac: "70 YAC", gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:0}, {w:3, yds:50, td:1}, {w:4, yds:50, td:0}] },
            { name: "Chuba Hubbard", pos: "RB", td: 3, yds: "290 yds", rec: "15/20 rec", marketOdds: 1.85, yac: "105 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}] }
        ],
        defenders: [
            { name: "Jaycee Horn (CB)", sacks: "0.0 Sacks", pressures: "1 Pressure", tackles: "20 Tackles", tacklesForLoss: 1, probability: "65%", status: "ACTIVE" },
            { name: "Jadeveon Clowney (EDGE)", sacks: "2.5 Sacks", pressures: "13 Pressures", tackles: "15 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Saints": {
        record: "2-2", games: 4, rush: 430, pass: 920, oppPass: 900, oppRush: 390, oppTD: 8, turnovers: 4, sacks: 13, redZonePct: 65, thirdDownPct: 41, penalties: 26,
        injuredPlayers: [{name: "Demario Davis", pos: "LB", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 200, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 48, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 72, allowedTDs: 1 } },
        players: [
            { name: "Shough", pos: "QB", td: 1, yds: "800 pass yds", rec: "QB / Starter", marketOdds: 2.20, pressuresFaced: 15, gameLog: [{w:1, yds:200, td:0}, {w:2, yds:200, td:1}, {w:3, yds:200, td:0}, {w:4, yds:200, td:0}] },
            { name: "Alvin Kamara", pos: "RB", td: 5, yds: "360 yds", rec: "24/32 rec", marketOdds: 1.55, yac: "135 YAC", gameLog: [{w:1, yds:80, td:2}, {w:2, yds:90, td:1}, {w:3, yds:95, td:1}, {w:4, yds:95, td:1}] },
            { name: "Chris Olave", pos: "WR", td: 3, yds: "340 yds", rec: "26/36 rec", marketOdds: 1.70, yac: "115 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:90, td:1}, {w:4, yds:85, td:0}] },
            { name: "Vele", pos: "WR", td: 2, yds: "250 yds", rec: "21/30 rec", marketOdds: 2.10, yac: "85 YAC", gameLog: [{w:1, yds:60, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:65, td:0}] },
            { name: "Fant", pos: "TE", td: 3, yds: "140 yds", rec: "8/12 rec", marketOdds: 2.30, yac: "50 YAC", gameLog: [{w:1, yds:30, td:1}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:1}] }
        ],
        defenders: [
            { name: "Tyrann Mathieu (S)", sacks: "0.5 Sacks", pressures: "3 Pressures", tackles: "28 Tackles", tacklesForLoss: 2, probability: "70%", status: "ACTIVE" },
            { name: "Carl Granderson (DE)", sacks: "3.5 Sacks", pressures: "16 Pressures", tackles: "19 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Buccaneers": {
        record: "3-1", games: 4, rush: 460, pass: 990, oppPass: 890, oppRush: 360, oppTD: 8, turnovers: 3, sacks: 14, redZonePct: 70, thirdDownPct: 46, penalties: 23,
        injuredPlayers: [{name: "Antoine Winfield Jr.", pos: "S", status: "Active"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 195, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 46, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 69, allowedTDs: 1 } },
        players: [
            { name: "Baker Mayfield", pos: "QB", td: 2, yds: "990 pass yds / 70 rush yds", rec: "QB / Starter", marketOdds: 1.75, pressuresFaced: 13, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:1}, {w:3, yds:255, td:1}, {w:4, yds:245, td:0}] },
            { name: "T. Hurst III", pos: "WR", td: 1, yds: "120 yds", rec: "8/16 rec", marketOdds: 2.40, yac: "45 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:30, td:1}, {w:3, yds:30, td:0}, {w:4, yds:30, td:0}] },
            { name: "Gainwell", pos: "RB", td: 1, yds: "110 yds", rec: "10/14 rec", marketOdds: 2.50, yac: "40 YAC", gameLog: [{w:1, yds:25, td:0}, {w:2, yds:30, td:1}, {w:3, yds:25, td:0}, {w:4, yds:30, td:0}] },
            { name: "Chris Godwin", pos: "WR", td: 3, yds: "340 yds", rec: "28/37 rec", marketOdds: 1.70, yac: "110 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:85, td:0}, {w:4, yds:90, td:1}] },
            { name: "Cade Otton", pos: "TE", td: 1, yds: "190 yds", rec: "16/22 rec", marketOdds: 2.40, yac: "70 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Vita Vea (DT)", sacks: "3.0 Sacks", pressures: "15 Pressures", tackles: "18 Tackles", tacklesForLoss: 4, probability: "80%", status: "ACTIVE" },
            { name: "Lavonte David (LB)", sacks: "1.0 Sacks", pressures: "5 Pressures", tackles: "38 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" }
        ]
    },
    "49ers": {
        record: "3-1", games: 4, rush: 520, pass: 1040, oppPass: 890, oppRush: 340, oppTD: 7, turnovers: 3, sacks: 15, redZonePct: 71, thirdDownPct: 47, penalties: 21,
        injuredPlayers: [{name: "Nick Bosa", pos: "DE", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 185, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 42, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 65, allowedTDs: 1 } },
        players: [
            { name: "Brock Purdy", pos: "QB", td: 2, yds: "1040 pass yds / 90 rush yds", rec: "QB / Starter", marketOdds: 1.70, pressuresFaced: 12, gameLog: [{w:1, yds:250, td:0}, {w:2, yds:270, td:1}, {w:3, yds:260, td:1}, {w:4, yds:260, td:0}] },
            { name: "Christian McCaffrey", pos: "RB", td: 6, yds: "420 yds", rec: "22/28 rec", marketOdds: 1.45, yac: "180 YAC", gameLog: [{w:1, yds:100, td:2}, {w:2, yds:105, td:1}, {w:3, yds:105, td:2}, {w:4, yds:110, td:1}] },
            { name: "George Kittle", pos: "TE", td: 3, yds: "290 yds", rec: "23/30 rec", marketOdds: 1.85, yac: "100 YAC", gameLog: [{w:1, yds:70, td:1}, {w:2, yds:75, td:1}, {w:3, yds:70, td:0}, {w:4, yds:75, td:1}] },
            { name: "Deebo Samuel Sr.", pos: "WR", td: 2, yds: "240 yds", rec: "17/24 rec", marketOdds: 2.10, yac: "110 YAC", gameLog: [{w:1, yds:55, td:1}, {w:2, yds:60, td:0}, {w:3, yds:65, td:1}, {w:4, yds:60, td:0}] },
            { name: "Kyle Juszczyk", pos: "FB", td: 1, yds: "90 yds", rec: "9/11 rec", marketOdds: 3.20, yac: "40 YAC", gameLog: [{w:1, yds:20, td:0}, {w:2, yds:25, td:1}, {w:3, yds:20, td:0}, {w:4, yds:25, td:0}] }
        ],
        defenders: [
            { name: "Fred Warner (LB)", sacks: "1.0 Sacks", pressures: "6 Pressures", tackles: "41 Tackles", tacklesForLoss: 5, probability: "85%", status: "ACTIVE" },
            { name: "Nick Bosa (DE)", sacks: "4.5 Sacks", pressures: "22 Pressures", tackles: "16 Tackles", tacklesForLoss: 6, probability: "80%", status: "QUESTIONABLE" }
        ]
    },
    "Rams": {
        record: "2-2", games: 4, rush: 440, pass: 980, oppPass: 930, oppRush: 390, oppTD: 9, turnovers: 4, sacks: 12, redZonePct: 63, thirdDownPct: 42, penalties: 24,
        injuredPlayers: [{name: "Rob Havenstein", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 210, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 52, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 75, allowedTDs: 1 } },
        players: [
            { name: "Matthew Stafford", pos: "QB", td: 0, yds: "980 pass yds / 10 rush yds", rec: "QB / Starter", marketOdds: 1.90, pressuresFaced: 15, gameLog: [{w:1, yds:240, td:0}, {w:2, yds:250, td:0}, {w:3, yds:245, td:0}, {w:4, yds:245, td:0}] },
            { name: "Kyren Williams", pos: "RB", td: 5, yds: "380 yds", rec: "19/25 rec", marketOdds: 1.55, yac: "140 YAC", gameLog: [{w:1, yds:90, td:2}, {w:2, yds:95, td:1}, {w:3, yds:95, td:1}, {w:4, yds:100, td:1}] },
            { name: "Adams", pos: "WR", td: 2, yds: "310 yds", rec: "22/38 rec", marketOdds: 1.70, yac: "110 YAC", gameLog: [{w:1, yds:70, td:0}, {w:2, yds:75, td:1}, {w:3, yds:80, td:0}, {w:4, yds:85, td:1}] },
            { name: "Higbee", pos: "TE", td: 1, yds: "170 yds", rec: "15/19 rec", marketOdds: 2.50, yac: "60 YAC", gameLog: [{w:1, yds:40, td:0}, {w:2, yds:40, td:1}, {w:3, yds:45, td:0}, {w:4, yds:45, td:0}] },
            { name: "Blake Corum", pos: "RB", td: 1, yds: "140 yds", rec: "8/12 rec", marketOdds: 2.80, yac: "50 YAC", gameLog: [{w:1, yds:30, td:0}, {w:2, yds:35, td:1}, {w:3, yds:35, td:0}, {w:4, yds:40, td:0}] }
        ],
        defenders: [
            { name: "Kobie Turner (DT)", sacks: "3.5 Sacks", pressures: "17 Pressures", tackles: "21 Tackles", tacklesForLoss: 4, probability: "75%", status: "ACTIVE" },
            { name: "Ernest Jones IV (LB)", sacks: "1.0 Sacks", pressures: "4 Pressures", tackles: "39 Tackles", tacklesForLoss: 5, probability: "75%", status: "ACTIVE" }
        ]
    },
    "Cardinals": {
        record: "2-2", games: 4, rush: 420, pass: 930, oppPass: 950, oppRush: 410, oppTD: 9, turnovers: 5, sacks: 11, redZonePct: 60, thirdDownPct: 39, penalties: 26,
        injuredPlayers: [{name: "James Conner", pos: "RB", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 215, allowedTDs: 3 }, vsTE: { allowedYdsPerGame: 54, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 78, allowedTDs: 2 } },
        players: [
            { name: "Jacoby Brissett", pos: "QB", td: 1, yds: "930 pass yds / 70 rush yds", rec: "QB / Starter", marketOdds: 2.10, pressuresFaced: 16, gameLog: [{w:1, yds:220, td:0}, {w:2, yds:235, td:1}, {w:3, yds:235, td:0}, {w:4, yds:240, td:0}] },
            { name: "Marvin Harrison Jr.", pos: "WR", td: 4, yds: "390 yds", rec: "27/38 rec", marketOdds: 1.65, yac: "135 YAC", gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "Love", pos: "RB", td: 2, yds: "190 yds", rec: "12/16 rec", marketOdds: 1.90, yac: "70 YAC", gameLog: [{w:1, yds:45, td:1}, {w:2, yds:45, td:1}, {w:3, yds:50, td:0}, {w:4, yds:50, td:0}] },
            { name: "Allgeier", pos: "RB", td: 1, yds: "160 yds", rec: "10/14 rec", marketOdds: 2.30, yac: "60 YAC", gameLog: [{w:1, yds:35, td:0}, {w:2, yds:40, td:1}, {w:3, yds:40, td:0}, {w:4, yds:45, td:0}] },
            { name: "Trey McBride", pos: "TE", td: 2, yds: "280 yds", rec: "24/33 rec", marketOdds: 1.85, yac: "95 YAC", gameLog: [{w:1, yds:65, td:1}, {w:2, yds:70, td:0}, {w:3, yds:75, td:1}, {w:4, yds:70, td:0}] }
        ],
        defenders: [
            { name: "Budda Baker (S)", sacks: "0.5 Sacks", pressures: "3 Pressures", tackles: "40 Tackles", tacklesForLoss: 4, probability: "80%", status: "ACTIVE" },
            { name: "Josh Sweat (OLB)", sacks: "3.5 Sacks", pressures: "16 Pressures", tackles: "17 Tackles", tacklesForLoss: 4, probability: "70%", status: "ACTIVE" }
        ]
    },
    "Seahawks": {
        record: "3-1", games: 4, rush: 450, pass: 990, oppPass: 880, oppRush: 350, oppTD: 7, turnovers: 3, sacks: 14, redZonePct: 69, thirdDownPct: 45, penalties: 22,
        injuredPlayers: [{name: "Abraham Lucas", pos: "OT", status: "Questionable"}],
        defensiveVsPosition: { vsWR: { allowedYdsPerGame: 190, allowedTDs: 2 }, vsTE: { allowedYdsPerGame: 45, allowedTDs: 1 }, vsRB: { allowedYdsPerGame: 68, allowedTDs: 1 } },
        players: [
            { name: "Sam Darnold", pos: "QB", td: 2, yds: "990 pass yds / 50 rush yds", rec: "QB / Starter", marketOdds: 1.80, pressuresFaced: 13, gameLog: [{w:1, yds:235, td:0}, {w:2, yds:250, td:1}, {w:3, yds:250, td:1}, {w:4, yds:255, td:0}] },
            { name: "Zach Charbonnet", pos: "RB", td: 4, yds: "350 yds", rec: "18/24 rec", marketOdds: 1.70, yac: "125 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:90, td:1}, {w:4, yds:95, td:1}] },
            { name: "Jaxon Smith-Njigba", pos: "WR", td: 4, yds: "390 yds", rec: "29/38 rec", marketOdds: 1.65, yac: "135 YAC", gameLog: [{w:1, yds:90, td:1}, {w:2, yds:95, td:1}, {w:3, yds:100, td:1}, {w:4, yds:105, td:1}] },
            { name: "Cooper Kupp", pos: "WR", td: 3, yds: "340 yds", rec: "26/35 rec", marketOdds: 1.75, yac: "115 YAC", gameLog: [{w:1, yds:80, td:1}, {w:2, yds:85, td:1}, {w:3, yds:85, td:1}, {w:4, yds:90, td:0}] },
            { name: "AJ Barner", pos: "TE", td: 1, yds: "190 yds", rec: "16/22 rec", marketOdds: 2.50, yac: "65 YAC", gameLog: [{w:1, yds:45, td:0}, {w:2, yds:50, td:1}, {w:3, yds:45, td:0}, {w:4, yds:50, td:0}] }
        ],
        defenders: [
            { name: "Leonard Williams (DE)", sacks: "3.5 Sacks", pressures: "18 Pressures", tackles: "21 Tackles", tacklesForLoss: 5, probability: "80%", status: "ACTIVE" },
            { name: "Devon Witherspoon (CB)", sacks: "1.0 Sacks", pressures: "4 Pressures", tackles: "31 Tackles", tacklesForLoss: 3, probability: "75%", status: "ACTIVE" }
        ]
    }
};
