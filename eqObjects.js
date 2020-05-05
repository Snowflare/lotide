
const eqArrays = module.require('./eqArrays');

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

module.exports = eqObjects;

