/*
Write a function unique that accepts an
array as an argument. The function should return a
new array containing elements of the input array, without duplicates.
*/

// (array X) -> (array X)
// given an array of elements, return a new array containing
// unique elements from the given array
const unique = function (array) {
	let uniqueArray = [];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (!uniqueArray.includes(element)) {
			uniqueArray.push(element);
		}
	}

	return uniqueArray;
};

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']
