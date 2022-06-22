let newsletter = document.getElementById('newsletter');
document.getElementById('footer').remove();

document.getElementById('header').append(newsletter);

let element = document.createElement('a');
element.innerHTML = 'Element';
element.setAttribute('href', '#');


document.getElementById('topnav').firstElementChild.appendChild(element);

for (elem of document.querySelectorAll('*')) {
    elem.style.color = '#fff';
}

for (let p of document.getElementsByTagName('p')) {
    p.style.color = 'red';
}

let titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

let i = 0;
for (let title of titles) {
    if(i % 2 === 0) {
        title.style.fontSize = '40px';
    }
    i++;
}

document.body.style.backgroundColor = 'black';