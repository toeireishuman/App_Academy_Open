/*
Write a function doubler(numbers) that takes an array of numbers
and returns a new array where every element of the original array
is multiplied by 2.
*/

// (array Number) -> (array Number)
// double every number inside the given array
// Note: Don't change the given array
function doubler(numbers) {
	let numbersDoubled = [];
	for (let i = 0; i < numbers.length; i++) {
		numbersDoubled.push(numbers[i] * 2);
	}
	return numbersDoubled;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
