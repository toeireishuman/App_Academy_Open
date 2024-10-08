/*
Time to practice array destructuring! We have given you an array.
Practice destructuring arrays by assigning variables to every value in
the array below all in one line of code. Check your work by console.loging
each of the variables to make sure you got them all.
*/

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

const [fruit, num1, num2, num3, { name: obj }, [fruitArr]] = bigArray;

console.log(fruit);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(obj);
console.log(fruitArr);

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
