/* Arrays */

/*
These are variables where we can store several piece of data in one place.
Syntax:-
var arrayVar = ["hello","how","are","you"];
Arrays can store any datatype like booleans, strings, numbers etc.
You can nest an array inside another array, these are called multi-dimensional arrays.
Items in array can be accessed using the index.
Every array will have a common method called foreach.
*/

//Example 1 :
var cars = ["Honda", "Toyota", "Lexus"];
console.log(cars[1]);

//Example 2:
var groups = [
    ["Albin", 21],
    ["John", 20],
    ["Mark", 35]
]
console.log(groups[1][0]);

//Example 3:
groups.forEach(function(item){
    console.log(item);
});