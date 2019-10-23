/*
Morning warm up exercise (10/23/19):
1.) read file "repeat.txt"
2.) store text in variable and console.log() the value.
*/

const fs = require("fs");

const someText = fs.readFileSync("repeat.txt", "utf8");

console.log(someText);
