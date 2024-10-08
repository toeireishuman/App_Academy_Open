/*
Write a function additionMutator that accepts an array
and a number as an arguments.

The function should mutate the input array such
that every element has the given number added to it.
*/

// (array Number) Number -> (array Number)
// mutate the given array such that every element
// (which is a number) is added with the given number
const additionMutator = function (array, number) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i] + number;
	}

	return array;
};

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1); // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2); // [ 10, 8, 3 ]
