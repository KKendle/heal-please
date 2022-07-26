class Character {
    constructor(config) {
        this.id = `character-${config.id}`;
        this.health = config.health || 10;
        this.attack = config.attack || 1;
        this.heal = config.heal || 0;
        this.level = config.level || 1;
        this.experience = config.experience || 0;
        this.experienceValue = config.experienceValue || 5;
        this.type = config.type || 'enemy';
        this.class = config.class || 'warrior';
    }

    update() {

    }

    attack() {

    }

    heal() {

    }
}
