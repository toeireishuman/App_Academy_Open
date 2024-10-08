/*
Write a function isOdd that takes in a number as
an argument and returns true if the number is odd
and returns false otherwise.

Write two versions of this function, using conditionals
(if) and without using conditionals.
*/

function isOdd(num) {
	// if (num % 2 === 1 || num % 2 === -1) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	return num % 2 === 1 || num % 2 === -1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
