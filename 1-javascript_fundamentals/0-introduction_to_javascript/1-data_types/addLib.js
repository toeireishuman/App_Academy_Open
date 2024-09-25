/*
Use string interpolation to return a new wacky
string using the three string args.
See the examples for more information.
*/

// your code here!
function makeAddLib(verb, adjective, setting) {
	return `I shall ${verb} to the ${adjective} ${setting}?`;
}

console.log(makeAddLib("swim", "sparkly", "rainbow")); // => "I shall swim to the sparkly rainbow?"
console.log(makeAddLib("RUN", "FANCY", "ParK")); // => "I shall RUN to the FANCY ParK?"
