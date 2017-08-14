/* Functions */

/*
Functions are the fundemental building blocks of JavaScript.
They are more of a proceedure in JavaScript that performs a task and calculates a value.
To use a function, we define the function somewhere and call the function somewhere.
Function consists of a function definition which is also called a function decorator or function statement
and function body.
Function definition consists of a function keyword, a function name and followed by the params.
Function body consists of the statements that helps to perform a task.
Params are variables which holds value which will be the input to the function.
*/

function square(number){
    return number * number;
}

console.log(square(5));

/*
Scope
Every variable declared outside the function are called Global Variables.
These variables consists of a Global Scope.
Every variables declared inside the function and used as parameters are called Local Variables.
These variables consists of a Local Scope.
When the Global and Local variable has the same name, local variable will have precedence over the other.
*/

var myNumber = 25;
function square(number){
    myNumber = 27;
    console.log(myNumber);
    return number * number;
}
console.log(myNumber);
console.log(square(5));

/*
Nesting Functions
Functions that are defined inside another function.
The inner function will be private to the outer function.
*/

function addsquares(numberOne, numberTwo){
    
    function square(number){
        return number * number;
    }

    return square(numberOne) + square(numberTwo);
}
console.log(addsquares(1, 4)) //returns 17
console.log(addsquares(2, 3)) //returns 13