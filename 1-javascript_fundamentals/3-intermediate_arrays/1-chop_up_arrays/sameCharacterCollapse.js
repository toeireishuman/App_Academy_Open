/*
Write a function sameCharCollapse that takes in a string and returns a
collapsed version of the string.

To collapse the string, we repeatedly delete 2 adjacent characters
that are the same until there are no such adjacent characters.
If there are multiple pairs that can be collapsed, delete the leftmost pair.

For example, we take the following steps to collapse "zzzxaaxy":
zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

function sameCharCollapse(str) {
	let newStr = str;

	for (let i = 0; i < newStr.length; i++) {
		const char1 = newStr[i];
		const char2 = newStr[i + 1];
		if (char1 === char2) {
			newStr = newStr.split(char1 + char2).join("");
			i = 0;
		}
	}

	return newStr;
}

console.log(sameCharCollapse("zzzxaaxy")); // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
