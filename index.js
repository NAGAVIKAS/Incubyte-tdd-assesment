var calculator = {
    add: function(inputString) {
        if(inputString.length>0)
            return parseInt(inputString);
        return 0;
    }
};

module.exports = calculator;