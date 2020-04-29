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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== ' '){
      if (results.hasOwnProperty(sentence[i].toLowerCase())){
        results[sentence[i].toLowerCase()].push(i);
      }else{
        results[sentence[i]] = [i];  
      }
    }    
  }
  return results;
};
const result1 = letterPositions("lighthouse in the house");
assertArraysEqual(result1.l,[0]);
assertArraysEqual(result1.i,[1, 11]);
assertArraysEqual(result1.g,[2]);
assertArraysEqual(result1.h,[3, 5, 15, 18]);
