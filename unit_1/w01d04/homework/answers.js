//------------------------------------------------------------//
//Part 1
//-----------------//
// 4 -feel good, but like extra review


//------------------------------------------------------------//
//Part 2: Easy Going
//-----------------//
for (let i = 1; i <= 20; i++) {
  // console.log(i);
}

//------------------------------------------------------------//
//Get Even
//-----------------//
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//------------------------------------------------------------//
//Fizz Buzz
//-----------------//
for (let i = 1; i <= 100; i++) {
  // console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // console.log('Fizz');
  } else {
    // console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    // console.log('Buzz');
  } else {
    // console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log('FizzBuzz');
  } else {
    // console.log(i);
  }
}

//------------------------------------------------------------//
//Wild Wild Life
//-----------------//
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001
// console.log(plantee);

wolfy[3] = "Gotham City"
// console.log(wolfy);

dart.push("Hawkins")
// console.log(dart);

wolfy.splice(0, 1, "Gameboy")
// console.log(wolfy);

//------------------------------------------------------------//
//Yell at the Ninja Turtles
//-----------------//
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'));
//
// console.log(favMovies.sort());
// //put all elements into A-Z order
// console.log(favMovies);
// //Permanent

// console.log(favMovies.pop());
// console.log(favMovies);
//
// favMovies.push('Guardians of the Galaxy')
// console.log(favMovies);
//
// favMovies.reverse()
// console.log(favMovies);
//
// console.log(favMovies.shift());
// console.log(favMovies);
//
// console.log(favMovies.unshift('Jaws'));
// console.log(favMovies);
// //returns new length of array after adding a new element (which is optional)
//
// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(3, 1, 'Avatar')
// console.log(favMovies);
// //permanent
//
// console.log(favMovies.length);
// console.log((favMovies[Math.floor(favMovies.length / 2)]));
// console.log(favMovies.slice(0, 9))
// console.log(favMovies);
// //Not permanent
// let sliced = favMovies.slice(0, 9)
// console.log(sliced);
// //storing the first half of the array in 'sliced'
// console.log(favMovies.indexOf('Fast and Furious'));
// //We get the value -1 ? weird

//------------------------------------------------------------//
//Where is Waldo
//-----------------//
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice([1][0], 1)
console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]);

//------------------------------------------------------------//
//Excited Kitten
//-----------------//
for (let i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!", i);
}

const catResponses = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]


for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(catResponses[Math.floor(Math.random() * catResponses.length)]);
}
}
//Took me FOREVER! But I think I got it.
//------------------------------------------------------------//
//Find the median
//-----------------//
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort()
console.log(nums);

console.log((nums[Math.floor(nums.length / 2)]));
//15
