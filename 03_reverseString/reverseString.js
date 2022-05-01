const reverseString = function(input) {
    const values = [];
    final_string = ""
    for(i=0; i < input.length ; i++){
        values.push(input[i])
    }
    for (i=values.length-1; i >= 0 ; i--){
        final_string = final_string + values[i]
    }
    return final_string
};

// Do not edit below this line
module.exports = reverseString;
