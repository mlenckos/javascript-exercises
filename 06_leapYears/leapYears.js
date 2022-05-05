const leapYears = function() {
    // if divisible by 4 then leap year
    // if divisible by 100, then not leap year unless divisible by 400
    args = Array.prototype.slice.call(arguments);
    if(args[0] % 4 === 0){
        if(args[0] % 400 === 0){
            console.log("hit 1")
            return true
        }
        if(args[0] % 100 === 0){
            console.log("hit 2")
            return false
        }
        else{
            console.log("hit 3")
            return true
        }
    }
    else{
        console.log("hit 4")
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
