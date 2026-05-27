// Write a generic interface DataHolder that represents an object holding a single piece of data. The DataHolder interface should have a single property data of a generic type T.

// Then, create an instance of DataHolder where T is a boolean and another instance where T is a string.

interface DataHolder<T> {
  dinner: T;
}

let food: DataHolder<string> = {
  dinner: 'chicken'
};

// ============

interface Opposites<U, V> {
  a: U;
  b: V;
}

let one: Opposites<number, string> = {
  a: 1,
  b: 'one'
};

let two: Opposites<string, number> = {
  a: 'two',
  b: 2
};

let three: Opposites<string, number> = {
  a: 'three',
  // b: "three" // doesn't work
  b: 3
};

// =========

interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
  isFlying: false
};

console.log(inputOptions);
