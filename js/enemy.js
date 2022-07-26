class Enemy extends Character {
    constructor(config) {
        super(config);
    }

    takeTurn() {
        this.checkDead();
        this.attack({self: this, target: ally1});
        this.checkDead();
    }
}
