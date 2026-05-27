function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2
  };
}

const obj1 = { name: 'John' };
const obj2 = { jobTitle: 555 };

let result = merge(obj1, obj2);

// obj1.name = 'Billy';

// console.log(result);
// console.log(obj1);

// // const mergedObj = { name: 'John', jobTitle: 555 }

// let username: string = 'zion';
// username = 'jocky';
// username = 'henri';

// // @ts-ignore
// username = 18;

// // @ts-ignore
// username = 20;

// function greetUser(user: string) {
//   return `Hello ${user}`;
// }

// greetUser('string');

// // @ts-ignore
// greetUser(56);
