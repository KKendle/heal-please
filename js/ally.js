class Ally extends Character {
    constructor(config) {
        super(config);
        this.type = 'ally';
    }

    takeTurn() {
        this.checkDead();
        this.attack({self: this, target: enemy1});
        this.checkDead();
    }
}
