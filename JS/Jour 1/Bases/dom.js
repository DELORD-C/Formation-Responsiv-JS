function l (a) {
    console.log(a);
}

//l(window.closed);

//l(document);

let title = document.getElementById('title');
// let title = document.querySelector('#title');

// let paragraph = document.getElementsByClassName('paragraph');
let paragraph = document.querySelectorAll('.paragraph');

let p = document.querySelector('p:not(.paragraph)');
// let p = document.body.querySelectorAll('p')[2];
p.classList.add("paragraph");
p.style.color = 'red';

p.remove();

document.body.append(p);

l(p);