/*
Write a function zanyZip that accepts two arrays as arguments.
The function should return a two dimensional array with subarrays of
length 2 that contain elements at corresponding indices from the input
arrays. If one of the arrays is shorter than the other, then
substitute null for the missing elements.
*/

// (array X) (array Y) -> (array [X or Null, Y or Null])
// given two arrays, return a two-dimensional array with subarrays of
// length 2 that contain elements at corresponding indices.
// If one of the arrays is shorter, then substitute null for the
// missing elements.
function zanyZip(array1, array2) {
	const length1 = array1.length;
	const length2 = array2.length;
	const max = length1 > length2 ? length1 : length2;
	let zanyZipped = [];

	for (let i = 0; i < max; i++) {
		const value1 = array1[i] === undefined ? null : array1[i];
		const value2 = array2[i] === undefined ? null : array2[i];
		zanyZipped.push([value1, value2]);
	}

	return zanyZipped;
}

console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
