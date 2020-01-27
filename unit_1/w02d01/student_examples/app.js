// console.log('connected');
// alert('oh hi')

// let answer = prompt('Are you (a)rriving or (l)eaving', 'Arriving or Leaving')

// console.log(answer);
// const greeting = () => {
//   alert('Hi')
// }
//
// const farewell = () => {
//   alert('Bye')
// }
//
// const formatResponse = (response) => {
//   return response[0].toLowerCase()
// }
//
// // answer = formatResponse(answer)
// //
// // if (answer === 'a') {
// //   greeting()
// // } else if (answer === 'l') {
// //   farewell()
// // } else {
// //   alert('You mistyped something')
// // }
//
// let action
//
// // do {
// //   action = prompt('What do you want to do?', 'Your action')
// // } while (action)
//
// const func1 = () => {
//   console.log(1)
//   func2() // why can I call this now, even though the definition is below?
//   func3()
//   console.log('Finished!')
// }
// const func2 = () => {
//   console.log(2)
//   func4()
//   func6()
// }
// const func3 = () => {
//   console.log(3)
//   func5()
// }
// const func4 = () => {
//   console.log(4)
// }
// const func5 = () => {
//   console.log(5)
// }
// const func6 = () => {
//   console.log(6)
// }
// func1()

alert('welcome to lemon capitalist')

let lemons
let money

const start = () => {
  lemons = 0
  money = 20

  askForAction()
}

const showStatus = () => {
  alert(`you have ${lemons} lemons and $${money}`)
}

const askForAction = () => {
  showStatus()
  let choice = prompt('What do you want to do?', '(b)uy a lemon / (e)at a lemon / (r)estart')
  console.log(choice);
  //make cancel button work
  if (!choice) {
    alert('ok! no more lemons!')
    return
  }
  //choices b for buy
  //e for eat
  //r for restart
  // other - for errors
  if (choice === 'b') {
    buyLemon();
  } else if (choice === 'e'){
    eatLemon();
  } else if (choice === 'r') {
    console.log('restarted');
  } else {
    console.log('uh oh! somethings wrong');
  }
}

const buyLemon = () => {
  lemons++
  money--
  askForAction()
}

const eatLemon = () => {
  lemons--
  askForAction()
}
start()
