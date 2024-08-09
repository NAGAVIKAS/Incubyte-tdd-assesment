const calculator = require('../index');

describe('calculator', () => {
  
  describe('empty string testcase', () => {
    checkSum("",0);
  });
  
  describe('one or two numbers testcase', () => {
    checkSum("1",1);
    checkSum("5",5);
    checkSum("4,2",6);
    checkSum("88,36",124);
  });

  describe('any amount of numbers testcase', () => {
    checkSum("1,2,3,4",10);
    checkSum("88,36,111,8,42,15",300);
  });

  function checkSum(inputString,output) {
    test(`evaluate "${inputString}" to ${output}`, () => {
      expect(calculator.add(inputString)).toBe(output);
    });
  }
});
