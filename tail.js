const assertEqual = function(actual, expected) {
  let prettyactual = actual;
  let prettyexpected = expected;
  let bool = true;
  if (typeof actual === 'string') {
    prettyactual = '"' + actual + '"';
  }
  if (typeof expected === 'string') {
    prettyexpected = '"' + expected + '"';
  }
  if (typeof actual === 'object' || expected === 'object') {
    for (let i = 0; i < Math.max(actual.length, expected.length); i++) {
      if (actual[i] !== expected[i]) {
        bool = false;
      }
    }
  
    if (bool) {
      console.log(String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + `Assertion Passed: ${actual} === ${expected}`);
      return;
    } else {
      console.log(String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + `Assertion Passed: ${actual} !== ${expected}`);
      return;
    }
  }

  if (actual === expected) {
    console.log(String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + String.fromCodePoint(0x2705) + `Assertion Passed: ${prettyactual} === ${prettyexpected}`);
  } else {
    console.log(String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + String.fromCodePoint(0x1f6d1) + `Assertion Passed: ${prettyactual} !== ${prettyexpected}`);
  }
};
const tail = function(arr) {
  let arrcopy = [];
  for (let i of arr) {
    arrcopy.push(i);
  }
  return arrcopy.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);