/*
Write a function allElseEqual that takes in
an array of numbers. The function should return the
element of the array that is equal to half of the sum
of all elements of the array. If there is no such
element, the method should return null.
*/

// (array Number) Number -> (array Number)
// given a specific number and an array of numbers,
// return the array without the said number
function takeRest(arr, elm) {
	let newArr = [];
	let restArr;

	for (let i = 0; i < arr.length; i++) {
		const currentElm = arr[i];
		if (currentElm === elm) {
			restArr = arr.slice(i + 1);
			i = arr.length;
		} else {
			newArr.push(currentElm);
		}
	}

	return newArr.concat(restArr);
}

// console.log(takeRest([1, 2, 3, 4, 5, 6, 7], 4));

// (array Number) -> Number
// returns the sum of all the numbers inside the array
function sumArray(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let number = arr[i];
		sum += number;
	}

	return sum;
}

function allElseEqual(arr) {
	for (let i = 1; i < arr.length; i++) {
		const current = arr[i];
		const currentElseSum = sumArray(takeRest(arr, current));
		if (current === currentElseSum) {
			return current;
		}
	}

	return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null
