// Q1. Print Your Introduction

console.log("=====Ans-1=====");
//================================
console.log("Hello, my name is Soumyaranjan. I am learning JavaScript.");

/*Q2. Store and Print
Store these values in variables:
Name
Age
College
Branch

Print them.*/
console.log("=====Ans-2=====");
// ============================================
const name = "Soumyaranjan Sahoo";
let age = 20;
const college = "Hi-Tech Institute of Technology, Bhubaneswar";
const branch = "CSE";

console.log("Name: ",name);
console.log("age: ",age);
console.log("College: ",college);
console.log("Branch: ",branch);

//============================================
let About= {
    name: "Soumyaranjan Sahoo",
    age: 20,
    college: "Hi-Tech Institute of Technology, Bhubaneswar",
    branch:  "CSE"
};
console.log(About);

/*
Q3. Swap Two Numbers
Input                   Output
a = 10                  a = 20
b = 20                  b = 10
Try:
Using a third variable
Without using a third variable (ES6 destructuring)*/
console.log("=====Ans-3=====");
//========================

let a = 10;
let b = 20;

let temp = b;
b = a;
a = temp;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

// (ES6 destructuring)

let a1 = 10;
let b1 = 20;

[a1,b1] = [b1,a1];

console.log(" By ES6 destructuring")
console.log(`a = ${a1}`);
console.log(`b = ${b1}`);