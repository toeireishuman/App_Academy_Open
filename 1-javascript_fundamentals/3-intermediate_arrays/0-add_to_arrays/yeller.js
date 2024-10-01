/*
Write a function yeller(words) that
takes in an array of words. The function
should return a new array where each element
of the original array is yelled.
*/

// String -> String
// given a word, "yell" it by making it
// uppercase and appending "!" at the end
const yellWord = function (word) {
	return `${word.toUpperCase()}!`;
};

// (array String) -> (array String)
// given an array of words, "yell" each word
// by making it uppercase and appending "!" at the end
const yeller = function (words) {
	let yelledWords = [];

	for (let i = 0; i < words.length; i++) {
		const yelled = words[i];
		yelledWords.push(yellWord(yelled));
	}

	return yelledWords;
};

console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
