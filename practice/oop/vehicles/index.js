// access various vehicle classes with the 'require' function:
const Car = require("./car.js");
const Truck = require("./truck.js");
const Helicopter = require("./helicopter.js");

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
honda.refuel(3);
honda.refuel(13);
honda.refuel(-1);

let volvo = new Truck(
  "Volvo",
  "VNL 860",
  2019,
  "blue",
  "T-Rex Trucking Inc.",
  90,
  10,
  2,
  12,
  1,
  "box",
  true,
  40,
  150
);

console.log(volvo);
volvo.transport(30);
volvo.transport(50);

let chinook = new Helicopter();

console.log(chinook);
