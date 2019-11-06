const Vehicle = require("./vehicles.js");

const Helicopter = class Helicopter extends Vehicle {
  constructor(
    make,
    model,
    year,
    color,
    owner,
    license,
    mileage,
    gph,
    tankSize,
    topSpeed
  ) {
    super(make, model, year, color, owner, "kerosene", topSpeed);
    this.license = license;
    this.mileage = mileage;
    this.tankSize = tankSize;
    this.currentFuel = this.tankSize;
    this.gph = gph;
  }

  fly(miles) {
    this.currentFuel -= this.gph * hours;
    console.log(
      `The ${this.make} ${this.model} flew for ${this.hours} hours. It has ${this.currentFuel} gallons left in its gas tank.`
    );
  }
};

module.exports = Helicopter;
