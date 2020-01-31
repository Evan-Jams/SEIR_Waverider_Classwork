// const obj = {}
// obj.legs = 2
// console.log(obj);
//
// class Character {
//   constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name
//     this.age = age
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//   }
//   greet (otherCharacter) {
//     console.log(`hi! ${otherCharacter}`);
//   }
//   smite () {
//     console.log('I smite thee you vile person!');
//   }
// }
//
// const me = new Character('Evan', 24, 'brown', 'brown', true, true)
// // const you = new Character()
//
// me.greet('Evan')
// // you.greet('Dill')
// me.smite()
//
// console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);


// class Golfer {
//   constructor (name, age, handicap, longDrive) {
//     this.name = name;
//     this.age = age;
//     this.handicap = handicap;
//     this.longDrive = longDrive;
//   }
// }
//
// const me = new Golfer('Evan', 24, 0, '300 yards')
// const oldMan = new Golfer('Dennis', 102, 40, '100 yards')
//
// console.log(me);
// console.log(oldMan);


class Animal {
  constructor (name) {
    this.name = name;
  }
  walk () {
    console.log('I am walking');
  }
}

class Dog extends Animal {
  constructor (name){
    super(name)
    this.legs = 4;
  }
  playFetch () {
    console.log('throw me the ball again');
  }
}

class FlyingDog extends Dog {
  fly(){
    console.log('flying');
  }
}

class GermanShepard extends Dog {
  beLoyal() {
    console.log('I know you love cats, but I am a cool dog');
  }
}
