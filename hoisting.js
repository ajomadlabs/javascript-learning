/* Hoisting */

/*
Variable definitions and Function definitions are processed even before any code is executed.
Variables and Functions can be used even before they are declared .
*/

console.log(myName);
var myName;
console.log(myName);
var myName = 'Ajo John';
console.log(myName);

console.log(squares(5));
function squares(number){
    return number * number;
}