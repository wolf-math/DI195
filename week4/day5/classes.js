class Dog {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} goes Bark!`);
  }
}

class Yorkshire extends Dog {
  constructor(name, hairLength) {
    super(name);
    this.energy = 'high';
    this.hairLength = hairLength;
  }

  speak() {
    console.log(`${this.name} goes yip!`);
  }

  get getHairLength() {
    console.log(`${this.name}'s hair is ${this.hairLength} long`);
    return this.hairLength;
  }

  set setHairLength(length) {
    console.log(`${this.name}'s hair is now ${length} long`);
    this.hairLength = length;
    // return this.hairLength;
  }
}

const ray = new Yorkshire('ray', 'medium');
console.log(ray.energy); // high
ray.getHairLength;
ray.setHairLength = 'short';
