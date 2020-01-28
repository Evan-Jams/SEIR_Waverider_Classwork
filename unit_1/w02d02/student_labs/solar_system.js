const milkyWay = {
  type: 'barred spiral',
  age: 13600000000,
  containsEarth: false
}

// console.log(milkyWay.containsEarth);

milkyWay.containsEarth = true
// console.log(milkyWay.containsEarth);

milkyWay['number of stars'] = '100-400 billion'
// console.log(milkyWay['number of stars']);

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// console.log(solarSystem[0].ringSystem);

// console.log(solarSystem[7].moons[1]);

solarSystem[1].moons[0] = 'Endor'
// console.log(solarSystem[1].moons[0]);

solarSystem.push({name: 'Pluto', ringSystem: false, moons: ['Charon']})
// console.log(solarSystem);

solarSystem[2].diameter = '9000 miles'
// console.log(solarSystem[2].diameter);

solarSystem[0].ringSystem = true
solarSystem[6].moons[3] = "Oberon"

for (let i = 0; i < solarSystem.length; i++) {
if (solarSystem[i].ringSystem === true) {
  console.log(solarSystem[i]);
}
}
