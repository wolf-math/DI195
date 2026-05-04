const myArr = [10, 20, 30, 40];

// map
let newArr = myArr.map((val, i) => {
  return {
    value: val,
    index: i
  };
});

// equivalent with forEach
let newNewArr = [];
myArr.forEach((val, i) => {
  newNewArr.push({
    value: val,
    index: i
  });
});

console.log(newArr);
console.log(newNewArr);
