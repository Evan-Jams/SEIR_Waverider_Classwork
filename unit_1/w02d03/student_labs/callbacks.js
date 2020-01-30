// const func1 = (para) => {
//   console.log(para);
// }
//
// const func2 = () => {
//   return('hi');
// }
//
// func1(func2())

// const foo = (param, param2) => {
//     param(param2);
// }
//
// const bar = (param) => {
//     console.log(param);
// }
//
// foo(bar, 'hi');
//====================================================
// const foo = (param, param2) => {
//     param(param2, 'hello');
// }
//
// const bar = (param, param2) => {
//     console.log(param2);
// }
//
// foo(bar, 'hi');
//
// //============================================================
//
// const baz = (param) => {
//   console.log(param.toUpperCase());
// }
//
// foo(baz, 'hello')

//===========================================================

const electricMixer = (attachment) => {
  console.log("The mixer is now:", attachment());
}

electricMixer(() => {
  return "spiralizing"
})

const spiralizer = () => {
  return "spiralizing"
}

const slicerDicer = () => {
  return "slicin' and dicin'"
}

const stabber = () => {
  return "stabbin' like crazy"
}

electricMixer(spiralizer)
electricMixer(slicerDicer)
electricMixer(stabber)

//set a delay in a response
setTimeout(() => {
  //setting a timeout function to accept a function parameter and a delay parameter
  console.log('hi');
  //what the delayed response will be
}, 2000);
//how much time (in milliseconds) until the function in the first parameter will run

//set an interval at which the function will run
// setInterval(() => {
  //setting an interval with the function thats going to run as the first parameter, and the the time elapse between each running as the second parameter.
  // console.log('hi');
  // message to be displayed
// }, 2000);
// time interval that the function will run at. so every 2000 milliseconds, this function will run.
