// ================ as ======================== //
let myString: number | string = 'Hello, TypeScript!';

// Use the 'as' keyword to assert that 'myString' is a string
let myLength = (myString as string).length;
console.log(myLength); // Output: 19

myString = 42;

// Use the 'as' keyword to assert that 'myString' is a number
let doubled = (myString as number) * 2;
console.log(doubled); // Output: 84

// ================= bracket ============= //

let myString2: number | string = 'Hello, TypeScript!';

// Use the angle bracket syntax to assert that 'myString2' is a string
let myLength2 = (<string>myString2).length;
console.log(myLength2); // Output: 19

myString2 = 42;

// Use the angle bracket syntax to assert that 'myString2' is a number
let doubled2 = <number>myString2 * 2;
console.log(doubled2); // Output: 84
