/*
Write a function rotate(array, num) that takes in an array and a number
as args. When the num is positive, the elements of the array should be
rotated to the right. When the num is negative, the elements of the array
should be rotated to the left. The function should mutate the original array.

Define this function using function expression syntax.
*/

// (array X) Number -> (array X)
// mutate the given array such that:
//     - if the given number n is > 0, the last n elements are moved to the front
//     - if the given number n is < 0, the first n elements are moved to the back
//     - if the given number is 0, don't mutate the given array
const rotate = function (array, num) {
	if (num > 0) {
		for (i = 0; i < num; i++) {
			const removed = array.pop();
			array.unshift(removed);
		}
	} else if (num < 0) {
		for (i = 0; i > num; i--) {
			const removed = array.shift();
			array.push(removed);
		}
	}
};

let arr = ["a", "b", "c", "d", "e"];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ["wombat", "koala", "opossum", "kangaroo"];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
