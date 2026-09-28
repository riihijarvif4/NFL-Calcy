// Tietokanta testijoukkueille (näitä voidaan laajentaa myöhemmin kaikkiin joukkueisiin)
const teamsData = {
    "Rams": {
        record: "1-2",
        rushYards: 401,
        passYards: 885,
        players: [
            { name: "Davante Adams (WR)", td: 2, yards: 358 },
            { name: "Williams (RB)", td: 2, yards: 320 },
            { name: "Higbee (TE)", td: 1, yards: 74 },
            { name: "Mumpfield (WR)", td: 1, yards: 105 },
            { name: "Ferguson (TE)", td: 1, yards: 63 }
        ]
    },
    "Bills": {
        record: "3-0",
        rushYards: 465,
        passYards: 786,
        players: [
            { name: "Allen (QB)", td: 6, yards: 114 },
            { name: "Cook (RB)", td: 2, yards: 362 },
            { name: "Moore (WR)", td: 1, yards: 167 },
            { name: "Kincaid (TE)", td: 1, yards: 263 }
        ]
    }
};

// Elementit
const homeSelect = document.getElementById('homeTeam');
const awaySelect = document.getElementById('awayTeam');
const homePlayersDiv = document.getElementById('homePlayers');
const awayPlayersDiv = document.getElementById('awayPlayers');
const homeTitle = document.getElementById('homeTitle');
const awayTitle = document.getElementById('awayTitle');
const calcBtn = document.getElementById('calcBtn');
const resultBox = document.getElementById('resultBox');
const scoreOutput = document.getElementById('scoreOutput');
const tdOutput = document.getElementById('tdOutput');

function loadTeamPlayers(teamName, container, titleElement) {
    titleElement.innerText = `${teamName} (${teamsData[teamName].record})`;
    container.innerHTML = '';
    
    teamsData[teamName].players.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'player-item';
        div.innerHTML = `
            <span>${player.name} (${player.td} TD)</span>
            <label style="font-size: 0.8rem; cursor: pointer;">
                <input type="checkbox" id="${teamName}_out_${index}"> Poissa
            </label>
        `;
        container.appendChild(div);
    });
}

function updateMatchup() {
    const home = homeSelect.value;
    const away = awaySelect.value;
    loadTeamPlayers(home, homePlayersDiv, homeTitle);
    loadTeamPlayers(away, awayPlayersDiv, awayTitle);
}

// Päivitä listat kun valintoja muutetaan
homeSelect.addEventListener('change', updateMatchup);
awaySelect.addEventListener('change', updateMatchup);

// Alusta sivu heti
updateMatchup();

// Laskentanappi
calcBtn.addEventListener('click', () => {
    const home = homeSelect.value;
    const away = awaySelect.value;
    
    let homeScore = 20;
    let awayScore = 24;
    
    // Tarkistetaan poissaolot yksinkertaisesti
    let homeMissingTDs = 0;
    teamsData[home].players.forEach((p, i) => {
        const checkbox = document.getElementById(`${home}_out_${i}`);
        if (checkbox && checkbox.checked) {
            homeMissingTDs += p.td;
        }
    });

    let awayMissingTDs = 0;
    teamsData[away].players.forEach((p, i) => {
        const checkbox = document.getElementById(`${away}_out_${i}`);
        if (checkbox && checkbox.checked) {
            awayMissingTDs += p.td;
        }
    });

    // Pieni laskenta-arvio poissaolojen perusteella
    homeScore -= (homeMissingTDs * 3);
    awayScore -= (awayMissingTDs * 3);
    if(homeScore < 3) homeScore = 3;
    if(awayScore < 3) awayScore = 3;

    resultBox.style.display = 'block';
    scoreOutput.innerHTML = `<strong>Arvioitu lopputulos:</strong> ${home} ${homeScore} - ${away} ${awayScore}`;
    tdOutput.innerHTML = `<em>Huomioitu poissaolot: ${home} puuttuu ${homeMissingTDs} TD:n tehot, ${away} puuttuu ${awayMissingTDs} TD:n tehot.</em>`;
});
