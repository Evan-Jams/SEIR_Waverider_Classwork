// const iceCreams = ['Vanilla','Chocolate','Strawberry','Rocky Road'];
//
// const updatedIceCreams = iceCreams.map((flavor) => {
//   return flavor + " Ice Cream"
// })
//
// console.log(updatedIceCreams);
//
//
// const originalArray = [2,4,6,8,10]
//
// const newNumArray = originalArray.map((num) => {
//   return num * 2
// })
//
// console.log(newNumArray);




const isBelowThreshold = (num) =>
    num < 40

const ageArray = [1, 30, 39, 29, 10, 13]

// console.log(ageArray.every(isBelowThreshold));

const underFortyClub = () => {
  if(ageArray.every(isBelowThreshold) === true) {
    console.log("Let's go party");
  }
}

underFortyClub()
