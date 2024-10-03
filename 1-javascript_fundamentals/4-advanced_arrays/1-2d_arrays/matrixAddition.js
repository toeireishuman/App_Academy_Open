/*
A 2-dimensional array is also known as a "matrix". Write a function
matrixAddition that accepts two matrices as arguments. The two matrices
are guaranteed to have the same "height" and "width". The function should
return a new matrix representing the sum of the two arguments.

To add matrices, we add the values at the same positions.
*/

// Matrix is (array (array X))
// interp. a matrix is an array of sub-arrays, where
//         each sub-array has a fixed length ("width"),
//         and the length of the array represents "height"

// Matrix Matrix -> Matrix
// given two matrices of equal width and height, return
// the matrix with each element a sum of values at the
// same positions
function matrixAddition(matrix1, matrix2) {
	const rowLength = matrix1.length;
	const columnLength = matrix1[0].length;
	let resultantMatrix = [];

	for (let i = 0; i < rowLength; i++) {
		const subarray = [];
		for (let j = 0; j < columnLength; j++) {
			const number1 = matrix1[i][j];
			const number2 = matrix2[i][j];
			subarray.push(number1 + number2);
		}
		resultantMatrix.push(subarray);
	}

	return resultantMatrix;
}

let matrixA = [
	[2, 5],
	[4, 7],
];
let matrixB = [
	[9, 1],
	[3, 0],
];
let matrixC = [
	[-1, 0],
	[0, -1],
];
let matrixD = [
	[2, -5],
	[7, 10],
	[0, 1],
];
let matrixE = [
	[0, 0],
	[12, 4],
	[6, 3],
];

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
