const nav = document.querySelector('nav');
const navBtn = document.querySelector('.nav-button');
const navLinks = nav.querySelectorAll('.nav-link');

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

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    document.body.classList.toggle('stop-scrolling');
    if (document.body.classList.contains('js-nav-open')) {
        document.body.focus();
        navBtn.setAttribute('aria-label', 'close navigation');
        navBtn.setAttribute('aria-expanded', 'true'); 
    } else {
        navBtn.focus();
        navBtn.setAttribute('aria-label', 'open navigation');
        navBtn.setAttribute('aria-expanded', 'false');  
    }
}

navBtn.addEventListener('click', toggleNav);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', toggleNav);
}
