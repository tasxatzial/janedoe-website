const navBtn = document.querySelector('.nav-button');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
    nav.classList.toggle('js-nav-open');
    document.body.classList.toggle('js-stop-scrolling');
    navBtn.blur();
}

navBtn.addEventListener('click', toggleNav);

navLinks.forEach(function(link) {
    link.addEventListener('click', toggleNav);
});
