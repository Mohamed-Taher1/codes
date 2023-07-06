
/*************************************task1********************************** */

// // Prompt user to enter the radius of the circle
// const radius = prompt("Enter the radius of the circle:");
// const area = Math.PI * radius * radius;
// alert(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);

// // Prompt user to enter another value to calculate its square root
// const value = prompt("Enter another value to calculate its square root:");
// const sqrtValue = Math.sqrt(value);
// alert(`The square root of ${value} is ${sqrtValue.toFixed(2)}`);

// // Prompt user to enter an angle in degrees
// const angleDeg = prompt("Enter an angle in degrees:");
// const angleRad = angleDeg * Math.PI / 180;
// const cosValue = Math.cos(angleRad);
// alert(`The cosine of ${angleDeg} degrees is ${cosValue.toFixed(2)}`);



/**************************************task2****************************** */

// var word, letter, conditionLetter, isCaseSensitive, i, n = 0;
// do {
//     word = prompt("Enter Your String:");
// } while (typeof word !== "string" || word === "");

// do {
//     letter = prompt("Enter the letter that you want to search for:");
// } while (typeof letter !== "string" || letter.length !== 1);

// do {
//     conditionLetter = prompt("Is it case sensitive? (y) for yes, (n) for no:");
//     if (conditionLetter === 'y') {
//         isCaseSensitive = true;
//     } else if (conditionLetter === 'n') {
//         isCaseSensitive = false;
//     }
// } while (typeof conditionLetter !== "string" || (conditionLetter !== 'y' && conditionLetter !== 'n'));

// if (isCaseSensitive) {
//     for (i = 0; i < word.length; i++) {
//         if (letter === word[i]) {
//             n += 1;
//         }
//     }
// } else {
//     var lowercaseWord = word.toLowerCase();
//     var lowercaseLetter = letter.toLowerCase();
//     for (i = 0; i < lowercaseWord.length; i++) {
//         if (lowercaseLetter === lowercaseWord[i]) {
//             n += 1;
//         }
//     }
// }

// alert(`Letter count: ${n}`);



/**********************************task3***************************** */

var num = 12345678.910;

console.log("arabic eg: " + num.toLocaleString("ar-EG"));
console.log("Bengali (India) : " + num.toLocaleString("bn-IN"));
console.log("Korean (South Korea): " + num.toLocaleString("ko-KR"));
console.log("Canadian French: " + num.toLocaleString("fr-CA"));
console.log("Taiwan: " + num.toLocaleString("zh-TW"));
console.log("Russia : " + num.toLocaleString("ru-RU"));
