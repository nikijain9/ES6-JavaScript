// var a = 45;
// var b = "Forty Five";

let b = "Nikita";       //throws error since b has already been declared

const lastname = "Jain"
// lastname = "something" // throws error

b = 46;     // assigning different value to already defined variable

let c = null;

let d = undefined;

{
    let b = 'this Value';
    console.log(b);        // access of b's value within the block scope
}

console.log(b);     //access of b's value within global scope