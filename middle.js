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
const assertEqual = function(actual, expected) {
  let prettyactual = actual;
  let prettyexpected = expected;
  if (typeof actual === 'string') {
    prettyactual = '"' + actual + '"';
  }
  if (typeof expected === 'string') {
    prettyexpected = '"' + expected + '"';
  }

  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + `Assertion Passed: ${prettyactual} === ${prettyexpected}`);
  } else {
    console.log(String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + `Assertion Failed: ${prettyactual} !== ${prettyexpected}`);
  }
};
const middle = function(array) {
  if (array.length === 1 || array.length === 2 || array === []){
    return [];
  }else if (array.length % 2 === 0){
    return array.slice(Math.floor(array.length / 2) - 1, Math.floor(array.length /2) + 1);
  }else if (array.length % 2 === 1){
    return array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2));
  }
}

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 3]), [2, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);