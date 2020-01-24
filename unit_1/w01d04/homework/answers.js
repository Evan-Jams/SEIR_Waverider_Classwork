//---------------//
//Part 1
//---------------//
// 4 -feel good, but like extra review


//---------------//
//Part 2: Easy Going
//---------------//
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//---------------//
//Get Even
//---------------//
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//---------------//
//Fizz Buzz
//---------------//
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
console.log(plantee);

wolfy[3] = "Gotham City"
console.log(wolfy);

dart.push("Hawkins")
console.log(dart);

wolfy.splice(0, 1, "Gameboy")
console.log(wolfy);
