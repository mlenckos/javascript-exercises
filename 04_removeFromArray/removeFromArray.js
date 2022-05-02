const removeFromArray = function() {
    final_array = [];
    var args = Array.prototype.slice.call(arguments);
    input_array = args[0];
    for (i = 0; i < input_array.length ; i++){
        for (a = 1; a < args.length ; a++ ){
            if (input_array[i] === args[a]){
                break;
            }
            if (a === args.length-1){
                final_array.push(input_array[i])
            }
        }
    }
    return final_array
};

// Do not edit below this line
module.exports = removeFromArray;
