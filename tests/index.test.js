const calculator = require('../index');

describe('calculator',()=>{
  test('evaluate "" to 0', () => {
    expect(calculator.add("")).toBe(0);
  });
});
