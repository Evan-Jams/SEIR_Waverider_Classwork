// console.log('hi');

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapon = {
      sprinkleSpray: 5,
      sugarShock: 10
    };
    this.catchPhrases = ['i\'m fresher than a day old pizza', 'you can\'t count my calories'];
  }
  talkSass() {
    // console.log(this.catchPhrases[0]);
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight() {
    console.log('i\'m ready to rumble');
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
