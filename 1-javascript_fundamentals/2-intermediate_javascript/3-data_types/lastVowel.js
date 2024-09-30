/*
Write a function lastVowel(str) that takes
in a string and returns the last vowel that appears
sequentially in the string. Note that the string may
contain capitalization.

Hint: You may find the String.toLowerCase() or
String.toUpperCase() methods useful.
*/

// String -> String or Null
// return the last that appears sequentially in the string,
// return null if no vowel is found
const lastVowel = function (word) {
	const vowels = "aeiouAEIOU";

	for (let i = word.length - 1; i >= 0; i--) {
		const char = word[i];
		if (vowels.includes(char)) {
			return char;
		}
	}

	return null;
};

console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null
