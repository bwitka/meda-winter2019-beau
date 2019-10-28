// Remember format to send a command to this file: node . <fileName> <color> <text>

const fs = require("fs");
let terminalText = process.argv;
lat valid = true;

let htmlTitle = "Beau's Magic HTML Generator";

/* 
White lists and black lists are two ways of filtering data. If you have a white list then you will filter in only data on the white list; if you have a black list you will filter out only data on that list.
Whitelist - only these things.
Blacklist - everything but these things.
A whitelist is a list of things that you know are good.
A blacklist is a list of things you know are bad.
*/

// Note: examples of data filtering below are very crude.

// Example of blacklist:
if (terminalText[3] == undefined || terminalText[3] == "none") {
  console.log(
    "There was no color specified, therefore the background color will default to white."
  );

  terminalText[3] = "transparent";
}

// Example of whitelist:
if (terminalText[3] != "red" || terminalText[3] != "green") {
  console.log("Sorry, that is not a proper color value.");
  valid = false;
}

if (valid == false) {
  return;
}

let htmlStyle = `
body {
    background: ${terminalText[3]};
    }

h1 {
    text-align: center;
    font-family: "Helvetica Neue", sans-serif;
}
`;
let htmlBody = `
<h1>My First WebPage!</h1>
<p>${terminalText[4]}</p>
`;
let htmlFileName = terminalText[2];
let fullFileName = `${htmlFileName}.html`;
let html;

html = `
<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>${htmlTitle}</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">

        <link rel="stylesheet" href="css/styles.css?v=1.0">

        <style>${htmlStyle}</style>

    </head>

    <body>
        ${htmlBody}
        <script src="js/scripts.js"></script>
    </body>
</html>
`;

if (htmlFileName == "" || htmlFileName == undefined) {
  console.log(
    "You are missing a file name, cannot continue. ERROR: 302834u032"
  );
  return;
}

// Note: the utf8 below is for writeFileSync, whereas the utf-8 in the html file's meta charset is for the browser.
fs.writeFileSync(fullFileName, html, "utf8");

console.log("Generation of HTML file has been completed! Check your folder!");
