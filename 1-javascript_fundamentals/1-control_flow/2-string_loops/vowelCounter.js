/*
Write a function, countVowels(word), that takes in a
string word and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function countVowels(word) {
	const vowels = "aeiou";
	let count = 0;

	for (let index = 0; index < word.length; index++) {
		char = word[index].toLowerCase();
		if (vowels.includes(char)) {
			count++;
		}
	}

	return count;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
