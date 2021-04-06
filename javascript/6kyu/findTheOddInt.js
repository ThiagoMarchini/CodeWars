// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const assert = require('assert');

function findOdd(A) {
  const uniques = [...new Set(A.map(item => item))];
  let number = 0;
  uniques.forEach(element => {
    let count = 0;
    for (let index of A) {
      if (index === element) {
        count += 1;
      }
    }
    if (count & 2 !== 0) {
      number = element;
    }
  });
  return number;
}

assert.deepStrictEqual(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
assert.deepStrictEqual(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
assert.deepStrictEqual(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
assert.deepStrictEqual(findOdd([10]), 10);
assert.deepStrictEqual(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
assert.deepStrictEqual(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);