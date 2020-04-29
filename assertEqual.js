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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);