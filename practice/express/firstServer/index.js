// Require the Express package:
const express = require("express");

// instantiate an application by calling the express() method:
const app = express();

// Require the http package (create a new object of the Server class):
const http = require("http").Server(app);

const port = 8080;

// Tell http which port web server should use:
http.listen(port);

console.log(`The Express server is running on port ${port}.`);

// Express routes:
app.use("/client", express.static("web_files/"));
// app.use("/profile", express.static("user/"));

app.use(
  "/my_project",
  express.static("../../../../meda-fall2019-beau/projects/story")
);

// http://localhost:8080/client -> gets sent to -> web_files folder.
