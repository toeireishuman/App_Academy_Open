/*
Write a function twoSum(arr, target) that accepts an array and a target
number as args. The function should a return a boolean indicating if two
distinct numbers of the array add up to the target value. You can assume
that input array contains only unique numbers.
*/

// (array X) -> (array [X X])
// given an array of elements, return a 2d array
// where subarrays represent unique pairs of elements
// from the given array
function pairsMaker(array) {
	let pairs = [];

	for (let i = 0; i < array.length; i++) {
		const element1 = array[i];
		for (let j = i + 1; j < array.length; j++) {
			const element2 = array[j];
			const pair = [element1, element2];
			pairs.push(pair);
		}
	}

	return pairs;
}

// [Number Number] -> Number
// given an array of two numbers, return the sum
function sumPair(arr) {
	return arr[0] + arr[1];
}

// (array Number) Number -> Boolean
// return true if any two distinct numbers in the given array
// add up to the given target number
// Assume: the array has unique numbers
function twoSum(arr, target) {
	const pairs = pairsMaker(arr);
	let pairSums = [];

	for (let i = 0; i < pairs.length; i++) {
		const sum = sumPair(pairs[i]);
		pairSums.push(sum);
	}

	return pairSums.includes(target);
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
