const adventurer = {
  name: 'Evan',
  type: 'ranger',
  hitpoints: 99,
  attack: () => {
    console.log('Equipped bow');
    return('You shot an arrow!');
  },
  belongings: ['bow', 'potion', 'money'],
  companion: {
    name: 'Alexis',
    type: 'warrior',
    hitpoints: 150,
    companion: {
      name: 'Billy',
      type: 'tick',
      hitpoints: 5,
      belongings: ['teeth', 'probably lyme disease', 'no remorse']
    }
  }
}

console.log(adventurer.attack())
console.log(adventurer.belongings[0]);

for (let i = 0; i < adventurer.belongings.length; i++) {
  console.log(adventurer.belongings[i])
}

console.log(adventurer.companion.hitpoints);


//=================== Continuation January 30th ===========================//






//==========================================================================//
//==========================================================================//
//                          AFTERNOON - January 29th


// const foo = [
//   ['0,0', '0,1', '0,2'],
//   ['1,0', '1,1', '1,2'],
//   ['2,0', '2,1', '2,2'],
// ]

// for (let row of foo) {
//   //first time through, row = 1st array element, second time = 2nd element, etc.
//   for (let element of row) {
    //first time through, element = the elements of the first row, 2nd row, etc.
    // console.log(element);
  }
}

// const summonBird = () => {
//   return {
//     color: 'blue'
//   }
// }

// console.log(summonBird().color);
// console.log(summonBird.color);
