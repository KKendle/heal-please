const GAME = document.querySelector('#game');

function displayGameTitle() {
    const gameTitle = document.createElement('h1');
    gameTitle.appendChild(document.createTextNode('Heal Please'));
    GAME.append(gameTitle);
}

window.addEventListener('keypress', function(event) {
    if (event.code === 'Space') {

    }
})

displayGameTitle();
const player = new Player({id: 1});
const enemy1 = new Enemy({id: 2});
const ally1 = new Ally({id: 3});
let charactersInBattle = [];

charactersInBattle.push(player, enemy1, ally1);

console.log(`Player: ${player.health}, Enemy: ${enemy1.health}, Ally: ${ally1.health}, Characters: ${charactersInBattle[0].type}, ${charactersInBattle[1].type}, ${charactersInBattle[2].type}`);

function displayHealth() {
    charactersInBattle.forEach(character => {
        const healthBar = document.createElement('div');
        healthBar.id = `${character.id}-${character.type}`;
        healthBar.classList.add('healthbar');
        healthBar.dataset.type = character.type;
        healthBar.appendChild(document.createTextNode(`${character.type} health: ${character.health}`));
        GAME.append(healthBar);
    });
}

displayHealth();
