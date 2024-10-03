/*
Write a function zip that accepts two arrays as arguments. The function should
return a two dimensional array with subarrays of length 2 that contain elements
at corresponding indices from the input arrays. You may assume that the input
arrays have the same length.
*/

// (array X) (array Y) -> (array (array element:X element:Y))
// given two arrays of the same length, return a two dimensional array
// with subarrays of length 2 that contains elements at corresponding indices
function zip(array1, array2) {
	let twoDimArray = [];

	for (let i = 0; i < array1.length; i++) {
		const subarray = [array1[i], array2[i]];
		twoDimArray.push(subarray);
	}

	return twoDimArray;
}

console.log(zip([1, 2, 3, 4], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]

console.log(zip(["eins", "zwei", "drei"], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]

console.log(zip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
