/*
Write a function that takes a location,
either "FRONT" or "BACK" and adds an element to
either the front or back of the given array. If
location is anything besides "FRONT" or "BACK", print
an error. Your function should not return anything and
should mutate the original array.

(Hint: Look up the JavaScript functions: push/pop/shift/unshift)
*/

// Location is one of:
//    - "FRONT"
//    - "BACK"
// interp. a location in an array

// Location X (array X) -> (array X)
// given a location, an element, and an array,
// place the element in the specified location of the array
function addToArray(location, element, arr) {
	if (location !== "FRONT" && location !== "BACK") {
		return "ERROR";
	}

	if (location === "FRONT") {
		arr.unshift(element);
	} else if (location === "BACK") {
		arr.push(element);
	}
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]
