class Enemy extends Character {
    constructor(config) {
        super(config);
    }

    takeTurn() {
        /* find player and player allies */
        const potentialTargets = [];
        const player = document.querySelector('.player');
        const playerAllies = document.querySelectorAll('.ally');

        /* add player and allies to array of potential targets to attack */
        potentialTargets.push(player);
        playerAllies.forEach(playerAlly => {
            potentialTargets.push(playerAlly);
        });

        // choose a random target to attack
        const attackTargetPosition = Math.floor(Math.random() * potentialTargets.length);
        const attackTarget = targetCharacter({target: potentialTargets[attackTargetPosition]});

        // attack
        this.attack({self: this, target: charactersInBattle[attackTarget]});
    }

    awardXp() {
        console.log('awarding enemy xp');

        charactersInBattle.forEach(character => {
            if (character.type !== 'enemy') {
                console.log('current xp before:', character.currentXp);
                console.log('xp to be awarded', this.experienceValue);

                // update character stats
                character.currentXp += this.experienceValue;

                // update UI
                let characterXp = document.querySelector(`#${character.id} .current-xp`);
                characterXp.textContent = parseInt(characterXp.textContent) + this.experienceValue;

                console.log('current xp after', character.currentXp);
            }
        });
    }
}
