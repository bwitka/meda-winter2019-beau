const mongoose = require("mongoose");

const dbConnect =
  "mongodb+srv://commentsUser:m0ng0db!@cluster0-t7l2r.mongodb.net/test?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useFindAndModify: false
  //   useUnifiedTopology: true
};

mongoose.connect(dbConnect, options, error => {
  if (error) {
    console.error(
      "Something happened connecting to the database! Can not connect!",
      error
    );
  } else {
    console.log("Successfully connected to mongoDB!");
  }
});

let db = mongoose.connection;

db.on("error", console.error.bind(console, "mongoDB connection error: "));

mongoose.Promise = global.Promise;

// Finished connecting to mongoDB.
