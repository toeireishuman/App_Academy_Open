/*
Write a function uncompress(str) that takes in a "compressed"
string as an arg. A compressed string consists of a character
immediately followed by the number of times it appears in the
"uncompressed" form. The function should return the uncompressed
version of the string. See the examples.

Hint: you can use the built-in Number function should convert a
numeric string into the number type. For example. Number("4") // => 4

You may assume that the number of times will always be an integer
between 0 and 9.
*/

function uncompress(str) {
	function units(str) {
		let all_units = [];
		for (let i = 0; i < str.length; i += 2) {
			all_units.push(str.substring(i, i + 2));
		}
		return all_units;
	}

	function expandUnit(unit) {
		const char = unit[0];
		const factor = unit[1];
		let expanded = "";
		for (let i = 0; i < factor; i++) {
			expanded += char;
		}
		return expanded;
	}

	function expandAllUnits(units) {
		let expandedUnits = [];
		for (let i = 0; i < units.length; i++) {
			expandedUnits.push(expandUnit(units[i]));
		}
		return expandedUnits;
	}

	function unitsToWord(units) {
		let word = "";
		for (let i = 0; i < units.length; i++) {
			word += units[i];
		}
		return word;
	}

	return unitsToWord(expandAllUnits(units(str)));
}

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
