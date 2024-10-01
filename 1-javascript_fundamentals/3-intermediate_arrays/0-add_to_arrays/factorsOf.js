/*
Write a function factorsOf(num) that takes in a
number as an arg. The method should return an array
containing all positive numbers that are able to divide
into num with no remainder.

Define this function using function expression syntax.
*/

const factorsOf = function (number) {
	let factors = [];

	for (let div = 1; div < number + 1; div++) {
		if (number % div === 0) {
			factors.push(div);
		}
	}

	return factors;
};

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]
