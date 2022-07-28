const GAME = document.querySelector('#game');
let charactersInBattle = [];

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
        console.log(`${character.type}, ${character.health}`);
        character.display();
    })
}

function setupBattle() {
    getBattleCharacters();
}

setupBattle();

function nextTurn() {
    charactersInBattle.forEach(character => {
        character.checkDead({self: character});
    })
}

function targetCharacter({target}) {
    let pos = charactersInBattle.map(function (character) {
        return character.id;
    }).indexOf(target.id);

    return pos;
}

document.addEventListener('click', (event) => {
    console.log('clicked');
    const healButton = event.target.closest('button');
    const character = event.target.closest('.character');

    if (healButton) {
        console.log('clicked heal button');
        const healthbar = healButton.previousSibling;
        const health = healthbar.querySelector('.health');
        console.log(health.textContent);
        console.log(character);

        const characterPosition = targetCharacter({target: character});
        console.log(characterPosition);
        const player = charactersInBattle[0];
        console.log(player);
        player.takeTurn({self: player, target: charactersInBattle[characterPosition]});
    }
    // if (event.code === 'Space') {
    //     charactersInBattle.forEach(character => {
    //         character.takeTurn();
    //         nextTurn();
    //     });
    // }
})
