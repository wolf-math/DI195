let shirtSize = 'large';

console.log(shirtSize); // large

shirtSize = 'small';

console.log(shirtSize); // small

// Doesn't work: inferenced as a string
// shirtSize = 8

function multiply(a: any, b: number) {
  return a * b;
}

let result = multiply(10, 5);
let res = multiply(true, 8);

console.log(res);
