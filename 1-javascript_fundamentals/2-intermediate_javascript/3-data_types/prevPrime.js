/*
Write a function prevPrime that accepts a
number as an argument. The function should return
the nearest prime number that is smaller than the given
argument. Since 2 is the smallest prime number, return
null if no number can be returned.
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
// return the nearest prime number that is smaller than the given number
const prevPrime = function (number) {
	if (number < 3) {
		return null;
	}

	for (let i = number - 1; i > 1; i--) {
		if (isPrime(i)) {
			return i;
		}
	}
};

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7)); // 5
console.log(prevPrime(4)); // 3
console.log(prevPrime(2)); // null
console.log(prevPrime(1)); // null
