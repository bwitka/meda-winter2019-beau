// include node packages to use in project:
const fs = require("fs");
const lodash = require("lodash");

// Read the dataset file with fs.readFileSync and store info in a variable.
const dataset = fs.readFileSync("Film_Locations_in_San_Francisco.csv", "utf8");

// Convert dataset variable into an array, where each line is a new index.
const dataArray = dataset.split("\n");

// Remove the last index from array because it is empty.
dataArray.pop();

// Create a variable that will store the first line/index of dataArray array.
let headings = dataArray.shift();

// Create object to store all data from SFData dataset that is from the year 2018.
let json2018Data = {
  headings: headings,
  data: []
};

// Create a function to separate out all dataset entries that match the year 2018:
function is2018(entry) {
  //Create an array that splits up the individual columns of the entry.
  const singleEntryArray = entry.split(",");

  // Grab the date index, and split that by its day, month and year, store in another array.
  const releaseYear = singleEntryArray[1];

  // Using the array with the individual date parts, check the year index and to 2018.
  if (releaseYear === "2018") {
    // If it is 2018, return true.
    return true;
  } else if (releaseYear === undefined) {
    // If there is no value in index 2, that means there was an issue.
    console.log("We found the issue with the line:\n" + entry);
    return 1;
  } else {
    // If it is not 2018, return false.
    return false;
  }
}

// Loop through all the entries of the dataset (not including headings or the last [empty] line) in order to push the data matching the year 2018 into our json2018Data object.
for (let i = 0; i < dataArray.length - 1; i++) {
  // Test the entry using the is2018 function.
  let pass = is2018(dataArray[i]);

  // If pass is true...
  if (pass === true) {
    // ...grab current line and add it to JSON object array.
    json2018Data.data.push(dataArray[i]);
    // If we encounter an issue, tell us about it.
  } else if (pass === 1) {
    console.log("Line #" + (i + 1) + " has issues! Please check.");
    console.log(dataArray[i]);
  }

  // Otherwise if other than 2018, move on to the next entry.
}

// Convert json2018Data object to JSON string:
let jsonString = JSON.stringify(json2018Data);

// Write the JSON string to a file using fs.writeFileSync():
fs.writeFileSync("2018entries.json", jsonString, "utf8");
