/*
Write a function choosePrimes(nums) that takes in
an array of numbers as args. The function should return
a new array containing the primes from the original array.
A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!
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

// (array Number) -> (array Number)
// given an array of numbers, only return the primes
const choosePrimes = function (array) {
	let primes = [];

	for (let i = 0; i < array.length; i++) {
		let number = array[i];
		if (isPrime(number)) {
			primes.push(number);
		}
	}

	return primes;
};

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
