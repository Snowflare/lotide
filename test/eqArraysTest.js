const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
// TEST CODE
describe("#eqObjects", () => {
  it("returns false for eqArrays('Lighthouse Labs', 'Bootcamp')", () => {
    assert.strictEqual(eqArrays("Lighthouse Labs", "Bootcamp"), false);
  });
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false
  });
  it("returns true for eqArrays(['1', '2', '3'], ['1', '2', '3'])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
  });
  it("returns false for eqArrays(['1', '2', '3'], ['1', '2', 3])", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
  });
  it("returns false for eqArrays([1, 2], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
  it("returns false for eqArrays([1, 2, 3], [1, 2])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });
  it("returns false for eqArrays([1, 2, undefined], [1, 2])", () => {
    assert.strictEqual(eqArrays([1, 2, undefined], [1, 2]), false);
  });
});














