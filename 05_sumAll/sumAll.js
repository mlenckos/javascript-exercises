const sumAll = function() {
    sum = 0
    args = Array.prototype.slice.call(arguments);
    if(arguments[0] < 0 || arguments[1] < 0){
        return "ERROR"
    }
    if(typeof args[0] !== "number" || typeof args[1] !== "number" ){
        return "ERROR"
    }

    if(arguments[0] > arguments[1]){
        for(i = arguments[1]; i <= arguments[0]; i++){
            sum = sum + i;
        }
    }
    else{
        for(i = arguments[0]; i <= arguments[1]; i++){
            sum = sum + i;
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
