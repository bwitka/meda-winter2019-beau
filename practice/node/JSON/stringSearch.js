let terminalArguments = process.argv;
const fs = require("fs");

let text = terminalArguments[2];
let letter = terminalArguments[3];

let textFromFile = fs.readFileSync(text, "utf8");

function characterSearch(text, letter) {
  console.log("Searching the text...");
  let charCounter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == letter) {
      charCounter++;
    }
  }
  console.log(`We found the letter ${letter} ${charCounter} time(s).`);
}

characterSearch(textFromFile, letter);
