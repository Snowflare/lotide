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

const flatten = function(arr){
  let res = []
  for (let i of arr){
    if (Array.isArray(i)){
      res = res.concat(flatten(i))
    }else{
      res.push(i);
    }
  }
  return res;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 4, [[[[[4]]]]]], 5, [6]]));