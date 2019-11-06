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
    if (this.currentFuel >= 0) {
      if (this.currentFuel * this.MPG >= miles) {
        this.currentFuel = this.currentFuel - miles / this.MPG;
        console.log(
          `Your ${this.make} ${this.model} has ${this.currentFuel.toFixed(
            1
          )} gallons of ${this.engineType} left in its tank.`
        );
      } else {
        console.log(
          `Your ${this.make} ${this.model} doesn't have enough gas to travel that far.`
        );
      }
    } else {
      console.log(`Your ${this.make} ${this.model} has run out of gas.`);
    }
  }

  //   refuel(num) {
  //     if (num >= 0) {
  //       if (num > this.currentFuel) {
  //         console.log(
  //           `${num} is greater than your current fuel level, you are at risk of overflowing your gas tank.`
  //         );
  //       } else {
  //         console.log(
  //           `Your current fuel level is ${(num + this.currentFuel).toFixed(1)}.`
  //         );
  //       }
  //     } else {
  //       console.log(
  //         `You forgot to refuel and have run out of gas. Call a tow truck!`
  //       );
  //     }
  //   }

  refuel(gallons) {
    if (gallons <= 0) {
      console.log(`You need to provide fuel (positive number)`);
      return;
    } else {
      if (gallons >= this.tankSize) {
        console.log(`You provided too much fuel. Can not fit into tank.`);
      } else {
        if (this.tankSize - this.currentFuel > gallons) {
          console.log(
            `There is not enough space in the fuel tank to add that many gallons of gas.`
          );
        } else {
          this.currentFuel += gallons;
          console.log(
            `Your ${this.make} ${this.model} was successfully refueled with ${gallons} gallons of gas.`
          );
        }
      }
    }
  }
};

module.exports = Car;
