let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //effectuer nos vérifications sur le formulaire
    //si nos vérification son justes alors on envoi le formulaire
    form.submit();
});