const nav = document.querySelector('nav');
const navBtn = document.querySelector('.nav-button');
const navLinks = nav.querySelectorAll('.nav-link');
const navList = nav.querySelector('.nav-list');

nav.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
        if ((e.shiftKey && document.activeElement === navLinks[0]) ||
            (!e.shiftKey && document.activeElement === navLinks[navLinks.length - 1])) {
                navBtn.focus();
                e.preventDefault();
            }
        }
    }
);

navList.addEventListener('click', function(e) {
    if (e.target.closest('a')) {
        toggleNav();
    }
});

navBtn.addEventListener('keydown', function(e) {
    if (document.body.classList.contains('js-nav-open')) {
        if (e.key === 'Tab' || e.keyCode === 9) {
            if (e.shiftKey) {
                navLinks[navLinks.length - 1].focus();
                e.preventDefault();
            } else {
                navLinks[0].focus();
                e.preventDefault();
            }
        }
    }
});

navBtn.addEventListener('click', toggleNav);

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    if (document.body.classList.contains('js-nav-open')) {
        if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
            document.body.classList.add('js-no-scroll');
        }
        document.body.focus();
        navBtn.setAttribute('aria-label', 'close navigation');
        navBtn.setAttribute('aria-expanded', 'true'); 
    } else {
        document.body.classList.remove('js-no-scroll');
        navBtn.focus();
        navBtn.setAttribute('aria-label', 'open navigation');
        navBtn.setAttribute('aria-expanded', 'false');  
    }
}
