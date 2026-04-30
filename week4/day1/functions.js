greetUser('Zion'); // this works!
// showThings('garbage can'); // ReferenceError
// doSomething('sit', 'stand'); // ReferenceError

// function declaration
function greetUser(username) {
  console.log(`Greetings, ${username}!!!`);
}

greetUser('Amit'); // Greetings, Amit!!!

// function expression
const showThings = function (things) {
  console.log(`These are my things: ${things}`);
};

showThings('darts and flag'); // These are my things: darts and flag

// arrow function (expression)
const doSomething = (thing1, thing2) => {
  console.log(`I like to ${thing1} and ${thing2}`);
};

doSomething('swim', 'run'); // I like to swim and run

// IIFE - immediately invoked function expression
(function (food) {
  console.log(`I am eating a ${food}`);
})('chilidog');

// implicit return
const drink = (drink) => `I drink ${drink}`;
console.log(drink('schweppes'));
