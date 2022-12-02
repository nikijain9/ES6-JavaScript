//Array Methods

//toString() => converst an array into String with comma separated values

let num = [4,5,32,5,8];
let str = num.toString();
console.log(str, typeof(str));

//join() => joins all the elements of array using a separator

let str2 = num.join("__");
console.log(str2, typeof(str2));

//pop() => pops out the last element of the array
let str3 = num.pop();
console.log(`Array is now ${num} and Popped element is ${str3}`);


//push() => adds new element at the end of the Array. Returns new array length
let str4 = num.push(23);
console.log(`Array is now ${num} and Added element is ${str4}`);

//shift() => removes first element and returns it
let shiftElmnt = num.shift();
console.log(num, shiftElmnt);

//unshift() => Adds element to the begining of the array. Returns a new length

let unshiftElmnt = num.unshift(85);
console.log(num, unshiftElmnt);

//delete() => deletes an element of array depending upon the index provided

console.log(num.length);        //length = 5
delete num[3];
console.log(num, num.length);   //length = 5

console.log("--------------------------------------");
//concat() => returns a new array with merged arrays
let num1 = [1,2,3,4,5,6,7,8,9];
let num2 = [11,12,13,14,15,16,17,18,19];

let new_num = num1.concat(num2);
console.log("Concatenated Array is: ", new_num);
console.log("Num1 is", num1);
console.log("Num2 is", num2);

//sort() => sort method sorts an array alphabetically

console.log("The sorted array is: ", num.sort());
