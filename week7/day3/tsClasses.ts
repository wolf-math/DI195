class TsPerson {
  private ssn: string;
  private firstName: string;
  private lastName: string;
  private age: number;
  public eyeColor: string;

  constructor(
    ssn: string,
    firstName: string,
    lastName: string,
    age: number,
    eyeColor: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  private formatSSN(ssnNumber: string): string {
    return `${ssnNumber.slice(-3)}`;
  }

  getSSN(): string {
    let ssn = this.formatSSN(this.ssn);
    return `Your SSN is ****${ssn}`;
  }

  getAge(): string {
    return `${this.firstName} is ${this.age} years old`;
  }

  public greet(): string {
    return `Hello!`;
  }
}

const amit = new TsPerson('555', 'Amit', 'Ashkenazi', 27, 'green');
const naomie = new TsPerson('058', 'Naomie', 'Bocobza', 25, 'brown');

console.log(amit.getFullName());
console.log(naomie.getFullName());

// console.log(naomie.ssn) private attribute
console.log(amit.getSSN());

console.log(amit.eyeColor);
