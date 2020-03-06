// const patternMatch = (word) => {
//   letterArray = word.split('');
//   for (l of letterArray) {
//     if (l == 'a' || l == 'e' || l == 'i'|| l == 'o' || l == 'u' ) {
//       return `${word}: true`;
//     }
//   }
//   return `${word}: false`;
// }

// const patternMatch = (word) => {
//     const regexp = /colou?r/;
//     if (word.match(regexp)) {
//         return `${word}: true`
//     } else {
//         return `${word}: false`
//     }
// }

const validDate = (date) => {
  const exp = /^[01]\d(-?|\/)\d\d(-?|\/)\d{2,4}/;
  if (date.match(exp)) {
    return true;
  }
  return false;
}


// WRITE YOUR CODE ABOVE THIS LINE ==========
// DO NOT DELETE ANYTHING BELOW THIS LINE ==========

// console.log(patternMatch('hello.'));
// console.log(patternMatch('.hi'));
// console.log(patternMatch('?howdy'));
// console.log(patternMatch('aloha'));
// console.log(patternMatch('pfft'));
//
// console.log(patternMatch('color'));
// console.log(patternMatch('colours'));
// console.log(patternMatch('aloha'));

console.log(validDate('12-12-2112'));
console.log(validDate('12122112'));
console.log(validDate('12/12/2112'));
