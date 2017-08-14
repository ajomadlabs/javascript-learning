/* Object part - 2 */

//Using Object for LookUps
var alphabets = {
    1:'A',
    2:'B',
    3:'C',
    4:'D'
}
console.log(alphabets[2]);

//Removing Object Properties
var cars = {
    wheels:4,
    engine:1,
    seats:5,
    lights:3
}
delete cars.lights;
console.log(cars);

//Testing Objects for Properties
console.log(cars.hasOwnProperty('wheels'));
console.log(cars.hasOwnProperty('lights'));

//Acessing and Modifying Nested Objects
var ourStorage = {
    "desk" : {
        "drawer" : "stapler"
    },
    "cabinet" : {
        "top drawer" : {
            "folder1" : "file",
            "folder2" : "secrets"
        },
        "bottom drawer" : "soda"
    }
};
console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2 = "recipie";
console.log(ourStorage.cabinet["top drawer"].folder2);

//Generate an Array of All Object Keys
console.log(Object.keys(ourStorage));