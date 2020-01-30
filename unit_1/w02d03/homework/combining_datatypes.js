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
