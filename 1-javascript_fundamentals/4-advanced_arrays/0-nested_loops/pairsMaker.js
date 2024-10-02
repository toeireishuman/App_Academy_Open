/*
Write a function pairsMaker(arr) that takes in a an array as an argument.
The function should return a 2D array where the subarrays represent unique
pairs of element from the input array.
*/

// (array X) -> (array [X X])
// given an array of elements, return a 2d array
// where subarrays represent unique pairs of elements
// from the given array
function pairsMaker(array) {
	let pairs = [];

	for (let i = 0; i < array.length; i++) {
		const element1 = array[i];
		for (let j = i + 1; j < array.length; j++) {
			const element2 = array[j];
			const pair = [element1, element2];
			pairs.push(pair);
		}
	}

	return pairs;
}

console.log(pairsMaker(["a", "b", "c", "d"])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(["Rosemary", "Alex", "Connor"])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
