console.log('connected');
alert('You are starting a landscaping business, but all you have are your teeth')

let teeth
let money

const start = () => {
  teeth = 'your'
  money = 0

  askForAction()
}

const showStatus = () => {
  alert(`you have ${teeth} teeth and $${money}`)
}

const askForAction = () => {
  showStatus()
  let choice = prompt('What do you want to do?', '(u)se teeth / (b)uy / (r)estart')
  console.log(choice);
  //make cancel button work
  if (!choice || choice === 'r') {
    alert('ok! no more money')
    return
  }


if (choice === 'u') {
    useTeeth();
  } else if (choice === 'r') {
    console.log('restarted');
  } else {
    console.log('uh oh! somethings wrong');
  }
}

const useTeeth = () => {
  money++
  askForAction()
}

start()
