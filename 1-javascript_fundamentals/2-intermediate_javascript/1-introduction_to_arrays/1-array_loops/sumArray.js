/*
Write a function sumArray(array) that takes in an array of numbers
and returns the total sum of all the numbers.
*/

// (array Number) -> Number
// returns the sum of all the numbers in the given array
function sumArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
