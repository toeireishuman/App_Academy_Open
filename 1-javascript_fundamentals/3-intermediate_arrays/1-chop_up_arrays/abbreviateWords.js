/*
Write a function abbreviateWords(sentence) that takes in a sentence string.
The function should return a new sentence where words that are longer than 4
characters have their vowels removed. Hint: Consider creating a helper function
to remove all vowels in a string.
*/

// String -> String
// given a word, remove all the vowels
function abbreviateWord(word) {
	const vowels = "aeiouAEIOU";
	let abbWord = "";

	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		if (!vowels.includes(char)) {
			abbWord += char;
		}
	}

	return abbWord;
}

// String -> String
// given a sentence, return a new sentence where words that
// are longer than 4 characters have their vowels removed
function abbreviateWords(sentence) {
	const sentenceArray = sentence.split(" ");
	let abbSentenceArray = [];

	for (let i = 0; i < sentenceArray.length; i++) {
		const word = sentenceArray[i];

		if (word.length > 4) {
			abbSentenceArray.push(abbreviateWord(word));
		} else {
			abbSentenceArray.push(word);
		}
	}

	return abbSentenceArray.join(" ");
}

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message ")); // she snds an xcllnt mssg
