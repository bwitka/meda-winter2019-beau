// access the Vehicle class with the 'require' function:
const Vehicle = require("./vehicles.js");

const Car = class Car extends Vehicle {
  constructor(
    make,
    model,
    year,
    color,
    owner,
    license,
    mileage,
    MPG,
    tankSize,
    engineType,
    topSpeed
  ) {
    super(make, model, year, color, owner, engineType, topSpeed);
    this.license = license;
    this.mileage = mileage;
    this.tankSize = tankSize;
    this.currentFuel = this.tankSize;
    this.MPG = MPG;
  }

  travel(miles) {
    this.currentFuel = this.currentFuel - miles / this.MPG;
    console.log(
      `Your ${this.make} ${this.model} has ${this.currentFuel.toFixed(
        1
      )} gallons of ${this.engineType} left in its tank.`
    );
  }
};

module.exports = Car;
