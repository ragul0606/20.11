// Write a function called calculate CircleDiameter that takes the radius of a circle as input and returns its diameter

// function CircleDiameter (radius) {
//     let diameter = 2 * radius;
//     return diameter;
// }

// console.log(CircleDiameter(12));

// Explain the differences between declaring a variable with let, const, and var inside a loop

// function testVar() {
//     for (var i = 0; i < 3; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// function testLet() {
//         for (let j = 0; j < 3; j++) {
//             console.log(j);
//         }
//         let j = 10;
//         console.log(j);
// }
// function testConst() {
//         for (const k = 0; k < 3; k++) {
//             console.log(k);
//         }
//         console.log(k);
// }

// testVar();
// testLet();
// testConst();

// Use prompt to ask the user for their favorite programming language. If they enter "JavaScript," display an alert saying "Great choice!" If they enter "Python," display "Excellent!" For any other language, display "That's a good choice too!"

// let userChoice = prompt("Enter your favorite programming language");

// let lower = userChoice.toLowerCase();

// console.log(lower);

// if (lower == "javascript") {
//     alert("Great Choice !");
// } else if (lower == "Python") {
//     alert("Excellent !");
// } else {
//     alert("That's a good choice too");
// }

// Write a function called convertToUpperCase that takes a string as input and returns the string in uppercase letters using the toUpperCase() method.

// function convertToUpperCase (convertString) {
//     let converted =  convertString.toUpperCase();
//     return converted;
// }

// console.log(convertToUpperCase("hello world"));

// Evaluate the expression (3 + 5) * 2 and explain the order of operations used in the calculation and write an expression to calculate the average of three numbers: num1, num2, and num3.

// console.log( (3 + 5) * 2 );

// // On basis of BODMAS all the calculations are been made

// function numbers (num1, num2, num3) {
//     let average = (num1 + num2 + num3)/3;
//     return average;
// }

// console.log(numbers(3, 1, 5));
// console.log(numbers(10, 10, 15));

// Write a function called checkSameLastDigit that takes two numbers as input and returns true if they have the same last digit, or false otherwise.

// function checkSameLastDigit (num1, num2) {
//     let str1 = num1.toString();
//     let str2 = num2.toString();
//     let last1 = str1.charAt(str1.length - 1);
//     let last2 = str2.charAt(str1.length - 1);
//     return last1 === last2;
// }
// console.log(checkSameLastDigit("ram", "ram"));

// Write a function called getGrade that takes a numerical grade as input and returns the corresponding letter grade based on the following grading scale:
// •	90 and above: "A"	
// •	80-89: "B"
// •	70-79: "C"
// •	60-69: "D"	
// •	Below 60: "F"

// function getGrade(gradeNum) {
//     if(gradeNum >= 90) {
//         return "A";
//     } else if (gradeNum >= 80) {
//         return "B";
//     } else if (gradeNum >= 70) {
//         return "C";
//     } else if (gradeNum >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// console.log(getGrade(55));

// Write a function called calculateSquareArea that takes the side length of a square as input and returns its area without using any string concepts.

// function calculateSquareArea (sideLength) {
//     return sideLength * sideLength;
// }
// console.log(calculateSquareArea(2));

// Write a function called getDefaultColor that takes a color as input, and if the color is null or undefined, it should return the default color "black" using the nullish coalescing operator.

// function getDefaultColor (color) {
//     return color ?? "black";
// }

// console.log(getDefaultColor());
// console.log(getDefaultColor("green"));
// console.log(getDefaultColor("blue"));

// Write a function called getMonthName that takes a month number (1 for January, 2 for February, etc.) as input and returns the corresponding month name using a switch statement.

// function getMonthName (month) {
//     switch(month) {
//         case 1: 
//         return "January";
//         break;
//         case 2: 
//         return "February";
//         break;
//         case 3: 
//         return "March";
//         break;
//         case 4: 
//         return "April";
//         break;
//         case 5: 
//         return "May";
//         break;
//         case 6 : 
//         return "June";
//         break;
//         case 7: 
//         return "July";
//         break;
//         case 8: 
//         return "August";
//         break;
//         case 9: 
//         return "September";
//         break;
//         case 10: 
//         return "October";
//         break;
//         case 11: 
//         return "November";
//         break;
//         case 12: 
//         return "December";
//         break;
//         default: 
//         return "Entered a number which is above total months" 
//     }
// }

// console.log(getMonthName(12));

// Write a function expression called calculatePowerOfThree that takes a number as input and returns the number raised to the power of 3.

// let calculatePowerOfThree = function(num) {
//     return Math.pow(num, 3);
// }

// console.log(calculatePowerOfThree(3));
