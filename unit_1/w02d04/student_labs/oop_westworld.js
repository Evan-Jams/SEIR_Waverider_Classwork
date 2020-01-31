const host = {
  name: 'name',
  occupation: 'occupation',
  saySpecs: () => {
    console.log(`My name is ${name}. My occupation is ${occupation}.`);
  }
}

class BasicHost {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  saySpecs() => {
    console.log();
  }
}

let host1 = new BasicHost("Tim", "maker of cocktails")

let host2 = new BasicHost("Johnny Boy", "piano player")

console.log(host1);
console.log(host2);
