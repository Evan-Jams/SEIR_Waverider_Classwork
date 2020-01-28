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
// console.log(adventurer.belongings[0]);

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i])
// }

// console.log(adventurer.companion.hitpoints);
