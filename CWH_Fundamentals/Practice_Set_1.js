//Q1 : Create a variable of type String and add number to it. 

let fNAme = "Niki";
let age = 25;
fNAme += age;
console.log(fNAme);

//Q2 : Use the typeOf Operator to find  the dataType of the String variable declared above

console.log(typeof(fNAme));

//Q3 : Create a const Object and try to change to hold a Number 

const obj = {
    key1 : "Value1",
    key2 : 2
}

// obj = 3;     //Throws error as constant objects cannot be changed

//Q4 : Try to add a new key to the Const Object in Q3

obj["key3"] = true;         //Added new key
obj["key4"] = "Value4";     //Added new key
obj["key1"] = "Value0";     //changed the value of existing key
console.log(obj);

//To access only value of a specific key of an object
console.log(obj.key1);


