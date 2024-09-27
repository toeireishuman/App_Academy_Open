/*
Define a function isPrime(number) that returns true if
number is prime. Otherwise, false. A number is prime if
it is only divisible by 1 and itself.
*/

function isPrime(num) {
	if (num <= 2) {
		return true;
	}

	for (let factor = 2; factor < num / 2; factor++) {
		if (num % factor === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
