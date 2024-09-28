/*
Write a function doubleLetterCount that takes in a string
and returns the number of times that the same letter repeats twice in a row.
*/

function doubleLetterCount(string) {
	let count = 0;
	let currentChar = string[0];
	for (let i = 1; i < string.length; i++) {
		const newChar = string[i];
		if (newChar === currentChar) {
			count++;
		}
		currentChar = newChar;
	}
	return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill")); // 3
console.log(doubleLetterCount("bootcamp")); // 1
