const calculator = require('../index');

describe('calculator',()=>{
  checkSum("",0);

  function checkSum(inputString,output) {
    test(`evaluate "${inputString}" to ${output}`, () => {
      expect(calculator.add(inputString)).toBe(output);
    });
  }
});
