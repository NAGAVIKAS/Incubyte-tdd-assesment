var calculator = {
    add: function(inputString) {
        let numbers = inputString.split(',');
        return parseInt(numbers[0] || 0) + parseInt(numbers[1] || 0);
    }
};

module.exports = calculator;