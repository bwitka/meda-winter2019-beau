const fs = require("fs");

let data = fs.readFileSync("carInventory.json", "utf8");

data = JSON.parse(data);

// What is the average miles per gallon of these 100 cars?
// To find out, we'll add the MPG properties for all cars and divide by total number of cars.

let total = 0;

for (let i = 0; i < data.cars.length; i++) {
  total += data.cars[i].MPG;
}

let mpgAverage = total / data.cars.length;

console.log(
  `What is the average miles per gallon of these ${data.cars.length} cars?`
);
console.log(`${mpgAverage} MPG`);

// Check year of each car. Console number of cars built between 1940 and 1960:

let cars = data.cars;
let counter = 0;

for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 1940 && cars[i].year <= 1960) {
    counter += 1;
  }
}

console.log(
  `There are ${counter} cars in the array that were built between 1940 and 1960.`
);
