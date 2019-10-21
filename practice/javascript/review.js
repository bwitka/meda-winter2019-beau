// Storing information in JavaScript: variables
let sampleVariable = 1000;

/* =========================================================================== */

// JavaScript data types: strings, numbers, booleans, null, undefined, symbol.

// String:
("Hello, World!");

// Number:
2910.30234;
1912;

// Boolean:
true;
false;

// Null:
null;

// Undefined:
undefined;

// Symbol:
/* 
A value having the data type Symbol can be referred to as a "Symbol value".  In a JavaScript run-time environment, a symbol value is created by invoking the function Symbol, which dynamically produces an anonymous, unique value.
*/
let Sym1 = Symbol("Sym");

/* =========================================================================== */

// Operators: + - * / %
// note: the + operator is also uses in concatenation.

/* =========================================================================== */

// Comparison operators:
/* 
== is equal to?
!= is not equal to
*/

/* =========================================================================== */

// Relational operators:
/*
> greater than
>= greater than or equal to
< less than
<= less than or equal to
*/

/* =========================================================================== */

// Falsy values: false, 0, "", null, NaN, undefined

/*
Truthy values: All values are truthy unless they are defined as falsy (i.e., except for false, 0, 0n, "", null, undefined, and NaN).
*/

/* =========================================================================== */

/* 
Types of JS statements and declaration: 
control flow -> (if...else, break, switch, etc.),
declarations -> var, let, const,
functions and classes,
iterations.
*/

// if...else:
if (/* condition */ false) {
  /* code that will run if condition is true */
} else {
  /* code that will run if condition is false */
}

// iterations:
for (let i = 0; i <= 10; i++) {
  console.log(`loop number: ${i}`);
}

// functions:
function addTwoNumbers(a, b) {
  return a + b;
}
