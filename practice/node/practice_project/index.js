const _ = require("lodash");

// _.last(array) Gets the last element of array.

let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let lastElement = _.last(sampleArray);

console.log(lastElement);

// _.join(array, [separator=',']) Converts all elements in array into a string separated by separator.

let newArray = _.join(sampleArray, "|");

console.log(newArray);

// _.camelCase([string='']) Converts string to camel case.

const sampleString = "this is a sample string";

const camelCase = _.camelCase(sampleString);

console.log(camelCase);
