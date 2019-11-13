// include the fs package (built in)
const fs = require("fs");
// include express.js, via npm
const express = require("express");
// include bodyParser, which comes w/ express.js
const bodyParser = require("body-parser");
// create an express.js server object
const app = express();
// include the HTTP package (built in) and attach the express server object to the HTTP object
const http = require("http").Server(app);
// create a variable that will hold the port number we want to use
const port = 3000;
// pass the port variable to the listen function for the HTTP server
http.listen(port);
// let the developer know that express.js is now running
console.log(`Express server is running on port number ${port}.`);

// Need to read data sent through POST request:
app.use(bodyParser.json());
// give bodyParser specific options to run off of
app.use(bodyParser.urlencoded({ extended: false }));

/******** BELOW = CUSTOM CODE FOR EXPRESS.JS  ********/

// Routes:
// first argument is the route path; second argument is the directory path to load when someone requests the route name
app.use("/", express.static("client/"));

// next line responds to any post request (two arguments: route, arrow function that will fire whenever it gets a request):
// a http post handler called /submitComment
// first argument = HTTP post route name, second argument = callback function. The callback function will run every time someone requests the /submitComment post handler
// callback function parameters: request holds the object that was sent to us through the Internet; the response object holds a reference of where to sent the response to (e.g. IP address)
app.post("/submitComment", (request, response) => {
  // rename the data sent to us (located in request.body) to something simpler like objectFromRequest
  let objectFromRequest = request.body;

  console.log(objectFromRequest);

  // variable to make sure the file name is the sane every time
  let filename = "commentHistory.json";

  // if the file exists...
  if (fs.existsSync(filename)) {
    // ...read the file and store the contents in the variable comments
    let comments = fs.readFileSync(filename, "utf8");
    // ...parse the JSON and reuse the same comments variable
    comments = JSON.parse(comments);
    // ...add the new objectFromRequest object to the array inside of the comments object
    comments.commentsArray.push(objectFromRequest);
    // ...then convert comments back into a string as JSON
    comments = JSON.stringify(comments);
    // ...finally save the JSON string to a file
    fs.writeFileSync(filename, comments, "UTF8");

    console.log("New comment saved to hard drive.");
  } else {
    // if the file doesn't exist...
    // ...we pre-build the object (which includes the comment we just received) to save as JSON
    let comments = { commentsArray: [objectFromRequest] };
    // ...convert it to an actual JSON string
    comments = JSON.stringify(comments);
    // ...finally save the JSON string to a new file
    fs.writeFileSync(filename, comments, "UTF8");

    console.log(
      "Note: No existing file detected. Creating new file and saving comment to hard drive."
    );
  }

  // {commentsArray: []}

  // if you don't want to send any data back, you can use .sendStatus(). You can only use sendStatus() or send once to 'fulfill' front-end request.

  response.sendStatus(200);
});

// create another post handler:
app.post("/loadComments", (request, response) => {});
