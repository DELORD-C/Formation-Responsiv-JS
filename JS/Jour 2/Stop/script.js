let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = form.firstElementChild,
        mail = name.nextElementSibling,
        regexname = /.{4}.*/,
        regexmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        errors = 0;

    if (!regexname.test(name.value)) {
        errors++;
        name.style.border = 'solid 1px red';
    }
    else {
        name.style.removeProperty('border');
    }

    if (!regexmail.test(mail.value)) {
        errors++;
        mail.style.border = 'solid 1px red';
    }
    else {
        mail.style.removeProperty('border');
    }
        
    if (errors === 0) {
        form.submit();
    }
});