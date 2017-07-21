/* Equality */

/*
There are two types of equality.
Abstract Equaliy and Strict Equality.
Abstract Equality - It is an equality which only checks the value and not the type.
Strict Equality - It is an equality which checks both the type and the value.
Abstract equality is denoted by '=='.
Strict Equality is denoted by '==='.
*/

//Abstract Equality
if (1 == '1') {
    console.log("Hurray ! It's correct");
} else {
    console.log("Oh ! This is not working");
}

//Strict Equality 
if ( 1 === '1') {
    console.log("Hurray ! This is again great");
} else {
    console.log("Oh ! This is not working");
}

if (1 === 1) {
    console.log("Great ! This is how it works");
} else {
    console.log("This does'nt work at all");
}