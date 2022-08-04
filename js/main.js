const GAME = document.querySelector('#game');
const charactersInBattle = [];
let battleOver = false;

function displayGameTitle() {
    const gameTitle = document.createElement('h1');

    gameTitle.appendChild(document.createTextNode('Heal Please'));
    GAME.append(gameTitle);
}

displayGameTitle();

function getBattleCharacters() {
    const player = new Player({id: 1});
    const enemy1 = new Enemy({id: 2});
    const ally1 = new Ally({id: 3});

    charactersInBattle.push(player, enemy1, ally1);

    charactersInBattle.forEach(character => {
        character.display();
    });
}

function setupBattle() {
    getBattleCharacters();
}

setupBattle();

function nextTurn() {
    charactersInBattle.forEach(character => {
        character.checkDead({self: character});
    });

    const enemiesAlive = document.querySelectorAll('.enemy');
    const playerAlive = document.querySelector('.player');

    if (!enemiesAlive.length) {
        console.log('no more enemies');
        battleOver = true;
        playerWin();
    }

    if (!playerAlive) {
        console.log('player dead');
        battleOver = true;
        playerLose();
    }
}

function targetCharacter({target}) {
    let position = charactersInBattle.map(function (character) {
        return character.id;
    }).indexOf(target.id);

    return position;
}

function playerWin() {
    console.log('you win');
}

function playerLose() {
    console.log('you lose');
}

document.addEventListener('click', (event) => {
    const healButton = event.target.closest('button');
    const character = event.target.closest('.character');

    if (healButton) {
        const characterPosition = targetCharacter({target: character});
        const player = charactersInBattle[0];

        charactersInBattle.forEach(character => {
            if (!battleOver) {
                if (character === player) {
                    player.takeTurn({self: player, target: charactersInBattle[characterPosition]});
                } else {
                    character.takeTurn();
                    nextTurn();
                }
            }
        })
    }
})
