/*
Write a function hipsterfy(sentence) that takes in a sentence string and
returns the sentence where every word is missing its last vowel.
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

// String -> String
// Given a sentence, return each word with the last vowel removed.
function hipsterfy(sentence) {
	const wordsArray = sentence.split(" ");
	let hipsterWordsArray = [];

	for (let i = 0; i < wordsArray.length; i++) {
		const word = wordsArray[i];
		hipsterWordsArray.push(removeLastVowel(word));
	}

	return hipsterWordsArray.join(" ");
}

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
