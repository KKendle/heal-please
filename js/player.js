class Player extends Character {
    constructor(config) {
        super(config);
        this.attackPower = 0;
        this.healPower = 2;
        this.type = 'player';
        this.class = 'healer';
    }

    takeTurn({self, target}) {
        this.heal({self: self, target: target});
    }
}
