// Define a Car Interface

// Task: Create an interface Car with properties make, model, and year (all strings). Then, write a function getCarInfo that takes a Car object and returns a formatted string with the car's details.

interface Car {
  make: string;
  model: string;
  year: string;
}

function getCarInfo(car: Car): string {
  return `${car.year} ${car.make} ${car.model}`;
}

const myCar = {
  make: 'Ford',
  model: 'Taurus',
  year: '1984'
};

console.log(getCarInfo(myCar));
