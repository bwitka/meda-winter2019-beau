const fs = require("fs");

// Math.random();

// Converts a JSON string into a JS object: JSON.parse();

// Converts a JS object into a JSON string: JSON.stringify();

let exampleObject = {
  mainKey: 105,
  isThisTrue: true,
  someText: "text",
  sampleArray: [100, "string", true],
  sampleObject: { nestedKey: "inside" },
  aFunction: function() {
    console.log("I belong to the sample function.");
  }
};

console.log(exampleObject.mainKey);
console.log(exampleObject["mainKey"]);
exampleObject.mainKey = 106;

exampleObject.aFunction();

// Console log normal object:
console.log(exampleObject);

const jsonText = JSON.stringify(exampleObject);

// Console log JSON representation of same JS object:
console.log(jsonText);

fs.writeFileSync("exampleJSON.json", jsonText, "utf8");
console.log("File successfully written!");
