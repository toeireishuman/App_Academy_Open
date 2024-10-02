/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

// String -> String
// given a name, return the first character as uppercase
function getInitial(name) {
	return name[0].toUpperCase();
}

// String -> String
// given a full name, return the initials as uppercase
function initials(fullname) {
	let namesArray = fullname.split(" ");
	let initialsArray = [];

	for (let i = 0; i < namesArray.length; i++) {
		const name = namesArray[i];
		const initial = getInitial(name);
		initialsArray.push(initial);
	}

	return initialsArray.join("");
}

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
