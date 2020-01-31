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
    return this.name
  }
  getAge(){
    return this.age
  }
  getWeight(){
    return this.weight
  }
  greet(){
    console.log(`Hi, my name is ${name}`);
  }
  eat(){
    this.weight++
    this.mood++
  }
  exercise(){
    this.weight--
  }
  ageUp(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount + 10
  }
  buyHamster(){
    const newHamster = new Hamster(this.name, 'ham' + this.hamsters.length)
    this.hamsters.push(newHamster);
    this.mood += 10
    this.bankAccount -= newHamster.getPrice()

  }
}

const evan = new Person('Evan');

console.log(evan);
