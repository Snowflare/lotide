const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 3]), [2, 3]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [1,2] for []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [1] for []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [1, 2, 3, 4, 5, 6] for [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns [1, 2, 3, 4, 5, 6] for [4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

});






