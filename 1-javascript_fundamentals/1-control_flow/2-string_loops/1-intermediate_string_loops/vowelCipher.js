/*
Write a function vowelCipher that takes in a string and
returns a new string where every vowel becomes the next
vowel in the alphabet.
*/

function vowelCipher(string) {
	const vowels = "aeiou";
	let newString = "";
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (vowels.includes(char)) {
			newString += vowels[(vowels.indexOf(char) + 1) % 5];
		} else {
			newString += char;
		}
	}
	return newString;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
