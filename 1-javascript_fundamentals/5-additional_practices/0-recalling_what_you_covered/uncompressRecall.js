/*
Write a function uncompress(str) that takes in a "compressed" string
as an arg. A compressed string consists of a character immediately
followed by the number of times it appears in the "uncompressed" form.
The function should return the uncompressed version of the string. See
the examples.

Hint: you can use the built-in Number function should convert a numeric
string into the number type. For example. Number("4") // => 4

You may assume that the number of times will always be an integer between
0 and 9.
*/

// Bit is String
// interp. a compressed version of another string.
// Example: the Bit "b4" describes "bbbb".

// BitString is String
// interp. a concatenation of Bits, which is also a Bit itself
// Example: "b1o2t1" describes "boot"

// Bit -> String
// Uncompresses a string from the given Bit
function bitToString(bit) {
	const char = bit[0];
	const num = bit[1];
	let string = "";

	for (let i = 0; i < num; i++) {
		string += char;
	}

	return string;
}

// BitString -> String
// Given a compressed version of a string, uncompress
// and return the original string
function uncompress(bitstring) {
	const num = bitstring.length;
	let string = "";

	for (let i = 0; i < num; i += 2) {
		const bit = bitstring.substring(i, i + 2);
		string += bitToString(bit);
	}

	return string;
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
