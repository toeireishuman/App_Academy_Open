/*
Write a function echo that takes in a string and
console.logs that string "echo-ized".
*/

function echo(string) {
	const echo = `${string.toUpperCase()} ... ${string} ... ${string.toLowerCase()}`;
	console.log(echo);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
