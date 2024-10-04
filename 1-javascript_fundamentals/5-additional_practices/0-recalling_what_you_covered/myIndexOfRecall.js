/*
Write a function myIndexOf(arr, target) that takes in an array and
target value as args. The function should return the first index where the
target is found in the array. If the target is not found, it should return -1.
Solve this without using Array.indexOf.
*/

// (array X) X -> Number
// Given an array and a target value, return the first index where
// the target is found in the array. If not found, return -1.
function myIndexOf(array, target) {
	let arrayCopy = array;
	let index = 0;

	function myIndexOf0(array0, target0, index0) {
		if (array0.length === 0) {
			return -1;
		} else if (array0[0] === target0) {
			return index0;
		} else {
			const rest = array0.slice(1);
			return myIndexOf0(rest, target0, index0 + 1);
		}
	}

	return myIndexOf0(arrayCopy, target, index);
}

console.log(myIndexOf(["a", "b", "c", "e"], "c")); // 2
console.log(myIndexOf(["a", "b", "c", "e"], "e")); // 3
console.log(myIndexOf(["a", "b", "c", "e"], "z")); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1
