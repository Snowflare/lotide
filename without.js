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
  let result = []
  for (let i of arr){
    let boo = false;
    for (let j of del){
      if (i === j){
        boo = true;
      }
    }
    if (boo === false){
      result.push(i);
    }
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //returns true
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); //returns true
assertArraysEqual(without(words, ["lighthouse","hello"]), ["world"]); //returns true
assertArraysEqual(without(words, ["hello", "world", "lighthouse"]), []); //returns false
