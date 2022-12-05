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
let arr = [3, 23, 12, 8];
console.log("The sorted array is: ", arr.sort()); //Sorting alphabetically in accordance with 1(A) = 12, 2(B) = 23, 3(C) = 3

//Solution: The Compare Function
//The sort() method can be supported with basic Comparison function which will return the difference either in +ve, -ve or 0

//function(a, b) {return a - b}

/*
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, nothing changes.
*/

console.log("The sorted array in ascending order is: ", arr.sort(function(a, b){return a - b}));
//function(3,23) {return 3-23 = -ve} => a (3)
//function(23,12) {return 23 -12 = +ve} => b (12)

console.log(arr); //[ 3, 12, 23 ]

console.log(arr.reverse()); //[ 23, 12, 3 ]
console.log(arr);   //[ 23, 12, 3 ]

//Splice => changes the content of your array by removing or replacing existing elements with new ones.

//Syntax : Array.splice(start, removeCount, newItem, newItem, newItem, ...)
// start -> index count to start from
// removeCount -> to remove an element of the given index
// newItem -> to add a new element

let months = ["January", "February", "Monday", "Tuesday", "May"];
months.splice(2,2,"March","April") //started from the second index i.e. Monday, removed 2 elements i.e. Monday and Tuesday and added two elements i.e. March and April
console.log(months);

//Slice => The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

let some_array = [56,85, 52, 56, 25, 42, 36, 71];
console.log(some_array.length);
let sliced_array = some_array.slice(6) //removes every element starting from index 6 till end and returns a new array of the removed elements
console.log(sliced_array);  
let new_sliced_array = some_array.slice(2,5) //removes every element starting from index 2 till index 5 and returns a new array of the removed elements
console.log(new_sliced_array); 
console.log(some_array); //return original array