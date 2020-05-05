const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe("#countOnly", () => {

  it("returns { 'Jason': 1, 'Karima': undefined, 'Fang': 2 } for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', Jason', 'Salima', 'Fang', 'Joe']", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result1["Jason"], 1);
    assert.strictEqual(result1["Karima"], undefined);
    assert.strictEqual(result1["Fang"], 2); 
  });

});





