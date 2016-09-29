var DataParser = require('../src/DataParser');

describe('Data Parser', function() {
  it('should return empty', function() {
    var dataParser = new DataParser("");
    var expected = { opal_diagnostics: {}, temperature_history: {} };
    expect(dataParser.parse()).toEqual(expected);
  });
});
