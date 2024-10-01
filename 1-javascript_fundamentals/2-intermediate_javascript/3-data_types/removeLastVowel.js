/*
Write a function removeLastVowel(word)
that takes in a string and returns the string
with its last vowel removed.
*/

// String -> Natural or -1
// return the index of the last vowel in the string
// if there are no vowels, return -1
const getLastVowelIndex = function (string) {
	const vowels = "aeiouAEIOU";

	for (let i = string.length; i >= 0; i--) {
		const char = string[i];
		if (vowels.includes(char)) {
			return i;
		}
	}

	return -1;
};

// String -> String
// remove the last vowel of the given string
const removeLastVowel = function (string) {
	if (getLastVowelIndex(string) === -1) {
		return string;
	} else {
		const lastVowelIndex = getLastVowelIndex(string);
		return `${string.substring(0, lastVowelIndex)}${string.substring(
			lastVowelIndex + 1
		)}`;
	}
};

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
