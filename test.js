

//example of var Global Scope

// var a = 10
 
// // User can re-declare
// // variable using var
// var a = 8
 
// // User can update var variable
// a = 7 
// console.log(a);


//example of let

// let a = 10;
// function f() {
//     if (true) {
//         const b = 9;
//         // It prints 9
//         console.log(b);
//     }
 
//     // It gives error as it
//     // defined in if block
//     console.log(b);
// }
// f()
var a = {a:2,b:3,c:4};
console.log(typeof(a));

// other code
 
// // It prints 10
// console.log(a)


//const

// const a = 10;
// function f() {
//     // a = 9
//     console.log(a)
// }
// f();
// var a =5;
// var b = 6;
// function sum(){
//     return a+b;
// }
// sum();