/*
Write a function firstAndLast that takes in an array of numbers
and returns the sum of the first and last element if there is an even
number of elements in the array. If there is an odd number of elements
in the array, then the function should return the difference between
the first and last elements of the array.
*/

// (array Number) -> Number
// return:
//         first + last if length of list is even
//         first - last if length of list is odd
//         0 if length of list is less than 2
function firstAndLast(arr) {
	const arrayLength = arr.length;

	if (arrayLength < 2) {
		return 0;
	}

	if (arrayLength % 2 === 0) {
		return arr[0] + arr[arrayLength - 1];
	} else {
		return arr[0] - arr[arrayLength - 1];
	}
}

console.log(firstAndLast([1, 2, 3, 4])); // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5])); // 17
console.log(firstAndLast([12])); // 0
console.log(firstAndLast([7, 11, 3])); // 4
