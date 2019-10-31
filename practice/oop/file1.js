/*
AM Warm Up:
1.) Create file1.js, export 2 functions.
2.) Create file2.js, use 1 file1 function.
3.) Create file3.js, use the other file1 function.
*/

// const greeting = require("./file2.js");
// const mathFunction = require("./file3.js");

function addTwoNumbers(a, b) {
  console.log(a + b);
}

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

module.exports = {
  addTwoNumbers: addTwoNumbers,
  sayHello: sayHello
};
