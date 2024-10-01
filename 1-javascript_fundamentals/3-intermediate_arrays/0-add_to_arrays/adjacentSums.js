/*
Write a function adjacentSums that accepts an array of numbers
as an argument. The function should return a new array containing
the sum of each pair of elements in the input array.
*/

// (array Number) -> (array Number)
// given an array of numbers, return a new array containing
// the sum of each consecutive pair of elements
const adjacentSums = function (array) {
	if (!Array.isArray(array)) {
		return "ERROR";
	}

	let pairSums = [];

	for (let i = 0; i < array.length - 1; i++) {
		const number1 = array[i];
		const number2 = array[i + 1];

		if (typeof number1 !== "number" || typeof number2 !== "number") {
			return "ERROR";
		}

		const pairsum = number1 + number2;
		pairSums.push(pairsum);
	}

	return pairSums;
};

console.log(adjacentSums([3, 8, 7, 1])); // [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9])); // [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3])); // [-1, 0]
