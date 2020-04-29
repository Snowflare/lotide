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
const without = function(arr, del){
  let result = arr;
  for (let i of arr){
    for (let j of del){
      if (i === j){
        result.splice(arr.indexOf(i),1)
      }
    }
  }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //returns false
assertArraysEqual(words, ["hello", "world"]); //returns true
const newWords = ["hello", "world", "lighthouse"];
without(newWords, ["lighthouse","hello"]);
assertArraysEqual(newWords, ["world"]); //returns true
assertArraysEqual(newWords, ["world", "hello"]); //returns false
