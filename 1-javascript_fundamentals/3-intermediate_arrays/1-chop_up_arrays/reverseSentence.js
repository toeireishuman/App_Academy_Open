/*
Write a function reverseSentence(sentence) that takes in a sentence as an
arg. The function should return a new sentence where the order of the words
is reversed. Note that you should reverse the order among words, not the order
among characters.
*/

// String -> String
// given a sentence, reverse the order of the words
// and return it as a sentence
function reverseSentence(sentence) {
	const sentenceArray = sentence.split(" ");
	let reverseSentenceArray = [];

	for (let i = 0; i < sentenceArray.length; i++) {
		const word = sentenceArray[i];
		reverseSentenceArray.unshift(word);
	}

	return reverseSentenceArray.join(" ");
}

console.log(reverseSentence("I am pretty hungry")); // 'hungry pretty am I'
console.log(reverseSentence("follow the yellow brick road")); // 'road brick yellow the follow'
