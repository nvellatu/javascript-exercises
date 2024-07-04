const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const sum = function(array) {
  total = 0
	array.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(array) {
  product = 1
	array.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(num, power) {
  product = 1;
  for(let i = 0; i < power; i++){
    product *= num;
  }
  return product;
};

const factorial = function(num) {
  if (num === 0) return 1;
  product = 1
  for(let i = 1; i <= num; i++){
    product*= i;
  }
	return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
