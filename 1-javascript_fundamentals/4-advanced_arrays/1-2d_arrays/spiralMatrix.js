/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional
array (matrix) and returns an array containing the elements in spiral order.
*/

// Matrix is (array (array X))
// interp. a matrix is an array of sub-arrays, where
//         each sub-array has a fixed length ("width"),
//         and the length of the array represents "height"

// Matrix -> Matrix
// mutate the given array such that the top row is removed
// and return the removed row where the order is preserved
function getTop(matrix) {
	return matrix.shift();
}

// Matrix -> Matrix
// mutate the given array such that the most-right column
// is removed and return the removed elements as an array,
// where the order is from top to bottom
function getRight(matrix) {
	let right = [];
	const limit = matrix.length;

	if (limit === undefined) {
		return [];
	}

	for (let i = 0; i < limit; i++) {
		const row = matrix[i];
		right.push(row.pop());
	}

	return right;
}

// Matrix -> Matrix
// mutate the given array such that the bottom array
// is removed and return the removed elements as an array,
// where the order is reversed from the original order
function getBottom(matrix) {
	if (matrix.length === 0) {
		return [];
	}

	const original = matrix.pop();
	let reversed = [];

	for (let i = 0; i < original.length; i++) {
		const element = original[i];
		reversed.unshift(element);
	}

	return reversed;
}

// Matrix -> Matrix
// mutate the given array such that the most-left column
// is removed and return the removed elements as an array,
// where the order is from bottom to top
function getLeft(matrix) {
	let left = [];

	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];
		left.unshift(row.shift());
	}

	return left;
}

// Matrix -> (array Number)
// given a matrix, return an array of elements in spiral order
function spiralOrder(matrix) {
	let matrixCopy = matrix;
	let spiral = [];

	while (matrixCopy.length !== 0) {
		spiral = spiral.concat(getTop(matrixCopy));
		spiral = spiral.concat(getRight(matrixCopy));
		spiral = spiral.concat(getBottom(matrixCopy));
		spiral = spiral.concat(getLeft(matrixCopy));
	}

	return spiral;
}

matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
];

console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
