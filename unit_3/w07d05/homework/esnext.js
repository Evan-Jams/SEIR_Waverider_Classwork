// Given the following object pull out 3 key value pairs using destructuring (one being the function) and log them/call the function

const carObj = {
  make: "Subaru",
  model: "Crosstrek",
  year: 2020,
  type: "SUV",
  upgrades: ['mudflaps', 'roof rack', 'moonroof'],
  colors_available: {
    red: true,
    orange: false,
    blue: true,
    green: true
  },
  honk(){
    console.log('Beep Beep');
  }
}

const {make, model, year} = carObj
const {honk} = carObj

// console.log(make, model, year);
// honk()


// Go through the MDN docs, find one method that is standard, one that is obsolete, one that is depreciated, and one that is experimental and write down the name and icon used for each type.

//****************************************************************

// Object.eval() is obsolete, uses a trash can icon
// Object.assign() is standard, no icon
// Object.__defineSetter__() is deprecated, thumbs down icon
// AsyncIterator() is experimental, Beaker icon

//****************************************************************

// Get the min of an array of numbers, if it is negative return 'the min is negative', if its positive return 'the min is positive'.
let arr1 = [2, 1, 10, 6, -2, 1]
let arr2 = [1, 7, 3, 0, 14, 11]

// const findMin = (arr) => {
//     let min = Math.min(...arr);
//     // console.log(min);
//     if (min >= 0) {
//         console.log('The minimum is positive (though it is technically not because the minimum is 0)');
//     } else {
//         console.log('The minimum is negative');
//     }
// }
//
// findMin(arr1);
// findMin(arr2);


// Write a function that logs hello world if there is no argument provided. Otherwise it should log the argument provided (string) ex. greeting('Brendan') => hello Brendan.
// const greeting = (arg) => {
//     if (!arg) {
//         console.log('hello world');
//     } else {
//         console.log('hello', arg);
//     }
// }
//
// greeting('Brendan')
// greeting()

// Fix the for loop so that Timmy gets a golden key.

// let belongings = [
//   'boomerang', 'keyboard', 'tent', 'Pepto Bismol', 'pointy hat'
// ]
// let key = 'a golden key'
// for (item of belongings) {
//   console.log('Timmy checks his satchel and finds', item)
// }
// belongings.push(key)
// console.log('Timmy now has the gold key', belongings[belongings.length -1] === 'a golden key')

// Create an empty object and using the new ES6 syntax insert the given variables into the object

const rAndR = 'tent'
const healing = 'pepto bismol'
const weapon= 'boomerang'
const music = 'keyboard'
const style = 'pointy hat'
const emptyObj = {rAndR, healing, weapon, music, style}
// console.log(emptyObj);


// Use the rest operator to take any number of arguments, get the strings, sort them alphabetically, and return them as one string.

let args = ['super', 99, 'cali', {toy: 'kite'}, 'fragil', 'istic', false, 'expiali', 'do', [8,6,7,5,3,0,9], 'cious']

// Use the two given arrays to solve the following problems using the short arrow function syntax.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Use the Filter method to filter the nums array for numbers less than 4.

// Use the Filter method to filter words that have an even length.

// Use the For Each method to log each value in the nums array by 3.

// Use the For Each method to log each word with an exclamation point at end of the word.


//=============== HUNGRY FOR MORE ===============//

// Given an array test to see if all values in the array are unique or not.

// Solve https://projecteuler.net/problem=2 using es6 syntax (copy and paste the link into your browser).
