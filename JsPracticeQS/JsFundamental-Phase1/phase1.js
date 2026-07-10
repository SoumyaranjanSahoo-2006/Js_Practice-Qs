//!-------------------------- Level 1: Variables & Output--------------------------

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

//!-------------------------- Level 2: Data Types--------------------------
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

//! -----------------------Level 3: Operators---------------------------
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

//! ---------------------Level 4: Type Conversion-------------------------
/*
Q15.Convert "25" to Number.*/
console.log("=====Ans-15=====");
//===================================
let number1 = "25";
console.log(number1);
number1 = Number(number1);
console.log(number1);

/*Q16.
Convert 100 to String.*/

console.log("=====Ans-16=====");
//===================================
let number2 = 100;
console.log(number2);
number2 = String(number2);
console.log(number2);

// Q17. Convert true false to Numbers.
console.log("=====Ans-17=====");
//===================================

let condition1 = true;
console.log(condition1);
condition1 = Number(condition1);
console.log(condition1);

let condition2 = false;
console.log(condition2);
condition2 = Number(condition2);
console.log(condition2);

/*Q18. Check
Number("123")
Number("abc")
Understand why one gives 123 and the other gives NaN.*/
console.log("=====Ans-18=====");
//===================================

let check1 = Number("123");
let check2 = Number("abc");

console.log(check1); // 123
console.log(check2);  //NaN


//!-------------------- Level 5: Input & Output--------------------
/* Q19.Ask user
What is your name?
Print
Hello Soumyaranjan! */
console.log("=====Ans-19=====");
//===================================

// let yourName = prompt("What is your Name?")
// console.log(`Hello, ${yourName}`);

/*Q20.Ask user
Enter your age
Print
You are 20 years old. */
console.log("=====Ans-20=====");
//===================================
// let yourAge = prompt("Enter your Age: ");
// console.log(`You are ${yourAge} years old.`);


/*Q21.Ask for two numbers.
Print their sum.*/
console.log("=====Ans-21=====");
//===================================
// let sumNum1 =Number( prompt("Add num a = "));
// let sumNum2 = Number(prompt("Add num b = "));
// console.log(`Sum of the two number is ${sumNum1+sumNum2}`);
//=====================================

/*Q22.Take length and width from user.
Print rectangle area.*/
console.log("=====Ans-22=====");
//===================================
// let ipWidth =Number( prompt("Enter width = "));
// let iplength = Number(prompt("Enter length = "));
// console.log(`Area of the rectangle is ${ipWidth * iplength}`);

//!--------------------- Level 6: Mixed Practice--------------------------
/* Q23. Take birth year. Print age. */
console.log("=====Ans-23=====");
//===================================
// let birtYear = prompt("What is your birth year? ");
// const currentYear = new Date().getFullYear();

// let yourAge = currentYear - birtYear;
// console.log(`Hii, You are ${yourAge} years old.`);



/* Q24. Take your name and favorite language.

        Output
          Hi Soumyaranjan!
          Your favorite language is JavaScript.*/
console.log("=====Ans-24 =====");
//===================================

// let yName = prompt("Hii Put your name: ");
// let favLang = prompt("Put your Favorite language: ");

// console.log(`Hi ${yName}! \n Your favorite language is ${favLang}.`);

/* Q25.Convert minutes into hours.
Example
  150 minutes
Output
  2 hours 30 minutes */
console.log("=====Ans-25 =====");
//===================================

let totalMinutes = 160;

let hours = Math.floor(totalMinutes/60);
let minutes = totalMinutes % 60;

console.log(hours +" hours "+ minutes +"minutes");

/*
Q26.Convert seconds into
Hours
Minutes
Seconds */
console.log("=====Ans-26 =====");
//===================================

let totalSeconds = 6845;

let totalMiniute = Math.floor(totalSeconds/60);

let sTotalHours = Math.floor(totalMiniute/60);
let sTotalMinute = totalMiniute % 60;
let seconds = totalSeconds % 60;

console.log(sTotalHours+" hours " +sTotalMinute +" minute " + seconds +" seconds" );

// Q27. Find square and cube of a number.

console.log("=====Ans-27 =====");
//===================================
let theNum = 5;

let squareOfNum = Math.pow(theNum,2);
let cubeOfNum = Math.pow(theNum,3);

console.log(`Square and Cube of ${theNum} is ${squareOfNum} and ${cubeOfNum} respectively. `)
  
// Q28. Find average of 5 numbers.

console.log("=====Ans-28 =====");
//===================================

let avNum1 = 10;
let avNum2 = 7;
let avNum3 = 8;
let avNum4 = 9;
let avNum5 = 7.5;

let average = (avNum1 + avNum2 + avNum3 + avNum4 + avNum5)/5;
console.log(`The average of ${avNum1}, ${avNum2}, ${avNum3}, ${avNum4} and ${avNum5} is ${average}.`);
// Q29. Convert Rupees to Paisa.

console.log("=====Ans-29 =====");
//===================================
let rupee = 455.52;
let paisa = rupee * 100;

console.log(`${rupee} rupee is ${paisa} paisa. `);

// Q30. Convert Kilometers to Meters.

console.log("=====Ans-30 =====");
//===================================

let km = 120;
let meter = km * 1000;

console.log(`${km} Kilometer(km) = ${meter}meter(m).`);


//! --------------------------- Challenge Questions ---------------------------

/* Q31. Take radius.
Print
    Diameter
    Circumference
    Area */
console.log("=====Ans-31 =====");
//===================================

let radius = 7;

let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let areaOfCircle = Math.PI * Math.pow(radius, 2);

console.log(`The radious of circle is ${radius} so,\nDiameter = ${diameter} \nCircumference = ${circumference} \nArea = ${areaOfCircle} `);


/*Q32. Take principal, rate, and time.
Print both
      Simple Interest
      Total Amount */
console.log("=====Ans-32 =====");
//===================================

let principal = 5000;
let rate = 5;
let time = 3;

let simpleInt = (principal * rate * time)/100;
let totalAmmount = (principal + simpleIntrest);

console.log(`Simple intrest is ${simpleInt}`);
console.log(`Total ammount ${totalAmmount}`);

/*
Q33. Take marks of
English, Maths, Science, Computer, SST
Print
    Total
    Average
    Percentage */
console.log("=====Ans-33 =====");
//===================================
let fullMark = prompt("Enter your full mark per subject: ");

let english = prompt("Enter yor English mark: ");
if(english < fullMark){
  english = prompt("Sorry, enter yor English mark according the full mark of sub: ");
}

let math = prompt("Enter yor Math mark: ");
if(math < fullMark){
  math = prompt("Sorry, enter yor Math mark according the full mark of sub: ");
}

let science = prompt("Enter yor Science mark: ");
if(science < fullMark){
  science = prompt("Sorry, enter yor Science mark according the full mark of sub: ");
}

let computer = prompt("Enter yor Computer mark: ");
if(computer < fullMark){
  computer = prompt("Sorry, enter yor Computer mark according the full mark of sub: ");
}

let sst = prompt("Enter yor SSt mark: ");
if(sst < fullMark){
  sst = prompt("Sorry, enter yor SST mark according the full mark of sub: ");
}

let totalMark = (english + math + science + computer + sst);
let averageMark = (totalMark)/ 5;
let percentage = (totalMark / fullMark ) * 100;

console.log(`Your total mark is ${totalMark}. `);
console.log(`Your average mark is ${averageMark}. `);
console.log(`Your total percentage is ${percentage}. `);


/* Q34. Take two numbers.
Print
    Maximum
    Minimum
    Difference */



/*

Q35.

Create a mini profile card.

Example:

-------------------------
Name      : Soumyaranjan
Age       : 20
College   : HIT
Branch    : CSE
Course    : JavaScript
------------------------- */