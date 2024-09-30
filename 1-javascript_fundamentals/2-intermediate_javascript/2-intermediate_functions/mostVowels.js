/*
Write a function mostVowels that takes in a
sentence string and returns the word of the sentence
that contains the most vowels.
*/

// String -> (array String)
// given a sentence, return the list of words (separated by " ")
const sentenceToWords = function (sentence) {
	let new_sentence = sentence + " ";
	let words = [];

	let start = 0;
	for (let end = 0; end < new_sentence.length; end++) {
		if (new_sentence[end] === " ") {
			new_word = new_sentence.substring(start, end + 1);
			words.push(new_word);
			start = end + 1;
			end += 1;
		}
	}

	return words;
};

// String -> Number
// given a word, return the number of its vowels
const getNumVowels = function (word) {
	let vowels = "aeiouAEIOU";
	let numVowels = 0;

	for (let i = 0; i < word.length; i++) {
		let char = word[i];
		if (vowels.includes(char)) {
			numVowels++;
		}
	}

	return numVowels;
};

// String -> String
// given a sentence, return the word with the most vowels
const mostVowels = function (sentence) {
	let words = sentenceToWords(sentence);
	let bestWord = words[0];
	let bestWordNum = getNumVowels(bestWord);

	for (let i = 1; i < words.length; i++) {
		let currentWord = words[i];
		let currentWordNum = getNumVowels(currentWord);

		if (currentWordNum > bestWordNum) {
			bestWord = currentWord;
			bestWordNum = currentWordNum;
		}
	}

	return bestWord;
};

console.log(mostVowels("Hello, creature."));
console.log(mostVowels("what a wonderful life"));
