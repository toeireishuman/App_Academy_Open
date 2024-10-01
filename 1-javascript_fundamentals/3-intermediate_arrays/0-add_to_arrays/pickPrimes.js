/*
Write a function pickPrimes that takes in an array of numbers and returns
a new array containing only the prime numbers.
*/

// Number -> Boolean
// return true if the given number is prime
function isPrime(number) {
	if (number < 2) {
		return false;
	}

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}

// (array Number) -> (array Number)
// given an array of numbers, return all numbers
// that are prime
function pickPrimes(array) {
	if (!Array.isArray(array)) {
		return "ERROR";
	}

	let primes = [];

	for (let i = 0; i < array.length; i++) {
		const number = array[i];
		if (isPrime(number)) {
			primes.push(number);
		}
	}

	return primes;
}

console.log(pickPrimes([2, 3, 4, 5, 6])); // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017])); // [101, 103, 2017]
