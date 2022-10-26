// let mySet = new Set();
// let key = {};
// mySet.add(key);
// console.log(mySet.size);  //1
// key = null;
// console.log(mySet.size); //1

//WeakSets can store only object references and not primitive values and the object references are weak

let newSet = new WeakSet();
let key2 = {
    fname :"Chandler",
    lname : "Bing"
};
newSet.add(key2);
console.log(newSet.has(key2)); //true
// key2 = null;
// console.log(newSet.has(key2)); //false
console.log(newSet);
console.log(newSet.size);
