/*************************task 1*******************************/

// var message = prompt(), i;
// for (i = 1; i < 7; i++) {
//     document.writeln("<h" + i + ">" + message + "</h" + i + ">")
// }


/***************************task2****************************/

// var val, sum = 0;
// do {
//     val = parseInt(prompt());
//     sum = sum + val;
// } while (val != 0)
// console.log(sum);



/***************************task3***************** */


// function evaluateExpression(expression) {
//     return eval(expression);
// }

// let userInput = prompt("Enter a math expression:");
// let result = evaluateExpression(userInput);

// alert("You entered: " + userInput + ", and the result is: " + result);



/*********************************task4*************************** */

var mname;
var birthYear = 0;
var age = 0;

do {
    mname = prompt("Enter your name:");
} while (isFinite(mname) || mname == "")

while (isNaN(birthYear) || birthYear < 1900 || birthYear > 2010) {
    birthYear = parseInt(prompt("Enter your birth year:"));
}

age = 2023 - birthYear;

document.write("<p>Name: " + mname + "</p>");
document.write("<p>Birth year: " + birthYear + "</p>");
document.write("<p>Age: " + age + "</p>");