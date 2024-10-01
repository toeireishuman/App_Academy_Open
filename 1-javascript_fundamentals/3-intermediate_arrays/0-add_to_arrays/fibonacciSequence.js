/*
Write a function fibonacciSequence that accepts
a number as an argument. The function should return an array
representing the fibonacci sequence up to the given length. The
first and second numbers of the sequence are 1 and 1.

To generate subsequent numbers of the sequence, we take the sum
of the previous two numbers of the sequence.
*/

// Number -> (array Number)
// given a length of a sequence, return the
// fibonacci sequence up to the given length
const fibonacciSequence = function (length) {
	if (typeof length !== "number") {
		return "ERROR";
	}

	let fibonacci = [];

	for (let i = 0; i < length; i++) {
		if (fibonacci.length <= 1) {
			fibonacci.push(1);
		} else {
			const number1 = fibonacci[i - 2];
			const number2 = fibonacci[i - 1];
			fibonacci.push(number1 + number2);
		}
	}

	return fibonacci;
};

console.log(fibonacciSequence(4)); // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5)); // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8)); // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0)); // [ ]
console.log(fibonacciSequence(1)); // [ 1 ]
console.log(fibonacciSequence(2)); // [ 1, 1 ]
