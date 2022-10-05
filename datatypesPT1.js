/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* In JS you need to classify data so the computer knows how to deal with it
There are:
numbers, wirtten as 10
strings, written as "word"
boolean, can be true or false
undefined, is a datatype not decared as anything, yet
null, datatype was set or undefined but is now resetted
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* While coding we need to store information or temporarily partial results somewhere
herefore we use containers(variables). They have always different readable names, starting with a low letter 
and mustn't include spaces. If a name has more then 1 word, the 2nd and ongoing word starts with a big letter. 
Names can an include numbers. Those variables has a limited scope und can be totally reused at any time.


*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* let sum = 12 + 30 */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* 
let x;
x = 12;

*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* 
let name = "John Doe"

*/

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* 
let sub;
sub = 12 - x

*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
console.log("\nExercise 7");

let name1 = "john";
let name2 = "John";
let sameName1;
let sameName2;

sameName1 = name1 === name2; // FALSE
sameName2 = name2 === name2; // TRUE

console.log("Name varification 1", sameName1);
console.log("Name varification 2", sameName2);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
console.log("\nExercise 8");

let x = 5;
let literalNumber;

if (x === 9) {
  literalNumber = "Nine";
}
if (x === 8) {
  literalNumber = "Eight";
}
if (x === 7) {
  literalNumber = "Seven";
}
if (x === 6) {
  literalNumber = "Six";
}
if (x === 5) {
  literalNumber = "Five";
}
if (x === 4) {
  literalNumber = "Four";
}
if (x === 3) {
  literalNumber = "Three";
}
if (x === 2) {
  literalNumber = "Two";
}
if (x === 1) {
  literalNumber = "One";
}
if (x === 0) {
  literalNumber = "Zero";
}

console.log("Number is", literalNumber);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/
console.log("\nExercise9");

let y = 2;
let literalNumberTenary;

literalNumberTenary =
  y === 9
    ? "Nine"
    : y === 8
    ? "Eight"
    : y === 7
    ? "Seven"
    : y === 6
    ? "Six"
    : y === 5
    ? "Five"
    : y === 4
    ? "Four"
    : y === 3
    ? "Three"
    : y === 2
    ? "Two"
    : y === 1
    ? "One"
    : y === 0
    ? "Zero"
    : "number not in range";

console.log("(Tenary) Number is", literalNumberTenary);
