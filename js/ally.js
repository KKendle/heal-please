class Ally extends Character {
    constructor(config) {
        super(config);
        this.type = 'ally';
    }

    takeTurn() {
        /* find enemy allies */
        const potentialTargets = [];
        const enemyAllies = document.querySelectorAll('.enemy');

        /* add enemy allies to array of potential targets to attack */
        enemyAllies.forEach(enemyAlly => {
            potentialTargets.push(enemyAlly);
        })

        // choose a random target to attack
        const attackTargetPosition = Math.floor(Math.random() * potentialTargets.length);
        const attackTarget = targetCharacter({target: potentialTargets[attackTargetPosition]});

        // attack
        this.attack({self: this, target: charactersInBattle[attackTarget]});
    }
}
