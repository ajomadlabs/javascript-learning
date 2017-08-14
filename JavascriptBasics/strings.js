/* Strings */
/*
Strings or string literal is a sequence of zero or one character enclosed within single or double quotes.
*/
var myName = 'Ajo';
console.log(myName);
/*
There are some characters which cannot be printed simply and therefore they are called escape sequence
charaters.
Escape Sequence Characters 
\\ - Print Backslash
\" - Print Double quotes
\' - Print Single quotes
\n - Print in new line
\r - Carriage Return
\t - Print Tab space
\b - Print Backspace
\a - Audio
*/
var myName = "Hi my name is 'Ajo'";
console.log(myName);
/*
Strings are immutable.
The index in JavaScript starts from zero. This is known as ZeroIndexing.
Concatination is done using '+' operator.
*/
var myName = 'Ajo John Mathai';
console.log(myName[1]);

var firstName = 'Ajo';
var lastName = 'John';
console.log(firstName + lastName);

//String Methods
var firstString = 'TeachCode is the best place to learn';
var secondString = 'It contains both frontend as well as backend';
/*
charAt()
It returns the character at a given position in the string.
*/
console.log(firstString.charAt(3));
/*
charCodeAt()
It returns the unicode character of the character at a given position in the string.
*/
console.log(secondString.charCodeAt(4));
/*
concat()
It returns a new string after joinning two or more strings.
*/
console.log(firstString + secondString);
/*
endsWith()
It checks whether the string ends with the given character.
*/
console.log(firstString.endsWith(9));
/*
fromCharCode()
It returns the character for the given unicode.
*/
console.log(String.fromCharCode(144));
/*
includes()
It checks whether the strings contains the given the word.
*/
console.log(firstString.includes('Teach'));
/*
indexOf()
It returns the index of the first occurance for the given word.
*/
console.log(firstString.indexOf('both'));
/*
lastIndexOf()
It returns the index of the last occurance for the given word.
*/
console.log(secondString.lastIndexOf('end'));
/*
match()
It returns the matches for a given regex in the string.
*/
console.log(secondString.match(/end/g));
/*
repeat()
It returns the copies of the string for a given number of times.
*/
console.log(firstString.repeat(4));
/*
search()
It returns a true or false for a given match in string
*/
console.log(firstString.search(/end/g));
/*
replace()
It is used for replacing a particular word in a string with a given word.
*/
console.log(firstString.replace('end','END'));
/*
slice()
It is used for cutting the string.
*/
console.log(secondString.slice(2,4));
/*
split()
It is used for splitting a string with a given delimiter
*/
console.log(secondString.split(''));
