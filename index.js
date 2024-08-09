var calculator = {
    add: function(inputString) {
        let numbers = this.getNumbers(inputString);
        this.checkNegative(numbers);
        return this.getSum(numbers);
    },
    checkNegative: function(numbers) {
        var negativeNumbers = numbers.filter((num) => parseInt(num) < 0);
        if(negativeNumbers.length > 0)
            throw "negative numbers, " + negativeNumbers.join(', ') + "are not allowed";
    },
    getNumbers: function(inputString) {
        var delimiters = [',','\n'];

        if(this.customDelimiterExists(inputString)){
            delimiters = delimiters.concat(this.getCustomDelimiters(inputString));
            inputString = this.removeFirstLine(inputString);
        }
        return this.getDelimitedNumbers([inputString],delimiters);
    },
    customDelimiterExists: function(inputString) {
        return /^\/\//.test(inputString);
    },
    getCustomDelimiters: function(inputString) {
        let delimiterString = inputString.split('\n')[0].substring(2);
        if(/^\[.+\]/.test(delimiterString)){
            let delimiters = delimiterString.split('][')
                            .map((del) => del.indexOf('[') > -1 ? del.substring(1) :
                                                                  (del.indexOf(']') > -1 ?
                                                                    del.substring(0,1) : ''
                                                                   )
                                );
            return delimiters;
        } else {
            return [delimiterString];
        }
    },
    removeFirstLine: function(inputString) {
        return inputString.substring(inputString.indexOf('\n') + 1);
    },
    getDelimitedNumbers: function(numbersDelimited, delimiters) {
        console.log("delimiters -> ",delimiters);
        if(delimiters.length === 0) {
            let numbersFiltered = numbersDelimited.filter((num) => num.length > 0 && parseInt(num) < 1001);
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