const fs = require("fs");
let terminalText = process.argv;

let htmlTitle = "Beau's Magic HTML Generator";

if (terminalText[3] == undefined) {
  console.log(
    "There was no color specified, therefore the background color will default to white."
  );

  terminalText[3] = "white";
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
