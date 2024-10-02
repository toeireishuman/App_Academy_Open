/*
Write a function consonantCancel that takes in a sentence and returns a new
sentence where every word begins with it's first vowel.
*/

// String -> String
// given a word, return the substring beginning with its first vowel
function consonantCancelWord(word) {
	const vowels = "aeiouAEIOU";

	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		if (vowels.includes(char)) {
			const firstVowelIndex = i;
			return word.substring(firstVowelIndex);
		}
	}

	return word;
}

// String -> String
// given a sentence, return a new sentence where every word
// begins with its first vowel
function consonantCancel(sentence) {
	const sentenceArray = sentence.split(" ");
	let consonantCancelSentenceArray = [];

	for (let i = 0; i < sentenceArray.length; i++) {
		const word = sentenceArray[i];
		consonantCancelSentenceArray.push(consonantCancelWord(word));
	}

	return consonantCancelSentenceArray.join(" ");
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
