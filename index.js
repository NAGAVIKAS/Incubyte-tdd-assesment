var calculator = {
    add: function(inputString) {
        let numbers = this.getNumbers(inputString);
        return this.getSum(numbers);
    },
    getNumbers: function(inputString) {
        var delimiters = [',','\n'];
        return this.getDelimitedNumbers([inputString],delimiters);
    },
    getDelimitedNumbers: function(numbersDelimited, delimiters) {
        if(delimiters.length === 0) {
            let numbersFiltered = numbersDelimited.filter((num) => num.length !== 0);
            return numbersFiltered;
        }
        var delimiter = delimiters.pop();
        let delimitedNumbers = [];
        for(var i = 0; i < numbersDelimited.length; i++){
            delimitedNumbers = delimitedNumbers.concat(numbersDelimited[i].split(delimiter));
        }
        return this.getDelimitedNumbers(delimitedNumbers,delimiters);
    },
    getSum: function(numbers) {
        return numbers.reduce((res, num) => res + parseInt(num || 0), 0);
    }
};

module.exports = calculator;