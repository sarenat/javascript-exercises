const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product*current, 1);
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	let factorial = 1;
  if (x == 0) return factorial;
  else {
    for (let i = x; i > 0; i--) {
      factorial = factorial * i;
    };
    return factorial;
  }
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
