// access the Vehicle class with the 'require' function:
const Car = require("./car.js");

let honda = new Car(
  "Honda",
  "Civic",
  1989,
  "red",
  "Beau Witka",
  "8EFD39E6",
  125000,
  35,
  11,
  "bio-fuel",
  150
);

console.log(honda);
honda.travel(100);
honda.travel(100);
honda.travel(100);
honda.travel(100);
