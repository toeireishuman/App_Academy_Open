/*
Write a function leastCommonMultiple(num1, num2) that accepts two
numbers as arguments. The functions should return the smallest number
that is divisible by both num1 and num2.
*/

// Number Number -> Number
// Given two numbers, return their least common multiple. That is,
// return the smallest nubmer that is divisible by both numbers.
function leastCommonMultiple(num1, num2) {
	let product = 1;
	let factor = 2;

	while (num1 !== 1 || num2 !== 1) {
		if (num1 % factor === 0 && num2 % factor === 0) {
			product *= factor;
			num1 /= factor;
			num2 /= factor;
			factor = 2;
		} else if (num1 % factor === 0) {
			product *= factor;
			num1 /= factor;
			factor = 2;
		} else if (num2 % factor === 0) {
			product *= factor;
			num2 /= factor;
			factor = 2;
		} else {
			factor++;
		}
	}

	return product;
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
