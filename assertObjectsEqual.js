
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
const eqObjects = function(object1, object2){
  let actual = Object.keys(object1);
  let expected = Object.keys(object2);
  if (actual.length !== expected.length){
    return false;
  }

  for (let i of actual) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])){
      if(!eqArrays(object1[i], object2[i])){
        return false;
      }
    }else if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
  
}
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  const tick = String.fromCodePoint(0x2705);
  const cross = String.fromCodePoint(0x1f6d1);

  if (eqObjects(actual, expected)) {
    console.log(tick + tick + tick + `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(cross + cross + cross + `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false