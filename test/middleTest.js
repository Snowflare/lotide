const assertArraysEqual = module.require('../assertArraysEqual');
const middle = module.require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 3]), [2, 3]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);