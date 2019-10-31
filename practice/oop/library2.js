function sayHello(name) {
  console.log("Hello, " + name + "!");
}

var author = "Eduardo";

module.exports = {
  author: author,
  // Key is the name that other files call, and the value is the data or function to run/return when the key is called.
  sayHello: sayHello
};
