let items = document.querySelectorAll('li'),
    target,
    drop,
    ul = document.querySelector('ul');
items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
});

function handleDragStart (e) {
    target = e.target;
    target.style.opacity = '0';
    target.style.height = '0';
    let li = document.createElement('li');
    li.setAttribute('id', 'invisible');
    ul.appendChild(li);
    li.addEventListener('dragenter', handleDragEnter);
    li.addEventListener('dragleave', handleDragLeave);
}

function handleDragEnd (e) {
    target.remove();
    ul.insertBefore(target, drop);
    document.getElementById('invisible').remove();
    target.style.opacity = '1';
    target.style.height = '';
}

function handleDragEnter (e) {
    drop = e.target;
    drop.classList.add('hover')
}

function handleDragLeave (e) {
    e.target.classList.remove('hover')
}