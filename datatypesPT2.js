// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

console.log("\nExercise 1");
let gender;
let isMale = "male";

gender = isMale === "male" ? "male" : "female";

console.log("Gender: ", gender);

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
console.log("\nExercise 2");
let int1 = 3;
let int2 = 8;
let valueEight;
let additionSubtraction;

valueEight = int1 === 8 || int2 === 8;
console.log("Value 8 available?", valueEight);

additionSubtraction =
  int1 + int2 === 8 || int1 - int2 === 8 || int2 - int1 === 8;
console.log("Equal 8 available?", additionSubtraction);

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/
console.log("\nExercise 3");
let var1 = "Epi";
let var2 = "Code";
let concatenationOf2Varibales = var1 + var2;

console.log("Variable 1", var1);
console.log("Variable 2", var2);
console.log("Concatenation of two strings", concatenationOf2Varibales);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
console.log("\nExercise 4");
let vari1 = 200;
let vari2 = 205;
let vari3 = 3;
let highest;
let middle;
let lowest;

highest = Math.max(vari1, vari2, vari3);
lowest = Math.min(vari1, vari2, vari3);

middle =
  highest === vari1 && lowest === vari2
    ? vari3
    : highest === vari3 && lowest === vari1
    ? vari2
    : highest === vari2 && lowest === vari3
    ? vari1
    : "undefined";
console.log("Highest number is", highest);
console.log("middle number is", middle);
console.log("Lowest number is", lowest);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/
console.log("\nExercise 5");
let integ1 = 10;
let integ2 = 5;
let averageOfBoth = (integ1 + integ2) / 2;

console.log("The average is", averageOfBoth);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/
console.log("\nExercise 6");
let string1 = "hi";
let string2 = "hello";
let longestString;
console.log("not solved yet");

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log("\nExercise 7");

let integerOrNotNumber = 11.56;
if (Number.isInteger(integerOrNotNumber)) {
  console.log("The number", integerOrNotNumber, "is integer.");
} else {
  console.log("The number", integerOrNotNumber, "is NOT integer.");
}

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/
console.log("\nExercise 8");
let givenNumber = 63;
let percentage = 7;
let percentageOfGivenNumber = (percentage / givenNumber) * 100;

console.log(percentage + "% of", givenNumber, "is", percentageOfGivenNumber);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/
console.log("\nExercise 9");
let evenOrOddNumber = 11;
if (evenOrOddNumber % 2 == 0) {
  console.log("The number", evenOrOddNumber, "is even.");
} else {
  console.log("The number", evenOrOddNumber, "is odd.");
}
