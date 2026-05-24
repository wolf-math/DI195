class Person2 {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string,
    readonly birthday: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const jocky = new Person2('987345987', 'Jocky', 'Shor', '25 May');

// console.log(jocky.firstName)
// console.log(jocky.lastName)

// class Student extends Person {
//   constructor(
//     protected ssn: string,
//     public studentId: string
//   ) {
//     super(ssn, '', '');
//     this.studentId = studentId;
//   }
// }

// let bek = new Student('09345', '98345');
