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

// function removeCharacterInBattle({characters, id}) {
//     let pos = characters.map(function (e) {
//         return e.id;
//     }).indexOf(id);
//     console.log(`Index of ${id}  is ${pos}`);
//     charactersInBattle.splice(pos, 1);
//     console.log(charactersInBattle);
// }

function nextTurn() {
    charactersInBattle.forEach(character => {
        character.checkDead({self: character});
    })
}

window.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
        charactersInBattle.forEach(character => {
            character.takeTurn();
            nextTurn();
        });
    }
})
