/*
Write a function avgVal(arr) that accepts an array as
an arg. The function should return the average of all values
in the array. If the array is empty, it should return null.
*/

// (array Number) -> Number
// returns the average of all the numbers in the given array
const avgVal = function (array) {
	if (!Array.isArray(array) || array.length === 0) {
		return null;
	}

	let sum = 0;
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
		count++;
	}

	return sum / count;
};

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
