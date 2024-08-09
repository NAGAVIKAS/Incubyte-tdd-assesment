var calculator = {
    add: function(inputString) {
        let numbers = inputString.split(/,|\n/g);
        let sum = numbers.reduce((res, num) => res + parseInt(num || 0), 0);
        return sum;
    }
};

module.exports = calculator;