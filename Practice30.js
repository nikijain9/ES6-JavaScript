let mySet = new Set();

mySet.add(1);
mySet.add("Welcome");
mySet.add({'name' : 'Nikita'});

console.log(mySet.values());
console.log(mySet.size);

let obj1 = {};
let obj2 = {};

mySet.add(obj1);
mySet.add(obj2);

console.log(mySet.size);

let newSet = new Set([1, 2, 3, 4, 4, 2]);

console.log(newSet.values());
console.log(newSet.size);

//to check for an existing value in a set //'has'

console.log(newSet.has(1)); //true
console.log(newSet.has(5)); //false

//to delete a value from a set // 'delete' method
console.log(newSet.delete(4));
console.log(newSet.values()); //[1,2,3]
console.log(newSet.size); //3