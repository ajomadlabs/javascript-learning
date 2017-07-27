/* Ternary Operator */

/*
It is the only operator which takes three operands and is a shortcut for if statement
It test the condition and returns one value if it is true and another value if it is false.
General Syntax :
condition ? exp1 : exp2
*/

//Example 1
var age = 19;
age >= 18 ? console.log("You are an adult") : console.log("You are a kid");

//Example 2
var stop;

age >= 18 ? (
    console.log("You are an adult"),
    stop = false
) : (
    console.log("You are a kid"),
    stop = true
);

//Example 3
firstCheck = false;
secondCheck = false;

access = firstCheck ? "Access Denied" : secondCheck ? "Access Denied" : "Access Granted";
console.log(access);