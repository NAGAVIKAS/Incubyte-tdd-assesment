var calculator = {
    add: function(inputString) {
        let numbers = inputString.split(',');
        let sum = numbers.reduce((res, num) => res + parseInt(num || 0), 0);
        return sum;
    }
};

module.exports = calculator;