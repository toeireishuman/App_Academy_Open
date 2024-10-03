/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
	let max = matrix[0][0];

	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];

		for (let j = 0; j < row.length; j++) {
			const number = row[j];

			if (number > max) {
				max = number;
			}
		}
	}

	return max;
}

matrix = [
	[11, 2, -99],
	[20, 19, 10],
	[47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72
