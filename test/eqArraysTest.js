const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
// TEST CODE
assertEqual(eqArrays("Lighthouse Labs", "Bootcamp"), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true );// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, undefined], [1, 2]), false);