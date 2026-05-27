const num = Math.floor(Math.random() * 5);

// let num = 'hello';

switch (num) {
  case 1: // num == 1?
    console.log(`num is equal to ${num}`);
    break;
  case 2: // num == 2?
    console.log("we're learning switch cases");
    break;
  case 'hello':
    console.log(
      'num can only be a number between 1 and 5, so this never executes.'
    );
  default:
    console.log('this is the default');
}
