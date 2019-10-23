const fs = require("fs");

// introducing string literals:
const doubleQuotes = "This is a string";
const singleQuotes = "This is a string";
const stringLiteral = `this
is
a
string`;

const html =
  "<html>" +
  "<head>" +
  "<style></style>" +
  "</head>" +
  "<body></body>" +
  "<html>";

const html2 = "<html><head><style></style></head><body></body><html>";

const html3 = `
<html>
    <head>
        <style></style>
    </head>
    <body>
    </body>
</html>
`;

/* Practice exercise (10/23/19):
1.) update this script to write the text of the html3 variable to a file called "sample.html"
*/

fs.writeFileSync("sample.html", `${html3}`, "utf8");
