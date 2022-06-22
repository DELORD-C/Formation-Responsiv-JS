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

let tab = [11, 13];

tab[2] = 12;

tab.push(12, 13, 16);

console.log(tab);

let tab2 = tab.slice;

// console.log(tab2);

tab.splice(2, 3)

console.log(tab);

let elem = tab.pop();

console.log(tab);

let elem2 = tab.shift();

console.log(elem2);

console.log(rest);

rest.reverse();

console.log(rest);

let str = 'bonjour, il fait beau.';

str = str[0].toUpperCase() + str.slice(1);

str = str.replace('beau', 'moche');

console.log(str);

// let nom = prompt('Comment vous appellez-vous ?');

// if (nom) {
//     alert('Bonjour ' + nom);
// }


let strbis = 12 + '15';

strbis += 'yeah';

console.log(strbis);