/*
Write a function threeIncreasing that accepts an array of numbers as
an argument. The function should return a boolean indicating whether or
not the array contains three consecutive numbers in consecutive
increasing order, like 7, 8, 9.
*/

// (array Number) -> Boolean
// return true if the given array contains three consecutive numbers
function threeIncreasing(arr) {
	// Number Number Number -> Boolean
	// returns true if the given three numbers are consecutive
	function threeConsecutive(num1, num2, num3) {
		return num2 === num1 + 1 && num3 === num2 + 1;
	}

	for (let i = 0; i < arr.length - 2; i++) {
		const number1 = arr[i];
		const number2 = arr[i + 1];
		const number3 = arr[i + 2];
		if (threeConsecutive(number1, number2, number3)) {
			return true;
		}
	}
	return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([2, 7, 8, 9])); // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8])); // false
