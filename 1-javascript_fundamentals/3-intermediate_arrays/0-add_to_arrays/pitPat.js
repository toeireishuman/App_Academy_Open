/*
Write a function pitPat(max) that accepts a
number as an arg. The function should return an
array containing all positive numbers less than or
equal to max that are divisible by either 4 or 6, but not both.
*/

// Number Number Number -> (array Number)
// given two factors and a maximum, return an array of numbers
// consisting of all positive numbers less than or equal to
// the maximum that are divisible by either two factors, but not both
function abstractFizzBuzz(factor1, factor2, maximum) {
	let array = [];

	for (let i = 1; i < maximum + 1; i++) {
		if (
			(i % factor1 === 0 && i % factor2 !== 0) ||
			(i % factor2 === 0 && i % factor1 !== 0)
		) {
			array.push(i);
		}
	}

	return array;
}

// Number -> (array Number)
// given a maximum, return an array containing all positive
// numbers less than or equal to max that are divisible
// by either 4 or 6, but not both
const pitPat = function (max) {
	return abstractFizzBuzz(4, 6, max);
};

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
