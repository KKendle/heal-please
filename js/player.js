class Player extends Character {
    constructor(config) {
        super(config);
        this.type = 'player';
        this.class = 'healer';
        this.heal = 2;
    }
}
