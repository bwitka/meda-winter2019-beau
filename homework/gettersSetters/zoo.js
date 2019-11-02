/*
HOMEWORK ASSIGNMENT (11/1/2019):
Add getter and setter methods to the Mammal class.
*/

class Animal {
  constructor(metabolism, expired) {
    this.metabolism = metabolism;
    this.expired = expired;
  }
}

class Fish extends Animal {
  constructor(tasty) {
    super("medium-blooded", "fried"); // super() creates the parent's constructor method.
    this.tasty = tasty;
  }
}

class Mammal extends Animal {
  constructor(
    type,
    limbs,
    mouth,
    nose,
    eyes,
    tail,
    hair,
    mammary,
    life,
    heightInches,
    weightLb
  ) {
    super("warm-blooded", false);
    this.type = type;
    this.limbs = limbs;
    this.mouth = mouth;
    this.nose = nose;
    this.eyes = eyes;
    this.mammary = mammary;
    this.lifeExpectancy = life;
    this.hair = hair;
    this.heightInches = heightInches;
    this.weightLb = weightLb;
    this.tail = tail;
    this.age = 0;

    console.log(`${this.type} was born.`);
  }

  // GETTER METHOD:
  get numOfLimbs() {
    return `A ${this.type} has ${this.limbs} limbs.`;
  }

  // SETTER METHOD:
  set numOfLimbs(numOfLimbs) {
    this.limbs = numOfLimbs;
  }

  eat() {
    console.log(`${this.type} eats food.`);
  }

  sleep() {
    console.log(`${this.type} sleeps.`);
  }

  live(years) {
    this.age += years;
    if (this.lifeExpectancy < this.age) {
      console.log(`${this.type} is now dead :(`);
      this.expired = true;
    } else {
      console.log(
        `${this.type} has successfully lived for an additional ${years} years.`
      );
    }
  }

  reproduce(weightLb, heightInches) {
    console.log(`${this.type} created babies.`);
    let baby = new Mammal(
      this.type,
      this.limbs,
      this.mouth,
      this.nose,
      this.eyes,
      this.tail,
      this.hair,
      this.mammary,
      this.lifeExpectancy,
      heightInches,
      weightLb
    );

    return baby;
  }

  die() {
    console.log(`${this.type} has lived a full life.`);
  }
}

const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, 4);

firstMammal.eat();
firstMammal.sleep();

const secondMammal = firstMammal.reproduce(4, 6);

console.log(secondMammal.heightInches);

const thirdMammal = new Mammal("cat", 4, 1, 1, 2, 1, true, true, 20, 10, 14);

let litter = [];

const fourthMammal = thirdMammal.reproduce(2, 4);
const fifthMammal = thirdMammal.reproduce(2, 4);
const sixthMammal = thirdMammal.reproduce(2, 4);

litter.push(fourthMammal, fifthMammal, sixthMammal);

litter[1].live(5);

litter[1].live(20);

const tilapia = new Fish(true);

console.log(tilapia.metabolism);

// test getter and setter methods:

console.log(firstMammal.numOfLimbs);
firstMammal.numOfLimbs = 6;
console.log(firstMammal.numOfLimbs);
