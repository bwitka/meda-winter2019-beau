// include the fs package to read files:
const fs = require("fs");

// Note: due to complications with commas in various values for Production Company and Distributer, I had to reduce the data to only include Title and Release Year.
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

/******************************************************** QUESTIONS ************************************************************/
console.log(`\n`);
console.log("DATA SET QUESTIONS:");
console.log(`\n`);
/********** QUESTION ONE **********/
// How many times does the film title "Venom" appear in the data set?
console.log(
  "1.) How many times does the film title 'Venom' appear in the data set?"
);

let counter1 = 0;

for (let i = 0; i < dataObjectsArray.length; i++) {
  if (dataObjectsArray[i].title === "Venom") {
    counter1 += 1;
  }
}
console.log(
  `ANSWER: The film title "Venom" appears ${counter1} times in the data set.`
);
console.log(`\n`);

/********** QUESTION TWO **********/
// How many film title names consist of one word?
console.log("2.) How many film title name entries consist of two words?");

// Create a function to loop through a string and tally the number of empty spaces (+ 1).
function wordCounter(str) {
  let total = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      total += 1;
    }
  }
  return total;
}

let counter2 = 0;

for (let i = 0; i < dataObjectsArray.length; i++) {
  if (wordCounter(dataObjectsArray[i].title) === 2) {
    counter2 += 1;
  }
}

console.log(
  `ANSWER: There are ${counter2} film title entries that consist of two words.`
);
console.log(`\n`);

/********** QUESTION THREE **********/
// How many film title names are longer than one word?
console.log("3.) How many film title name entries are longer than one word?");

let counter3 = 0;

for (let i = 0; i < dataObjectsArray.length; i++) {
  if (wordCounter(dataObjectsArray[i].title) === 1) {
    counter3 += 1;
  }
}

console.log(
  `ANSWER: There are ${dataObjectsArray.length -
    counter3} name entries that are longer than one word.`
);

console.log(`\n`);
/********** QUESTION FOUR **********/
// How many film title names begin with the letter 'B'?
console.log("4.) How many film title name entries begin with the letter 'B'?");

let counter4 = 0;

for (let i = 0; i < dataObjectsArray.length; i++) {
  if (dataObjectsArray[i].title.charAt(0) === "B") {
    counter4 += 1;
  }
}

console.log(
  `ANSWER: There are ${counter4} entries that begin with the letter "B".`
);

console.log(`\n`);
/********** QUESTION FIVE **********/
// How many film title names include a hyphen?
console.log("5.) How many film title names include a hyphen?");

let counter5 = 0;
for (let i = 0; i < dataObjectsArray.length; i++) {
  if (dataObjectsArray[i].title.includes("-")) {
    counter5 += 1;
  }
}

console.log(
  `ANSWER: There are ${counter5} title name entries that include at least one hyphen.`
);
console.log(`\n`);
