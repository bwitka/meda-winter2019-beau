//  Use the mongoose package so we can talk to MongoDB Atlas.
const mongoose = require("mongoose");

// The credentials and location to log into the MongDB account. This should normally be stored in a more secure location such as a separate file that's then listed in your .gitignore file (to keep off of GitHub).
const dbConnect =
  "mongodb+srv://practiceUser:m0ng0db2019!@cluster0-t7l2r.mongodb.net/test?retryWrites=true&w=majority";

// Additional options when connecting to MongoDB.
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

// Actually connect to the MongoDB database. Attach the login credentials string and the options object.
mongoose.connect(dbConnect, options, error => {
  // When MongoDB server responds, test if an error was received.
  if (error) {
    // If there was an error, display it.
    console.error(
      "Something happened connecting to the database! Can not connect!",
      error
    );
    // If no error, congrats!
  } else {
    console.log("Successfully connected to mongoDB!");
  }
});

// Store the object "connection" in a variable called db.
let db = mongoose.connection;

// Call the "on" function - hookup any MongoDB errors we receive to the console.
db.on("error", console.error.bind(console, "mongoDB connection error: "));

// Tell mongoose what a Promise is by providing the CLass to it.
mongoose.Promise = global.Promise;

// Finished connecting to mongoDB.
