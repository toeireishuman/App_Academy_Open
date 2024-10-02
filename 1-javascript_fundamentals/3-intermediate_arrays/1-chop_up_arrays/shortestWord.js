/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

// String -> String
// given a sentence, return the shortest word
// in case of a tie, return the word that appears later
function shortestWord(sentence) {
	const words = sentence.split(" ");
	let shortest = words[0];
	let shortestNum = shortest.length;

	for (let i = 1; i < words.length; i++) {
		const current = words[i];
		const currentNum = current.length;
		if (currentNum <= shortestNum) {
			shortest = current;
			shortestNum = currentNum;
		}
	}

	return shortest;
}

console.log(shortestWord("what a wonderful life")); // 'a'
console.log(shortestWord("the quick brown fox jumps")); // 'fox'
console.log(shortestWord("do what you enjoy")); // 'do'
