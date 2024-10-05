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

// String -> String
// Given a word, translate with the following conditions:
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
function translate(word) {
	const vowels = "aeiouAEIOU";
	const lastChar = word[word.length - 1];

	if (word.length < 3) {
		return word;
	} else if (vowels.includes(lastChar)) {
		return `${word}${word}`;
	} else {
		const lastVowelindex0 = lastVowelIndex(word);
		const suffix = word.substring(lastVowelindex0);
		return `${word}${suffix}`;
	}
}

// String -> String
// Given a sentence, translate each word with the translate function.
function repeatingTranslate(sentence) {
	const words = sentence.split(" ");
	let translatedWords = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		translatedWords.push(translate(word));
	}

	return translatedWords.join(" ");
}

console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"
