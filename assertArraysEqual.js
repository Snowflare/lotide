// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected){
  let bool = true;
    for (let i = 0; i < Math.max(actual.length, expected.length); i++) {
      if (actual[i] !== expected[i]) {
        bool = false;
      }
    }
    if (bool) {;
      return true;
    } else {
      return false;
    }
}
const assertArraysEquals = function(actual, expected){
  if (eqArrays(actual, expected)) {
    console.log(String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + `Assertion Passed: ${actual} !== ${expected}`);
  }
}
