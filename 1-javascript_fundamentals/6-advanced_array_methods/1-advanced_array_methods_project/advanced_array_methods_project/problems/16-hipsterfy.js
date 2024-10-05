/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function (word) {
	const vowels = "aeiouAEIOU";
	let index;

	for (let i = word.length; i > 0 - 1; i--) {
		const char = word[i];

		if (vowels.includes(char)) {
			index = i;
			i = -1;
		}
	}

	const before = word.substring(0, index);
	const after = word.substring(index + 1);

	return before + after;
};

let hipsterfy = function (sentence) {
	const words = sentence.split(" ");

	return words.map(removeLastVowel).join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
	module.exports = hipsterfy;
} catch (e) {
	module.exports = null;
}
