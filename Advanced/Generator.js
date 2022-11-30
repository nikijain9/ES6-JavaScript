//The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

/*
Using a generator,

you can stop the execution of a function from anywhere inside the function using the 'yield' keyword
and continue executing code from a halted position
*/

function* generator_function() {
    yield "Hello";
    yield "World";
}

const generator_object = generator_function();

console.log(generator_object.next());    //done : false
console.log(generator_object.next());   //done : false
console.log(generator_object.next());  //value : undefined, done : true 


// for (const word of generator_object) {
//     console.log(word);
// }
