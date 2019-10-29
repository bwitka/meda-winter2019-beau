/* 
AM warm up exercise:
1.) create an object with at least four properties.
2.) save this object in a JSON file named "saved."
*/

// Using file system package to create file:
const fs = require("fs");

let person = {
  firstName: "Beau",
  lastName: "Witka",
  age: 41,
  location: "San Francisco",
  status: "tired"
};

// convert JavaScript object to JSON strings:
const objectToJSON = JSON.stringify(person);

// Create a file and write the text in objectToJSON variable to the file:
fs.writeFileSync("saved.json", objectToJSON, "utf8");
