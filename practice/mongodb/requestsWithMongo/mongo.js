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

// Tell mongoose what a Promise is by providing the Class to it.
mongoose.Promise = global.Promise;

// Finished connecting to mongoDB.

// Build a schema for our database:
let Schema = mongoose.Schema;

// Customize our schema and name it practiceSchema.
let practiceSchema = new Schema({
  note: String,
  old: Boolean,
  timesUpdate: Number,
  city: String
});

// Create a model, and hookup to schema:
let practiceModel = new mongoose.model("myfirstcollections", practiceSchema);

// CREATE
// Build new practiceSchema object:
// let newEntry = new practiceModel({
//   note: "This is the second note in my database",
//   old: false,
//   timesUpdate: 2
// });

// // Send above info to database:
// newEntry.save(error => {
//   if (error) {
//     console.error(`There was an error at MongoDB Atlas ${error}.`);
//   } else {
//     console.log(`We saved the data!`);
//   }
// });

// READ
// Read from database. find() takes 2 arguments
let searchCriteria = {
  timesUpdate: 2
};

// Search the database.
practiceModel.find(searchCriteria, (error, results) => {
  // If error...
  if (error) {
    // ...tell us about it.
    console.error(`Something went wrong :( => ${error}`);
    // Otherwise console.log() the search results.
  } else {
    console.log(results);
  }
});

// Create an object to store the data you would like to update in the findByIdAndUpdate function below.
let dataToUpdate = {
  old: true,
  city: "San Francisco"
};

// UPDATE
practiceModel.findByIdAndUpdate(
  "5ddc1d91c4949fabac6e8f6a",
  dataToUpdate,
  (error, results) => {
    if (error) {
      console.error(`Something happened: ${error}`);
    } else {
      console.log(results);
    }
  }
);

// DELETE

// First argument is the ID of the entry to delete, second argument is the callback function that runs when MongoDB responds with success or failure.
practiceModel.findByIdAndDelete();
