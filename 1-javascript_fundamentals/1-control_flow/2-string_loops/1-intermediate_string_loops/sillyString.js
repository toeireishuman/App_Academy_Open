/*
Write a function sillyString that accepts a word as an
argument. The functions should return a new word where
every vowel of the original word is followed by 'b' and
that same vowel. For example, 'siren' would turn into 'sibireben'.
*/

function sillyString(word) {
	const vowels = "aeiouAEIOU";
	let new_word = "";

	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		if (vowels.includes(char)) {
			new_word += `${char}b${char}`;
		} else {
			new_word += char;
		}
	}

	return new_word;
}

console.log(sillyString("stop")); // stobop
console.log(sillyString("that")); // thabat
console.log(sillyString("can")); // caban
console.log(sillyString("cats")); // cabats
console.log(sillyString("italy")); // ibitabaly
console.log(sillyString("scooter")); // scobooboteber
console.log(sillyString("rhythm"));
