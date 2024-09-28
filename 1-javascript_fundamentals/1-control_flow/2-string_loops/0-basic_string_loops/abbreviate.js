/*
Write a function abbreviate(word) that takes in a string arg.
The function should return a new string where all of its vowels
are removed.
*/

// your code here

function abbreviate(word) {
	const vowels = "aeiouAEIOU";
	let new_word = "";
	for (let index = 0; index < word.length; index++) {
		const char = word[index];
		if (!vowels.includes(char)) {
			new_word += char;
		}
	}
	return new_word;
}

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian")); // 'ccrdn'
