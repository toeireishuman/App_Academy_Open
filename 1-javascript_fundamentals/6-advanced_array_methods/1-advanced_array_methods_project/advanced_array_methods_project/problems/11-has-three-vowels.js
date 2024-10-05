/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
	const countVowels = function (str) {
		const vowels = "aeiouAEIOU";
		const characters = str.split("");
		let uniqueVowels = [];

		for (let i = 0; i < characters.length; i++) {
			const char = characters[i];

			if (vowels.includes(char) && !uniqueVowels.includes(char)) {
				uniqueVowels.push(char);
			}
		}

		return uniqueVowels.length;
	};

	return countVowels(string) >= 3;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
	module.exports = hasThreeVowels;
} catch (e) {
	module.exports = null;
}
