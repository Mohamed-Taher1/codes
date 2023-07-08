
/***********************************task1******************************* */

// const books = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];

// for (let book of books) {
//     if (book.readingStatus) {
//         console.log(`Already read '${book.title}' by ${book.author}.`);
//     } else {
//         console.log(`You still need to read '${book.title}' by ${book.author}.`);
//     }
// }




/***************************************task2*************************************** */


// function convertTime(hours) {
//     const totalSeconds = hours * 3600;
//     const hour = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     console.log(`${hours} hour(s) is equal to:`);
//     console.log(`Hour(s): ${hour}`);
//     console.log(`Minute(s): ${minutes}`);
//     console.log(`Second(s): ${seconds}`);
// }
// convertTime(5.53);








/***********************************task3********************************** */


function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }

    if (arr.length === 0) {
        return [0, undefined, undefined, undefined];
    }

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;

    return [arr.length, min, max, avg];
}

const numbers = [4, 2, 9, 1, 7];
const analysis = analyzeArray(numbers);
console.log(analysis);
