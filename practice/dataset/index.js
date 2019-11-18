// Include packages we will be using.
const fs = require("fs");
const _ = require("lodash");

// Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("Eviction_Notices.csv", "utf8");

// Converted string into array where each new line is a new index.
const dataArray = dataset.split("\n");

console.log(dataArray.length);

let total = 0;

for (let i = 0; i < dataArray.length - 1; i++) {
  let pass = is2018(dataArray[i]);

  // "hello"
  // ""

  if (pass === true) {
    console.log("The line entry " + i + " is from the year 2018!");
    total++;
  } else if (pass === 1) {
    console.log("The line " + (i + 1) + "has issues! please check.");
    console.log(dataArray[i]);
  }
}

console.log(total);

// This accepts a string only, returns true, false, or 1 if issue.
function is2018(entry) {
  const singleEntryArray = entry.split(",");

  const entryDate = singleEntryArray[5].split("/");

  if ("2018" == entryDate[2]) {
    return true;
  } else if (undefined === entryDate[2]) {
    console.log("We found the issue with the line:\n" + entry);
    return 1;
  } else {
    return false;
  }
}
