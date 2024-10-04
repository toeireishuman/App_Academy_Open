/*
Write a function removeLastVowel(word) that takes in a string and
returns the string with its last vowel removed.
*/

// String -> String
// Given a word, return the word with the last vowel removed.
function removeLastVowel(word) {
	// String -> Number
	// Given a word, return the index of the last vowel.
	// If there are no vowels, return -1.
	function lastVowelIndex(word) {
		const vowels = "aeiouAEIOU";

		for (let i = word.length - 1; i > 0 - 1; i--) {
			const char = word[i];
			if (vowels.includes(char)) {
				return i;
			}
		}

		return -1;
	}

	const lastVowelI = lastVowelIndex(word);

	if (lastVowelI === -1) {
		return word;
	} else {
		const before = word.substring(0, lastVowelI);
		const after = word.substring(lastVowelI + 1);
		return before + after;
	}
}

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
