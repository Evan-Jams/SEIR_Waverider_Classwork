class Pet {
  constructor(owner, name) {
    this.owner = owner;
    this.name = name;
  }
  walk() {
    console.log('walka walka');
  }
}

const newPet = new Pet('evan', 'dill')
console.log(newPet);
newPet.walk()

class Dog extends Pet {
  constructor(owner, name) {
    super(owner, name);
      this.price = 20;
  }
  bark() {
    console.log('Bark!');
  }
  chaseTail() {
    console.log('Oh boy Oh boy Oh boy');
  }
  getPrice() {
    return this.price
  }
}

const newDog = new Dog('evan', 'Snoop',)
console.log(newDog);
newDog.bark()
newDog.chaseTail()
console.log(newDog.getPrice());
