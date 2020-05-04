// FUNCTION IMPLEMENTATION
const eqArrays = function(actual,expected){
  if (actual.length !== expected.length){
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
  
}
const assertArraysEqual = function(actual, expected){
  const tick = String.fromCodePoint(0x2705);
  const cross = String.fromCodePoint(0x1f6d1);

  if (eqArrays(actual, expected)) {
    console.log(tick + tick + tick + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(cross + cross + cross + `Assertion Failed: ${actual} !== ${expected}`);
  }
}
// FUNCTION IMPLEMENTATION

const middle = function(array) {
  if (array.length === 1 || array.length === 2 || array === []){
    return [];
  }else if (array.length % 2 === 0){
    return array.slice(Math.floor(array.length / 2) - 1, Math.floor(array.length /2) + 1);
  }else if (array.length % 2 === 1){
    return array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2));
  }
}

module.exports = middle;