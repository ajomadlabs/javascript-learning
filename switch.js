/* Switch Statements */

/*
It is basically a control structure which is used to perform different actions 
based on different conditions.
It is a statement which is similar to if-else.
*/

//Example 1:

var day = null;
switch(new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednessday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;
}

console.log(day);

//Example 2:

var animal = "Lion";
switch(animal){
    case 'Lion':
    case 'Giraffe':
    case 'Bear':
    case 'Tiger':
    console.log("These are Huge !");
    break;
    case 'Plate':
    console.log("This is not an animal");
    break;
    default:
    console.log("I guess there are no animals");
}