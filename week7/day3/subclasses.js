"use strict";
class Person {
    ssn;
    firstName;
    lastName;
    birthday;
    constructor(ssn, firstName, lastName, birthday) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const jocky = new Person('987345987', 'Jocky', 'Shor', '25 May');
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
