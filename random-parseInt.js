/* Random Numbers and parsInt */

/*
Random Numbers are those which helps to generate random numbers.
These also help us to generate numbers between a specific range.
Fromulae : - (max-min+1)+min
*/

//Random Number
console.log(Math.random());
function minMaxRage(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(minMaxRage(9, 1));

//parseInt
