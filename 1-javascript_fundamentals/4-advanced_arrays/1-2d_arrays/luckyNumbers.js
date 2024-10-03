/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array
(matrix) and returns all lucky numbers in any order. A lucky number is the
minimum element in its row and the maximum in its column.
*/

// Matrix is (array (array X))
// interp. a matrix is an array of sub-arrays, where
//         each sub-array has a fixed length ("width"),
//         and the length of the array represents "height"

// (array Number) -> Number
// given an array of numbers, return the maximum value
function getMax(array) {
	let max = array[0];

	for (let i = 1; i < array.length; i++) {
		const current = array[i];
		if (current > max) {
			max = current;
		}
	}

	return max;
}

// (array Number) -> Number
// given an array of numbers, return the minimum value
function getMin(array) {
	let min = array[0];

	for (let i = 1; i < array.length; i++) {
		const current = array[i];
		if (current < min) {
			min = current;
		}
	}

	return min;
}

// Matrix -> (array (array Number))
// given a matrix, return in an array a collection
// of sub-arrays of column values
function transpose(matrix) {
	const columnLength = matrix.length;
	const rowLength = matrix[0].length;
	let columns = [];

	for (let i = 0; i < rowLength; i++) {
		let column = [];
		for (let j = 0; j < columnLength; j++) {
			const columnValue = matrix[j][i];
			column.push(columnValue);
		}
		columns.push(column);
	}

	return columns;
}

// Matrix -> (array Number)
// given a matrix, return all the lucky numbers as an array
// a lucky number is:
//       - a maximum value in a column, and
//       - a minimum value in a row.
function luckyNumbers(matrix) {
	const columnMaximums = transpose(matrix).map(getMax);
	let luckyNumbers = [];

	for (let i = 0; i < matrix.length; i++) {
		const lucky = getMin(matrix[i]);
		const luckyIndex = matrix[i].indexOf(lucky);
		if (matrix[i][luckyIndex] === columnMaximums[luckyIndex]) {
			luckyNumbers.push(lucky);
		}
	}

	return luckyNumbers;
}

matrix = [
	[5, 9, 21],
	[9, 19, 6],
	[12, 14, 15],
];

console.log(luckyNumbers(matrix)); // [12]

matrix = [
	[5, 10, 8, 6],
	[10, 2, 7, 9],
	[21, 15, 19, 10],
];

console.log(luckyNumbers(matrix)); // [10]
