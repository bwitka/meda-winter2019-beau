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
}

console.log(`
  Total because of Ellis: ${ellisTotal}; 
  Total because of Condo Conversion: ${condoTotal}; 
  Total because of either: ${masterTotal}; 
  Total because of both: ${bothTotal}.
  `);

// Question 3.)
console.log("Which zip codes had the most evictions for 2018?");

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
