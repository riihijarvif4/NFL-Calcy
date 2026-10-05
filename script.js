// TuhtiMonnin MuhditTonnit - Päivitetty ja täydennetty NFL-tietokanta (Viikko 5, Kausi 2026)
const nflDatabase = {
    "Rams": { 
        record: "2-2", games: 4, rush: 520, pass: 1100, oppPass: 950, oppRush: 440, oppTD: 9, turnovers: 5, sacks: 10, redZonePct: 58, thirdDownPct: 41, penalties: 22, 
        injuredPlayers: [{name: "Terrance Ferguson", pos: "TE"}], 
        defensiveLine: [
            { name: "Braden Fiske", pos: "DT", sacks: 3.5, status: "Healthy" },
            { name: "Kobie Turner", pos: "DT", sacks: 3.0, status: "Healthy" },
            { name: "Desjuan Johnson", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Davante Adams", pos: "WR", td: 4, yds: "490 yds", rec: "34/44 rec" },
            { name: "Williams", pos: "RB", td: 3, yds: "410 total yds", rec: "16/20 rec" },
            { name: "Higbee", pos: "TE", td: 1, yds: "95 yds", rec: "10/14 rec" },
            { name: "Stafford", pos: "QB", td: 1, yds: "45 yds", rec: "Passing QB" }
        ]
    },
    "Broncos": { 
        record: "2-2", games: 4, rush: 310, pass: 780, oppPass: 890, oppRush: 400, oppTD: 9, turnovers: 4, sacks: 12, redZonePct: 52, thirdDownPct: 39, penalties: 26, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Jonathon Cooper", pos: "OLB", sacks: 4.5, status: "Healthy" },
            { name: "Nik Bonitto", pos: "OLB", sacks: 4.0, status: "Healthy" },
            { name: "Zach Allen", pos: "DE", sacks: 2.5, status: "Healthy" }
        ],
        players: [
            { name: "Bryant II", pos: "WR", td: 2, yds: "130 yds", rec: "9/13 rec" },
            { name: "Adkins", pos: "TE", td: 2, yds: "55 yds", rec: "7/10 rec" },
            { name: "Engram", pos: "TE", td: 1, yds: "75 yds", rec: "8/12 rec" },
            { name: "Williams", pos: "RB", td: 1, yds: "210 yds", rec: "11/15 rec" }
        ]
    },
    "Bills": { 
        record: "3-1", games: 4, rush: 590, pass: 1020, oppPass: 850, oppRush: 380, oppTD: 11, turnovers: 3, sacks: 8, redZonePct: 70, thirdDownPct: 47, penalties: 20, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Greg Rousseau", pos: "DE", sacks: 3.5, status: "Healthy" },
            { name: "A.J. Epenesa", pos: "DE", sacks: 2.0, status: "Healthy" },
            { name: "Ed Oliver", pos: "DT", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Allen", pos: "QB", td: 8, yds: "160 rush yds", rec: "Passing QB" },
            { name: "Cook", pos: "RB", td: 3, yds: "470 yds", rec: "18/23 rec" },
            { name: "Moore", pos: "WR", td: 2, yds: "210 yds", rec: "14/20 rec" },
            { name: "Kincaid", pos: "TE", td: 1, yds: "130 yds", rec: "12/16 rec" }
        ]
    },
    "Chargers": { 
        record: "0-4", games: 4, rush: 430, pass: 810, oppPass: 1010, oppRush: 490, oppTD: 11, turnovers: 8, sacks: 14, redZonePct: 39, thirdDownPct: 31, penalties: 31, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Khalil Mack", pos: "OLB", sacks: 4.0, status: "Healthy" },
            { name: "Joey Bosa", pos: "OLB", sacks: 3.5, status: "Healthy" },
            { name: "Tuli Tuipulotu", pos: "DE", sacks: 3.0, status: "Healthy" }
        ],
        players: [
            { name: "Hampton", pos: "RB", td: 2, yds: "240 yds", rec: "13/18 rec" },
            { name: "McConkley", pos: "WR", td: 2, yds: "230 yds", rec: "16/25 rec" },
            { name: "Palmer", pos: "WR", td: 1, yds: "170 yds", rec: "12/19 rec" }
        ]
    },
    "Browns": { 
        record: "3-1", games: 4, rush: 360, pass: 790, oppPass: 810, oppRush: 350, oppTD: 8, turnovers: 3, sacks: 11, redZonePct: 56, thirdDownPct: 39, penalties: 24, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Myles Garrett", pos: "DE", sacks: 5.0, status: "Healthy" },
            { name: "Za'Darius Smith", pos: "DE", sacks: 3.0, status: "Healthy" },
            { name: "Dalvin Tomlinson", pos: "DT", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Boston", pos: "WR", td: 3, yds: "260 yds", rec: "16/22 rec" },
            { name: "Fannin Jr", pos: "WR", td: 2, yds: "160 yds", rec: "11/16 rec" },
            { name: "Chubb", pos: "RB", td: 2, yds: "190 yds", rec: "6/8 rec" },
            { name: "Judkins", pos: "RB", td: 1, yds: "155 yds", rec: "10/13 rec" }
        ]
    },
    "Panthers": { 
        record: "2-2", games: 4, rush: 400, pass: 1220, oppPass: 1060, oppRush: 500, oppTD: 12, turnovers: 6, sacks: 15, redZonePct: 50, thirdDownPct: 36, penalties: 28, 
        injuredPlayers: [{name: "Jalen Coker", pos: "WR"}], 
        defensiveLine: [
            { name: "Derrick Brown", pos: "DT", sacks: 2.0, status: "Healthy" },
            { name: "A'Shawn Robinson", pos: "DT", sacks: 1.5, status: "Healthy" },
            { name: "Jadeveon Clowney", pos: "OLB", sacks: 3.0, status: "Healthy" }
        ],
        players: [
            { name: "Tetairoa McMillan", pos: "WR", td: 4, yds: "385 yds", rec: "26/38 rec" },
            { name: "Hubbard", pos: "RB", td: 3, yds: "340 yds", rec: "14/18 rec" },
            { name: "Coker", pos: "WR", td: 3, yds: "290 yds", rec: "19/28 rec" },
            { name: "Wallen", pos: "TE", td: 2, yds: "145 yds", rec: "11/15 rec" }
        ]
    },
    "Cowboys": { 
        record: "2-2", games: 4, rush: 380, pass: 980, oppPass: 970, oppRush: 450, oppTD: 12, turnovers: 6, sacks: 9, redZonePct: 62, thirdDownPct: 43, penalties: 26, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Micah Parsons", pos: "DE", sacks: 4.5, status: "Healthy" },
            { name: "DeMarcus Lawrence", pos: "DE", sacks: 2.0, status: "Healthy" },
            { name: "Osa Odighizuwa", pos: "DT", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Lamb", pos: "WR", td: 4, yds: "410 yds", rec: "29/40 rec" },
            { name: "Williams", pos: "RB", td: 3, yds: "290 yds", rec: "18/23 rec" },
            { name: "Ferguson", pos: "TE", td: 3, yds: "105 yds", rec: "14/18 rec" },
            { name: "Prescott", pos: "QB", td: 1, yds: "50 yds", rec: "Passing QB" }
        ]
    },
    "Ravens": { 
        record: "3-1", games: 4, rush: 640, pass: 960, oppPass: 890, oppRush: 360, oppTD: 10, turnovers: 4, sacks: 7, redZonePct: 67, thirdDownPct: 48, penalties: 21, 
        injuredPlayers: [{name: "Lamar Jackson", pos: "QB"}], 
        defensiveLine: [
            { name: "Nnamdi Madubuike", pos: "DT", sacks: 3.0, status: "Healthy" },
            { name: "Odafe Oweh", pos: "OLB", sacks: 2.5, status: "Healthy" },
            { name: "Kyle Van Noy", pos: "OLB", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Henry", pos: "RB", td: 7, yds: "440 yds", rec: "7/10 rec" },
            { name: "Flowers", pos: "WR", td: 2, yds: "310 yds", rec: "23/32 rec" },
            { name: "Jackson", pos: "QB", td: 2, yds: "180 yds", rec: "Passing QB" },
            { name: "Likely", pos: "TE", td: 1, yds: "140 yds", rec: "11/15 rec" }
        ]
    },
    "Saints": { 
        record: "1-3", games: 4, rush: 380, pass: 1150, oppPass: 990, oppRush: 470, oppTD: 13, turnovers: 6, sacks: 10, redZonePct: 51, thirdDownPct: 39, penalties: 24, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Carl Granderson", pos: "DE", sacks: 3.5, status: "Healthy" },
            { name: "Cameron Jordan", pos: "DE", sacks: 1.5, status: "Healthy" },
            { name: "Bryan Bresee", pos: "DT", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Johnson", pos: "WR", td: 4, yds: "220 yds", rec: "15/22 rec" },
            { name: "Olave", pos: "WR", td: 2, yds: "480 yds", rec: "32/45 rec" },
            { name: "Fant", pos: "TE", td: 3, yds: "85 yds", rec: "9/13 rec" },
            { name: "Kamara", pos: "RB", td: 2, yds: "310 yds", rec: "20/26 rec" }
        ]
    },
    "Raiders": { 
        record: "3-1", games: 4, rush: 380, pass: 850, oppPass: 800, oppRush: 340, oppTD: 10, turnovers: 3, sacks: 8, redZonePct: 64, thirdDownPct: 44, penalties: 19, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Maxx Crosby", pos: "DE", sacks: 5.5, status: "Healthy" },
            { name: "Christian Wilkins", pos: "DT", sacks: 2.0, status: "Healthy" },
            { name: "Malcolm Koonce", pos: "DE", sacks: 1.0, status: "Healthy" }
        ],
        players: [
            { name: "Jeanty", pos: "RB", td: 4, yds: "400 yds", rec: "19/25 rec" },
            { name: "White", pos: "WR", td: 3, yds: "45 yds", rec: "5/8 rec" },
            { name: "Bowers", pos: "TE", td: 2, yds: "160 yds", rec: "15/20 rec" },
            { name: "Meyers", pos: "WR", td: 1, yds: "190 yds", rec: "14/21 rec" }
        ]
    },
    "49ers": { 
        record: "4-0", games: 4, rush: 540, pass: 1020, oppPass: 760, oppRush: 310, oppTD: 6, turnovers: 2, sacks: 5, redZonePct: 72, thirdDownPct: 51, penalties: 16, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Nick Bosa", pos: "DE", sacks: 4.0, status: "Healthy" },
            { name: "Javon Hargrave", pos: "DT", sacks: 1.5, status: "Healthy" },
            { name: "Leonard Floyd", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "McCaffrey", pos: "RB", td: 4, yds: "360 yds", rec: "23/28 rec" },
            { name: "Kittle", pos: "TE", td: 3, yds: "230 yds", rec: "18/23 rec" },
            { name: "Samuel", pos: "WR", td: 2, yds: "210 yds", rec: "17/23 rec" },
            { name: "Aiyuk", pos: "WR", td: 1, yds: "190 yds", rec: "14/20 rec" }
        ]
    },
    "Cardinals": { 
        record: "1-3", games: 4, rush: 350, pass: 840, oppPass: 1020, oppRush: 480, oppTD: 14, turnovers: 7, sacks: 12, redZonePct: 48, thirdDownPct: 36, penalties: 28, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Darius Robinson", pos: "DE", sacks: 2.0, status: "Healthy" },
            { name: "Zaven Collins", pos: "OLB", sacks: 1.5, status: "Healthy" },
            { name: "Justin Jones", pos: "DT", sacks: 1.0, status: "Healthy" }
        ],
        players: [
            { name: "McBride", pos: "TE", td: 3, yds: "280 yds", rec: "21/29 rec" },
            { name: "Love", pos: "RB", td: 3, yds: "260 yds", rec: "15/21 rec" },
            { name: "Harrison Jr", pos: "WR", td: 2, yds: "310 yds", rec: "20/33 rec" },
            { name: "Wilson", pos: "WR", td: 1, yds: "200 yds", rec: "14/21 rec" }
        ]
    },
    "Buccaneers": { 
        record: "0-4", games: 4, rush: 360, pass: 780, oppPass: 980, oppRush: 440, oppTD: 9, turnovers: 8, sacks: 13, redZonePct: 40, thirdDownPct: 33, penalties: 30, 
        injuredPlayers: [{name: "Bucky Irving", pos: "RB"}], 
        defensiveLine: [
            { name: "Vita Vea", pos: "DT", sacks: 2.5, status: "Healthy" },
            { name: "Yaya Diaby", pos: "OLB", sacks: 3.0, status: "Healthy" },
            { name: "Calijah Kancey", pos: "DT", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Irving", pos: "RB", td: 2, yds: "310 yds", rec: "16/22 rec" },
            { name: "Egbuka", pos: "WR", td: 2, yds: "190 yds", rec: "13/19 rec" },
            { name: "Evans", pos: "WR", td: 1, yds: "220 yds", rec: "15/24 rec" },
            { name: "Mayfield", pos: "QB", td: 1, yds: "80 yds", rec: "Passing QB" }
        ]
    },
    "Vikings": { 
        record: "4-0", games: 4, rush: 400, pass: 610, oppPass: 710, oppRush: 300, oppTD: 4, turnovers: 1, sacks: 6, redZonePct: 74, thirdDownPct: 53, penalties: 17, 
        injuredPlayers: [{name: "Justin Jefferson", pos: "WR"}], 
        defensiveLine: [
            { name: "Jonathan Greenard", pos: "OLB", sacks: 4.5, status: "Healthy" },
            { name: "Andrew Van Ginkel", pos: "OLB", sacks: 3.5, status: "Healthy" },
            { name: "Dallas Turner", pos: "OLB", sacks: 3.0, status: "Healthy" }
        ],
        players: [
            { name: "Jefferson", pos: "WR", td: 3, yds: "240 yds", rec: "20/29 rec" },
            { name: "Jones", pos: "RB", td: 2, yds: "310 yds", rec: "18/23 rec" },
            { name: "Hockenson", pos: "TE", td: 1, yds: "110 yds", rec: "11/15 rec" },
            { name: "Addison", pos: "WR", td: 1, yds: "160 yds", rec: "12/18 rec" }
        ]
    },
    "Lions": { 
        record: "2-2", games: 4, rush: 460, pass: 1040, oppPass: 1090, oppRush: 420, oppTD: 15, turnovers: 4, sacks: 8, redZonePct: 73, thirdDownPct: 52, penalties: 20, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Aidan Hutchinson", pos: "DE", sacks: 6.5, status: "Healthy" },
            { name: "D.J. Reader", pos: "DT", sacks: 1.0, status: "Healthy" },
            { name: "Marcus Davenport", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Gibbs", pos: "RB", td: 7, yds: "580 yds", rec: "21/26 rec" },
            { name: "St. Brown", pos: "WR", td: 6, yds: "310 yds", rec: "26/34 rec" },
            { name: "LaPorta", pos: "TE", td: 2, yds: "190 yds", rec: "16/21 rec" },
            { name: "Montgomery", pos: "RB", td: 2, yds: "280 yds", rec: "10/14 rec" }
        ]
    },
    "Jets": { 
        record: "1-3", games: 4, rush: 350, pass: 990, oppPass: 910, oppRush: 390, oppTD: 9, turnovers: 5, sacks: 10, redZonePct: 52, thirdDownPct: 37, penalties: 25, 
        injuredPlayers: [{name: "Breece Hall", pos: "RB"}], 
        defensiveLine: [
            { name: "Quinnen Williams", pos: "DT", sacks: 3.0, status: "Healthy" },
            { name: "Jermaine Johnson", pos: "DE", sacks: 2.5, status: "Healthy" },
            { name: "Haason Reddick", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Wilson", pos: "WR", td: 3, yds: "230 yds", rec: "17/26 rec" },
            { name: "Hall", pos: "RB", td: 2, yds: "330 yds", rec: "19/25 rec" },
            { name: "Sadiq", pos: "TE", td: 1, yds: "170 yds", rec: "11/15 rec" },
            { name: "Conklin", pos: "TE", td: 1, yds: "120 yds", rec: "10/14 rec" }
        ]
    },
    "Colts": { 
        record: "2-2", games: 4, rush: 410, pass: 810, oppPass: 920, oppRush: 430, oppTD: 11, turnovers: 6, sacks: 11, redZonePct: 52, thirdDownPct: 39, penalties: 26, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "DeForest Buckner", pos: "DT", sacks: 3.0, status: "Healthy" },
            { name: "Kwity Paye", pos: "DE", sacks: 2.5, status: "Healthy" },
            { name: "Grover Stewart", pos: "DT", sacks: 1.0, status: "Healthy" }
        ],
        players: [
            { name: "Taylor", pos: "RB", td: 5, yds: "430 yds", rec: "13/18 rec" },
            { name: "Warren", pos: "TE", td: 2, yds: "120 yds", rec: "10/14 rec" },
            { name: "Allen", pos: "WR", td: 2, yds: "150 yds", rec: "11/17 rec" },
            { name: "Pittman Jr", pos: "WR", td: 1, yds: "210 yds", rec: "16/24 rec" }
        ]
    },
    "Texans": { 
        record: "0-4", games: 4, rush: 320, pass: 1010, oppPass: 960, oppRush: 460, oppTD: 9, turnovers: 8, sacks: 15, redZonePct: 37, thirdDownPct: 30, penalties: 33, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Will Anderson Jr.", pos: "DE", sacks: 4.5, status: "Healthy" },
            { name: "Danielle Hunter", pos: "DE", sacks: 3.5, status: "Healthy" },
            { name: "Sheldon Rankins", pos: "DT", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Montgomery", pos: "RB", td: 3, yds: "210 yds", rec: "15/20 rec" },
            { name: "Collins", pos: "WR", td: 2, yds: "160 yds", rec: "11/16 rec" },
            { name: "Nico Collins", pos: "WR", td: 1, yds: "240 yds", rec: "18/25 rec" },
            { name: "Marks", pos: "RB", td: 1, yds: "120 yds", rec: "11/15 rec" }
        ]
    },
    "Jaguars": { 
        record: "3-1", games: 4, rush: 460, pass: 790, oppPass: 810, oppRush: 340, oppTD: 5, turnovers: 3, sacks: 7, redZonePct: 67, thirdDownPct: 47, penalties: 19, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Josh Hines-Allen", pos: "OLB", sacks: 3.5, status: "Healthy" },
            { name: "Travon Walker", pos: "DE", sacks: 3.0, status: "Healthy" },
            { name: "Arik Armstead", pos: "DT", sacks: 1.0, status: "Healthy" }
        ],
        players: [
            { name: "Tuten", pos: "RB", td: 3, yds: "320 yds", rec: "15/19 rec" },
            { name: "Washington", pos: "WR", td: 2, yds: "290 yds", rec: "19/27 rec" },
            { name: "Meyers", pos: "WR", td: 2, yds: "180 yds", rec: "14/19 rec" },
            { name: "Engram", pos: "TE", td: 1, yds: "150 yds", rec: "13/17 rec" }
        ]
    },
    "Patriots": { 
        record: "2-2", games: 4, rush: 420, pass: 850, oppPass: 860, oppRush: 390, oppTD: 8, turnovers: 5, sacks: 9, redZonePct: 56, thirdDownPct: 41, penalties: 23, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Keion White", pos: "DE", sacks: 3.0, status: "Healthy" },
            { name: "Davon Godchaux", pos: "DT", sacks: 1.0, status: "Healthy" },
            { name: "Deatrich Wise Jr.", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Henderson", pos: "RB", td: 2, yds: "150 yds", rec: "11/15 rec" },
            { name: "Maye", pos: "QB", td: 2, yds: "110 yds", rec: "Passing QB" },
            { name: "Hollins", pos: "WR", td: 1, yds: "210 yds", rec: "15/23 rec" },
            { name: "Bourne", pos: "WR", td: 1, yds: "140 yds", rec: "11/16 rec" }
        ]
    },
    "Dolphins": { 
        record: "0-4", games: 4, rush: 380, pass: 810, oppPass: 1050, oppRush: 520, oppTD: 14, turnovers: 8, sacks: 14, redZonePct: 36, thirdDownPct: 29, penalties: 35, 
        injuredPlayers: [{name: "De'Von Achane", pos: "RB"}], 
        defensiveLine: [
            { name: "Jaelan Phillips", pos: "LB", sacks: 3.0, status: "Healthy" },
            { name: "Chop Robinson", pos: "LB", sacks: 2.0, status: "Healthy" },
            { name: "Zach Sieler", pos: "DT", sacks: 2.5, status: "Healthy" }
        ],
        players: [
            { name: "Gordon", pos: "RB", td: 2, yds: "90 yds", rec: "7/11 rec" },
            { name: "Washington", pos: "WR", td: 1, yds: "210 yds", rec: "14/22 rec" },
            { name: "Hill", pos: "WR", td: 1, yds: "260 yds", rec: "18/27 rec" },
            { name: "Waddle", pos: "WR", td: 1, yds: "220 yds", rec: "16/24 rec" }
        ]
    },
    "Chiefs": { 
        record: "4-0", games: 4, rush: 590, pass: 1080, oppPass: 750, oppRush: 290, oppTD: 6, turnovers: 2, sacks: 5, redZonePct: 75, thirdDownPct: 52, penalties: 17, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Chris Jones", pos: "DT", sacks: 3.5, status: "Healthy" },
            { name: "George Karlaftis", pos: "DE", sacks: 3.0, status: "Healthy" },
            { name: "Felix Anudike-Uzomah", pos: "DE", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Walker III", pos: "RB", td: 5, yds: "560 yds", rec: "18/23 rec" },
            { name: "Kelce", pos: "TE", td: 3, yds: "310 yds", rec: "24/32 rec" },
            { name: "Worthy", pos: "WR", td: 2, yds: "110 yds", rec: "8/13 rec" },
            { name: "Mahomes", pos: "QB", td: 1, yds: "70 yds", rec: "Passing QB" }
        ]
    },
    "Giants": { 
        record: "3-1", games: 4, rush: 470, pass: 640, oppPass: 840, oppRush: 380, oppTD: 9, turnovers: 4, sacks: 9, redZonePct: 61, thirdDownPct: 43, penalties: 22, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Dexter Lawrence", pos: "DT", sacks: 4.5, status: "Healthy" },
            { name: "Brian Burns", pos: "OLB", sacks: 3.5, status: "Healthy" },
            { name: "Kayvon Thibodeaux", pos: "OLB", sacks: 3.0, status: "Healthy" }
        ],
        players: [
            { name: "Likely", pos: "WR", td: 3, yds: "170 yds", rec: "14/19 rec" },
            { name: "Skattebo", pos: "RB", td: 2, yds: "310 yds", rec: "16/22 rec" },
            { name: "Singletary", pos: "RB", td: 2, yds: "110 yds", rec: "8/12 rec" },
            { name: "Nabers", pos: "WR", td: 1, yds: "290 yds", rec: "22/33 rec" }
        ]
    },
    "Titans": { 
        record: "0-4", games: 4, rush: 350, pass: 670, oppPass: 970, oppRush: 470, oppTD: 7, turnovers: 7, sacks: 13, redZonePct: 39, thirdDownPct: 31, penalties: 30, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Jeffery Simmons", pos: "DT", sacks: 2.5, status: "Healthy" },
            { name: "Harold Landry III", pos: "OLB", sacks: 3.0, status: "Healthy" },
            { name: "Arden Key", pos: "OLB", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Ward", pos: "QB", td: 3, yds: "50 yds", rec: "Passing QB" },
            { name: "Robinson", pos: "WR", td: 2, yds: "140 yds", rec: "11/16 rec" },
            { name: "Ayomaoyr", pos: "WR", td: 1, yds: "120 yds", rec: "9/14 rec" },
            { name: "Pollard", pos: "RB", td: 1, yds: "210 yds", rec: "12/17 rec" }
        ]
    },
    "Steelers": { 
        record: "2-2", games: 4, rush: 370, pass: 920, oppPass: 850, oppRush: 360, oppTD: 8, turnovers: 4, sacks: 8, redZonePct: 61, thirdDownPct: 43, penalties: 20, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "T.J. Watt", pos: "OLB", sacks: 5.0, status: "Healthy" },
            { name: "Alex Highsmith", pos: "OLB", sacks: 3.0, status: "Healthy" },
            { name: "Cameron Heyward", pos: "DT", sacks: 2.5, status: "Healthy" }
        ],
        players: [
            { name: "Metcalf", pos: "WR", td: 2, yds: "150 yds", rec: "10/16 rec" },
            { name: "Freiermuth", pos: "TE", td: 2, yds: "140 yds", rec: "12/17 rec" },
            { name: "Wilson", pos: "WR", td: 2, yds: "160 yds", rec: "11/18 rec" },
            { name: "Harris", pos: "RB", td: 1, yds: "240 yds", rec: "9/13 rec" }
        ]
    },
    "Bengals": { 
        record: "3-1", games: 4, rush: 360, pass: 980, oppPass: 930, oppRush: 400, oppTD: 8, turnovers: 4, sacks: 8, redZonePct: 65, thirdDownPct: 46, penalties: 21, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Trey Hendrickson", pos: "DE", sacks: 4.5, status: "Healthy" },
            { name: "Sheldon Rankins", pos: "DT", sacks: 1.5, status: "Healthy" },
            { name: "Sam Hubbard", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Chase", pos: "WR", td: 4, yds: "260 yds", rec: "22/32 rec" },
            { name: "Gesicki", pos: "TE", td: 3, yds: "160 yds", rec: "14/19 rec" },
            { name: "Brown", pos: "RB", td: 2, yds: "290 yds", rec: "18/23 rec" },
            { name: "Higgins", pos: "WR", td: 1, yds: "210 yds", rec: "15/22 rec" }
        ]
    },
    "Commanders": { 
        record: "1-3", games: 4, rush: 500, pass: 710, oppPass: 1040, oppRush: 500, oppTD: 13, turnovers: 6, sacks: 11, redZonePct: 50, thirdDownPct: 37, penalties: 24, 
        injuredPlayers: [{name: "Jayden Daniels", pos: "QB"}, {name: "Terry McLaurin", pos: "WR"}], 
        defensiveLine: [
            { name: "Daron Payne", pos: "DT", sacks: 2.0, status: "Healthy" },
            { name: "Jonathan Allen", pos: "DT", sacks: 2.5, status: "Healthy" },
            { name: "Dorance Armstrong", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Diggs", pos: "WR", td: 4, yds: "190 yds", rec: "15/22 rec" },
            { name: "Croskey-Merritt", pos: "RB", td: 2, yds: "190 yds", rec: "12/16 rec" },
            { name: "McLaurin", pos: "WR", td: 1, yds: "141 yds", rec: "10/15 rec" },
            { name: "Robinson Jr", pos: "RB", td: 1, yds: "220 yds", rec: "11/15 rec" }
        ]
    },
    "Seahawks": { 
        record: "3-1", games: 4, rush: 390, pass: 1100, oppPass: 870, oppRush: 380, oppTD: 8, turnovers: 4, sacks: 7, redZonePct: 68, thirdDownPct: 48, penalties: 20, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Leonard Williams", pos: "DE", sacks: 3.0, status: "Healthy" },
            { name: "Boye Mafe", pos: "OLB", sacks: 3.5, status: "Healthy" },
            { name: "Uchenna Nwosu", pos: "OLB", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Smith-Njigba", pos: "WR", td: 7, yds: "520 yds", rec: "35/47 rec" },
            { name: "Kupp", pos: "TE", td: 2, yds: "150 yds", rec: "13/18 rec" },
            { name: "Walker", pos: "RB", td: 1, yds: "270 yds", rec: "12/16 rec" }
        ]
    },
    "Packers": { 
        record: "2-2", games: 4, rush: 200, pass: 1120, oppPass: 1010, oppRush: 470, oppTD: 13, turnovers: 5, sacks: 10, redZonePct: 55, thirdDownPct: 40, penalties: 23, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "Rashan Gary", pos: "DE", sacks: 3.5, status: "Healthy" },
            { name: "Kenny Clark", pos: "DT", sacks: 1.5, status: "Healthy" },
            { name: "Lukas Van Ness", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Watson", pos: "WR", td: 5, yds: "370 yds", rec: "22/32 rec" },
            { name: "Golden", pos: "WR", td: 2, yds: "310 yds", rec: "19/27 rec" },
            { name: "Jacobs", pos: "RB", td: 2, yds: "300 yds", rec: "14/19 rec" },
            { name: "Reed", pos: "WR", td: 1, yds: "240 yds", rec: "17/24 rec" }
        ]
    },
    "Eagles": { 
        record: "3-0", games: 3, rush: 340, pass: 710, oppPass: 730, oppRush: 300, oppTD: 7, turnovers: 3, sacks: 6, redZonePct: 72, thirdDownPct: 49, penalties: 19, 
        injuredPlayers: [{name: "DeVonta Smith", pos: "WR"}], 
        defensiveLine: [
            { name: "Jalen Carter", pos: "DT", sacks: 2.5, status: "Healthy" },
            { name: "Bryce Huff", pos: "DE", sacks: 2.0, status: "Healthy" },
            { name: "Josh Sweat", pos: "DE", sacks: 2.0, status: "Healthy" }
        ],
        players: [
            { name: "Goedert", pos: "TE", td: 3, yds: "120 yds", rec: "10/14 rec" },
            { name: "Saquon Barkley", pos: "RB", td: 3, yds: "380 yds", rec: "14/18 rec" },
            { name: "Wicks", pos: "WR", td: 1, yds: "147 yds", rec: "9/13 rec" },
            { name: "Smith", pos: "WR", td: 1, yds: "170 yds", rec: "11/16 rec" }
        ]
    },
    "Bears": { 
        record: "2-1", games: 3, rush: 620, pass: 700, oppPass: 760, oppRush: 310, oppTD: 7, turnovers: 4, sacks: 7, redZonePct: 66, thirdDownPct: 45, penalties: 22, 
        injuredPlayers: [{name: "Caleb Williams", pos: "QB"}], 
        defensiveLine: [
            { name: "Montez Sweat", pos: "DE", sacks: 3.5, status: "Healthy" },
            { name: "Gervon Dexter Sr.", pos: "DT", sacks: 2.5, status: "Healthy" },
            { name: "DeMarcus Walker", pos: "DE", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Swift", pos: "RB", td: 4, yds: "340 yds", rec: "16/20 rec" },
            { name: "Williams", pos: "QB", td: 2, yds: "107 yds", rec: "Passing QB" },
            { name: "Monangai", pos: "RB", td: 1, yds: "182 yds", rec: "8/11 rec" },
            { name: "Moore", pos: "WR", td: 1, yds: "210 yds", rec: "15/22 rec" }
        ]
    },
    "Falcons": { 
        record: "1-3", games: 4, rush: 680, pass: 720, oppPass: 960, oppRush: 440, oppTD: 10, turnovers: 4, sacks: 8, redZonePct: 62, thirdDownPct: 42, penalties: 22, 
        injuredPlayers: [], 
        defensiveLine: [
            { name: "MatJudon", pos: "OLB", sacks: 3.0, status: "Healthy" },
            { name: "Grady Jarrett", pos: "DT", sacks: 2.0, status: "Healthy" },
            { name: "David Onyemata", pos: "DT", sacks: 1.5, status: "Healthy" }
        ],
        players: [
            { name: "Bijan Robinson", pos: "RB", td: 4, yds: "610 yds", rec: "23/31 rec" },
            { name: "Brian Robinson", pos: "RB", td: 2, yds: "190 yds", rec: "12/17 rec" },
            { name: "London", pos: "WR", td: 2, yds: "290 yds", rec: "21/30 rec" },
            { name: "Pitts", pos: "TE", td: 1, yds: "180 yds", rec: "14/20 rec" }
        ]
    }
};


// Viikon 5 otteluohjelma simulaatioita varten
const nflSchedule = {
    "5": [
        { away: "New York Jets", home: "Miami Dolphins", weather: "🏟️ Sisäkenttä (Dome)" },
        { away: "Baltimore Ravens", home: "Houston Texans", weather: "🏟️ Sisäkenttä (Dome)" },
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

function calculateTeamInjuryFactor(injuredList) {
    let penalty = 1.0;
    injuredList.forEach(p => {
        if (p.pos === "QB") penalty -= 0.22;
        else if (p.pos === "RB" || p.pos === "WR" || p.pos === "TE") penalty -= 0.05;
        else penalty -= 0.03;
    });
    return Math.max(0.5, penalty);
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

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData.injuredPlayers);

    let weatherFactor = 1.0;
    if (match.weather.includes("Sade") || match.weather.includes("Rankkasade")) weatherFactor = 0.93;
    if (match.weather.includes("Tuulinen") || match.weather.includes("Viileä")) weatherFactor = 0.96;

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
        
        if (hScore === aScore) {
            hScore += Math.random() > 0.45 ? 3 : 0;
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
        🌤️ <strong>Olosuhteet:</strong> ${match.weather}<br>
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

    renderPlayersWithPoisson('homePlayers', homeData.players, homeEstimatedTDs, awayData.oppTD, homeData.injuredPlayers);
    renderPlayersWithPoisson('awayPlayers', awayData.players, awayEstimatedTDs, homeData.oppTD, awayData.injuredPlayers);

    renderSmartBettingTips(match, homeData.players, awayData.players, homeEstimatedTDs, awayEstimatedTDs, homeData.oppTD, awayData.oppTD);
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

function renderSmartBettingTips(match, homePlayers, awayPlayers, homeEstimatedTDs, awayEstimatedTDs, homeOppTD, awayOppTD) {
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

    let allScorers = [];

    function evaluateTeamScorers(players, teamTDs, oppTD) {
        let totalPlayerTDs = players.reduce((sum, p) => sum + p.td, 0);
        if (totalPlayerTDs === 0) totalPlayerTDs = 1;

        players.forEach(p => {
            let marketShare = p.td / totalPlayerTDs;
            let matchupMultiplier = oppTD / 8.0;
            let lambda = (teamTDs * marketShare) * matchupMultiplier;
            if (lambda < 0.02) lambda = 0.02;

            let anyTdProb = Math.round((1 - Math.exp(-lambda)) * 100);
            let twoPlusProb = Math.round((1 - Math.exp(-lambda) - (lambda * Math.exp(-lambda))) * 100);
            if (twoPlusProb < 3) twoPlusProb = 3;

            allScorers.push({
                name: p.name,
                pos: p.pos,
                anyTd: anyTdProb,
                twoPlus: twoPlusProb
            });
        });
    }

    evaluateTeamScorers(homePlayers, homeEstimatedTDs, awayOppTD);
    evaluateTeamScorers(awayPlayers, awayEstimatedTDs, homeOppTD);

    allScorers.sort((a, b) => b.anyTd - a.anyTd);

    let topAnyTime = allScorers[0] ? `🔥 ${allScorers[0].name} (${allScorers[0].pos}) – Anytime TD (${allScorers[0].anyTd}%)` : "Ei tarpeeksi dataa";
    let secondAnyTime = allScorers[1] ? `⚡ ${allScorers[1].name} (${allScorers[1].pos}) – Anytime TD (${allScorers[1].anyTd}%)` : "";
    
    let multiScorers = [...allScorers].sort((a, b) => b.twoPlus - a.twoPlus);
    let topTwoPlus = multiScorers[0] ? `🎯 ${multiScorers[0].name} (${multiScorers[0].pos}) – 2+ TD (${multiScorers[0].twoPlus}%)` : "";

    tipBox.innerHTML = `
        <h3 style="margin-top: 0; color: #38bdf8; margin-bottom: 10px;">🏈 TD-Vetovihjeet (Anytime & 2+ TD)</h3>
        <div style="font-size: 13px; line-height: 1.6;">
            <div>⭐ <strong>Vahvin Anytime TD -kohde:</strong> <span style="color: #f59e0b;">${topAnyTime}</span></div>
            ${secondAnyTime ? `<div>⭐ <strong>Toinen nosto (Anytime):</strong> <span style="color: #f59e0b;">${secondAnyTime}</span></div>` : ''}
            <div>🔥 <strong>Paras 2+ Touchdownin haku:</strong> <span style="color: #f59e0b;">${topTwoPlus}</span></div>
        </div>
    `;
}

function renderPlayersWithPoisson(containerId, players, teamEstimatedTDs, opponentOppTD, injuredList) {
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

    processedPlayers.forEach(p => {
        let matchupMultiplier = opponentOppTD / 8.0; 
        let lambda = 0;
        
        if (!p.isInjured) {
            let marketShare = p.td / totalHealthyTDs;
            lambda = (teamEstimatedTDs * marketShare) * matchupMultiplier;
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
}
