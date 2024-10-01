/*
Write a function fizzBuzz(max) that accepts
a number as an arg. The function should return an
array containing all positive numbers less than max
that are divisible by either 3 or 5, but not both.
*/

const fizzBuzz = function (max) {
	let fizzbuzz = [];

	for (let div = 1; div < max; div++) {
		if (
			(div % 3 === 0 && div % 5 !== 0) ||
			(div % 5 === 0 && div % 3 !== 0)
		) {
			fizzbuzz.push(div);
		}
	}

	return fizzbuzz;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]
