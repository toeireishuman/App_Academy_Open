/*
Write a function longWords(words)
that takes in an array of words. The function
should return an array containing only the words that
are longer than 5 characters.
*/

// String -> Boolean
// return true if a given word is longer than 5 characters
const isLongWord = function (word) {
	return word.length > 5;
};

// (array String) -> (array String)
// given an array of words, return only
// those words that are longer than 5 characters
const longWords = function (words) {
	let longWordsArray = [];

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (isLongWord(word)) {
			longWordsArray.push(word);
		}
	}

	return longWordsArray;
};

console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]
