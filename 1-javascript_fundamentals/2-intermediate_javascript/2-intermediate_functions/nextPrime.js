/*
Write a function nextPrime that accepts a number as an
argument. The function should return the nearest prime number
that is greater than the given number.
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

// Number -> Number
// return the next prime number greater than the given number
const nextPrime = function (number) {
	let prime = number + 1;
	while (true) {
		if (isPrime(prime)) {
			return prime;
		}
		prime++;
	}
};

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101
