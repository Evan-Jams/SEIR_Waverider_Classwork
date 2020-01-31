// console.log('hi');

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ['i\'m fresher than a day old pizza', 'you can\'t count my calories'];
  }
  randomInt(array) {
      return Math.floor(Math.random() * array.length);
  }
  talkSass() {
    // console.log(this.catchPhrases[0]);
      console.log(this.catchPhrases[this.randomInt(this.catchPhrases)]);
  }
  announceHealth() {
      console.log(this.health);
  }
  fight() {
      console.log('i\'m ready to rumble');
      // create array of weapons
      const weaponOptions = Object.keys(this.weapons);
      //select random weapon
      const selectWeapon = weaponOptions[this.randomInt(weaponOptions)];
      console.log(selectWeapon, this.weapons[selectWeapon]);
  }
}

const dougie = new Hero('Dougie the Donut');

// dougie.talkSass()


class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    };
    this.catchPhrases = ['i\'m youtube famous', 'i\'m more dangerous that an uncovered sewer'];
  }
  talkSmack() {
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
  }
}

const pizzaRat = new Enemy('Pizza Rat');

// dougie.talkSass()
// pizzaRat.talkSmack()
// dougie.announceHealth()
// pizzaRat.announceHealth()


// dougie.fight() = () => {
//   console.log(Object.keys(this.weapons)[Math.floor(Math.random()*Object.keys(this.weapons).length)]);
// }
//
// dougie.fight()

 // console.log(Object.keys(this.weapons)[Math.floor(Math.random()*Object.keys(this.weapons).length)]) = dougie.fight()

// let newFight = () => {
//   return(Object.keys(this.weapons)[Math.floor(Math.random()*Object.keys(this.weapons).length)])
// }
//
// newFight = dougie.fight()
// newFight = pizzaRat.fight()
// dougie.newFight()
// pizzaRat.newFight()

//=================================================
// Couldn't Figure out how to make them fight. I couldn't figure out how to upgrade their fight methods. Spent a few hours researching and still no luck.
//=================================================
dougie.fight()
