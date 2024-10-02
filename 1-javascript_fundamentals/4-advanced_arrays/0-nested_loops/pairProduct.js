/*
Write a function pairProduct that accepts an array of numbers and a product
as arguments. The function should return a boolean indicating whether or not
a pair of distinct elements in the array result in the product when multiplied
together. You may assume that the input array contains unique elements.
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
// given an array of two numbers, return the poduct
function multiplyPair(arr) {
	return arr[0] * arr[1];
}

// (array Number) Number -> Boolean
// return true if the product of any two distinct numbers
// in the given array is equal to the given target number
// Assume: the array has unique numbers
function pairProduct(arr, target) {
	const pairs = pairsMaker(arr);
	let pairProducts = [];

	for (let i = 0; i < pairs.length; i++) {
		const product = multiplyPair(pairs[i]);
		pairProducts.push(product);
	}

	return pairProducts.includes(target);
}

console.log(pairProduct([4, 2, 5, 8], 16)); // true
console.log(pairProduct([8, 1, 9, 3], 8)); // true
console.log(pairProduct([3, 4], 12)); // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
console.log(pairProduct([4, 2, 5, 7], 16)); // false
console.log(pairProduct([8, 4, 9, 3], 8)); // false
console.log(pairProduct([3], 12)); // false
