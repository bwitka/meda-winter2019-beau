const fs = require("fs");

// Write files: will overwrite existing file with same name.
// syntax: fs.writeFileSync(file, data[, options])

fs.writeFileSync(
  "myFirstFile.txt",
  "I just replaced the previous text.",
  "utf8"
);

fs.writeFileSync(
  "mySecondFile.txt",
  "This is a sample sentence for practice purposes.",
  "utf8"
);

// Read files: must load as utf8 to print string; otherwise will return a buffer.
// syntax: fs.readFileSync(path[, options])

const textThatWasReadFromFile = fs.readFileSync("myFirstFile.txt", "utf8");

console.log(textThatWasReadFromFile);

// Update files: adds to the end of the file.
// Syntax: fs.appendFileSync(path, data[, options])

fs.appendFileSync("myFirstFile.txt", "This file has been updated.", "utf-8");
