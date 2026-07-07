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

/*Q4. Declare Variables
Create variables using
var
let
const
Print all three.*/
console.log("=====Ans-4=====");
//====================================

var fruit = "mango";
var fruit = "tomato";
const vegi = "potato";
let roll= 20;

console.log(fruit);
console.log(vegi);
console.log(roll);

//! Level 2: Data Types
/*
Q5. Identify Data Types
Store
            25
            "Hello"
            true
            null
            undefined
            123n
            Symbol("id")
Print the value and its type.
        Example
        console.log(typeof value);*/

console.log("=====Ans-5=====");
//===================================

let val1 = 25;
let val2 = "hello";
let val3 = true;
let val4 = null;
let val5 = undefined;
let val6 =  123n;
let val7 = Symbol("id");

console.log(typeof val1);
console.log(typeof val2);
console.log(typeof val3);
console.log(typeof val4);
console.log(typeof val5);
console.log(typeof val6);
console.log(typeof val7);

/*Q6. Favorite Things
Create variables

Favorite Color
Favorite Food
Favorite Number
Likes Coding (true/false)

Print them using template literals.*/

console.log("=====Ans-6=====");
//===================================
 let favClr = "Blue";
 let favFood = "Curd";
 let favNum = 9;
 let likeCoding = true;

 console.log(`hii, my favorite color is ${favClr}, My Favorite food is ${favFood}, my favorite number is ${favNum} & I likes coding true/false : ${likeCoding} `);

 /*
 Q7. Template Literals
Output should be

My name is Soumyaranjan.
I am 20 years old.
  */
 
console.log("=====Ans-7=====");
//===================================

console.log(`My name is ${name}. I am ${age} years old.`);

//! Level 3: Operators
/* Q8. Calculator
Take two numbers.
Print

Addition
Subtraction
Multiplication
Division
Modulus
Exponent */
 
console.log("=====Ans-8=====");
//===================================
let num1 = 25;
let num2 = 3;

console.log(`The two numbers are ${num1} & ${num2}. \n Addition of the two = ${num1+num2}.\n Substraction = ${num1-num2}.\n Multiplication = ${num1*num2}. \n Division = ${num1/num2}.\n Modulus = ${num1%num2}.\n Exponent = ${num1^num2} `);

/*
Q9. Area of Rectangle
Input                       Output
Length = 15                 Area = 150
Width = 10*/

console.log("=====Ans-9=====");
//===================================

let length = 18;
let width = 12;

let areaOfRec = length * width;
console.log(`The area of the rectangle is ${areaOfRec}.`);

/*Q10. Area of Circle
Formula
πr²

Use
Math.PI
*/
console.log("=====Ans-10=====");
//===================================
let r = 5;
let area = Math.PI * Math.pow(5,2);

console.log(`The area of the circle is ${area}`);

/*
Q11. Celsius to Fahrenheit
Formula
(F = C × 9/5 + 32) */
console.log("=====Ans-11=====");
//===================================
let celsius = 24;
let fahrenheit = celsius * (9/5) + 32;
console.log(`We take the Celsius is ${celsius} so the Fahrenheit = ${fahrenheit} `);

/*Q12. Fahrenheit to Celsius
Formula
(C = (F−32)×5/9) */
console.log("=====Ans-12=====");
//===================================
fahrenheit = 77;

celsius = (77-32)*5/9;

console.log(`We take the Fahrenheit is ${fahrenheit} so the Celsious = ${celsius}`)

/*
Q13. Simple Interest
Formula
(P × R × T)/100 */
console.log("=====Ans-13=====");
//===================================

let principaleP = 10000;
let rateR = 5;
let timeT = 3;

let simpleIntrest = (principaleP * rateR * timeT)/100;

console.log(`If the principal ammount is ${principaleP}, intrest rate is ${rateR} % and time is ${timeT} years then the simple intrest is ${simpleIntrest}`);

/*Q14. Compound Interest (Bonus)
Formula
Compound Amount
A = P × (1 + R/100)^T
where P = Principal, R = Rate, T = Time in years */

console.log("=====Ans-14 =====");
//===================================

let compoundAmo = principaleP * Math.pow((1+rateR/100), 3);
console.log(`Compound intrest = ${compoundAmo}`);