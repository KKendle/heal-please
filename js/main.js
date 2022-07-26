const GAME = document.querySelector('#game');

function displayGameTitle() {
    const gameTitle = document.createElement('h1');
    gameTitle.appendChild(document.createTextNode('Heal Please'));
    GAME.append(gameTitle);
}

displayGameTitle();

const player = new Player({id: 1});
const enemy1 = new Enemy({id: 2});
const ally1 = new Ally({id: 3});
let charactersInBattle = [];

charactersInBattle.push(player, enemy1, ally1);

console.log(`Player: ${player.health}, Enemy: ${enemy1.health}, Ally: ${ally1.health}, Characters: ${charactersInBattle[0].type}, ${charactersInBattle[1].type}, ${charactersInBattle[2].type}`);

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

window.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
        player.heal({self: player, target: ally1});
        enemy1.attack({self: enemy1, target: ally1});
        ally1.attack({self: ally1, target: enemy1});
    }
})
