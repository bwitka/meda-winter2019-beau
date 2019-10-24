// Renaming ARGV array for easier reading.
// When using ARGV, start with index 2 - because indexes 0 and 1 are not useful in our code.
let terminalArguments = process.argv;

let arg1 = parseInt(terminalArguments[2]);
let arg2 = parseInt(terminalArguments[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.log(
    "You are missing one or two numbers, please type in two numbers after the command with spaces. Example: node calculator.js 50 100"
  );

  return;
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

add(arg1, arg2);
subtract(arg1, arg2);
multiply(arg1, arg2);
divide(arg1, arg2);
getRemainder(arg1, arg2);
