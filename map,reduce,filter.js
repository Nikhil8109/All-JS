var arr = [2,3,5,10,12];

// map

// 1. Transform the array 

// for ex: 
 // double the array elements
// [4,6,10,20,24]
 // multiply 3 with all elements

// find square of all the elements

// var output =  arr.map(findSquare);

// function findDouble(element){
// return element * 2;
// }
// function findSquare(element){
//     return element * element;
//     }
//  console.log(output);

//filter

// use case: Filtering out the elements based on any conditions

// example : return elements which are less than 5
// return elements which are odd / even

// ()=>{

// }
// console.log(arr.filter((element)=>{ return element < 5 }));

//reduce 

// Use case: In case of accumulation of values of Array

// example 
// sum of all elements in Array
// average
// max/min
// var sum = 0;
// sum += arr[i];

// var output = arr.reduce((acc,current)=>{
// return acc += current;
// },0);

// console.log(output);

//example
// var users = [{firstname:"Nikhil", lastname:"kukreja",age:25},
// {firstname:"Akshay", lastname:"Sharma",age:25},
// {firstname:"Amit", lastname:"arora",age:32},
// {firstname:"Abhinav", lastname:"Singh",age:29},
// {firstname:"Utkarsh", lastname:"Sinha",age:29},]

// // output 
// // acc = { 25:2,32:1,29:2 }

//  var output = users.reduce((acc,current)=>{
// if(acc[current.age]) // acc[25]
// {
//     acc[current.age] = ++acc[current.age];
// }
// else{
//     acc[current.age] = 1; // acc[25] = 1
// }
// return acc;
// },{});

// console.log(output);

//chaining of map and filter

//  var output = users.filter((elem)=> { return elem.age < 30}).map((x)=>{ return x.firstname + " " + x.lastname });
//  console.log(output);