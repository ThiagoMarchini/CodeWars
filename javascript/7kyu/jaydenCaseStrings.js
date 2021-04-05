const assert = require('assert');

String.prototype.toJadenCase = function () {
  const array = this.split(' ');
  let result = array.map((word) => word[0].toUpperCase() + word.substr(1));
  result = result.join(' ');
  return result;
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
assert.strictEqual(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
