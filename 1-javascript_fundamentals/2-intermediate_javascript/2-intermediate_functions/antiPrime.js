/*
Write a function isAntiPrime that accepts a number
as an argument. The method should return true if the
given number has more divisors than all positive numbers
less than the given number. For example, 24 is an
anti-prime because it has more divisors than any positive
number less than 24.
*/

// Number Number -> Boolean
// return true if the first number is divisible by the second number
const divisible = function (number, factor) {
	return number % factor === 0;
};

// Number -> (array Number)
// given a number, return all its positive divisors
const getDivisors = function (number) {
	let divisors = [1];

	for (let i = 2; i < number; i++) {
		if (divisible(number, i)) {
			divisors.push(i);
		}
	}

	return divisors;
};

// Number -> Boolean
// return true if the given number is anti-prime
const isAntiPrime = function (number) {
	let mainFactorsNum = getDivisors(number).length;

	for (let i = 0; i < number; i++) {
		let subFactorsNum = getDivisors(i).length;
		if (subFactorsNum > mainFactorsNum) {
			return false;
		}
	}

	return true;
};

console.log(isAntiPrime(24)); // true
console.log(isAntiPrime(36)); // true
console.log(isAntiPrime(48)); // true
console.log(isAntiPrime(360)); // true
console.log(isAntiPrime(1260)); // true
console.log(isAntiPrime(27)); // false
console.log(isAntiPrime(5)); // false
console.log(isAntiPrime(100)); // false
console.log(isAntiPrime(136)); // false
console.log(isAntiPrime(1024)); // false
