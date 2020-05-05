// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let res = {};
  for (let i of allItems){
    if (itemsToCount[i]){
      if (res[i]){
        res[i] += 1;
      }else {
        res[i] = 1;
      }
    }
  }
  return res;
}

module.exports = countOnly;

