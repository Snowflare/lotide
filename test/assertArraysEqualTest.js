const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
assertArraysEqual(['light'],['light']);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([2, 1], [1, 2]);
// assertArraysEqual([[1]], [[1]]);