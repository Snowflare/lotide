// FUNCTION IMPLEMENTATION
const findKeyByValue = function(obj, value){
  let keyArr = Object.keys(obj);
  for (let i of keyArr){
    if (obj[i] === value){
      return i;
    }
  }
}
module.exports = findKeyByValue;