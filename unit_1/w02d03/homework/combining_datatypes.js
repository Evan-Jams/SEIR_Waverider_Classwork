const crayonBox = {
  colors: ['red', 'blue', 'green'],
}

console.log(crayonBox.colors[0]);
//-----------------------------------

const bottle = {
  cap: {
    material: ['metal', 'plastic'],
    color: ['black', 'silver']
  }
}

console.log(bottle.cap.material[0]);
//------------------------------------

const receipt = ['eggs', 'butter', {
  name: 'avocado',
  price: 1
}, 'bread']

console.log(receipt[2].name);
//------------------------------------

const apartmentBuilding = [
  ['bob', 'billy', 'janice']
]

console.log(apartmentBuilding[0][2]);
//--------------------------------------

const knit = () => {
  return {
    item: 'scarf',
    size: '6 ft',
  }
}

console.log(knit().item);
//-----------------------------------

const crayonSelector = () => {
  return crayonBox
}

console.log(crayonSelector().colors[1]);
//------------------------------------

const options = () => {
  return ('do that thing');
}

const powerButton = () => {
  return options()
}

console.log(powerButton());
//---------------------------------------


const add = (num1, num2) => {
  return (num1 + num2)
}

const subtract = (num1, num2) => {
  return (num1 - num2)
}

const multiply = (num1, num2) => {
  return (num1 * num2)
}

const divide = (num1, num2) => {
  return (num1 / num2)
}

const calculate = (num1, num2, operates) => {
  return (operates(num1, num2))
}

console.log(calculate(1, 2, add));
console.log(calculate(1, 2, subtract));
console.log(calculate(1, 2, multiply));
console.log(calculate(1, 2, divide));
//-------------------------------------------------------



// const bar = () => {
//     console.log('bar here');
// }
//
// const foo = () => {
//     console.log('foo here');
// }
//
// bar();
// foo();
//-------------------------------------------------------


const foo = () => {
    console.log('hi');
}

foo();

// the error is 'SyntaxError: Missing initializer in const declaration'
// meaning the const foo hasn't been declared. by putting an '=' after 'foo',
// this solves that issue, then you have to call the function after the
// function declaration. so move 'foo();' below the 'const foo'
