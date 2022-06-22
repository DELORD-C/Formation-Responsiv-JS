console.log("Hello World");

let a = 'value';
var b = 'value';

a = 'newvalue';
b = 'newvalue';

// let a = 10;
var b = 12;


let c = 4,
    d = 6,
    e = 5;

const A = 'value';

if (a === b) {
    console.log('a egal b');
}
else if (a === c) {
    console.log('a egal c');
}
else {
    console.log('pas égal');
}

switch (a) {
    case 12:
        console.log('douze');
        break;

    case 11:
        console.log('onze');
        break;

    default:
        console.log('pas egal à onze ou douze');
        break;
}

// while (condition) {
//     operation
// }

// for (let i = 0; i < 10; i++) {
    // operation
// }

// for (let element in array) {
//     console.log(element)
// }

// array.forEach(element => {
//     console.log(element)
// });


function nomDeLaFonction (b = 10, a) {
    console.log(a + b);
}

nomDeLaFonction(10);

let x, y, rest;
[x, y, ...rest] = [10, 20, 30, 40, 50, 60, 90];