/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

// String -> String
// given a sentence, return the longest word
function longestWord(sentence) {
	const words = sentence.split(" ");
	let longest = words[0];
	let longestNum = longest.length;

	for (let i = 1; i < words.length; i++) {
		const current = words[i];
		const currentNum = current.length;
		if (currentNum > longestNum) {
			longest = current;
			longestNum = currentNum;
		}
	}

	return longest;
}

console.log(longestWord("where did everyone go")); // 'everyone'
console.log(longestWord("prefer simplicity over complexity")); // 'simplicity'
console.log(longestWord("")); // ''
