// Manuaalinen otteluohjelma ryhmiteltynä päivittäin Suomen aikoina (EEST)
const nflSchedule = {
    "5": [
        { date: "Perjantai 9.10.2026", time: "03:15", away: "Tampa Bay Buccaneers", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Jacksonville Jaguars", home: "Philadelphia Eagles", weather: "🌤 18°C, Aurinkoinen" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "New York Jets", home: "Minnesota Vikings", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "New England Patriots", home: "Miami Dolphins", weather: "🌤 26°C, Puolipilvinen" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Buffalo Bills", home: "Houston Texans", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Carolina Panthers", home: "Chicago Bears", weather: "🌥 15°C, Pilvinen" },
        { date: "Sunnuntai 11.10.2026", time: "20:00", away: "Las Vegas Raiders", home: "Washington Commanders", weather: "🌤 20°C, Aurinkoinen" },
        { date: "Sunnuntai 11.10.2026", time: "23:05", away: "Los Angeles Rams", home: "Green Bay Packers", weather: "❄️ 8°C, Viileä" },
        { date: "Sunnuntai 11.10.2026", time: "23:25", away: "Arizona Cardinals", home: "San Francisco 49ers", weather: "🌤 22°C, Aurinkoinen" },
        { date: "Sunnuntai 11.10.2026", time: "23:25", away: "New York Giants", home: "New Orleans Saints", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Maanantai 12.10.2026", time: "03:20", away: "Baltimore Ravens", home: "Pittsburgh Steelers", weather: "🌧 12°C, Sadetta" },
        { date: "Maanantai 12.10.2026", time: "20:00", away: "Cincinnati Bengals", home: "Cleveland Browns", weather: "🌥 14°C, Pilvinen" },
        { date: "Maanantai 12.10.2026", time: "20:00", away: "Dallas Cowboys", home: "Detroit Lions", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Tiistai 13.10.2026", time: "03:15", away: "Kansas City Chiefs", home: "Denver Broncos", weather: "❄️ 6°C, Tuulinen" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 31, 34, 35, 38, 41, 42];

window.addEventListener('DOMContentLoaded', () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    function updateMatches() {
        if (!weekSelect || !matchSelect) return;
        const currentWeek = weekSelect.value;
        matchSelect.innerHTML = '';
        const matches = nflSchedule[currentWeek] || [];

        const groupedMatches = {};
        matches.forEach((m, index) => {
            if (!groupedMatches[m.date]) {
                groupedMatches[m.date] = [];
            }
            groupedMatches[m.date].push({ ...m, originalIndex: index });
        });

        for (const [date, dayMatches] of Object.entries(groupedMatches)) {
            const group = document.createElement('optgroup');
            group.label = date;

            dayMatches.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.originalIndex;
                opt.textContent = `${m.time} - ${m.away} @ ${m.home}`;
                group.appendChild(opt);
            });

            matchSelect.appendChild(group);
        }

        runMonteCarloSimulation();
    }

    if (weekSelect) weekSelect.addEventListener('change', updateMatches);
    if (matchSelect) matchSelect.addEventListener('change', runMonteCarloSimulation);
    if (compareBtn) compareBtn.addEventListener('click', runMonteCarloSimulation);

    updateMatches();
});

function findTeamKey(teamName) {
    if (teamName.includes("49ers")) return "49ers";
    const db = typeof nflData !== 'undefined' ? nflData : {};
    return Object.keys(db).find(k => teamName.includes(k)) || "Chiefs";
}

function calculateTeamInjuryFactor(injuredList) {
    if (!injuredList || !Array.isArray(injuredList)) return 1.0;
    let penalty = 1.0;
    injuredList.forEach(p => {
        const multiplier = (p.status && p.status.includes("Out")) ? 1.0 : 0.5;
        if (p.pos && p.pos.includes("QB")) penalty -= (0.22 * multiplier);
        else if (p.pos && (p.pos.includes("RB") || p.pos.includes("WR") || p.pos.includes("TE"))) penalty -= (0.05 * multiplier);
        else penalty -= (0.03 * multiplier);
    });
    return Math.max(0.5, penalty);
}

function calculateWeatherFactor(weatherString) {
    if (weatherString.includes("Dome") || weatherString.includes("Sisäkenttä")) return 1.03;
    if (weatherString.includes("Sade") || weatherString.includes("Rankkasade")) return 0.90;
    if (weatherString.includes("Tuulinen")) return 0.94;
    if (weatherString.includes("Viileä") || weatherString.includes("Kylmä")) return 0.97;
    return 1.0;
}

function getWeatherPositionMultiplier(pos, weatherString) {
    if (!weatherString || !pos) return 1.0;
    const isBadWeather = weatherString.includes("Sade") || weatherString.includes("Rankkasade") || weatherString.includes("Tuulinen");
    if (isBadWeather) {
        if (pos.includes("WR") || pos.includes("TE")) return 0.92;
        if (pos.includes("RB")) return 1.08;
    }
    return 1.0;
}

function calculateGameLogMomentum(player) {
    if (!player.gameLog || !Array.isArray(player.gameLog) || player.gameLog.length === 0) return 1.0;
    const recentGames = player.gameLog.slice(-2);
    let momentumBoost = 0;
    recentGames.forEach(game => {
        if (typeof game === 'object' && game !== null) {
            if ((game.td && game.td > 0) || (game.stats && game.stats.includes('TD'))) {
                momentumBoost += 0.08;
            }
        } else if (typeof game === 'string' && game.includes('TD')) {
            momentumBoost += 0.08;
        }
    });
    return 1.0 + Math.min(0.18, momentumBoost);
}

function getClosestValidScore(rawScore) {
    let closest = VALID_SCORES[0];
    let minDiff = Math.abs(rawScore - closest);
    for (let i = 1; i < VALID_SCORES.length; i++) {
        let diff = Math.abs(rawScore - VALID_SCORES[i]);
        if (diff < minDiff) {
            minDiff = diff;
            closest = VALID_SCORES[i];
        }
    }
    return closest;
}

function getRandomPoisson(lambda) {
    let L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    do {
        k++;
        p *= Math.random();
    } while (p > L);
    return k - 1;
}

function getPlayedGamesCount(recordStr) {
    if (!recordStr) return 4;
    const parts = recordStr.split('-');
    const played = parseInt(parts[0]) + parseInt(parts[1]);
    return played > 0 ? played : 4;
}

function isPlayerOut(playerName, injuredList) {
    if (!injuredList || !Array.isArray(injuredList)) return false;
    return injuredList.some(p => p.name === playerName && p.status && p.status.includes("Out"));
}

function extractTargets(recStr) {
    if (!recStr || typeof recStr !== 'string') return 0;
    if (recStr.includes('/')) {
        const parts = recStr.split('/');
        const t = parseInt(parts[1]);
        return isNaN(t) ? 0 : t;
    }
    return 0;
}

function runMonteCarloSimulation() {
    const selectedWeekElement = document.getElementById('weekSelect');
    const matchIndexElement = document.getElementById('matchSelect');
    if (!selectedWeekElement || !matchIndexElement) return;

    const selectedWeek = selectedWeekElement.value;
    const matchIndex = matchIndexElement.value;
    const match = nflSchedule[selectedWeek]?.[matchIndex];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const db = typeof nflData !== 'undefined' ? nflData : {};
    const homeData = db[homeKey] || db["Chiefs"];
    const awayData = db[awayKey] || db["Rams"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData?.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData?.injuredPlayers);
    let weatherFactor = calculateWeatherFactor(match.weather);

    const homeGames = getPlayedGamesCount(homeData.record);
    const awayGames = getPlayedGamesCount(awayData.record);

    const homePassYPG = Math.round((homeData?.pass || 900) / homeGames);
    const homeRushYPG = Math.round((homeData?.rush || 400) / homeGames);
    const homePassDefYPG = Math.round((homeData?.oppPass || 900) / homeGames);
    const homeRushDefYPG = Math.round((homeData?.oppRush || 400) / homeGames);

    const awayPassYPG = Math.round((awayData?.pass || 900) / awayGames);
    const awayRushYPG = Math.round((awayData?.rush || 400) / awayGames);
    const awayPassDefYPG = Math.round((awayData?.oppPass || 900) / awayGames);
    const awayRushDefYPG = Math.round((awayData?.oppRush || 400) / awayGames);

    let h2hHomeBoost = 1.0;
    let h2hAwayBoost = 1.0;
    if (homeData.h2h && homeData.h2h[awayKey]) {
        const h2h = homeData.h2h[awayKey];
        const totalMeetings = h2h.wins + h2h.losses;
        if (totalMeetings > 0) {
            h2hHomeBoost += ((h2h.wins / totalMeetings) - 0.5) * 0.15;
            h2hAwayBoost += ((h2h.losses / totalMeetings) - 0.5) * 0.15;
        }
    }

    const homeFieldAdvantage = 1.2;

    const homeLambda = Math.max(5.0, (((homePassYPG * 0.55 + awayPassDefYPG * 0.45) / 180 + (homeRushYPG * 0.55 + awayRushDefYPG * 0.45) / 80) * h2hHomeBoost) * homeInjuryPenalty * weatherFactor * 2.1 + homeFieldAdvantage);
    const awayLambda = Math.max(4.5, (((awayPassYPG * 0.55 + homePassDefYPG * 0.45) / 180 + (awayRushYPG * 0.55 + homeRushDefYPG * 0.45) / 80) * h2hAwayBoost) * awayInjuryPenalty * weatherFactor * 2.0);

    const SIM_ITERATIONS = 1000;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let homeRaw = getRandomPoisson(homeLambda) * 3.5 + (Math.random() * 4 - 2);
        let awayRaw = getRandomPoisson(awayLambda) * 3.5 + (Math.random() * 4 - 2);

        let homeScore = getClosestValidScore(Math.max(3, homeRaw));
        let awayScore = getClosestValidScore(Math.max(3, awayRaw));

        homeScoreSum += homeScore;
        awayScoreSum += awayScore;

        if (homeScore > awayScore) {
            homeWins++;
        } else if (homeScore === awayScore) {
            homeWins += 0.5;
        }
    }

    const avgHomeScore = Math.round(homeScoreSum / SIM_ITERATIONS);
    const avgAwayScore = Math.round(awayScoreSum / SIM_ITERATIONS);
    const homeWinPct = ((homeWins / SIM_ITERATIONS) * 100).toFixed(1);
    const awayWinPct = (100 - parseFloat(homeWinPct)).toFixed(1);

    if (document.getElementById('homeScoreNum')) document.getElementById('homeScoreNum').textContent = avgHomeScore;
    if (document.getElementById('awayScoreNum')) document.getElementById('awayScoreNum').textContent = avgAwayScore;
    if (document.getElementById('homeWinProb')) document.getElementById('homeWinProb').textContent = `${match.home}: ${homeWinPct}%`;
    if (document.getElementById('awayWinProb')) document.getElementById('awayWinProb').textContent = `${match.away}: ${awayWinPct}%`;
    if (document.getElementById('probBar')) document.getElementById('probBar').style.width = `${homeWinPct}%`;

    if (document.getElementById('homeTitle')) document.getElementById('homeTitle').textContent = `Kotijoukkue: ${match.home} (${homeData.record || "0-0"})`;
    if (document.getElementById('homeStats')) {
        document.getElementById('homeStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäys (keskiarvo / peli):</strong> Syöttö ${homePassYPG} yds | Juoksu ${homeRushYPG} yds<br>
            🛡️ <strong>Puolustusvuoto (sallitut / peli):</strong> Syöttöä ${homePassDefYPG} yds | Juoksua ${homeRushDefYPG} yds<br>
            ⚠️ Loukkaantumiset: ${homeData.injuredPlayers?.map(p => `${p.name} (${p.pos})`).join(', ') || 'Ei merkittäviä'}
        `;
    }

    if (document.getElementById('awayTitle')) document.getElementById('awayTitle').textContent = `Vierasjoukkue: ${match.away} (${awayData.record || "0-0"})`;
    if (document.getElementById('awayStats')) {
        document.getElementById('awayStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäys (keskiarvo / peli):</strong> Syöttö ${awayPassYPG} yds | Juoksu ${awayRushYPG} yds<br>
            🛡️ <strong>Puolustusvuoto (sallitut / peli):</strong> Syöttöä ${awayPassDefYPG} yds | Juoksua ${awayRushDefYPG} yds<br>
            ⚠️ Loukkaantumiset: ${awayData.injuredPlayers?.map(p => `${p.name} (${p.pos})`).join(', ') || 'Ei merkittäviä'}
        `;
    }

    renderPlayers('homePlayers', homeData.players, avgHomeScore, awayPassDefYPG, awayRushDefYPG, homeData.injuredPlayers, match.weather);
    renderPlayers('awayPlayers', awayData.players, avgAwayScore, homePassDefYPG, homeRushDefYPG, awayData.injuredPlayers, match.weather);
}

function renderPlayers(containerId, playersList, teamOffenseScore, opponentPassDefYPG, opponentRushDefYPG, injuredList, weatherString) {
    const container = document.getElementById(containerId);
    if (!container || !playersList) return;

    container.innerHTML = '';

    playersList.forEach(player => {
        const isOut = isPlayerOut(player.name, injuredList);
        const isQB = player.pos && player.pos.includes("QB");
        
        let statTd = player.td || 0;
        
        let statYds = 0;
        if (player.yds && player.yds.includes('/')) {
            const parts = player.yds.split('/');
            if (isQB) {
                const rushPart = parts.find(p => p.includes('rush')) || parts[1];
                statYds = parseInt(rushPart) || 0;
            } else {
                statYds = parseInt(parts[0]) || 100;
            }
        } else {
            statYds = parseInt(player.yds) || 100;
        }

        let targetsCount = extractTargets(player.rec);
        
        let positionWeight = 12;
        if (player.pos && player.pos.includes("RB")) positionWeight = 32;
        else if (player.pos && player.pos.includes("WR")) positionWeight = 26;
        else if (player.pos && player.pos.includes("TE")) positionWeight = 20;
        else if (isQB) {
            const isDualThreat = player.yds && player.yds.includes("rush") && statYds > 75;
            positionWeight = isDualThreat ? 16 : 2;
        }

        let matchMultiplier = 1.0;
        if (player.pos && player.pos.includes("RB")) {
            matchMultiplier = opponentRushDefYPG / 100;
        } else if (player.pos && (player.pos.includes("WR") || player.pos.includes("TE"))) {
            matchMultiplier = opponentPassDefYPG / 210;
        } else if (isQB) {
            matchMultiplier = opponentRushDefYPG / 110;
        }

        let momentumMultiplier = calculateGameLogMomentum(player);
        let weatherPosMultiplier = getWeatherPositionMultiplier(player.pos, weatherString);

        let targetBonus = targetsCount > 0 ? (targetsCount * 0.20) : (isQB ? 0 : statYds / 40);
        let rawProductivity = positionWeight + (statTd * 6.0) + targetBonus + (isQB ? (statYds / 15) : (statYds / 50));

        let estimatedTeamTDs = Math.max(1, teamOffenseScore / 7.5);
        let probability = (rawProductivity * matchMultiplier * momentumMultiplier * weatherPosMultiplier * (estimatedTeamTDs / 2.8));
        
        if (isQB) {
            const isDualThreat = player.yds && player.yds.includes("rush") && statYds > 75;
            if (!isDualThreat) {
                probability = statTd > 0 ? (statTd * 4.0) : 3.0;
            }
        }

        const tdProbability = isOut ? 0 : Math.min(72, Math.max(2, Math.round(probability)));

        // Tarkistetaanko onko pelaaja liekeissä (momentum-buusti yli 1.0)
        const isHot = momentumMultiplier > 1.0;

        let statsText = player.rec ? `${player.rec} | ${player.yds || ''}` : `${player.pos} | ${player.yds || ''}`;
        if (player.td !== undefined) {
            statsText += ` | TD:t: <strong>${player.td}</strong>`;
        }
        if (isOut) {
            statsText += ` <span style="color: #ff4d4d; font-weight: bold;">(OUT)</span>`;
        }
        if (isHot && !isOut) {
            statsText += ` <span title="Kuuma vire!" style="cursor: help;">🔥</span>`;
        }

        const row = document.createElement('div');
        // Lisätään 'hot'-luokka riville, jos pelaaja on vireessä
        row.className = `player-row${isHot && !isOut ? ' hot' : ''}`;
        row.innerHTML = `
            <div>
                <strong>${player.name}</strong> (${player.pos})
                <span>${statsText}</span>
            </div>
            <div class="odd-badge" style="${isOut ? 'opacity: 0.5;' : ''}">
                <span>Anytime TD</span>
                <strong>${tdProbability}%</strong>
            </div>
        `;
        container.appendChild(row);
    });
}
