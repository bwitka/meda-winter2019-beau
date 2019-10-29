const fs = require("fs");

/*
Exercise:
1.) try to read file 'ex.txt'
2.) if file does not exist, create it (no content inside of text file)
3.) if it does exist, append a string
*/

// try the following code:
try {
  const fileText = fs.readFileSync("ex.txt", "utf8");
  // ...if there's an error, run the following code:
} catch (error) {
  console.error("We tried to read ex.txt but couldn't find the file.");
  fs.writeFileSync("ex.txt", "", "utf8");
  // ...whether there was an error or not, run this code:
} finally {
  fs.appendFileSync("ex.txt", "This is a string.\n", "utf8");
}

console.log("The program has finished!");
