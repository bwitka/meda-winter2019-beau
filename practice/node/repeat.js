/*
Warm up (10/22/19): 
1.) create file repeat.txt
2.) run a loop for 100 times
3.) each loop will add the same sentence to the file
*/

const fs = require("fs");

fs.writeFileSync("repeat.txt", "", "utf8");

for (let i = 1; i <= 100; i++) {
  if (i < 10) {
    fs.appendFileSync("repeat.txt", `${i}:  I am a sample sentence \n`, "utf8");
  } else {
    fs.appendFileSync("repeat.txt", `${i}: I am a sample sentence \n`, "utf8");
  }
}
