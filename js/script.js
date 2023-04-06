let menu = document.querySelector('.navbar-toggler-icon');
let main = document.querySelector('main')

menu.addEventListener('click', function() {
    main.classList.toggle('menu-open');
});