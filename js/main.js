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
    })
}

function setupBattle() {
    getBattleCharacters();
}

setupBattle();

function displayHealthbar() {
    charactersInBattle.forEach(character => {
        const healthbar = document.createElement('div');
        healthbar.id = `${character.id}-healthbar-${character.type}`;
        healthbar.classList.add('healthbar');
        healthbar.classList.add('ui');
        healthbar.dataset.type = character.type;
        healthbar.appendChild(document.createTextNode(`${character.type} health: `));

        const health = document.createElement('span');
        health.classList.add('health');
        health.appendChild(document.createTextNode(character.health));
        healthbar.appendChild(health);

        GAME.append(healthbar);
    });
}

displayHealthbar();

function removeHealthbar(character) {
    console.log('removing healthbar');

    document.querySelector(`#${character.id}-healthbar-${character.type}`).remove();
}

function removeCharacterInBattle({characters, id}) {
    let pos = characters.map(function (e) {
      return e.id;
    }).indexOf(id);
    console.log(`Index of ${id}  is ${pos}`);
    charactersInBattle.splice(pos, 1);
    console.log(charactersInBattle);
  }

function nextTurn() {
    charactersInBattle.forEach(character => {
        character.checkDead({self: character});

        if (character.isDead) {
            removeHealthbar(character);
            console.log(charactersInBattle);
            removeCharacterInBattle({characters: charactersInBattle, id: character.id})
        }
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
