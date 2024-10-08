/*
The following function is named aCounter(word). The function
takes in a word and returns the number of a's within that word.
The function counts both lowercase (a) and uppercase (A). Your
job is to translate the following function to use a for loop
instead of the while loop it is currently using. If you forget
the syntax for a for loop go back and check out the reading.
*/

// function aCounter(word) {
// 	let index = 0;
// 	let count = 0;
// 	while (index < word.length) {
// 		let char = word[index];
// 		if (char === "a" || char === "A") {
// 			count += 1;
// 		}
// 		index++;
// 	}
// 	return count;
// }

function aCounter(word) {
	let count = 0;
	for (let index = 0; index < word.length; index++) {
		const char = word[index].toLowerCase();
		if (char === "a") {
			count++;
		}
	}
	return count;
}

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3
