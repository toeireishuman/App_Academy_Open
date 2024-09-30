/*
Write a function primeFactors that accepts a number
as an argument. The function should return an array containing
all of the prime numbers that can divide the given number.
*/

// Number -> Boolean
// return true if the given number is prime
const isPrime = function (number) {
	if (number < 2) {
		return false;
	}

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
};

// Number Number -> Boolean
// return true if the first number is divisible by the second number
const divisible = function (number, factor) {
	return number % factor === 0;
};

// Number -> (array Number)
// given a number, return its factors that are greater than 1
const primeFactors = function (number) {
	let factors = [];

	if (isPrime(number)) {
		return [number];
	} else {
		for (let factor = 2; factor <= Math.trunc(number / 2); factor++) {
			if (isPrime(factor) && divisible(number, factor)) {
				factors.push(factor);
			}
		}
	}

	return factors;
};

console.log(primeFactors(12)); // [2, 3]
console.log(primeFactors(7)); // [7]
console.log(primeFactors(16)); // [2]
console.log(primeFactors(30)); // [2, 3, 5]
console.log(primeFactors(35)); // [5, 7]
console.log(primeFactors(49)); // [7]
console.log(primeFactors(128)); // [2]
