const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for eqObjects(ab, ba)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true); // => true 
  }); 
  it("returns false for eqObjects(ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };
    const ab = { a: "1", b: "2" };
    assert.strictEqual(eqObjects(ab, abc), false); // => false
  }); 
  it("returns true for eqObjects(cd, dc)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true); // => true
  }); 
  it("returns false for eqObjects(cd, cd2)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false); // => false
  }); 
});








