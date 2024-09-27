/*
Write a function leastCommonMultiple(num1, num2) that
accepts two numbers as arguments. The functions should
return the smallest number that is divisible by both num1 and num2.
*/

function leastCommonMultiple(num1, num2) {
	let first = num1;
	let second = num2;
	let factor = 2;
	let multiple = 1;
	while (first !== 1 || second !== 1) {
		if (first % factor === 0 && second % factor === 0) {
			multiple *= factor;
			first /= factor;
			second /= factor;
			factor = 2;
		} else if (first % factor === 0) {
			multiple *= factor;
			first /= factor;
			factor = 2;
		} else if (second % factor === 0) {
			multiple *= factor;
			second /= factor;
			factor = 2;
		} else {
			factor += 1;
		}
	}
	return multiple;
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
