/* Copy Array Methods */

/*
There are many ways to copy from one array to another.
Some are slice, spread and deep copying.
*/

//Slice Operator
var arrayOne = ['true', 'true', 'false', 'null'];
var copyOne = arrayOne.slice(0);
console.log(copyOne);

//Spread Operator
var copyTwo = [...arrayOne];
console.log(copyTwo);

//Deep Copying
var deepArray = [['freeCodeCamp']];
var shallowArray = deepArray.slice(0);

var deepCopy = JSON.parse(JSON.stringify(deepArray));
deepCopy[0].push('is great');
console.log(deepArray[0], deepCopy[0]);