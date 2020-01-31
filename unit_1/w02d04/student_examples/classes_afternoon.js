// class Character {
//   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || true;
//   }
//   greet (otherCharacter) {
//     console.log('hi ' + otherCharacter + '!');
//   }
//   classyGreeting (otherClassyCharacter) {
//     console.log('Howdy ' + otherClassyCharacter.name + '!');
//   }
//   setHair (hairColor) {
//     this.hair = hairColor;
//   }
//   smite () {
//     console.log('i smited thee.');
//   }
// }
//
// class Hobbit extends Character {
//   constructor(name, age, eyes, hair){
//     // when inheriting from parent class, must call super to add a property (like skills below)
//     super(name, age, eyes, hair);
//     this.skills = ['theivery', 'speed', 'willpower'];
//   }
//   steal () {
//     console.log('Lets get away');
//   }
//   greet (otherCharacter){
//     console.log(`hello ${otherCharacter}`);
//   }
// }
//
//
// const frodo = new Hobbit ('Frodo', 30, 'brown', 'black')
// console.log(frodo);
// frodo.smite();
// frodo.steal();
// frodo.greet('Evan')
//
//
// class Elf extends Character {
//   constructor(name, age, eyes, hair){
//     super(name, age, eyes, hair);
//     this.skills = ['agility', 'accuracy', 'intelligence'];
//   }
//   attack () {
//     console.log('Takes out bow: Fires several arrows');
//   }
//   mission () {
//     console.log('I will protect Frodo until my death');
//   }
// }
//
// const legolas = new Elf ('Legolas', 'unknown', 'blue', 'golden')
// console.log(legolas);
// legolas.attack();
// legolas.mission();


//============== Factories =================//

class Car {
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber;
    this.maker = maker;
  }
  drive() {
    console.log('vroom');
  }
}

class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }
  generateCar() {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar(index) {
    return this.cars[index];
  }
  destroyCar() {
    this.cars.pop()
  }
}

const tesla = new Factory('Tesla');

tesla.generateCar();
console.log(tesla);

tesla.generateCar();
console.log(tesla);

tesla.generateCar();
console.log(tesla);

console.log(tesla.findCar(1));
tesla.destroyCar()
console.log(tesla);
