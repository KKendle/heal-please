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
        console.log('attacking');
        console.log(self);
        console.log(target);

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
            console.log('dead', this);
        }
    }

    display() {
        this.displayCharacter();
        this.displayHealthbar();
    }

    displayCharacter() {
        console.log('display character');
    }

    displayHealthbar() {
        console.log('display healthbar');

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

        GAME.append(healthbar);
    }
}
