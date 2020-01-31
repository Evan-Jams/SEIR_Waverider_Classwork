// console.log('hi');

class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
}
    attack(enemy) {
    if (Math.random() < enemy.accuracy) {
        console.log(`${enemy} has been hit!`);
        enemy.takeDamage()
    } else {
        console.log(`Oh no! You missed`);
        }
    }
    takeDamage(){
        this.hull -= enemy.firepower;
        console.log(this.name, 'is down to', this.hull, 'remaining.');
    }
    retreat() {
        console.log('I didn\'t know you were afraid to die for your planet!');
    }
}
// Make USS Schwarzenegger
const ussSchwarzenegger = new SpaceShip('USS Schwarzenegger', 20, 5, .7)
console.log(ussSchwarzenegger);

// ussSchwarzenegger.attack()
//
// Make Alien ships
class Enemy extends SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        super(name, hull, firepower, accuracy)
            this.name = name;
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
    }
}


class AlienFactory {
    constructor(ship) {
        this.ship = ship;
        this.aliens = [];
        this.hull = [3, 4, 5, 6];
        this.firepower = [2, 3, 4];
        this.accuracy = [.6, .7, .8];
    }
    randomInt(array) {
        return Math.floor(Math.random() * array.length);
    }
    generateEnemy() {
        const newAlienShip = new Enemy(this.ship + this.aliens.length, this.hull[this.randomInt(this.hull)], this.firepower[this.randomInt(this.firepower)], this.accuracy[this.randomInt(this.accuracy)])
        this.aliens.push(newAlienShip);
        console.log(newAlienShip);
    }
}


const alien = new AlienFactory('Alien')
for (let i = 0; i < 6; i++) {
alien.generateEnemy();
}

Make a ship class

const welcomeStatement = () => {
     alert('Welcome to Space Battle warrior! Guide us to Victory!')
}

const showStatus = () => {
     alert(`Your ship is the ${ussSchwarzenegger.name}`)
}

const askForAction = () => {
     let choice = prompt('(1) Attack Enemy ship / (2) Retreat')
     console.log(choice);
     if (!choice) {
         alert('Sorry, that is not a valid option, try again')
         askForAction()
     } else if (choice === '1') {
         ussSchwarzenegger.attack();
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
// start()
