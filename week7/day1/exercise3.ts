// 1. create a tuple of 3 numbers
const myTuple: [number, number, number] = [0, 5, 12];
// 2. calculate the distance from that point to the origin
// Distance = \sqrt{x^2 + y^2 + z^2}
// Create a distance formula
function distanceFormula([a, b, c]: [number, number, number]): number {
  // const distance = (a**2 + b**2 + c**2)**(.5)
  const distance = Math.sqrt(a ** 2 + b ** 2 + c ** 2);
  return distance;
}
// 3. use it
let DFO = distanceFormula(myTuple);
console.log(DFO);
