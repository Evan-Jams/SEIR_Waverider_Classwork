// Make a Spaceship class for framework of my USS Schwarzenegger and Enemy factory
class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
}
    attack(enemy){
        // if random value is less than accuracy, then attack first alien, alien.fleet[0]
        if (Math.random() < this.accuracy) {

            console.log(enemy.name, 'has been hit!');
            // enemy.hull -= this.firepower;
            enemy.takeDamage();

            // else, log that you missed
            // then call the enemy to retaliate
        } else {
            console.log('Oh no! You missed!');
            enemy.attack();
        }

    }
    takeDamage(enemy) {
        // If alien ship survives or if missed attack, subtract alien's firepower from hull
        this.hull -= enemy.firepower
        if (this.hull > 0) {
            console.log('You have been hit by', enemy.name, '! It has done', enemy.firepower, 'damage. You have', this.hull, 'hull left.');
            this.attack(enemy)
        }
        // If hull remains > 0, attack again.
        // If hull reaches 0, alert loss of game.
    }
    retreat() {
        alert ('Afraid to die for your planet huh?');
    }
}

// Making an Enemy Factory
class Enemy {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack() {
        // if random number is less than this accuracy, hit ussSchwarzenegger
        if (Math.random() < this.accuracy) {
            ussSchwarzenegger.takeDamage(this)

        } else {
            console.log('Alien ship has missed his attack');
            ussSchwarzenegger.attack(this)
        }
        // else log that alien missed
    }
    takeDamage() {
        // subtract ussSchwarzenegger's firepower from hull
        this.hull -= ussSchwarzenegger.firepower
        // if hull is <= 0 alert destroyed, good job
        if (this.hull <= 0) {
            console.log('Alien ship destroyed. Nice work!');
        } else {
            console.log('Alien has', this.hull, 'hull left');
            this.attack(ussSchwarzenegger);
        }
        // If hull is > 0 after first attack from ussSchwarzenegger, attack
    }

}


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
        const newAlienShip = new Enemy(this.ship + ' ' + this.fleet.length, this.hull[this.randomInt(this.hull)], this.firepower[this.randomInt(this.firepower)], this.accuracy[this.randomInt(this.accuracy)])
        this.fleet.push(newAlienShip);
    }
}


//==================== USS Schwarzenegger & Alien Fleet =========================//

const ussSchwarzenegger = new SpaceShip('USS Schwarzenegger', 20, 5, .7)
// console.log(ussSchwarzenegger);


const alien = new AlienFactory('Alien')
for (let i = 0; i < 6; i++) {
alien.generateEnemy();
}

// ussSchwarzenegger.attack(alien.fleet[0]);

//======================================================================================//
//===================== Alerts, prompts, and choices ===================================//
//======================================================================================//

const welcomeStatement = () => {
    alert('Welcome to Space Battle! Guide us to Victory!')
}

const showStatus = () => {
    alert(`Your ship is the ${ussSchwarzenegger.name}, your hull is ${ussSchwarzenegger.hull}. Don\'t let us down!`)

}

let i = 0;

const askToContinue = () => {
    if (i >= 5) {
        alert('Congrats')
        // endGame();
    } else {
    let choice2 = prompt('(1) Attack Next Enemy ship / (2) Retreat like a wimp');
    if (choice2 === null) {
        alert('Sorry to see you go, thank you for your service!')
        return('Player has left')
    } else if (choice2 === '1' && i < 5) {
        i += 1;
        ussSchwarzenegger.attack(alien.fleet[i]);
        askToContinue();
    } else if (choice2 === '2') {
        ussSchwarzenegger.retreat();
    }
    // else if (i >= 5){
    //     alert('Congrats')
    // }
}
}

const askForAction = () => {
    let choice = prompt('(1) Engage in battle')

    // let choice2 = prompt('(1) Attack Enemy ship / (2) Retreat like a wimp')
    console.log(choice);
    if (choice === null) {
        alert('Sorry to see you go');
    } else if (!choice) {
        alert('Sorry, that is not an option. Try that again');
        askForAction();
    } else if (choice === '1') {
        ussSchwarzenegger.attack(alien.fleet[i]);
        askToContinue();
    }
}
const start = () => {
     welcomeStatement()
     showStatus()
     askForAction()
}

start()

// const endGame = () => {
//     alert('Go get yourself a victory drink! (age allowing)')
// }
