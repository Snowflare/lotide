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
    console.log(String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + `Assertion Passed: ${prettyactual} !== ${prettyexpected}`);
  }
};
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
  
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

console.log(eqArrays([1, 2, 3], [1, 2, 3]) )// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]) )// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]) )// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

console.log(eqArrays([1, 2], [1, 2, 3]) )
console.log(eqArrays([1, 2, 3], [1, 2]) )
console.log(eqArrays([1, 2, undefined], [1, 2]) )