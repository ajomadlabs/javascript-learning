/* While Loops and Do While Loops */

/*
These are those which executes till the test condition is true.
It does'nt automatically increaments the counter.
Do while loops are going to ru at least once.
*/

//While Loop Example 1
var i = 0;
while (i < 5) {
    i++;
    console.log("i = " + i);
}

//While Loop Example 2
var i = 5;
while (i < 5) {
    i++;
    console.log("i = " + i);
}

//Dowhile Loop Example 3
var n = 0;
do{
    n++;
    console.log("n = " + n);
}while (n < 5);

//Dowhile Loop Example 4
var n = 5;
do{
    n++;
    console.log("n = " + n);
}while (n < 5);

//Break Example 
var j = 0;
while (j < 5) {
    j++;
    if (j > 2) break;
    console.log("j = " + j);
}

//Continue Example
var j = 0;
while (j < 5) {
    j++;
    if (j == 3) continue;
    console.log("j = " + j);
}