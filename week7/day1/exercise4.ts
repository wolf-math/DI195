// Write a function that takes a parameter of type number | string and prints its type.

function tellType(x: number | string) {
  console.log(typeof x);
}

tellType('Jocky');
tellType(32);
tellType('Jimi Hendrix');

function multiply(a: number, b: number, c?: number): number {
  if (c) {
    return a * b * c;
  }
  return a * b;
}

// ------------

function applyTaxes(price: number, tax = 0.1): number {
  return price * (1 + tax);
}

console.log(applyTaxes(100, 0.3));
