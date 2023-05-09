var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Returns the factorial of a given integer (5).', () => {
      const input = 5;
      const expectedResult = 120;

      const result = Calculate.factorial(input);

      assert.strictEqual(result, expectedResult);
    });
    it('Returns the factorial of a given integer (3).', () => {
      const input = 3;
      const expectedResult = 6;

      const result = Calculate.factorial(input);

      assert.strictEqual(result, expectedResult);
    });
    it('Returns the factorial of zero.', () => {
      const input = 0;
      const expectedResult = 1;

      const result = Calculate.factorial(input);

      assert.strictEqual(result, expectedResult);
    });
    it('throws an error if passed a number less than 0', () => {
      assert.throws(() => {Calculate.factorial(-1)}, RangeError);
    });
  });
});