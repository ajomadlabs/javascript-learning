/* Array Iteration */

/*
This is all about 8 different methods used for iterating 
through an array.
Iteration means you're going through the array and doing 
something with each item in the array. 
*/

//forEach - Example
[1,2,3].forEach( function(item, index) {
    console.log(item, index);
});

//map - Example
var firstArray = [1,2,3,4];
var double = firstArray.map( function(item) {
    return item * 2;
});
console.log(double);

//filter - Example 
var secondArray = [1,2,3];
var evens = secondArray.filter( function(item) {
    return item % 2 === 0;
});
console.log(evens);

//reduce - Example
var sum = [1,2,3,4].reduce( function(result, item) {
    return result + item;
}, 0);
console.log(sum);

//some - Example
var negativeElements = [1,2,3,4,-1,-2,5,6].some( function(item) {
    return item < 0;
});
console.log(negativeElements);

//every - Example 
var positiveElements = [1,2,3].every( function(item) {
    return item > 0;
});
console.log(positiveElements);

//find - Example
var object = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'}
];
var found = object.find( function(items) {
    return items.id === 'b';
});
console.log(found);

//findindex - Example
var objectTwo = [
    {id : 'a'},
    {id : 'b'},
    {id : 'c'}
];
var findIndex = objectTwo.findIndex( function(items) {
    return items.id === 'b';
});
console.log(findIndex);