/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column. The array
length should be equal to the number of columns, such that returnArray[i] is
equal to the max value in the ith column.
*/

// (array Number) -> Number
// given an array of numbers, get the maximum value
function getMax(row) {
	let max;

	for (let i = 0; i < row.length; i++) {
		const number = row[i];
		if (i === 0 || number > max) {
			max = number;
		}
	}

	return max;
}

// (array (array Number)) -> (array Number)
// given a two-dimensional array, return the maximum of each
// column as an array
function maxColumn(matrix) {
	const columnLength = matrix[0].length;
	const rowLength = matrix.length;
	let maxArray = [];

	for (let column = 0; column < columnLength; column++) {
		const currentColumn = [];
		for (let row = 0; row < rowLength; row++) {
			const number = matrix[row][column];
			currentColumn.push(number);
		}
		maxArray.push(getMax(currentColumn));
	}

	return maxArray;
}

matrix = [
	[5, 9, 21],
	[9, 19, 6],
	[12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]
