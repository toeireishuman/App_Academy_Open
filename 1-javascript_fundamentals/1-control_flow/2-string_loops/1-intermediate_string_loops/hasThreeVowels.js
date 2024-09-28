/*
Write a function hasThreeVowels that accepts a string as an
argument. The function should return a boolean indicating whether
or not the string contains at least three different vowels.
*/

function hasThreeVowels(word) {
	const vowels = "aeiouAEIOU";
	let distinctVowels = [];

	for (let i = 0; i < word.length; i++) {
		const char = word[i];
		if (vowels.includes(char) && !distinctVowels.includes(char)) {
			distinctVowels.push(char);
		}
	}

	return distinctVowels.length >= 3;
}

console.log(hasThreeVowels("delicious")); //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp")); //  false
console.log(hasThreeVowels("dog")); //  false
console.log(hasThreeVowels("go home")); //  false
