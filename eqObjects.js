
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
  const actual = Object.keys(object1);
  const expected = Object.keys(object2);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true 

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false