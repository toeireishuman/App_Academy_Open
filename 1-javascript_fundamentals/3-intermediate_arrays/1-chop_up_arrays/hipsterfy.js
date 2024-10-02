/*
Write a function hipsterfy(sentence) that takes in a sentence string and
returns the sentence where every word is missing its last vowel.
*/

// String -> String
// given a word, remove its last vowel
function removeLastVowel(word) {
	const vowels = "aeiouAEIOU";
	let lastVowelIndex;

	for (let i = word.length - 1; i > 0; i--) {
		const char = word[i];
		if (vowels.includes(char)) {
			lastVowelIndex = i;
			i -= word.length;
		}
	}

	const first = word.substring(0, lastVowelIndex);
	const last = word.substring(lastVowelIndex + 1);

	if (first === last) {
		return first;
	} else {
		return first + last;
	}
}

// String -> String
// given a sentence, remove the last vowel of every word
function hipsterfy(sentence) {
	const sentenceArray = sentence.split(" ");
	let alteredSentenceArray = [];

	for (let i = 0; i < sentenceArray.length; i++) {
		const word = sentenceArray[i];
		alteredSentenceArray.push(removeLastVowel(word));
	}

	return alteredSentenceArray.join(" ");
}

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
