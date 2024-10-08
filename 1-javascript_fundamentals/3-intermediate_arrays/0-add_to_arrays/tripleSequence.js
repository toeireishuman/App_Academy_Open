/*
Write a function tripleSequence that
takes in two numbers, start and length. The
function should return an array representing a sequence
that begins with start and is length elements long.
In the sequence, every element should be 3 times the
previous element. Assume that the length is at least 1.
*/

const tripleSequence = function (start, length) {
	let array = [];

	for (let i = 0; i < length; i++) {
		if (i === 0) {
			array.push(start);
		} else {
			const newNumber = array[array.length - 1] * 3;
			array.push(newNumber);
		}
	}

	return array;
};

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
