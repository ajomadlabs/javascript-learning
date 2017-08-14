/* JSON */

/*
JSON is datatype where data is stored as name value pair.
Data is seperated by ',' and '{}' holds objects.
'[]' holds arrays.
JSON can only contain any of the following type such as 
Objects, Arrays, Strings, Numbers, Null and Boolean.
JSON cannot be a function, a date or undefined.
There are two methods associated with JSON
*/

//JSON
var myProfile = {
    "name" : {
        "firstname" : "John",
        "lastname" : "Mathew"
    },
    "age" : 33,
    "skills" : ["coding","reading"],
    "married" : false,
    "superpowers" : null
}

//Stringify Method 
var myProfileString = JSON.stringify(myProfile);
console.log(myProfileString);

//Parse Method
var stringJson = '{"name":"John","kids":0,"state":"kerala"}';
var myParse = JSON.parse(stringJson);
console.log(myParse);