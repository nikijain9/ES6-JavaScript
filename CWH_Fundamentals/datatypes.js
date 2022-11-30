//Primitive DataTypes
//nn bb ss u
// null number boolean bigInt symbol string undefined

let a = null;

let b = 65;

let c = true;

let d = BigInt(658) + BigInt(860);

let e = "Hola";

let f = Symbol("I am a symbol");

let g = undefined;

console.log("a", a, "b", b, "c", c,"d", d,"e", e,"f", f,"g", g);

//NonPrimitive DataType

const testObject = {
    "firstName" : "Nikita",
    "lastName" : "Jain",
    "age" : 25,
    // property1: value1,
} 

console.log(testObject.firstName);