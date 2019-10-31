var eduardoLibrary = require("./library.js");
var coolLibrary = require("./library2.js");

function runAll(nA, userName) {
  var results = eduardoLibrary.mathify(nA[0], nA[1], nA[2], nA[3]);

  //eduardoLibrary.shouldNotBeAccessed();

  console.log(results);

  coolLibrary.sayHello(userName);

  console.log(coolLibrary.author);
}

module.exports = {
  runAll: runAll
};
