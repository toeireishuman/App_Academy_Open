// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// String -> String
// given a word, repeat all letters that come after the last vowel
// assume: the word has at least one vowel
function echoLastVowel(word) {
	const vowels = "aeiouAEIOU";
	let lastVowelIndex;

	for (let i = word.length - 1; i > 0 - 1; i--) {
		const char = word[i];
		if (vowels.includes(char)) {
			lastVowelIndex = i;
			i = -1;
		}
	}

	const repeat = word.substring(lastVowelIndex);
	return word + repeat;
}

// String -> String
// given a word, repeat the word twice
function echo(word) {
	return word + word;
}

// String -> String
// given a word, translate as follows:
//     - words shorter than 3 letters are unchanged
//     - for those that are at least 3 characters:
//          - if the word ends with a vowel, repeat the word twice
//          - if not, repeat the words after the last vowel
//     - the original casing is preserved
function translate(word) {
	const vowels = "aeiouAEIOU";
	const wordLength = word.length;
	const wordLastChar = word[wordLength - 1];

	if (wordLength < 3) {
		return word;
	} else if (vowels.includes(wordLastChar)) {
		return echo(word);
	} else {
		return echoLastVowel(word);
	}
}

// String -> String
// given a sentence, the function should translate the sentence as follows:
//     - words shorter than 3 letters are unchanged
//     - for those that are at least 3 characters:
//          - if the word ends with a vowel, repeat the word twice
//          - if not, repeat the words after the last vowel
//     - the original casing is preserved
function repeatingTranslate(sentence) {
	const sentenceArray = sentence.split(" ");
	let translatedSentenceArray = [];

	for (let i = 0; i < sentenceArray.length; i++) {
		const word = sentenceArray[i];
		translatedSentenceArray.push(translate(word));
	}

	return translatedSentenceArray.join(" ");
}

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"
