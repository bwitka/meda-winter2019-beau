// Note: Try adding a prompt for the user in the future. One node module you can use is Inquirer.js (https://alligator.io/nodejs/interactive-command-line-prompts/).

// Renaming ARGV array for easier reading.
// When using ARGV, start with index 2 - because indexes 0 and 1 are not useful in our code.
let terminalArguments = process.argv;

let mathOperation = terminalArguments[3];
let arg1 = parseInt(terminalArguments[2]);
let arg2 = parseInt(terminalArguments[4]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.log(
    "You are missing one or two numbers or a legitimate mathematical operator. Please enter two numbers separated by a mathematical operator after the command. Be sure to include a space between all three values. Example: node calculator.js 50 plus 100"
  );

  return;
}

if (mathOperation == "plus") {
  add(arg1, arg2);
} else if (mathOperation == "minus") {
  subtract(arg1, arg2);
} else if (mathOperation == "times") {
  multiply(arg1, arg2);
} else if (mathOperation == "divided-by") {
  divide(arg1, arg2);
} else if (mathOperation == "modulus") {
  getRemainder(arg1, arg2);
} else {
  console.log("Sorry we did not understand the operation you requested.");
}

function add(a, b) {
  let sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}.`);
}

function subtract(a, b) {
  let difference = a - b;
  console.log(`The difference of ${a} and ${b} is ${difference}.`);
}

function multiply(a, b) {
  let product = a * b;
  console.log(`The product of ${a} and ${b} is ${product}.`);
}

function divide(a, b) {
  let quotient = a / b;
  console.log(`The quotient of ${a} and ${b} is ${quotient}.`);
}

function getRemainder(a, b) {
  let remainder = a % b;
  console.log(`The remainder of ${a} and ${b} is ${remainder}.`);
}

// add(arg1, arg2);
// subtract(arg1, arg2);
// multiply(arg1, arg2);
// divide(arg1, arg2);
// getRemainder(arg1, arg2);
