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

let sum = arg1 + arg2;
console.log(`The sum of ${arg1} and ${arg2} is ${sum}.`);

let difference = arg1 - arg2;
console.log(`The difference of ${arg1} and ${arg2} is ${difference}.`);

let product = arg1 * arg2;
console.log(`The product of ${arg1} and ${arg2} is ${product}.`);

let quotient = arg1 / arg2;
console.log(`The quotient of ${arg1} and ${arg2} is ${quotient}.`);
