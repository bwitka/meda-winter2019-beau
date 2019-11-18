// Include packages we will be using.
const fs = require("fs");
const _ = require("lodash");

// Read the dataset file into our script and store in a constant dataset variable.
const dataset = fs.readFileSync("Eviction_Notices.csv", "utf8");

// Converted string into array where each new line is a new index.
const dataArray = dataset.split("\n");

// console.log(dataArray[22]);

// Renamed the 23rd record into a specific variable name.
const singleEntry = dataArray[1900];

const singleEntryArray = singleEntry.split(",");

console.log(typeof singleEntryArray[5]);

const entryDate = singleEntryArray[5].split("/");

console.log(entryDate);

console.log(entryDate[2]);

if ("2018" == entryDate[2]) {
  console.log("This is an entry for 2018.");
}

function is2018(entry) {
  const singleEntryArray = entry.split(",");

  const entryDate = singleEntryArray[5].split("/");

  if ("2018" == entryDate[2]) {
    return true;
  } else {
    return false;
  }
}
