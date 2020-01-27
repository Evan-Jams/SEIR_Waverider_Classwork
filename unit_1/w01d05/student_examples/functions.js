// const checkSquare = (num) => {
//   const squareRoot = Math.sqrt(num)
//   if (squareRoot % 1 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// // console.log(checkSquare(16));
// // console.log(checkSquare(15));
// //
// // const checkToLimit = (num) => {
// //   for (let i = 1; i <= num; i++) {
// //     if (checkSquare(i)) {
// //       console.log(true);
// //     } else {
// //       console.log(false);
// //     }
// //   }
// // }
//  // checkToLimit(100)
//
// // `hi` template literal, using back ticks
// // more powerful string creator
// const name = 'Evan'
// const myString = `hi ${name}`
// console.log(myString)
//
// const checkToLimit = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(`${i} __ ${checkSquare(i)}`)
//   }
// }
// checkToLimit(100)
//
// // const areAllOdd = (arr) => {
// //   // This known as our base case this keeps us from having an infinite loop
// //   // we are checking here to see if the array no longer has any values in it
// //     if (arr.length === 0){
// //       console.log('no numbers in this array')
// //       return
// //     }
// //     // here we check if the num is odd
// //     if (arr[0] % 2 === 0){
// //       console.log(`is the first number in this array odd ${arr}`)
// //       // We run shift because we want to eliminate the value that we know is no longer checking for
// //       const num = arr.shift()
// //       console.log(`${num} is not odd`)
// //       areAllOdd(arr)
// //     } else {
// //           console.log(`is the first number in this array odd ${arr}`)
// //       console.log(`${arr[0]} is odd`)
// //       return
// //     }
// //   }
// //   const martinsArray = [3142, 5798, 6550, 5914]
// //   areAllOdd(martinsArray)
//
//
//
//
//
//
//
// //Function Expression
//
// // const printJohn = () => {
// //   return "John"
// //}
// // => {} === function () {}
//
// //Simplified
// //const printJohn = () => "John"
//
// // const printBoo = () => {
// // 	console.log('======');
// // 	console.log('Boo!');
// // 	console.log('======');
// // };
// //
// // printBoo()
//
// // const printSum = () => {
// //   console.log(10 + 10);
// // }
// //
// // printSum()
//
// // const printTriangle = (num) => {
// //   for (let i = 1; i <= num; i++) {
// //     console.log('#'.repeat(i))
// //   }
// //   return 'I am a triangle'
// // }
// //
// // console.log(printTriangle(8));
//
// const outerFunction = () => {
//   let myScore = 0
//   const innerFunction = () => {
//     return myScore++
//   }
//   return innerFunction
// }
