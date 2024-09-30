/*
Write a function minValue(nums) that takes in an
array of numbers as an arg. The function should return
the smallest number of the array. If the array is empty,
the function should return null.
*/

// (array Number) -> Number
// returns the smallest number in the array of numbers
// if the given data is not array, or the array is empty, return null
const minValue = function (arr) {
	if (!Array.isArray(arr) || arr.length === 0) {
		return null;
	}

	let smallest = arr[0];

	for (let i = 1; i < arr.length; i++) {
		const current = arr[i];
		if (current < smallest) {
			smallest = current;
		}
	}

	return smallest;
};

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null
