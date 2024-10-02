/*
Write a function snakeToCamel that takes in a snake_cased string and returns
a PascalCased version of the string. snake_case is where each word is separated
with underscores (_). PascalCase is a string where the first char of each word is
capital, all other chars lowercase.
*/

// String -> String
// given a string, return the same string in Pascal case
function getPascal(word) {
	const firstChar = word[0].toUpperCase();
	const restChars = word.substring(1).toLowerCase();
	return firstChar + restChars;
}

// String -> String
// given a string in snake case, return a new
// string that is in Pascal case (or camel case)
function snakeToCamel(string) {
	const words = string.split("_");
	let newString = "";

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		newString += getPascal(word);
	}

	return newString;
}

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'
