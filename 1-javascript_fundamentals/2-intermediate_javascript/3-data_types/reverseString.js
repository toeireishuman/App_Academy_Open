/*
Write a function reverseString(str) that
takes in a string. The function should return
a new string where the order of the characters is reversed.
*/

// String -> String
// given a string, return a new string where the order of the
// characters is reversed
const reverseString = function (string) {
	let newString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		const char = string[i];
		newString += char;
	}
	return newString;
};

console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'
