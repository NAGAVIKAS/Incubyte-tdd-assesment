var calculator = {
    add: function(inputString) {
        let numbers = this.getNumbers(inputString);
        return this.getSum(numbers);
    },
    getNumbers: function(inputString) {
        return inputString.split(/,|\n/g);
    },
    getSum: function(numbers) {
        return numbers.reduce((res, num) => res + parseInt(num || 0), 0);
    }
};

module.exports = calculator;