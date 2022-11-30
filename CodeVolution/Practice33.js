//Iterating over Maps

//Another way to add key,Value pair to a Map
//by using Arrays during MAp initialization

//Declaring a Map by using Arrays
let myMap = new Map([
    ["fname" , "chandler"],
    ["lname", "Bing"]
]);

//to iterate over the keys in a MAP

for (let keys of myMap.keys()) {
    console.log(keys);
}

//to iterate over the values in a MAP
for (let value of myMap.values()) {
    console.log(value);
}

for (let entry in myMap.entries()) {
    console.log(`${entry[0]} -> ${entry[1]}` );
}