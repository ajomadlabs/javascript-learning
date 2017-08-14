/* Closures */

/*
These are functions and the environments in which the 
functions were declared.
Environment consists of any local variables at the time 
of scope when the closure was created.
In Javascript all functions form closures.
*/

//Example
var counter = (function (){
    var privateCounter = 0;
    function changeByValue (val) {
        privateCounter += val;
    }
    return {
        increament : function () {
            changeByValue(1);
        },
        decreament : function () {
            changeByValue(-1);
        },
        value : function () {
            return privateCounter;
        }
    };
})();

console.log(counter.value());
counter.increament();
counter.increament();
console.log(counter.value());
counter.decreament();
console.log(counter.value());