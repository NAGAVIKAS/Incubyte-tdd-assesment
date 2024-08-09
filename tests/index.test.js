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

  describe('handle new line between numbers', () => {
    checkSum("1\n2\n3",6);
    checkSum("1,2\n3,4\n5",15);
  });

  describe('custom delimiter', () => {
    checkSum('//;\n1;2',3);
  });

  describe('negative numbers', () => {
    var errorCaught = null;
    try {
      calculator.add('-1\n3,-26');
    }
    catch (err) {
      errorCaught = err;
    }

    test('throw an exception', () => {
      expect(errorCaught).not.toBe(null);
    });
    test('include the first invalid negative term in the exception', () => {
      expect(errorCaught.indexOf('-1')).not.toBe(-1);
    });
    test('include the second invalid negative term in the exception', () => {
      expect(errorCaught.indexOf('-26')).not.toBe(-1);
    });
  });

  function checkSum(inputString,output) {
    test(`evaluate "${inputString.replace(/\n/g,'\\n')}" to ${output}`, () => {
      expect(calculator.add(inputString)).toBe(output);
    });
  }
});
