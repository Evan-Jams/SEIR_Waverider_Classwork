// // setTimeout() Built in function in JS that can set a delay to the callback of a function.
//
// setTimeout(() => {
//   // console.log('I said hi!');
// }, 2000)
//
// setTimeout(() => {
//   // console.log('Answer me dammit!!!');
// }, 5000)
//
// // console.log('hi');
//
//
// const socky = () => {
//   console.log('I will happily iron your socks');
// }
//
// const foodie = () => {
//   console.log('I will sort your m&ms so you never see a green one again');
// }
//
// const pr = () => {
//   console.log('I will make sure everyone knows you are the best');
// }
// // socky()
// // foodie()
// // pr()
//
// const boss = (employee) => {
//   console.log('I am boss, you will do as I say');
//   employee()
// }
//
// boss(socky)
// boss(foodie)
// boss(pr)
// boss(() => {
//   console.log('I will still hand grind your coffe beans, even though you do not remember my name');
// })

//
const capitalize = word => {
  return(word[0].toUpperCase() + word.substring(1));
}
//
// capitalize('less')
// capitalize('aloha')
//
// const excitedWords = (word) => {
//   return word + '!'
// }
//
//
// console.log(excitedWords('hello'));


const handleWords = (str, cb) => {
  const arr = str.split(' ')
  const newArr = []
  for (let word of arr) {
    newArr.push(cb(word))
  }
  return newArr.join(' ')
}

console.log(handleWords('hello how are you?', capitalize))
