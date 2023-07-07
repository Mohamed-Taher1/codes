
/******************************task1************************ */
// var arr = new Array(), i = 0;
// alert(`Enter 3 elements to apply math operathion`);

// for (i = 0; i < 3; i++) {
//     arr.push(prompt("Enter your element :"));
// }
// document.writeln(arr.join("+") + " = " + eval(arr.join("+")));
// document.writeln("<br>");
// document.writeln(arr.join("-") + " = " + eval(arr.join("-")));
// document.writeln("<br>");
// document.writeln(arr.join("*") + " = " + eval(arr.join("*")));
// document.writeln("<br>");
// document.writeln(arr.join("/") + " = " + eval(arr.join("/")));


/*******************************task2*********************** */

// var arr = new Array(), i = 0;
// alert(`Enter 5 elements to apply math operathion`);

// for (i = 0; i < 5; i++) {
//     arr.push(prompt("Enter your element :"));
// }

// function sotrDesend(a, b) {
//     return b - a;
// }
// function sotrAsend(a, b) {
//     return a - b;
// }
// document.writeln(arr.sort(sotrDesend));
// document.writeln("<br>");
// document.writeln(arr.sort(sotrAsend));



/******************************task3******************* */

var arr = [11.6, 90, 43, 774.7894];
var temp = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i].toString().length > temp.toString().length) {
        temp = arr[i];
        console.log(temp);
    }
}

var len = temp.toString().length - 1;

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].toPrecision(len));
}