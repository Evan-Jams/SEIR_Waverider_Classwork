//-----------------------------------------------//
// Verbal Questions //
//-----------------------------------------------//
// 1.) A parameter is the value TO BE evaluated, or the value TO BE inputed (x, num, etc.). An argument IS the inputed value ("string", 50, etc.).

// 2.) A return is the result of the argument that was inputted into the function, and console.log verbalizes that value.
// ex. [ f(x) = x * 10 ---> f(10) = 10 * 10 returns 100] 'x' is the parameter (number '10' being the argument), 100 is what the return value would be, and console.log would post the retun value in your console.

//-----------------------------------------------//
// Palindrome //
//-----------------------------------------------//
// const checkPalindrome = (str) => {
//   let strReversed = "";
//   for(let char of str) {
//     strReversed = char + strReversed;
//   } if (strReversed == str) {
//     return "Is A Palindrome"
//   } else {
//     return "Is NOT A Palindrome"
//   }
// }
//--------First Attempt-------------//

// const checkPalindrome = (str) => {
//   let lowerCaseStr = str.toLowerCase();
//   let reverseStr = lowerCaseStr.split("").reverse().join("");
//   return lowerCaseStr === reverseStr
// }
// console.log(checkPalindrome("Radar"));
// console.log(checkPalindrome("Borscht"));
//---------Simpler Solution---------//

//-----------------------------------------------//
// Sum Array //
//-----------------------------------------------//

const sumArray = (arr) => {
  let a = 0
  for (let i = 0; i < arr.length; i++) {
    a += arr[i]
  }
console.log(a);
}


sumArray([1, 2, 3, 4])

//-----------------------------------------------//
// Prime Numbers //
//-----------------------------------------------//

const checkPrime = (num) => {
  if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false;
  if (num % 2 == 0) return (num == 2);
  if (num % 3 == 0) return (num == 3);
  let m = Math.sqrt(num);
  for (let i = 5; i <= m; i += 6) {
    if (num % i == 0) return false;
    if (num % (i + 2) == 0) return false;
 }
 return true;
}

console.log(checkPrime(3));

const printPrime = () => {
  for (let i = 0; i <= 97; i++) {
    if (checkPrime(i) === true) {
      console.log(i);
    }
}
}
printPrime()
