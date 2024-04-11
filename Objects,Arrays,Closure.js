 // objects 

// var a = {firstname:"nikhil",lastname:"kukreja",age:28,IndianCitizen:true}
// a.city = "Lucknow";
//  console.log(a);
// // object are mutable in javascript
// // a[firstname]  = 'akshay'
// a =  {firstname:"akshay",lastname:"sharma",age:28,IndianCitizen:true}
// var  b = a;

// a[firstname] // most common
// a.age = 23;
// var obj = {
//     firstName:"nikhil",
//     lastname:"Kukreja",
//     printFullName: function(){
//         return this.firstName + " " + this.lastname;
//     }
// }

// var output = obj.printFullName();
// console.log(output);
 
 
 // call

//  const person = {
//     fullName: function(city,country) {
//       return this.firstName + " " + this.lastName + " "+ city + " " + country;
//     }
//   }
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
  
// //   // This will return "John Doe":
//   person.fullName.call(person1,"Lucknow","India");
//   person.fullName.apply(person1,["Lucknow","India"]);

// apply

// const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"]);

// bind

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(fullName());

/* when to use bind */

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       let x = document.getElementById("demo");
//       x.innerHTML = this.firstName + " " + this.lastName;
//     }
//   }
  
//   setTimeout(person.display, 3000);

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     display: function () {
//       let x = document.getElementById("demo");
//       x.innerHTML = this.firstName + " " + this.lastName;
//     }
//   }
  
//   let display = person.display.bind(person);
//   setTimeout(display, 3000);


//Arrays
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
 //array functions
//  1. pop()
//  2. push()
//  3. join()
//  4. slice()
//  5. splice()

// console.log(fruits.slice(1,3));
// console.log(fruits);

// console.log(fruits.splice(2,2,"lemon","kiwi","pomgrenate"));
// console.log(fruits);

// Higher order functions/ callbacks

function x(){
return "hello";
}
function y (x){ // higher order functions
   setTimeout(x,3000);
return "world";
}
y();


