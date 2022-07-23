let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");

openMenu.addEventListener('click', function(e) {
    document.getElementById("nav").classList.toggle("visible");
    openMenu.classList.toggle("visible");
});