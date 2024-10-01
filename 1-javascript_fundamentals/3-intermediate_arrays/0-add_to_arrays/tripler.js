/*
Write a function tripler(nums)
that takes in an array as an arg. The
function should return a new array containing
three times every number of the original array.
*/

// (array Number) -> (array Number)
// given an array of numbers, return a new array
// of numbers where each is tripled
const tripler = function (array) {
	let tripledArray = [];

	for (let i = 0; i < array.length; i++) {
		const tripled = array[i] * 3;
		tripledArray.push(tripled);
	}

	return tripledArray;
};

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
