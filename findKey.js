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

const findKey = function(obj, func){
  for (key in obj){
    if (func(obj[key])){
      return key;
    }
  }
}
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
assertEqual(result, 'noma')
