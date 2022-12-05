let numbers = [85, 53, 52];
numbers.forEach(element => {
    let result = element * element;
    console.log(result);
});

for (let i of numbers) {
    console.log(i);
}

for (let i in numbers) {
    console.log(i);
}

//Array.from -> converts an iterable object into an Array

let someName = "Nikita";        //iterable object
 
let new_arr = Array.from(someName);
console.log(new_arr);
