const vehicle = class Vehicle {
  constructor(make, model, year, color, owner, engineType, topSpeed) {
    this.topSpeed = topSpeed;
    this.engineType = engineType;
    this.model = model;
    this.year = year;
    this.color = color;
    this.make = make;
    this.owner = owner;

    console.log("New vehicle was created.");
  }

  speak() {
    console.log(`This is a vehicle object.`);
  }
};

module.exports = vehicle;
