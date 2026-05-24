class JsPerson {
  constructor(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`${this.firstName} says "hi"`);
  }
}

let zion = new Person(777, 'Zion', 'Burtman');
console.log(zion);

let maurice = new Person(456, 'Maurice', 'Calo');
maurice.greet();

// Create many Person instances from an array
