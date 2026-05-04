let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30
  },
  {
    desert: 'Apple Pie',
    calories: 15
  },
  {
    desert: 'Croissant',
    calories: 50
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5
  }
];

// iterates 1 time
let cal = party.reduce((acc, val) => {
  if (val.desert != 'Apple Pie') {
    return acc + val.calories;
  }
  return acc;
});

console.log('hello!');

// iterates 2 times
// filter
let partyCals = party.filter((val) => val.desert != 'Apple Pie');

let cals = party.reduce((acc, val) => {
  return acc + val.calories;
});
