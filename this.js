/* THIS */

/*
THIS refers to the object that owns the Javascript Code.
*/

//Example 
function example (varOne, varTwo) {
    return this.a + this.b + varOne + varTwo;
}

var value = {a:2,b:4};
console.log(example.call(value,5,6));       //Call Method
console.log(example.apply(value,[5,6]));    //Apply Method