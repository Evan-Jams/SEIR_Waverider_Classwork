// console.log('hi');
//========================== SpaceShip Class ================================//


class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
}
    takeDamage(target){
        target.hull -= this.firepower;
        if (target.hull <= 0) {
        console.log(target.name, 'has no more hull remaining.');
        console.log(target.name, 'is destroyed!');
    } else if (target.hull > 0) {
            target.attack(this.name)
            // this.hull -= enemy.firepower;
            console.log(this.name, 'is down to', this.hull, 'remaining.');
        }

    }
    attack(target) {
    if (Math.random() < this.accuracy) {
        console.log(target.name, `has been hit!`);
        this.takeDamage(target);
    } else {
        console.log(`Oh no! You missed`);
        target.this.attack(this)
        }
    }
    // takeDamage(enemy){
    //     enemy.hull -= this.firepower;
    //     console.log(enemy.name, 'is down to', enemy.hull, 'remaining.');
    //     if (enemy.hull > 0) {
    //         enemy.this.attack(this.name)
    //     }
    // }
    // takeDamage(target) {
    //         target.hull -= this.firepower;
    //         if (target.hull <= 0) {
    //         console.log(target.name, 'has no more hull remaining.');
    //         console.log(target.name, 'is destroyed! Nice work!');
    //     } else if (target.hull > 0) {
    //             this.attack(this.name)
    //             this.hull -= target.firepower;
    //             console.log(this.name, 'is down to', this.hull, 'remaining.');
    //         }
    //
    //     }
    retreat() {
        console.log('I didn\'t know you were afraid to die for your planet!');
    }
}




//========================== Make USS Schwarzenegger ==========================//

const ussSchwarzenegger = new SpaceShip('USS Schwarzenegger', 20, 5, .7)
// console.log(ussSchwarzenegger);

// ussSchwarzenegger.attack()
//


//=========================== Make Alien ships ================================//

class Enemy extends SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
            this.name = name;
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
    }
}

//=========================== Alien ship factory ==============================//
class AlienFactory {
    constructor(ship) {
        this.ship = ship;
        this.fleet = [];
        this.hull = [3, 4, 5, 6];
        this.firepower = [2, 3, 4];
        this.accuracy = [.6, .7, .8];
    }
    randomInt(array) {
        return Math.floor(Math.random() * array.length);
    }
    generateEnemy() {
        const newAlienShip = new Enemy(this.ship + this.fleet.length, this.hull[this.randomInt(this.hull)], this.firepower[this.randomInt(this.firepower)], this.accuracy[this.randomInt(this.accuracy)])
        this.fleet.push(newAlienShip);
        // console.log(newAlienShip);
    }
}


//============================== Action functions (outer functions attempt) =============================//

// const attack = (enemy) => {
//     if (Math.random() < ussSchwarzenegger.accuracy) {
//         console.log(enemy.name, `has been hit!`);
//         takeDamage(enemy);
//     } else {
//         console.log(`Oh no! You missed`);
//         attack(ussSchwarzenegger)
//         takeDamage(ussSchwarzenegger)
//     }
//     }
//
// const takeDamage = (enemy) => {
//         enemy.hull -= ussSchwarzenegger.firepower;
//         if (enemy.hull <= 0) {
//         console.log(enemy.name, 'has no more hull remaining.');
//         console.log(enemy.name, 'is destroyed! Nice work!');
//         } else if (enemy.hull > 0) {
//             attack(ussSchwarzenegger)
//             this.hull -= enemy.firepower;
//             console.log(this.name, 'is down to', this.hull, 'remaining.');
//         }
//
//     }








const alien = new AlienFactory('Alien')
for (let i = 0; i < 6; i++) {
alien.generateEnemy();
}
// console.log(AlienFactory.aliens);
// console.log(alien.aliens)

// ussSchwarzenegger.attack(alien.aliens[0])

//Make intro and choices

const welcomeStatement = () => {
     alert('Welcome to Space Battle, warrior! Guide us to Victory!')
}

const showStatus = () => {
     alert(`Your ship is the ${ussSchwarzenegger.name}, your hull is ${ussSchwarzenegger.hull}. Don\'t let us down!`)

}

const askForAction = () => {
     let choice = prompt('(1) Engage in battle')
     // let choice2 = prompt('(1) Attack Enemy ship / (2) Retreat like a wimp')
     console.log(choice);
     if (!choice) {
         alert('Sorry, that is not a valid option')
         // askForAction()
     } else if (choice === '1') {
         ussSchwarzenegger.attack(alien.fleet[0]);
     } else if (choice === '2') {
         ussSchwarzenegger.retreat();
     }
}

const start = () => {
     welcomeStatement()
     showStatus()
     askForAction()
}

// console.log(alien.randomInt(alien.firepower));
start()


//
