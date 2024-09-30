/*
Write a function firstVowel(str) that takes in a
string and returns the first vowel that appears sequentially
in the string. If the string does not contain a vowel, return null.
*/

const firstVowel = function (word) {
	if (typeof word != "string") {
		return null;
	}

	const vowels = "aeiouAEIOU";

	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		if (vowels.includes(char)) {
			return char;
		}
	}

	return null;
};

console.log(firstVowel("battery")); // 'a'
console.log(firstVowel("tunnel")); // 'u'
console.log(firstVowel("dog")); // 'o'
console.log(firstVowel("conventional")); // 'o'
console.log(firstVowel("rhythm")); // null
