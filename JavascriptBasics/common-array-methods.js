/* Common Array Methods */

/* Push Method : This is a method which helps to add items into the array. */
//Example :

var array = ['hello', 'how', 'are'];
array.push('you');
console.log(array);

/* Pop Method : This is a method which helps to remove the last element and return that element. */
//Example :

var array = ['a', 'b', 'c', 'd'];
array.pop();
console.log(array);

/* Concat : This is a methoda which helps to join two arrays. This does not affect the original array */
//Example :

secArray = ['one', 'two', 'three'];
console.log(array.concat(secArray));

/* Join : This is a method which helps to join a string and does not modify the original array */
//Example :

console.log(array.join(""));

/* Reverse : This is a method which reverses the elements in the array. */
//Example :

console.log(array.reverse());

/* Shift : This is a method which removes the first element in the array and return that element */
//Example :

array.shift();
console.log(array);

/* Unshift : This is a method which adds a new element to the beginning of the array.*/
//Example :

array.unshift('e');
console.log(array);

/* Slice : This is a method which splits an array and returns the remainning part */
//Example :

console.log(array.slice(1,3));

/* Sort : This is a method which sorts the array. */
//Example :

array.sort();
console.log(array);

/* Splice :  This is a method which helps to remove elements and insert a new item. */
//Example :

array.splice(1,2,'Ajo, Im fine');