const greeting = function (name) {
  console.log(`Hello ${name}, welcome to NodeJS`);
};

const farewell = function (name) {
  console.log(`Farewell ${name}. Till we meet again!`);
};

console.log('This is from greeting.js'); // this will run when imported

module.exports = { greeting, farewell };
