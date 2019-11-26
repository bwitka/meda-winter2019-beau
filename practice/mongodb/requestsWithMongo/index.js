// Includes into our code, the Mongoose.js package.
const mongoose = require("mongoose");
// Includes into our code, the Express.js, provided by NPM.
const express = require("express");
// Includes into our code Body Parser, comes with Express.js
const bodyParser = require("body-parser");
// Create an Express.js server object.
const app = express();
// Includes the HTTP package (builtin), and we attach our Express.js server object to the HTTP object.
const http = require("http").Server(app);
// We create a variable that will hold the port number we want to use.
const port = 3000;
// We pass the port variable to the listen function for the HTTP server.
http.listen(port);

// URL to access our MongoDB database.
const dbConnect =
  "mongodb+srv://commentsUser:m0ng0db!@cluster0-t7l2r.mongodb.net/commentsproject?retryWrites=true&w=majority";

// Additional options when connecting to MongoDB.
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

// Actually connect to MongoDB Atlas.
mongoose.connect(dbConnect, options, error => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully connected to MongoDB Atlas!");
  }
});

//link up MongoDB errors with the console, and link up the definition of Promises to Mongoose.
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error: "));
mongoose.Promise = global.Promise;

//Building MongoDB Schema.
let Schema = mongoose.Schema;
let commentsSchema = new Schema({
  message: String,
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  timestamp: Date
});

// Create a Model for the comments collection using the comments Schema.
let commentsModel = new mongoose.model("comments", commentsSchema);

// Signifying the Developer that Express.js is now running.
console.log("Express server running on port " + port);

// Needed to read data sent through POST request.
app.use(bodyParser.json());
// Gives Body Parser specific options to run off of.
app.use(bodyParser.urlencoded({ extended: false }));

// Custom Code for Express.js after this line.

// Routes
// First Argument is the route name, second argument is directory to load when someone requests the route name.
app.use("/", express.static("client/"));

// An HTTP Post Handler called /submitComment.
// First argument is HTTP Post route name, second argument is the callback function. The callback function will run every time someone requests the /submitComment Post handler.
// Callback function parameters: request holds the object that was sent to us through the Internet, the response object holds a reference of where to send the response to (like IP address).
app.post("/submitComment", (request, response) => {
  // Rename the data sent to us (located in request.body) to something simpler like objectFromRequest.
  let objectFromRequest = request.body;

  console.log(objectFromRequest);

  // let text = objectFromRequest.message;
  // console.log("We recieved a request for/submitComment: " + text);

  objectFromRequest.age = parseInt(objectFromRequest.age);
  objectFromRequest.timestamp = new Date();

  let newComment = new commentsModel(objectFromRequest);
  newComment.save(error => {
    if (error) {
      console.log(error);
    } else {
      console.log("Saved a new comment to the database!");
    }
  });

  // If you don't want to send any data back, you can use .sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request.
  response.sendStatus(200);
});

// A second HTTP Post Handler called /loadComments
app.post("/loadComments", (request, response) => {
  // Read all the comments from mongoDB Atlas:
  commentsModel.find({}, (error, results) => {
    if (error) {
      // If error, notify user:
      console.log(error);
    } else {
      // Build an object that the front-end expects...
      let objectToSend = {
        commentsArray: results
      };
      // ...and send it.
      response.send(objectToSend);
    }
  });
});
