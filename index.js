var calculator = {
    add: function(inputString) {
        let numbers = this.getNumbers(inputString);
        return this.getSum(numbers);
    },
    getNumbers: function(inputString) {
        var delimiters = [',','\n'];

        if(this.customDelimiterExists(inputString)){
            delimiters.push(this.getCustomDelimiter(inputString));
            inputString = this.removeFirstLine(inputString);
        }
        return this.getDelimitedNumbers([inputString],delimiters);
    },
    customDelimiterExists: function(inputString) {
        return /^\/\//.test(inputString);
    },
    getCustomDelimiter: function(inputString) {
        return inputString.charAt(2);
    },
    removeFirstLine: function(inputString) {
        return inputString.substring(inputString.indexOf('\n') + 1);
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