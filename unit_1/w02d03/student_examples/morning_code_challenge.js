const capitalize = (word) => {
  return (word.charAt(0).toUpperCase() + word.slice(1))
}
console.log(capitalize('hello'));
console.log(capitalize('howdy'));
