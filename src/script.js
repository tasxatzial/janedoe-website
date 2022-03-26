const navBtn = document.querySelector('.nav-button');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    document.body.classList.toggle('js-stop-scrolling');
    navBtn.blur();
}

navBtn.addEventListener('click', toggleNav);

navLinks.forEach(function(link) {
    link.addEventListener('click', toggleNav);
});
