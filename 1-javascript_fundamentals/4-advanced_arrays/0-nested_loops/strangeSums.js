/*
Write a function strangeSums that accepts an array of numbers as an argument.
The method should return a count of the number of distinct pairs of elements that
have a sum of zero. You may assume that the input array contains unique elements.
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

// (array Number) -> Number
// given an array of distinct numbers, return the count
// of distinct pairs which have a sum of zero
// Assume: each number is unique as stated
function strangeSums(array) {
	const pairs = pairsMaker(array);
	let count = 0;

	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i];
		if (sumPair(pair) === 0) {
			count++;
		}
	}

	return count;
}

console.log(strangeSums([2, -3, 3, 4, -2])); // 2
console.log(strangeSums([42, 3, -1, -42])); // 1
console.log(strangeSums([-5, 5])); // 1
console.log(strangeSums([19, 6, -3, -20])); // 0
console.log(strangeSums([9])); // 0
