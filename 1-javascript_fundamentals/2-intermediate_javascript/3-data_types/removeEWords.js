/*
Write a function removeEWords(sentence) that
accepts a sentence string as an arg. The function
should return a new string, containing only the words
that don't have the letter "e" in them.
*/

// String -> (array String)
// given a sentence, return the list of words
const sentenceToWords = function (sentence) {
	const newSentence = sentence + " ";
	let words = [];

	let prev = 0;
	for (let i = 0; i < newSentence.length; i++) {
		let current = i;
		const char = newSentence[current];
		if (char === " ") {
			const word = newSentence.substring(prev, current);
			words.push(word);
			prev = current + 1;
		}
	}

	return words;
};

// console.log(sentenceToWords("Hello, every-nyan. Howwa yu? Fine, sankyu."));

// (array String) -> String
// given an array of words, string them together into a sentence
const wordsToSentence = function (array) {
	let sentence = "";

	for (let i = 0; i < array.length; i++) {
		const word = array[i];
		sentence += word + " ";
	}

	return sentence.substring(0, sentence.length - 1);
};

// String String -> Boolean
// given a word and a letter, return true if the word
// contains the letter
const containsLetter = function (word, letter) {
	return word.indexOf(letter) > -1;
};

// String -> String
// remove the words that have the letter "e"
const removeEWords = function (sentence) {
	const words = sentenceToWords(sentence);
	let newWords = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (!containsLetter(word, "e")) {
			newWords.push(word);
		}
	}

	return wordsToSentence(newWords);
};

console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'
