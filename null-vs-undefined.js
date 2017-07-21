/* Null vs Undefined */

/*
Null is a datatype in Javascript which is used to assign null values to the varaibles.
Undefined is a datatype in Javascript which indicates whether a variable is initialized or not.
Null and Undefined have equal values.
They do not follow strict quality.
Mathematically null means 0.
The type of null is Object.
The type of undefined is Undefined.
*/

var myName =  undefined;
console.log(myName);

var first = null;
console.log(first);

console.log(typeof null);
console.log(typeof undefined);

if (null == undefined) {
    console.log("Yeah !");
} else {
    console.log("Oh !");
}

if (null === undefined) {
    console.log("Awesome !");
} else {
    console.log("We did'nt know that");
}

console.log(1 + null);
console.log(1 + undefined);