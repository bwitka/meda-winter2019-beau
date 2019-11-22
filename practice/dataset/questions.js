// Include the fs package to read files.
const fs = require("fs");

// Because we are going to be creating a group of objects - we build a class for object consistency.
class EvictionNotice {
  // Order of parameters does matter. But order of properties doesn't matter.
  constructor(month, zip, ellisAct, condoConversion) {
    this.month = month;
    this.zip = zip;
    this.ellisAct = ellisAct;
    this.condoConversion = condoConversion;
  }
}

// Read our filtered dataset.
let evictionDataMasterString = fs.readFileSync("2018entries.json", "utf8");

// Convert the filtered dataset to a living JS object.
// Inside data, there is a key called "data" holding an array of strings.
evictionDataMasterObject = JSON.parse(evictionDataMasterString);

// Array to hold our objects that were created from the strings in our dataset.
const dataObjectsArray = [];

// Loop through each string inside of the data key array inside the "evictionDataMasterObject" variable.
for (let i = 0; i < evictionDataMasterObject.data.length; i++) {
  // Grab the current string inside the data key inside the evictionDataMasterObject, send it to the stringToObject function to convert it to an object using the Eviction class, and then whatever it returns to us, push it into the dataObjectsArray.
  dataObjectsArray.push(stringToObject(evictionDataMasterObject.data[i]));
}

// Question 1
console.log("What month had the most evictions?");

// index 0 is January, index 11 is December.
// Set counter for all months to 0 (they have the potential to increment in the switch statement below).
let months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Loop through all the converted objects and pull out the month value and compare it to the specific values for each month. If a match is found, add a 1 to that month's counter inside the months array.
for (let i = 0; i < dataObjectsArray.length; i++) {
  // months[parseInt(dataObjectsArray[i].month) - 1]++;

  switch (dataObjectsArray[i].month) {
    case "01":
      months[0]++;
      break;
    case "02":
      months[1]++;
      break;
    case "03":
      months[2]++;
      break;
    case "04":
      months[3]++;
      break;
    case "05":
      months[4]++;
      break;
    case "06":
      months[5]++;
      break;
    case "07":
      months[6]++;
      break;
    case "08":
      months[7]++;
      break;
    case "09":
      months[8]++;
      break;
    case "10":
      months[9]++;
      break;
    case "11":
      months[10]++;
      break;
    case "12":
      months[11]++;
      break;
  }
}

console.log(months);
// Use the spread operator (...) to search the months array for the largest number:
console.log(Math.max(...months));

// Create variables to keep track of the highest number and month.
let highestValue = 0;
let highestMonthIndex = -1;

// Loop through each counter of the months array.
for (let i = 0; i < months.length; i++) {
  // Ask if current highestValue is smaller than the current counter value.
  if (highestValue < months[i]) {
    // If it is, then replace the current highestValue with the current month count.
    highestValue = months[i];
    // Track the current highestMonthIndex.
    highestMonthIndex = i;
  }
}

console.log(
  `The month with the highest evictions for 2018 was month number ${highestMonthIndex +
    1}, with an index of ${highestValue} evictions.`
);

// Question 2.)
console.log(
  "How many evictions happened because of Ellis Act and Condo Conversions for the year 2018?"
);

let ellisTotal = 0;
let condoTotal = 0;
let masterTotal = 0;
let bothTotal = 0;

// Create a loop that iterates over all of our objects:
for (let i = 0; i < dataObjectsArray.length; i++) {
  let currentObject = dataObjectsArray[i];

  if (currentObject.ellisAct === "true") {
    ellisTotal++;
    masterTotal++;
  } else if (currentObject.condoConversion === "true") {
    condoTotal++;
    masterTotal++;
  }

  if (
    currentObject.ellisAct === "true" &&
    currentObject.condoConversion === "true"
  ) {
    bothTotal++;
  }
  // console.log(`The current object is: ${JSON.stringify(currentObject)}.`);
}

console.log(`
  Total because of Ellis: ${ellisTotal}; 
  Total because of Condo Conversion: ${condoTotal}; 
  Total because of either: ${masterTotal}; 
  Total because of both: ${bothTotal}.
  `);

// WEEKEND HOMEWORK (11/21/19): answer the question: which zip code had the most evictions for 2018?
// Bonus question: name the neighborhood with the most evictions.

// Question 3.)
console.log("Which zip code had the most evictions for 2018?");

/* Note: the following code was borrowed from...
https://medium.com/@AmJustSam/how-to-find-most-frequent-item-of-an-array-12015df68c65
...and modified for my needs. The comments are my own understanding of the code.
*/

// Create an empty object to store the occurrence of each zip code.
let zipCollection = {};
// Compare each zip code count to a base value of 0.
let baseValue = 0;
// Create a variable that will store value for most frequent zip code.
let mostFrequentZip;

// Loop over the data array and create a counter for each SF zip code.
for (let i = 0; i < dataObjectsArray.length; i++) {
  // Current zip code at time of iteration.
  let currentZip = dataObjectsArray[i].zip;

  // If current zip code is being passed over for first time, set its value to 1.
  if (zipCollection[currentZip] === undefined) {
    zipCollection[currentZip] = 1;
    // If current zip has been passed over previously, increment its value by 1.
  } else {
    zipCollection[currentZip] += 1;
  }

  // If value of current zip code is larger than baseValue (initially set to 0), set baseValue equal to value of current zip, and set value of most frequent zip to be the same as current zip.
  if (zipCollection[currentZip] > baseValue) {
    baseValue = zipCollection[currentZip];
    mostFrequentZip = currentZip;
  }
}

console.log(
  `The zip code with the highest number of evictions for 2018 is ${mostFrequentZip}.`
);

// Create an array of San Francisco zip codes:
const zipCodes = [
  94102,
  94103,
  94104,
  94105,
  94107,
  94108,
  94109,
  94110,
  94111,
  94112,
  94114,
  94115,
  94116,
  94117,
  94118,
  94119,
  94120,
  94121,
  94122,
  94123,
  94124,
  94125,
  94126,
  94127,
  94129,
  94130,
  94131,
  94132,
  94133,
  94134,
  94137,
  94139,
  94140,
  94141,
  94142,
  94143,
  94144,
  94145,
  94146,
  94147,
  94151,
  94158,
  94159,
  94160,
  94161,
  94163,
  94164,
  94172,
  94177,
  94188
];

// Create an object that matches SF zip codes with their neighborhoods

let sfNeighborhoodsByZip = {
  94102: "Hayes Valley/Tenderloin/North of Market",
  94103: "South of Market",
  94104: "Financial District",
  94105: "Financial District South",
  94107: "Potrero Hill",
  94108: "Chinatown",
  94109: "Polk/Russian Hill (Nob Hill)",
  94110: "Inner Mission/Bernal Heights",
  94111: "Embarcadero",
  94112: "Ingelside-Excelsior/Crocker-Amazon",
  94114: "Castro/Noe Valley",
  94115: "Western Addition/Japantown",
  94116: "Parkside/Forest Hill",
  94117: "Haight-Ashbury",
  94118: "Inner Richmond",
  94119: "Van Ness/Civic Center",
  94120: "Van Ness/Civic Center",
  94121: "Outer Richmond",
  94122: "Sunset",
  94123: "Marina",
  94124: "Bayview-Hunters Point",
  94125: "Van Ness/Civic Center",
  94126: "Van Ness/Civic Center",
  94127: "St. Francis Wood/Miraloma/West Portal",
  94129: "Presidio",
  94130: "Treasure Island",
  94131: "Twin Peaks-Glen Park",
  94132: "Lake Merced",
  94133: "North Beach/Chinatown",
  94134: "Visitacion Valley/Sunnydale",
  94137: "Van Ness/Civic Center",
  94139: "Van Ness/Civic Center",
  94140: "Van Ness/Civic Center",
  94141: "Van Ness/Civic Center",
  94142: "Van Ness/Civic Center",
  94143: "Van Ness/Civic Center",
  94144: "Van Ness/Civic Center",
  94145: "Van Ness/Civic Center",
  94146: "Van Ness/Civic Center",
  94147: "Van Ness/Civic Center",
  94151: "Van Ness/Civic Center",
  94158: "Mission Bay",
  94159: "Van Ness/Civic Center",
  94160: "Van Ness/Civic Center",
  94161: "Van Ness/Civic Center",
  94163: "Van Ness/Civic Center",
  94164: "Van Ness/Civic Center",
  94172: "Van Ness/Civic Center",
  94177: "Van Ness/Civic Center",
  94188: "Van Ness/Civic Center"
};

// <<< BONUS >>> Question 4.)
console.log("Which neighborhood had the most evictions in the year 2018?");

// Create an array of the keys from the sfNeighborhoodsByZip object. Loop through that array and compare each key with the mostFrequentZip variable. When they match, store the value for that key in the neighborhood variable.
let zipCodeKeys = Object.keys(sfNeighborhoodsByZip);
let neighborhood;
for (let i = 0; i < zipCodeKeys.length; i++) {
  if (zipCodeKeys[i] == mostFrequentZip) {
    neighborhood = sfNeighborhoodsByZip[zipCodeKeys[i]];
  }
}

console.log(
  `The neighborhood with the most evictions in 2018 was ${neighborhood}.`
);

/******************************************************************************/

function stringToObject(string) {
  // Split up the entry string into its individual parts.
  let entryArray = string.split(",");

  // Split up the Date string into multiple parts.
  let entryDate = entryArray[5].split("/");

  // Create a new object and provide the proper values.
  let evictionObject = new EvictionNotice(
    entryDate[0],
    entryArray[4],
    entryArray[17],
    entryArray[18]
  );

  // Return new object to call location.
  return evictionObject;
}
