/* 
HOMEWORK (11/5/19): (same as Car class but has the following...)
1.) create truck.js
2.) create a new truck (e.g. volvo = new Truck() )
3.) engineType = diesel (set the engineType, they will always be diesel)
4.) will have a transport(tons) function that can answer yes or no
5.) this.capacity
6.) will inherit Vehicle
*/

// access the Vehicle class with the 'require' function:
const Vehicle = require("./vehicles.js");

const Truck = class Truck extends Vehicle {
  constructor(
    make,
    model,
    year,
    color,
    owner,
    topSpeed,
    wheelCount,
    axleCount,
    numOfGears,
    numOfTrailers,
    typeOfTrailer,
    sleeperCab,
    capacity,
    tankSize
  ) {
    super(make, model, year, color, owner, "diesel", topSpeed);
    this.wheelCount = wheelCount;
    this.axleCount = axleCount;
    this.numOfGears = numOfGears;
    this.numOfTrailers = numOfTrailers;
    this.typeOfTrailer = typeOfTrailer;
    this.sleeperCab = sleeperCab;
    this.capacity = capacity;
    this.tankSize = tankSize;
  }

  transport(tons) {
    if (tons <= this.capacity) {
      console.log(
        `You are in luck, the ${this.make} ${this.model} can easily transport ${tons} tons of cargo.`
      );
    } else if (tons > this.capacity) {
      console.log(
        `We are sorry but the ${this.make} ${this.model} can not transport ${tons} tons of cargo. You will have to reduce the weight of your freight to ${this.capacity} tons or less before proceeding.`
      );
    }
  }
};

module.exports = Truck;
