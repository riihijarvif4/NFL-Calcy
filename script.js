// Virallinen NFL viikon 6 otteluohjelma (Lokakuu 2026) Suomen aikoina (EEST)
// Huom: Viikolla 6 huilivuorossa (Bye Week) ovat Bengals, Lions, Dolphins ja Vikings.
const nflSchedule = {
    "6": [
        { date: "Perjantai 16.10.2026", time: "03:15", away: "Seattle Seahawks", home: "Denver Broncos", weather: "🌤 15°C, Aurinkoinen" },
        { date: "Sunnuntai 18.10.2026", time: "16:30", away: "Houston Texans", home: "Jacksonville Jaguars", weather: "☁️ 14°C, Pilvinen (Lontoo)" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Chicago Bears", home: "Atlanta Falcons", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Baltimore Ravens", home: "Cleveland Browns", weather: "🌤 16°C, Melko selkeää" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Tennessee Titans", home: "Indianapolis Colts", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "New York Jets", home: "New England Patriots", weather: "🌥 13°C, Pilvinen" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "New Orleans Saints", home: "New York Giants", weather: "🌤 17°C, Raikas" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Carolina Panthers", home: "Philadelphia Eagles", weather: "🌤 18°C, Aurinkoinen" },
        { date: "Sunnuntai 18.10.2026", time: "20:00", away: "Pittsburgh Steelers", home: "Tampa Bay Buccaneers", weather: "🌤 26°C, Aurinkoinen" },
        { date: "Sunnuntai 18.10.2026", time: "23:05", away: "Arizona Cardinals", home: "Los Angeles Rams", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Sunnuntai 18.10.2026", time: "23:25", away: "Los Angeles Chargers", home: "Kansas City Chiefs", weather: "🌤 19°C, Selkeää" },
        { date: "Sunnuntai 18.10.2026", time: "23:25", away: "Buffalo Bills", home: "Las Vegas Raiders", weather: "🏟️ Sisäkenttä (Dome)" },
        { date: "Maanantai 19.10.2026", time: "03:20", away: "Dallas Cowboys", home: "Green Bay Packers", weather: "❄️ 7°C, Viileä" },
        { date: "Tiistai 20.10.2026", time: "03:15", away: "Washington Commanders", home: "San Francisco 49ers", weather: "🌤 18°C, Selkeää" }
    ]
};

const VALID_SCORES = [0, 3, 6, 7, 9, 10, 13, 14, 16, 17, 20, 21, 23, 24, 27, 28, 30, 31, 34, 35, 37, 38, 41, 42, 45];

window.addEventListener('DOMContentLoaded', () => {
    const weekSelect = document.getElementById('weekSelect');
    const matchSelect = document.getElementById('matchSelect');
    const compareBtn = document.getElementById('compareBtn');

    function updateMatches() {
        if (!weekSelect || !matchSelect) return;
        const currentWeek = weekSelect.value || "6";
        matchSelect.innerHTML = '';
        const matches = nflSchedule[currentWeek] || nflSchedule["6"] || [];

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
        const statusStr = p.status ? String(p.status) : "";
        if (statusStr.includes("Active")) return; // Active ei laske tehoja
        const multiplier = statusStr.includes("Out") ? 1.0 : 0.45;
        const pPos = p.pos ? String(p.pos) : "";
        if (pPos.includes("QB")) penalty -= (0.22 * multiplier);
        else if (pPos.includes("RB") || pPos.includes("WR") || pPos.includes("TE")) penalty -= (0.05 * multiplier);
        else penalty -= (0.03 * multiplier);
    });
    return Math.max(0.5, penalty);
}

function calculateWeatherFactor(weatherString) {
    const wStr = weatherString ? String(weatherString) : "";
    if (wStr.includes("Dome") || wStr.includes("Sisäkenttä")) return 1.03;
    if (wStr.includes("Sade") || wStr.includes("Rankkasade") || wStr.includes("Sadetta")) return 0.90;
    if (wStr.includes("Tuulinen")) return 0.94;
    if (wStr.includes("Viileä") || wStr.includes("Kylmä")) return 0.97;
    return 1.0;
}

function getWeatherPositionMultiplier(pos, weatherString) {
    if (!weatherString || !pos) return 1.0;
    const wStr = String(weatherString);
    const pStr = String(pos);
    const isBadWeather = wStr.includes("Sade") || wStr.includes("Rankkasade") || wStr.includes("Sadetta") || wStr.includes("Tuulinen");
    if (isBadWeather) {
        if (pStr.includes("WR") || pStr.includes("TE")) return 0.92;
        if (pStr.includes("RB")) return 1.08;
    }
    return 1.0;
}

function calculateGameLogMomentum(player) {
    if (!player.gameLog || !Array.isArray(player.gameLog) || player.gameLog.length === 0) return 1.0;
    const recentGames = player.gameLog.slice(-2);
    let momentumBoost = 0;
    recentGames.forEach(game => {
        if (typeof game === 'object' && game !== null) {
            const gameStats = game.stats ? String(game.stats) : "";
            if ((game.td && game.td > 0) || gameStats.includes('TD')) {
                momentumBoost += 0.08;
            }
            if (game.yds && game.yds >= 90 && !String(player.pos).includes("QB")) {
                momentumBoost += 0.03; // Bonus vahvasta jaardivireestä
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

// KORJATTU: Huomioi suoraan teamData.games sekä mahdolliset tasapelit (esim. "3-1-1")
function getPlayedGamesCount(teamData) {
    if (!teamData) return 5;
    if (teamData.games && teamData.games > 0) return teamData.games;
    if (!teamData.record) return 5;
    const parts = String(teamData.record).split('-');
    const played = parts.reduce((sum, val) => sum + (parseInt(val) || 0), 0);
    return played > 0 ? played : 5;
}

function getPlayerInjuryStatus(playerName, injuredList) {
    if (!injuredList || !Array.isArray(injuredList)) return "ACTIVE";
    const found = injuredList.find(p => p.name === playerName);
    if (!found || !found.status) return "ACTIVE";
    const st = String(found.status).toUpperCase();
    if (st.includes("OUT")) return "OUT";
    if (st.includes("QUESTIONABLE") || st.includes("DOUBTFUL")) return "QUESTIONABLE";
    return "ACTIVE";
}

function extractTargets(recStr) {
    if (!recStr) return 0;
    const rStr = String(recStr);
    if (rStr.includes('/')) {
        const parts = rStr.split('/');
        const t = parseInt(parts[1]);
        return isNaN(t) ? 0 : t;
    }
    return 0;
}

function extractYAC(yacStr) {
    if (!yacStr) return 0;
    return parseInt(String(yacStr)) || 0;
}

function runMonteCarloSimulation() {
    const selectedWeekElement = document.getElementById('weekSelect');
    const matchIndexElement = document.getElementById('matchSelect');
    if (!selectedWeekElement || !matchIndexElement) return;

    const selectedWeek = selectedWeekElement.value || "6";
    const matchIndex = matchIndexElement.value || 0;
    const match = nflSchedule[selectedWeek]?.[matchIndex] || nflSchedule["6"]?.[0];

    if (!match) return;

    const homeKey = findTeamKey(match.home);
    const awayKey = findTeamKey(match.away);

    const db = typeof nflData !== 'undefined' ? nflData : {};
    const homeData = db[homeKey] || db["Chiefs"];
    const awayData = db[awayKey] || db["Broncos"];

    let homeInjuryPenalty = calculateTeamInjuryFactor(homeData?.injuredPlayers);
    let awayInjuryPenalty = calculateTeamInjuryFactor(awayData?.injuredPlayers);
    let weatherFactor = calculateWeatherFactor(match.weather);

    const homeGames = getPlayedGamesCount(homeData);
    const awayGames = getPlayedGamesCount(awayData);

    const homePassYPG = Math.round((homeData?.pass || 1000) / homeGames);
    const homeRushYPG = Math.round((homeData?.rush || 500) / homeGames);
    const homePassDefYPG = Math.round((homeData?.oppPass || 1000) / homeGames);
    const homeRushDefYPG = Math.round((homeData?.oppRush || 500) / homeGames);

    const awayPassYPG = Math.round((awayData?.pass || 1000) / awayGames);
    const awayRushYPG = Math.round((awayData?.rush || 500) / awayGames);
    const awayPassDefYPG = Math.round((awayData?.oppPass || 1000) / awayGames);
    const awayRushDefYPG = Math.round((awayData?.oppRush || 500) / awayGames);

    // UUSI: Hyödynnetään Red Zone %, 3rd Down % ja Turnovereita tehokkuuskertoimena
    const homeRedZone = (homeData?.redZonePct || 55) / 58;
    const awayRedZone = (awayData?.redZonePct || 55) / 58;
    const homeThirdDown = (homeData?.thirdDownPct || 40) / 40;
    const awayThirdDown = (awayData?.thirdDownPct || 40) / 40;
    
    const homeTurnoverDiff = ((awayData?.turnovers || 5) / awayGames - (homeData?.turnovers || 5) / homeGames) * 0.04;
    const awayTurnoverDiff = -homeTurnoverDiff;

    const homeEfficiency = Math.max(0.85, Math.min(1.18, (homeRedZone * 0.6 + homeThirdDown * 0.4) + homeTurnoverDiff));
    const awayEfficiency = Math.max(0.85, Math.min(1.18, (awayRedZone * 0.6 + awayThirdDown * 0.4) + awayTurnoverDiff));

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

    const homeFieldAdvantage = 0.85;

    const homeLambda = Math.max(4.5, (((homePassYPG * 0.55 + awayPassDefYPG * 0.45) / 180 + (homeRushYPG * 0.55 + awayRushDefYPG * 0.45) / 80) * h2hHomeBoost * homeEfficiency) * homeInjuryPenalty * weatherFactor * 2.1 + homeFieldAdvantage);
    const awayLambda = Math.max(4.2, (((awayPassYPG * 0.55 + homePassDefYPG * 0.45) / 180 + (awayRushYPG * 0.55 + homeRushDefYPG * 0.45) / 80) * h2hAwayBoost * awayEfficiency) * awayInjuryPenalty * weatherFactor * 2.0);

    const SIM_ITERATIONS = 2500;
    let homeWins = 0;
    let homeScoreSum = 0;
    let awayScoreSum = 0;

    for (let i = 0; i < SIM_ITERATIONS; i++) {
        let homeRaw = getRandomPoisson(homeLambda) * 3.5 + (Math.random() * 4 - 2);
        let awayRaw = getRandomPoisson(awayLambda) * 3.5 + (Math.random() * 4 - 2);

        let homeScore = getClosestValidScore(Math.max(0, homeRaw));
        let awayScore = getClosestValidScore(Math.max(0, awayRaw));

        homeScoreSum += homeScore;
        awayScoreSum += awayScore;

        if (homeScore > awayScore) {
            homeWins++;
        } else if (homeScore === awayScore) {
            homeWins += 0.5;
        }
    }

    let avgHomeScore = Math.round(homeScoreSum / SIM_ITERATIONS);
    let avgAwayScore = Math.round(awayScoreSum / SIM_ITERATIONS);
    const homeWinPct = ((homeWins / SIM_ITERATIONS) * 100).toFixed(1);
    const awayWinPct = (100 - parseFloat(homeWinPct)).toFixed(1);

    // Estetään tasapelitulos näytöllä, jos toinen joukkue on selkeä suosikki
    if (avgHomeScore === avgAwayScore && parseFloat(homeWinPct) !== 50.0) {
        if (parseFloat(homeWinPct) > 50.0) avgHomeScore += 1;
        else avgAwayScore += 1;
    }

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
            📊 <strong>Hyökkäys (/peli):</strong> Syöttö ${homePassYPG} yds | Juoksu ${homeRushYPG} yds | Red Zone ${homeData.redZonePct || 55}% | 3rd Down ${homeData.thirdDownPct || 40}%<br>
            🛡️ <strong>Puolustus (sallitut /peli):</strong> Syöttö ${homePassDefYPG} yds | Juoksu ${homeRushDefYPG} yds | Säkit ${homeData.sacks || 0} kpl<br>
            ⚠️ Loukkaantumiset: ${homeData.injuredPlayers?.map(p => `${p.name} (${p.pos} -${p.status || 'Out'})`).join(', ') || 'Ei merkittäviä'}
        `;
    }

    if (document.getElementById('awayTitle')) document.getElementById('awayTitle').textContent = `Vierasjoukkue: ${match.away} (${awayData.record || "0-0"})`;
    if (document.getElementById('awayStats')) {
        document.getElementById('awayStats').innerHTML = `
            📅 Otteluaika: ${match.date} klo ${match.time} (Suomen aika)<br>
            ⛅ Sää: ${match.weather}<br>
            📊 <strong>Hyökkäys (/peli):</strong> Syöttö ${awayPassYPG} yds | Juoksu ${awayRushYPG} yds | Red Zone ${awayData.redZonePct || 55}% | 3rd Down ${awayData.thirdDownPct || 40}%<br>
            🛡️ <strong>Puolustus (sallitut /peli):</strong> Syöttö ${awayPassDefYPG} yds | Juoksu ${awayRushDefYPG} yds | Säkit ${awayData.sacks || 0} kpl<br>
            ⚠️ Loukkaantumiset: ${awayData.injuredPlayers?.map(p => `${p.name} (${p.pos} -${p.status || 'Out'})`).join(', ') || 'Ei merkittäviä'}
        `;
    }

    renderPlayers('homePlayers', homeData, awayData, avgHomeScore, awayPassDefYPG, awayRushDefYPG, match.weather);
    renderPlayers('awayPlayers', awayData, homeData, avgAwayScore, homePassDefYPG, homeRushDefYPG, match.weather);
}

function renderPlayers(containerId, teamData, opponentData, teamOffenseScore, opponentPassDefYPG, opponentRushDefYPG, weatherString) {
    const container = document.getElementById(containerId);
    if (!container || !teamData || !teamData.players) return;

    container.innerHTML = '';

    const teamGames = getPlayedGamesCount(teamData);
    // Skaalauskerroin (4 pelin perusotantaan nähden), jotta kaava ei hajoa kauden edetessä
    const gameScale = 4 / teamGames;

    teamData.players.forEach(player => {
        const injuryStatus = getPlayerInjuryStatus(player.name, teamData.injuredPlayers);
        const isOut = injuryStatus === "OUT";
        const isQuestionable = injuryStatus === "QUESTIONABLE";
        const posStr = player.pos ? String(player.pos) : "";
        const isQB = posStr.includes("QB");
        
        let rawTd = player.td || 0;
        let scaledTd = rawTd * gameScale;
        
        let rawYds = 0;
        const ydsStr = player.yds !== undefined && player.yds !== null ? String(player.yds) : "";
        
        if (ydsStr.includes('/')) {
            const parts = ydsStr.split('/');
            if (isQB) {
                const rushPart = parts.find(p => p && String(p).includes('rush')) || parts[1];
                rawYds = parseInt(rushPart) || 0;
            } else {
                rawYds = parseInt(parts[0]) || 100;
            }
        } else {
            rawYds = parseInt(ydsStr) || 100;
        }

        let scaledYds = rawYds * gameScale;
        let scaledTargets = extractTargets(player.rec) * gameScale;
        let scaledYAC = extractYAC(player.yac) * gameScale;
        
        let positionWeight = 12;
        if (posStr.includes("RB")) positionWeight = 32;
        else if (posStr.includes("WR")) positionWeight = 26;
        else if (posStr.includes("TE")) positionWeight = 20;
        else if (isQB) {
            const isDualThreat = (ydsStr.includes("rush") && scaledYds > 75) || String(player.rec).includes("Dual Threat");
            positionWeight = isDualThreat ? 16 : 2;
        }

        // UUSI: Hyödynnetään vastustajan pelipaikkakohtaista puolustusdataa (defensiveVsPosition)
        let matchMultiplier = 1.0;
        const defVsPos = opponentData?.defensiveVsPosition;
        if (posStr.includes("RB")) {
            const vsRB = defVsPos?.vsRB?.allowedYdsPerGame || opponentRushDefYPG;
            matchMultiplier = (vsRB / 80) * 0.6 + (opponentRushDefYPG / 100) * 0.4;
        } else if (posStr.includes("WR")) {
            const vsWR = defVsPos?.vsWR?.allowedYdsPerGame || opponentPassDefYPG;
            matchMultiplier = (vsWR / 205) * 0.6 + (opponentPassDefYPG / 210) * 0.4;
        } else if (posStr.includes("TE")) {
            const vsTE = defVsPos?.vsTE?.allowedYdsPerGame || 50;
            matchMultiplier = (vsTE / 50) * 0.65 + (opponentPassDefYPG / 210) * 0.35;
        } else if (isQB) {
            matchMultiplier = opponentRushDefYPG / 110;
        }

        let momentumMultiplier = calculateGameLogMomentum(player);
        let weatherPosMultiplier = getWeatherPositionMultiplier(player.pos, weatherString);
        let injuryMultiplier = isQuestionable ? 0.85 : 1.0;

        let targetBonus = scaledTargets > 0 ? (scaledTargets * 0.20) : (isQB ? 0 : scaledYds / 40);
        let yacBonus = scaledYAC > 0 ? (scaledYAC / 60) : 0;
        let rawProductivity = positionWeight + (scaledTd * 6.0) + targetBonus + yacBonus + (isQB ? (scaledYds / 15) : (scaledYds / 50));

        let estimatedTeamTDs = Math.max(1, teamOffenseScore / 7.5);
        let probability = (rawProductivity * matchMultiplier * momentumMultiplier * weatherPosMultiplier * injuryMultiplier * (estimatedTeamTDs / 2.8));
        
        if (isQB) {
            const isDualThreat = (ydsStr.includes("rush") && scaledYds > 75) || String(player.rec).includes("Dual Threat");
            if (!isDualThreat) {
                probability = rawTd > 0 ? (scaledTd * 4.5) : 3.0;
            }
        }

        const tdProbability = isOut ? 0 : Math.min(72, Math.max(2, Math.round(probability)));
        const isHot = momentumMultiplier > 1.0;

        // UUSI: Markkinakerroin vs. Laskennallinen todennäköisyys (Value Bet -laskuri)
        const marketOdds = player.marketOdds ? parseFloat(player.marketOdds) : null;
        const impliedProb = marketOdds ? Math.round((1 / marketOdds) * 100) : null;
        const hasValue = !isOut && impliedProb !== null && (tdProbability - impliedProb >= 4);

        let statsText = player.rec ? `${player.rec} | ${player.yds || ''}` : `${player.pos || ''} | ${player.yds || ''}`;
        if (player.td !== undefined) {
            statsText += ` | TD:t: <strong>${player.td}</strong>`;
        }
        if (marketOdds) {
            statsText += ` | Kerroin: <strong>${marketOdds.toFixed(2)}</strong>`;
        }
        if (isOut) {
            statsText += ` <span style="color: #ff4d4d; font-weight: bold;">(OUT)</span>`;
        } else if (isQuestionable) {
            statsText += ` <span style="color: #f59e0b; font-weight: bold;" title="Pelaaminen epävarmaa (-15% teho)">(Q)</span>`;
        }
        if (isHot && !isOut) {
            statsText += ` <span title="Kuuma vire viime peleissä!" style="cursor: help;">🔥</span>`;
        }
        if (hasValue) {
            statsText += ` <span title="Ylikerroin! Mallin arvio (${tdProbability}%) on korkeampi kuin kertoimen todennäköisyys (${impliedProb}%)" style="color: #10b981; font-weight: bold; cursor: help;">💎 VALUE</span>`;
        }

        const row = document.createElement('div');
        row.className = `player-row${isHot && !isOut ? ' hot' : ''}`;
        row.innerHTML = `
            <div>
                <strong>${player.name}</strong> (${player.pos || ''})
                <span>${statsText}</span>
            </div>
            <div class="odd-badge" style="${isOut ? 'opacity: 0.5;' : ''}">
                <span>Anytime TD</span>
                <strong>${tdProbability}%</strong>
            </div>
        `;
        container.appendChild(row);
    });

    // UUSI: Renderöidään myös joukkueen tähtipuolustajat (Sack-uhka) listan loppuun
    if (teamData.defenders && Array.isArray(teamData.defenders) && teamData.defenders.length > 0) {
        teamData.defenders.forEach(def => {
            const row = document.createElement('div');
            row.className = 'player-row';
            row.style.opacity = '0.9';
            row.innerHTML = `
                <div>
                    <strong>🛡️ ${def.name}</strong>
                    <span>${def.sacks} | ${def.pressures} | ${def.tackles} (TFL: ${def.tacklesForLoss || 0})</span>
                </div>
                <div class="odd-badge">
                    <span>Sack-uhka</span>
                    <strong>${def.probability || '50%'}</strong>
                </div>
            `;
            container.appendChild(row);
        });
    }
}
