/*
A number's summation is the sum of all positive numbers less than or equal
to the number. For example: the summation of 3 is 6 because 1 + 2 + 3 = 6,
the summation of 6 is 21 because 1 + 2 + 3 + 4 + 5 + 6 = 21. Write a function
summationSequence that takes in two numbers: start and length. The function
should return an array containing length total elements. The first number of
the sequence should be the start number. At any point, to generate the next
element of the sequence we take the summation of the previous element.

You can assume that length is not zero.
*/

// Number -> Number
// return the summation of the given number
function getSummation(number) {
	let summation = 0;

	for (let i = 1; i < number + 1; i++) {
		summation += i;
	}

	return summation;
}

console.log(getSummation(3)); // 6
console.log(getSummation(6)); // 21

// Number Number -> (array Number)
// given a starting number and a length for an array,
// return of summation sequence, where each number is a summation
// of the previous number in the array
// Assume: the given length is nonzero
function summationSequence(start, length) {
	if (typeof start !== "number" || typeof length !== "number") {
		return null;
	}

	let sequence = [start];

	for (let i = 0; i < length - 1; i++) {
		const summation = getSummation(sequence[sequence.length - 1]);
		sequence.push(summation);
	}

	return sequence;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
