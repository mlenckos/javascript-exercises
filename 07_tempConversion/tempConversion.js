const ftoc = function() {
  // ([°F] − 32) × 5⁄9
  args = Array.prototype.slice.call(arguments)
  answer = (args[0]-32)*(5/9)
  console.log(typeof(answer))
  rounded = Math.round( answer * 10 ) / 10
  return rounded
};

const ctof = function() {
  // [°C] × 9⁄5 + 32
  args = Array.prototype.slice.call(arguments)
  answer = (args[0]*(9/5)+32)
  rounded = Math.round( answer * 10 ) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
