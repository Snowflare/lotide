
const tail = function(arr) {
  let arrcopy = [];
  for (let i of arr) {
    arrcopy.push(i);
  }
  return arrcopy.slice(1);
};

module.exports = tail;