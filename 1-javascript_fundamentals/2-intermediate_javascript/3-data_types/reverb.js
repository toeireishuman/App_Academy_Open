/*
Write a function reverb that accepts a word
as an argument. The function should return a new
word where all letters that come after the last vowel
(including the vowel itself) are repeated at the end
of the word. If the value passed in is not a string,
say someone passes in a number as an argument, then return null.
*/

// String -> Number or -1
// return the index of the last vowel that appears sequentially in the string,
// return -1 if no vowel is found
const lastVowelIndex = function (word) {
	const vowels = "aeiouAEIOU";

	for (let i = word.length - 1; i >= 0; i--) {
		const char = word[i];
		if (vowels.includes(char)) {
			return i;
		}
	}

	return -1;
};

// String -> String
// return a new word where all letters that come after the last vowel
// (including the vowel itself) are repeated at the end
// of the word. If the given data is not string, return null.
const reverb = function (string) {
	if (typeof string !== "string") {
		return null;
	}

	return `${string}${string.substring(lastVowelIndex(string))}`;
};

console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb(197393)); // null
