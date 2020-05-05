// FUNCTION IMPLEMENTATION
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

module.exports = flatten;
