const convertToCelsius = function(fVal) {
  return parseFloat(((fVal-32)*(5/9)).toFixed(1))
};

const convertToFahrenheit = function(cVal) {
  return parseFloat((cVal*(9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
