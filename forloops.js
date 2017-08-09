/* Forloops */

/*
These are the most common loops used in Javascript.
Forloops are those loops which run for a specific time.
Syntax : 
for ([initialization]; [condition]; [final expression]){}
*/

//For Example - 1
var arrayOne = [];
for ( var i=0; i<5; i++ ) {
    arrayOne.push(i);
}
console.log(arrayOne);

//For Example - 2
var arrayTwo = [11,12,13,14,15];
for ( var i=0; i<arrayTwo.length; i++) {
    console.log(arrayTwo[i]);
}

//For Example - 3
var arrayThree = [
    [1,2],[3,4],[5,6]
];
for ( var i=0; i<arrayThree.length; i++) {
    for ( var j=0; j<arrayThree[i].length; j++) {
        console.log(arrayThree[i][j]);
    }
}
