/*
Write a function printFives(max) that prints out the
multiples of 5 that are less than max.

Try to solve this in two ways, using a conditional (if)
and without using a conditional.
*/

function printFives(max) {
	// for (let index = 0; index < max; index++) {
	// 	if (index % 5 === 0) {
	// 		console.log(index);
	// 	}
	// }
	for (let index = 0; index < max; index += 5) {
		console.log(index);
	}
}

// Example:

printFives(20); // prints out:
// 0
// 5
// 10
// 15
