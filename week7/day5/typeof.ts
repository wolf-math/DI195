type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric): alphanumeric {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  if (typeof a === 'string' && typeof b === 'string') {
    return a.concat(b);
  }

  throw new Error(
    'Invalid arguments. Both arguments must be either numbers or strings.'
  );
}

console.log(add(9, 1));
console.log(add('g', 'ood'));
console.log(add(1, 'hi'));
