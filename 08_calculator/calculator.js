const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let totalSum = 0;
	for (let index = 0; index < array.length; index++) {
    totalSum += array[index];
  }
  return totalSum;
};

const multiply = function(array) {
  let total = 1;
	for (let index = 0; index < array.length; index++) {
    total *= array[index];
  }
  return total;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  let total = 1;
	for (let i = number; i > 0; i--) {
    total *= i;
  }
  return total;
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
