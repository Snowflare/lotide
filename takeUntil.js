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

const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (let i of array){
    if (callback(i)) {
      return result;
    }else {
      result.push(i);
    }
  }
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');
assertArraysEqual(results1, [1, 2, 5, 7, 2])
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])

