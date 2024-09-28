/*
Write a function moreDotLessDash that accepts a string as an
argument. The function should return a boolean indicating whether
or not the string contains more dots (.) than dashes (-).
*/

function moreDotLessDash(string) {
	function countChars(string, char) {
		let count = 0;
		for (let i = 0; i < string.length; i++) {
			if (string[i] === char) {
				count++;
			}
		}
		return count;
	}

	const countDots = countChars(string, ".");
	const countDashes = countChars(string, "-");

	return countDots > countDashes;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false
