/* If-else */

/*
If-else statements are basically used to check and execute statements based on the evaluation.
*/

var answer = true;
if (answer) {
    console.log("Teach code is awesome !");
} else {
    console.log("Teach code is horrible !");
}

/* Comparison Operators */

/*
These are those which are used to compare two values.
These mainly consists of < > <= >= == !=.
*/

var age = 18;   //change the value to see different outputs
if (age >= 18) {
    console.log("You are an adult");
} else if (age < 2) {
    console.log("Your a baby");
} else if (age < 18) {
    console.log("Your a child");
};

var myAge = 18; //change the value to see different outputs
if (myAge == 18) {
    console.log("You are eligible");
} else if (myAge != 18) {
    console.log("Your NOT eligible");
}