// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function getFullName(person: Person): string {
//   return `${person.firstName} ${person.lastName}`;
// }

// let john = {
//   firstName: 'John',
//   lastName: 'Doe'
// };

// let xq84g = {
//   firstName: 'xq84g',
//   lastName: '932'
// };

// let jane = {
//   firstName: 'Jane',
//   middleName: 'K.',
//   lastName: 'Doe',
//   age: 22
// };

// console.log(getFullName(john));
// console.log(getFullName(xq84g));
// console.log(getFullName(jane));

interface Person {
  firstName: string;
  middleName?: string; // Optional property
  lastName: string;
}

function getFullName(person: Person): string {
  // if (person.middleName) {
  //   // If middleName is provided, include it in the full name
  //   return `${person.firstName} ${person.middleName} ${person.lastName}`;
  // }
  // // If middleName is not provided, return only first and last names
  // return `${person.firstName} ${person.lastName}`;

  // ternary operator
  return person.middleName
    ? `${person.firstName} ${person.middleName} ${person.lastName}`
    : `${person.firstName} ${person.lastName}`;
}

const amit2 = {
  firstName: 'Amit',
  middleName: 'Devora',
  lastName: 'Ash'
};

const bob = {
  firstName: 'Bob',
  lastName: 'Barker'
};

console.log(getFullName(amit2));
console.log(getFullName(bob));
