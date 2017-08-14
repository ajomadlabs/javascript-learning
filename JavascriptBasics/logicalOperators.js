/* Logical Operators and Short Circuit Evaluation */

/*
Logical Operators are mainly 
1. AND &&
2. OR ||
AND is an operator which checks if both the statements are true.
OR is an operator which check if either one of the statements is true.
*/

num = 6;

if (num > 5 && num < 10) {
    console.log("Yeah ! I found AND");
} else {
    console.log("I guess I need to grow more");
}

if (num > 5 || num < 10) {
    console.log("Yeah ! I found OR");
} else {
    console.log("I guess I need to grow more");
}

/* Short Ciruit Evaluation */

test = true; //Change the value to false and observe.
var newTrue = function() {
    return true
}

var newFalse = function() {
    return false;
}

if (test && newTrue()) {
    console.log("Yeah I'm true");
} else {
    console.log("Yeah I'm false");
}
