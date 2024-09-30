/*
Write a function maxValue(nums) that takes
in an array of numbers as an arg. The function
should return the largest number of the array. If
the array is empty, the function should return null.
*/

// (array Number) -> Number
// returns the largest number in the array of numbers
// if the given data is not array, or the array is empty, return null
const maxValue = function (arr) {
	if (!Array.isArray(arr) || arr.length === 0) {
		return null;
	}

	let largest = arr[0];

	for (let i = 1; i < arr.length; i++) {
		const current = arr[i];
		if (current > largest) {
			largest = current;
		}
	}

	return largest;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
