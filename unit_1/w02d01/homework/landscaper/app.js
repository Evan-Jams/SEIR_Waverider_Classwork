// console.log('connected');
// alert('You are starting a landscaping business, but all you have are your teeth')


//make arrays/objects of tools w/ cost, pay grade, etc.
const tools = [

{
  name: 'Teeth',
  cost: 5,
  payout: 1
},

{
  name: 'Rusty Scissors',
  cost: 25,
  payout: 5
},

{
  name: 'Old-timey Push Lawnmower',
  cost: 250,
  payout: 50
},

{
  name: 'New Lawn Mower',
  cost: 500,
  payout: 100
},

{
  name: 'Team of Starving Students',
  cost: 0,
  payout: 250
}
]


// console.log(tools[0 + 1].name)
//Write a function that adds one to the index of tools array when the user can upgrade, and subtracts tools.cost from total money
const upgraded = () => {
  if (i < (tools.length - 1)) {
  i += 1
  totalMoney -= cost
  console.log(i)
  start(i)
}
}
// console.log(upgraded());

alert('You are starting a landscaping business, but all you have are your teeth')
let i = 0
let tool = tools.name
let money = tools.payout
let cost = tools.cost
let totalMoney = 0

const start = (i) => {
  tool = tools[i].name
  money = tools[i].payout
  cost = tools[i].cost

  askForAction()
}

const showStatus = () => {
  alert(`You are using your ${tool} and have $${totalMoney}`)
}

const askForAction = () => {
  showStatus()
  let choice = prompt('What do you want to do?', `(1) Use ${tool}  / (2) Upgrade tool / (3) Restart`)
  console.log(choice);
  //make cancel button work
  if (!choice) {
    alert('Uh Oh! You\'ve erased your progress!')
    return('user did not enter a valid option')
  }
  //make choices for options
  if (choice === '1') {
    cutGrass();
  } else if (choice === '2') {
    getUpgrade();
  } else if (choice === '3') {
    console.log('Restarted');
    return
  } else {
    console.log('uh oh! somethings wrong');
  }
}


const cutGrass = () => {
  totalMoney += money
  if(totalMoney >= 1000) {
    alert('You\'ve Won! Congratulations!')
    return
  }
  askForAction()
}

const getUpgrade = () => {
  if (totalMoney >= cost) {
    upgraded()
  } else if (i === 4){
    alert('You have no more upgrades available')
  } else {
    alert('You do not have enough money for upgrade, keep cutting!')
  }
  askForAction()
}

start(i)



//====================================================================//
//===== Can't Get My code to stop calling function 'askForAction'=====//
//================ Just keeps calling after winning ==================//
