document.getElementById('menu-toggler').addEventListener('click', function(){
    let nav = document.getElementById('slider');
    nav.classList.toggle('slider-closed');
    nav.classList.toggle('slider-open');

    let menu = document.getElementById('menu-toggler');
    menu.classList.toggle('toggle-open');
});