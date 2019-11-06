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
