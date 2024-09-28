/*
Write a function tripletTrue that accepts a string as an
argument. The function should return a boolean indicating
whether or not the the string contains three of the same
character consecutively.
*/

function tripletTrue(string) {
	let counter = 1;
	let currentChar = string[0];

	if (string.length < 3) {
		return false;
	}

	for (let i = 0; i < string.length; i++) {
		let newChar = string[i];
		if (newChar === currentChar) {
			counter++;
		} else {
			currentChar = newChar;
			counter = 1;
		}

		if (counter === 3) {
			return true;
		}
	}
	return false;
}

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("e")); // false
