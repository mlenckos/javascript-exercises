const repeatString = function(input, value) {
    initial_input = input;
    if (value === 0){
        return ""
    }
    if (value < 0 ){
        return "ERROR"
    }
    for (i=1; i<value; i++){
        input = initial_input+input;
    }
    return input
};

// Do not edit below this line
module.exports = repeatString;
