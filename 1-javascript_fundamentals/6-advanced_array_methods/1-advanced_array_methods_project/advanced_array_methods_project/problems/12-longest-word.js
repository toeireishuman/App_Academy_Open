/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function (sentence) {
	const countCharacters = function (word) {
		let numCharacters = 0;

		word.split("").forEach(char => numCharacters++);

		return numCharacters;
	};

	const words = sentence.split(" ");

	return words.reduce(function (accum, word) {
		return countCharacters(accum) >= countCharacters(word) ? accum : word;
	}, "");
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
	module.exports = longestWord;
} catch (e) {
	module.exports = null;
}
