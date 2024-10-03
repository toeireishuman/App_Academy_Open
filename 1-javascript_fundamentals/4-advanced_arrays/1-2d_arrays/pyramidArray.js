/*
Write a function pyramidArray(base) that takes in an array of numbers
representing the base of a pyramid. The function should return a two-dimensional
array representing the completed pyramid. To generate an element of the next
level of the pyramid, we sum the elements below and to the left and below and
to the right.
*/

// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//

// (array Number) -> (array Number)
// given an array of numbers, return an array of "pair sums",
// where each consecutive pair of numbers are added
// Assume: the length of the array is at least 2
function pairSum(array) {
	let pairSums = [];

	for (let i = 0; i < array.length - 1; i++) {
		const pairSum = array[i] + array[i + 1];
		pairSums.push(pairSum);
	}

	return pairSums;
}

// (array Number) -> (array (array Number))
// given an array of numbers, return a two-dimensional array
// representing a complete pyramid as defined previously:
// where each number in a higher level is a sum of the pair of numbers
// directly below itself
function pyramidArray(array) {
	let pyramid = [array];
	const numHigherLevels = array.length - 1;

	for (let i = 0; i < numHigherLevels; i++) {
		const level = pairSum(pyramid[0]);
		pyramid.unshift(level);
	}

	return pyramid;
}

let p1 = pyramidArray([2, 3, 7, 5, 9]);
console.log(p1);
// [
//   [ 85 ],
//   [ 37, 48 ],
//   [ 15, 22, 26 ],
//   [ 5, 10, 12, 14 ],
//   [ 2, 3, 7, 5, 9 ]
// ]

let p2 = pyramidArray([2, 2, 2, 2]);
console.log(p2);
// [
//   [ 16 ],
//   [ 8, 8 ],
//   [ 4, 4, 4 ],
//   [ 2, 2, 2, 2 ]
// ]
