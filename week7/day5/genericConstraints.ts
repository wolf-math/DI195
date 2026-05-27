function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str);

// str = prop({ name: 'John' }, 'age');

interface Coordinate {
  x: number;
  y: number;
}

let a: Coordinate = { x: 1, y: -8 };
// let b: Coordinate = { x: 'tuna', y: -8 };

interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = {
  key: 'Jan',
  value: 1
};

let me: Pair<boolean, number> = {
  key: true,
  value: 10
};

console.log(month);
