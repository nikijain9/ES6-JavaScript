//MAPS

//Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

//unlike an object, a map can contain objects, functions and other data types as key.

//Creating Map
let myMap = new Map();

// Adding objects in key,value pair to the map
myMap.set("fname", "Chandler");
myMap.set("age", 30);

//to get the value of the fname key set in map
console.log(myMap.get("fname"));

//declaring objects
let obj1 = {};
let obj2 = {};

//Adding objects to the map
myMap.set(obj1, 10);
myMap.set(obj2, 20);

//get method to get the value of the mentioned key
console.log(myMap.get(obj1));      //10

console.log(myMap.size);    //4

console.log(myMap.has("age")); //true

// delete object 'obj1' from the map
console.log(myMap.delete(obj1));
console.log(myMap.size);    //3

//clear all the elements from the map
myMap.clear();
console.log(myMap.size);    //0