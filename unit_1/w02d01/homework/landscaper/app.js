// console.log('connected');
// alert('You are starting a landscaping business, but all you have are your teeth')


//make arrays/objects of tools w/ cost, pay grade, etc.
const tools = [

{
  name: 'Teeth',
  cost: 0,
  payout: 1
},

{
  name: 'Rusty Scissors',
  cost: 5,
  payout: 5
},

{
  name: 'Old-timey Push Lawnmower',
  cost: 25,
  payout: 50
},

{
  name: 'New Lawn Mower',
  cost: 250,
  payout: 100
},

{
  name: 'Team of Starving Students',
  cost: 500,
  payout: 250
}
]


// console.log(tools[0 + 1].name)
//Write a function that adds one to the index of tools array
const upgraded = (i) => {
  return (tools[i + 1].name)
}

// console.log(upgraded(0));




alert('You are starting a landscaping business, but all you have are your teeth')


let money

const start = () => {
  tool = tools[0].name
  money = 0

  askForAction()
}

const showStatus = () => {
  alert(`You are using your ${tool} and have $${money}`)
}

const askForAction = () => {
  showStatus()
  let choice = prompt('What do you want to do?', `(1) Use ${tool}  / (2) Upgrade tool / (3) Restart`)
  console.log(choice);
  //make cancel button work
  if (!choice) {
    alert('Uh Oh! You\'ve ended your progress!')
    return
  }
  //make choices for options
  if (choice === '1') {
    cutGrass();
  } else if (choice === '2'){
    getUpgrade();
  } else if (choice === '3') {
    console.log('Restarted');
  } else {
    console.log('uh oh! somethings wrong');
  }
}

const cutGrass = () => {
  money++
  askForAction()
}

const getUpgrade = () => {
  askForAction()
}
start()
