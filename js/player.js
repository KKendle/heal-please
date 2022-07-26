class Player extends Character {
    constructor(config) {
        super(config);
        this.attackPower = 0;
        this.healPower = 2;
        this.type = 'player';
        this.class = 'healer';
    }
}
