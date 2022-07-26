class Ally extends Character {
    constructor(config) {
        super(config);
        this.type = 'ally';
    }

    takeTurn() {
        this.attack({self: this, target: charactersInBattle[1]});
    }
}
