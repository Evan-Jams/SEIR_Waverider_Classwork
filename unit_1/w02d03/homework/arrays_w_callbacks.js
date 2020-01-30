const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every -------------------------------------------------
// 1.
const isBelow = (num) => {
  return (num >= 0)
}
// console.log(nums.every(isBelow));
// true

// 2.
const howShortWords = (word) => {
  return (word.length < 8)
}
// console.log(panagram.every(howShortWords));
// true


// Filter -------------------------------------------------
// 1.
// console.log(nums);
// const sortNums = () => {
//   nums.sort(func(num1, num2){
//     return (num1 - num2)
//   });
//   // console.log(nums);
// }
// sortNums()

// const littleNums = (num) => {
//   nums.sort((num1, num2) => {
//     return (num1 - num2)
//   })
//   if (num < 4) {
//     return(num)
//   }
//
// }
//
// console.log(nums.filter(littleNums));

//======= Kept getting the first 3 numbers in the nums array and couldn't
// figure out how to incorporate the sort function first to get the 0 at the
// end of nums //

const littleNums = nums.filter(num => num < 4)
// console.log(littleNums);
// I made it way too complicated at first lol


// 2.
const evenWords = panagram.filter(word => word.length % 2 === 0)
// console.log(evenWords);

// Find ----------------------------------------------------------//
// 1.
const multiplesOfFive = nums.find(num => num % 5 === 0)
// console.log(multiplesOfFive);

// 2.
const longWords = panagram.find(word => word.length > 5)
// console.log(longWords);
// there is no word greater than 5 characters

// Find index ------------------------------------------------------//
// 1.
const multipleOfThree = nums.findIndex(num => num % 3 === 0)
// console.log(multipleOfThree);

// 2.
const reallySmallWords = panagram.findIndex(word => word.length < 2)
// console.log(reallySmallWords);
// -1, no words are that small in the array

// For each --------------------------------------------------------//
// 1.
nums.forEach(num => console.log(num * 3))

// 2.
panagram.forEach(word => console.log(word + '!'))

// Map -------------------------------------------------------------//
// 1.
const newNums = nums.map(num => num * 100)
// console.log(newNums);

// 2.
const tallWords = panagram.map(word => word.toUpperCase())
// console.log(tallWords);

// Some -----------------------------------------------------------//
// 1.
const muliplesOfSeven = (num) =>
  num % 7 === 0

// console.log(nums.some(muliplesOfSeven));

// 2.
const doesAExist = (word) =>
  word.char === 'a'

  console.log(panagram.some(doesAExist));
