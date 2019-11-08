const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port = 3000;

http.listen(port);

console.log(`Express server is running on port number ${port}.`);

// Need to read data sent through POST request:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes:
app.use("/", express.static("client/"));

app.post("/updateData", (request, response) => {
  console.log(request.body);
  console.log("We received a request to updateData.");
  response.sendStatus(200);
});
