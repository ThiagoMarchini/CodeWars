const assert = require('assert')

function XO(str) {
  const array = str.split('');
  const qtdX = array.reduce(((acc, letter) => letter === 'x' || letter === 'X' ? acc += 1 : acc), 0);
  const qtdO = array.reduce(((acc, letter) => letter === 'o' || letter === 'O' ? acc += 1 : acc), 0);
  return (qtdX === qtdO);
}

assert.strictEqual(XO('xo'),true);
assert.strictEqual(XO("xxOo"),true);
assert.strictEqual(XO("xxxm"),false);
assert.strictEqual(XO("Oo"),false);
assert.strictEqual(XO("ooom"),false);