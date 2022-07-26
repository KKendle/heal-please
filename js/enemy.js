class Enemy extends Character {
    constructor(config) {
        super(config);
    }

    takeTurn() {
        this.attack({self: this, target: charactersInBattle[2]});
    }
}
