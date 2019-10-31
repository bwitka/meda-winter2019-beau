function mathify(num1, num2, num3, num4) {
  return (num1 / num2) * (num3 % num4);
}

function shouldNotBeAccessed() {
  console.log("hello");
}

module.exports = {
  mathify: mathify,
  shouldNotBeAccessed
};
