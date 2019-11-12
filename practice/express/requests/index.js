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

// next line responds to any post request (two arguments: route, arrow function that will fire whenever it gets a request):
app.post("/updateData", (request, response) => {
  console.log(request.body.firstName);

  let objectFromRequest = request.body;

  console.log(objectFromRequest.message);

  let text = objectFromRequest.message;

  console.log(`We received a request for updateData: ${text}`);

  // if you don't want to send any data back, you can use .sendStatus(). You can only use sendStatus() or send once to 'fulfill' front-end request.
  // response.sendStatus(200);

  let data = {
    text: "Thank you for your input."
  };

  response.send(data);
});
