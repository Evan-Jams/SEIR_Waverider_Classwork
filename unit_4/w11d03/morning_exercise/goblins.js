// first make an array of 100 goblins
const goblins = []

const populate = (arr) => {
  for(i = 0; i < 100; i++){
    arr.push(false)
  }
  // console.log(arr);
}
populate(goblins)

const goblinGame = (arr) => {
  for(i = 1; i <= arr.length; i++){
    count = i
    for(x = 0; x < arr.length; x += count){
      if(arr[x + 1] % i === 0){
        arr[x] = !arr[x]
      }
    }
  }
  console.log(arr);
}
goblinGame(goblins)



// give all goblins the cure
// const cureGoblins = (arr) => {
//   for(i = 0; i < arr.length; i++){
//     arr[i] = !arr[i]
//   }
//   // console.log(arr);
// }
//
// cureGoblins(goblins)
//
// // then take it away for every even numbered goblin,
// const evenGoblins = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     if (i % 2 != 0) {
//       arr[i] = !arr[i]
//     }
//   }
//   console.log(arr);
// }
// evenGoblins(goblins)
//
// // then take it away from every third goblin, fourth, fifth...
// // every third
// const thirdGoblins = (arr) => {
//   for (i = 0; i < arr.length; i++) {
//     if ((i + 1) % 3 == 0) {
//       arr[i] = !arr[i]
//     }
//   }
//   console.log(arr);
// }
// thirdGoblins(goblins)
