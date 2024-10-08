/*
Write a function twoSum(arr, target) that accepts an array and a target
number as args. The function should a return a boolean indicating if two
distinct numbers of the array add up to the target value. You can assume
that input array contains only unique numbers.
*/

// (array Number) Number -> Boolean
// return true if two distinct numbers in the array
// add up to the given number
function twoSum(array, target) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			const number1 = array[i];
			const number2 = array[j];
			if (number1 !== number2 && number1 + number2 === target) {
				return true;
			}
		}
	}

	return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
