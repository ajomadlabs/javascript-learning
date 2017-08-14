/* Datatypes */

/*
JavaScript consists of 7 datatypes.
*/
/*
Boolean
It is type which gives any of the two values, either true or false.
*/

var data = true;
if(data){
    console.log("Boolean works!");
}else{
    console.log("Boolean is lame");
}

/*
Null
It is a type which used for initializing a variable with no value
*/

var firstNumber = null;
var secondNumber = 20;
console.log(firstNumber * secondNumber);

/*
Undefined
It is a type which indicates that the variable is declared but not initialized
*/

var thirdNumber = undefined;
var fourthNumber = 20;
console.log(thirdNumber * fourthNumber);

/*
Number
It is a type which holds any number like integers, decimal and many more
*/

var fifthNumber = 2.4;
var sixthNumber = 4;
console.log(fifthNumber + sixthNumber);

/*
String
It is a type which holds any word or sequence of characters
*/

var myName = 'Ajo John';
console.log(myName);

/*
Symbols
It is a type which are immutable
*/

var sym1 = Symbol("Ajo");
var sym2 = Symbol("Ajo");
if(sym1 === sym2){
    console.log("Hurray!");
}else{
    console.log("I'm sorry!");
}

/*
Objects
It is a collection of properties
*/

var myCar = new Object();
myCar.brand = "Nissan";
myCar.model = "Sunny";
console.log(myCar.brand);
console.log(myCar.model);