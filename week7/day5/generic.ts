function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9, NaN, Infinity];
console.log(getRandomElement<number>(numbers));

let colors = ['red', 'green', 'blue'];
console.log(getRandomElement<string>(colors));

let bools = [true, false, true, true, false];
console.log(getRandomElement<boolean>(bools));

let objs = [{ hello: 'goodbye' }, { high: 'low' }, { right: 'left' }];
console.log(getRandomElement(objs));

let mixed = [1, 'apple', 2, 'banana'];
console.log(getRandomElement(mixed));
