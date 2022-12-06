// map functions perform similar operations as forEach loop. However, forEach method is used to perform operations on an Array's existing elements. However, through map method we can create a new array by iterating over the elements of an existing array by passing a callback function as an argument. 


//map() -> creates a new array by performing some operation on each element of the array
//syntax -> array.map((value, index, array) => {
    //return some operation
//})


let arr = [3, 4, 5, 6, 11, 15];

let modefied_arr = arr.map((eachElement) => {
    return eachElement * 2;
})

let other_modefied_arr = arr.map((eachElement, index) => {
    return eachElement + index;
})

let another_modefied_arr = arr.map((eachElement, index, array) => {
    console.log(eachElement, index, array);
})

console.log(arr);       //original array
console.log(modefied_arr);  // modified array
console.log(other_modefied_arr);  // modified array


let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
console.log(userFullnames);


//filter -> filters an array with values  that passes a test and creates a new array -> does not modify original array

let filter_arr = arr.filter((element) => {
    return element < 10;
})      // the similar function if used with arr.map return results in boolean

console.log(filter_arr);

//reduce -> reduce method reduces and array to a single value

let new_arr = [1, 2, 3, 4, 5, 6];

let reduced_func = (value1, value2) => {
    return value1 + value2; //1+2->3+3->6+4->10+5->15+6->21
}

let reduced_arr = new_arr.reduce(reduced_func);

//line 54 to 57 can also be written as 

// let reduced_arr = new_arr.reduce((value1, value2) => {
//     return value1 + value2;
// })

console.log(reduced_arr);


