/* Objects */

/*
Object is a standalone data types with properties and types.
A property is a variable that is attached to the object.
Properties can accessed using '.' notation.
Properties of the Object can be set using '[]' notation also.
Objects can be created in three ways 
1. Object Initializer
2. Constructor Function
3. Object.create
*/

//Example - 1
var myProfile = new Object();
myProfile.name = 'Ajo';
myProfile.place = 'Kerala';
myProfile.country = 'India';
myProfile.degree = 'BTech';
console.log(myProfile.country);

//Example - 2
myProfile['Attitude'] = "Simple";

//Example - 3
function objectProps (obj, objName) {
    var result = " ";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += obj[i];
        }
    }
    return result;
}
console.log(myCar, 'myCar');

//Example - 4
var myHonda = {color:'red',wheels:4,engine:{cylinders:4,size:2}};

//Example - 5
function Profile (name,place,country,attitude) {
    this.name = name;
    this.place = place;
    this.country = country;
    this.attitude = attitude;
}
myProfile = new Profile("John","Mumbai","India","Sadist");
console.log(myProfile.name);

//Example - 6
var Animal = {
    type: "Reptiles",
    displayType: function() {
        console.log(this.type);
    }
} 

var animal1 = Object.create(Animal);
animal1.type = "Vertibrates";
animal1.displayType();