/*
Write a function fizzBuzz(max) that accepts a number as an arg. The
function should return an array containing all positive numbers less than
max that are divisible by either 3 or 5, but not both.
*/

// Number -> (array Number)
// given a number, return an array containing all positive
// numbers less than the maximum which are divisible by either 3 or 5,
// but not both
function fizzBuzz(maximum) {
	let numbers = [];

	for (let i = 1; i < maximum; i++) {
		if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
			numbers.push(i);
		}
	}

	return numbers;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
