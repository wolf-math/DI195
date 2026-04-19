// standard function notation
function hello1(user, age) {
  console.log('Greetings new user!');
  return { username: user, userage: age };
}

// function expression
const hello2 = function (user, age) {
  console.log('Greetings new user!');
  return { username: user, userage: age };
};

// arrow function (expression)
const hello3 = (user, age) => {
  console.log('Greetings new user!');
  return { username: user, userage: age };
};

// These will all output the same thing!
hello1('Aaron', 30);
hello2('Aaron', 30);
hello3('Aaron', 30);
