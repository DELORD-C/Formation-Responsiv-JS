let search = document.getElementById('search'),
    list = document.getElementsByTagName('li'),
    timeout;

search.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(filter, 500);
});

function filter () {
    let value = search.value;
    for (elem of list) {
        if (elem.innerHTML.includes(value)) {
            elem.style.display = 'list-item';
        }
        else {
            elem.style.display = 'none';
        }
    }
}