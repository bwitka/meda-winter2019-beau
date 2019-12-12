// include the fs package to read files:
const fs = require("fs");

// Build a class for the objects to be created from the Film_Locations data:
class FilmLocations {
  constructor(title, releaseYear) {
    this.title = title;
    this.releaseYear = releaseYear;
  }
}

// Use fs.readFileSync() to store filtered dataset in a new variable:
let filteredDataString = fs.readFileSync("2018entries.json", "utf8");

// Convert the above variable to a JavaScript object for future manipulation:
filteredDataObject = JSON.parse(filteredDataString);

// Make an array to store objects created from strings found in "data" portion of dataset:
const dataObjectsArray = [];

// Create a function that will build new objects from the FilmLocations class:
function stringToObject(string) {
  // Split up the entry string into its individual parts.
  let entryArray = string.split(",");

  // Create a new object and provide the proper values.
  let filmObject = new FilmLocations(entryArray[0], entryArray[1]);

  // Return new object to call location.
  return filmObject;
}

// Loop through each string inside of the data key array inside the "filteredDataObject" variable.
// Remember that: inside filteredDataObject there is a key called "data" holding an array of strings.
for (let i = 0; i < filteredDataObject.data.length; i++) {
  // Grab the current string inside the data key inside the filteredDataObject, send it to the stringToObject function to convert it to an object using the FilmLocations class, and then whatever it returns to us, push it into the dataObjectsArray.
  dataObjectsArray.push(stringToObject(filteredDataObject.data[i]));
}

console.log(dataObjectsArray);

/********** QUESTION ONE **********/

/********** QUESTION TWO **********/

/********** QUESTION THREE **********/

/********** QUESTION FOUR **********/

/********** QUESTION FIVE **********/
