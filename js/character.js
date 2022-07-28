class Character {
    constructor(config) {
        this.id = `character-${config.id}`;
        this.health = config.health || 10;
        this.attackPower = config.attack || 1;
        this.healPower = config.heal || 0;
        this.level = config.level || 1;
        this.experience = config.experience || 0;
        this.experienceValue = config.experienceValue || 5;
        this.type = config.type || 'enemy';
        this.class = config.class || 'warrior';
        this.isDead = false;
    }

    update() {

    }

    attack({self, target}) {
        target.health -= self.attackPower;

        let targetHealth = document.querySelector(`#${target.id}-healthbar-${target.type} .health`);
        targetHealth.textContent = parseInt(targetHealth.textContent) - self.attackPower;
    }

    heal({self, target}) {
        target.health += self.healPower;

        let targetHealth = document.querySelector(`#${target.id}-healthbar-${target.type} .health`);
        targetHealth.textContent = parseInt(targetHealth.textContent) + self.healPower;
    }

    checkDead({self}) {
        if (this.health <= 0) {
            self.isDead = true;
            this.removeCharacter();
        }
    }

    display() {
        this.displayCharacter();
        this.displayHealthbar();
        this.displayButtonHeal();
    }

    displayCharacter() {
        const character = document.createElement('div');
        character.id = `${this.id}`;
        character.classList.add('character');
        character.classList.add(this.type);
        character.classList.add(this.class);

        const characterImage = document.createElement('div');
        characterImage.classList.add('character-image')
        character.appendChild(characterImage);

        GAME.append(character);
    }

    displayHealthbar() {
        const healthbar = document.createElement('div');
        healthbar.id = `${this.id}-healthbar-${this.type}`;
        healthbar.classList.add('healthbar');
        healthbar.classList.add('ui');
        healthbar.dataset.type = this.type;
        healthbar.appendChild(document.createTextNode(`${this.type} health: `));

        const health = document.createElement('span');
        health.classList.add('health');
        health.appendChild(document.createTextNode(this.health));
        healthbar.appendChild(health);

        const character = document.querySelector(`#${this.id}`);
        character.append(healthbar);
    }

    removeCharacter() {
        const position = targetCharacter({target: this});
        const character = document.querySelector(`#${this.id}`);

        character.remove();

        charactersInBattle.splice(position, 1);

    }

    displayButtonHeal() {
        const buttonHeal = document.createElement('button');
        buttonHeal.type = 'button';
        buttonHeal.classList.add('btn');
        buttonHeal.classList.add('heal');
        buttonHeal.appendChild(document.createTextNode('Heal'));

        const character = document.querySelector(`#${this.id}`);
        character.appendChild(buttonHeal);
    }
}
