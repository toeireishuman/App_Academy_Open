/*
Write a function greatestFactorArray that takes in an array of numbers
and returns a new array where every even number is replaced with it's
greatest factor. A greatest factor is the largest number that divides another
with no remainder. For example, the greatest factor of 16 is 8.

(For the purpose of this problem we won't say the greatest factor of 16
is 16, because that would be too easy).
*/

// Number -> Number
// given a number, returns its greatest factor that
// is not itself
function getGreatestFactor(number) {
	if (typeof number !== "number") {
		return null;
	}

	for (i = number - 1; i > 0; i--) {
		if (number % i === 0) {
			return i;
		}
	}
}

// (array Number) -> (array Number)
// given an array numbers, return a new array
// where every even number is replaced with its
// nearest greatest factor
function greatestFactorArray(array) {
	if (!Array.isArray(array)) {
		return null;
	}

	let greatestFactors = [];

	for (let i = 0; i < array.length; i++) {
		const number = array[i];
		if (number % 2 === 0) {
			greatestFactors.push(getGreatestFactor(number));
		} else {
			greatestFactors.push(number);
		}
	}

	return greatestFactors;
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
