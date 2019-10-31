// Sample Person Object
let firstPerson = {
  firstName: "Eduardo",
  lastName: "Garcia",
  age: 29, // JavaScript Date and Time Objects.
  city: "San Francisco",
  state: "California",
  occupation: "contractor",
  eye: "transparent",
  hair: "black",
  beard_color: "black",
  transportion: "teleportation",
  marital_status: "single",
  gender: "male",
  food: "sushi"
};

let secondPerson = {
  firstName: "Barbara",
  lastName: "Streisand",
  age: 50,
  occupation: "Actress",
  transportation: "Private Jet",
  gender: "female"
};

let thirdPerson = {
  firstName: "Brad",
  transportation: "Car"
};

// console.log("Welcome! "+ firstPerson.firstName + ", how was your day today?");

let people = [firstPerson, secondPerson, thirdPerson];

// A function that calculates the average age of the people in the array provided.
function getAverageAge(personArray) {
  let totalAge = 0;

  for (let i = 0; i < personArray.length; i++) {
    // console.log(personArray[i].age);
    totalAge = totalAge + personArray[i].age;
  }

  return totalAge / personArray.length;
}

// console.log("The average age of the people in the array is: " + getAverageAge(people));

// Same Objects but using Classes instead.

class Employee {
  constructor(firstNameValue, salary, license, status, timesheet) {
    console.log("A new employee was created!");
    this.firstName = firstNameValue;
    this.salary = salary;
    this.license = license;
    this.status = status;
    this.timesheet = timesheet;
    this.originalTime = timesheet;
  }

  work() {
    if (this.timesheet <= 0) {
      console.log(this.firstName + " has already worked for the day.");
      this.goHomeAndSleep();
    } else {
      console.log(this.firstName + " worked really hard for 1 hour");
      this.timesheet = this.timesheet - 1;
    }
  }

  // GETTER AND SETTER
  // naming convention of getter and setter
  // setPropertyName
  // getPropertyName
  getSalary() {
    return this.salary;
  }
  setSalary(newSalary) {
    if (salary > 100000) {
      console.log("This salary needs additional approval");
      return 1;
    } else {
      this.salary = newSalary;
      return 0;
    }
  }
  // END GETTER AND SETTER

  goHomeAndSleep() {
    console.log(this.firstName + " went home to sleep");
    this.timesheet = this.originalTime;
  }

  hoursLeft() {
    return this.timesheet;
  }
}

new Employee();

let firstEmployee = new Employee("Eduardo", 70000, "2ji2klf", "active", 2);
let secondEmployee = new Employee("Pedro", 120000, "oi23id", "inactive", 4);
let thirdEmployee = new Employee(null, null, null, null, 0);

firstEmployee.work();
firstEmployee.goHomeAndSleep();
