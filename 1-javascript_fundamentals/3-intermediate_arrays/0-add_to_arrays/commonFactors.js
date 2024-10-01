/*
Write a function commonFactors that accepts two numbers as
arguments. The function should return an array containing positive
numbers that are able to divide both arguments.
*/

// Number Number Number -> Boolean
// given two numbers and a divisor, return true if the
// the given divisor is a common factor of the two numbers
const isCommonFactor = function (number1, number2, factor) {
	return number1 % factor === 0 && number2 % factor === 0;
};

// Number Number -> (array Number)
// given two numbers, return the positive common factors
const commonFactors = function (number1, number2) {
	if (typeof number1 !== "number" || typeof number2 !== "number") {
		return "ERROR";
	}

	let common = [1];
	let min = number1 < number2 ? number1 : number2;

	for (let i = 2; i < min + 1; i++) {
		if (isCommonFactor(number1, number2, i)) {
			common.push(i);
		}
	}

	return common;
};

console.log(commonFactors(50, 30)); // [1, 2, 5, 10]
console.log(commonFactors(8, 4)); // [1, 2, 4]
console.log(commonFactors(4, 8)); // [1, 2, 4]
console.log(commonFactors(12, 24)); // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44)); // [1, 2, 11, 22]
console.log(commonFactors(7, 9)); // [1]
console.log(commonFactors(12, "14")); // "ERROR"
