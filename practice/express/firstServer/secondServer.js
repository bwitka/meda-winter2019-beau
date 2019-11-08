/*
AM Warm Up Assignment (11/8/19):
1.) create new file secondServer.js
2.) write, line by line, a new Express server
3.) use port 3000 & console.log() the port
4.) no routes required
*/

// require Express:
const express = require("express");

// instantiate an application via the express() method:
const app = express();

// require http package & create a new object of the Server class:
const http = require("http").Server(app);

// set port number:
const port = 3000;

// tell http which port web server should use:
http.listen(port);

// console.log() which port server is using:
console.log(`Congrats! Your web server is active and using port ${port}.`);
