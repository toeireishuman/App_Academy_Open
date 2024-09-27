/*
The fibonacci sequence is a sequence of numbers whose
first and second elements are 1. To generate further
elements of the sequence we take the sum of the previous
two elements. For example the first 6 fibonacci numbers
are 1, 1, 2, 3, 5, 8. Write a function fibonacci that takes
in a number length and returns the fibonacci sequence up to the given length.
*/

function fibonacci(length) {
	let left = 0;
	let arr = [];
	while (length - left > 0) {
		if (left <= 1) {
			arr.push(1);
		} else {
			const secondLast = arr[arr.length - 2];
			const last = arr[arr.length - 1];
			arr.push(secondLast + last);
		}
		left++;
	}
	return arr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
