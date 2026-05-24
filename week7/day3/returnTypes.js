function example(thing1) {
  return typeof thing1 === 'boolean' ? 8 : 'eight';
}

console.log(example(true));
console.log(example(55));
console.log(example('falafel'));
