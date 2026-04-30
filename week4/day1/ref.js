// primitive values
// pass by value

let a = 10;
let b = a;

b = 11;
console.log(b); // 11
console.log(a); // 10

// array (or object)
// pass by reference

let arr = [1, 2, 3];
let arr2 = arr;
console.log(arr2); // [1,2,3]

arr2.push(4);
console.log(arr2); // [1,2,3,4]
console.log(arr); // [1,2,3,4]

console.log(arr === arr2); // true

let arr3 = [1, 2, 3, 4];

console.log(arr === arr3); // false
