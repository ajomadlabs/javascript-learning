/*For in / For of */

/*
These are basically ways to loop in objects.
For in will loop through porperty names.
For of will loop through property values.
For in will loop through plain objects
For of will loop through iterable objects like sets, arrays etc.
Usage:
for (variable in object) {
    statements
}
for (variable of objects) {
    statements
}
*/

//For in
var person = {fname:"Ajo", lname:"John", legs:2};
var text = "";
for (var x in person) {
    text += person[x];
    console.log(x);
}
console.log(text);

//For of 
var value = [8,9,10];
for (var i of value) {
    console.log(i);
}