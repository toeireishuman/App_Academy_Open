/*
Write a function hasDoubleLetter(str) that accepts a string.
The function should return a boolean indicating whether the
string contains two of the same character consecutively. If the
value passed into the function is not a string, return null.
*/

// String -> Boolean or Null
// return true if the given word has two consecutive identical letters,
// return null if the given data is not a string
function hasDoubleLetter(word) {
	if (typeof word !== "string") {
		return null;
	}

	for (let i = 0; i < word.length - 1; i++) {
		const char1 = word[i];
		const char2 = word[i + 1];
		if (char1 === char2) {
			return true;
		}
	}

	return false;
}

console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null
