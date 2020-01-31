class Hamster {
  constructor(owner, name){
    this.owner = owner;
    this.name = name;
    this.price = 15;
  }
  wheelRun(){
    console.log("squeak squeak");
  }
  eatFood(){
    console.log("nibble nibble");
  }
  getPrice(){
    return this.price
  }
}

class Person {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
  getWeight(){
    return this.weight;
  }
  greet(){
    console.log(`Hi, my name is ${name}`);
  }
  eat(){
    this.weight++;
    this.mood++;
  }
  exercise(){
    this.weight--;
  }
  ageUp(){
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(ham){
    // const newHamster = new Hamster(this.name, name);
    this.hamsters.push(ham);
    this.mood += 10;
    this.bankAccount -= ham.getPrice();

  }
}

// const evan = new Person('Evan');
//
// console.log(evan);


const timmy = new Person('Timmy');
while (timmy.age < 5) {timmy.ageUp()}
// console.log(timmy);

for (let i = 0; i < 5; i++){
  timmy.eat()
}
// console.log(timmy);

for (let i = 0; i < 5; i++){
  timmy.exercise()
}
// console.log(timmy);

for (let i = 0; i < 9; i++){
  timmy.ageUp()
}
// console.log(timmy);

const gus = new Hamster('Timmy', 'Gus')

timmy.buyHamster(gus);
// console.log(timmy);

for (let i = 0; i < 15; i++){
  if (i < 2){
    timmy.eat()
    timmy.exercise()
  }
  timmy.ageUp()
}
console.log(timmy.hamsters);
