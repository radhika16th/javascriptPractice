/* 
    Data Types
    You can store any kind of data type in javascript, doesn't matter what type it is
*/

var colour = "yellow"; // anywhere in the program
colour = null;

let c = 12; // within the scope declared

const hi = "hello";
console.log(colour+ "\n");

/* 
    Strings
    Escaping literal quotes, or use single quotes instead of double
    Immutable: can't change a single letter, the whole string
*/

var myStr = "I'm a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
console.log(myStr.length); // length of the string
console.log(myStr[0]+ "\n"); // first char of the string

/*
    Arrays
    You can store any type in the same array
*/
var arr = ["blue", 24, "mia", "34", ["pink elephant", 2]];
console.log(arr[4]); // prints index 4, item 3
console.log(arr[4][1]); // prints index 4, second element
console.log(arr); // prints index 2 as array of 2 elements "Array(2)"

arr[2] = "yellow";
console.log(arr); // "[blue', 24, 'yellow']"

arr.push("white"); // append to the end
console.log(arr);

arr.pop(); // remove last element
console.log(arr);

arr.shift() // remove first element
console.log(arr);

arr.unshift("black") // appends to the start
console.log(arr);

/*
    MadLibs
    Use of functions
*/

function wordBlanks(noun, adj, verb, adverb)
{
    var result = "";
    result += "The " + adj + " " + noun + " " + verb + " to her burrow " + adverb + ".";

    return result;
}

console.log(wordBlanks("bunny", "cute", "hopped", "quickly"));