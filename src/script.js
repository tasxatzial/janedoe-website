const navBtn = document.querySelector('.nav-button');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('.nav-link');
const focusable = document.querySelectorAll('[tabindex]');

function toggleFocusable() {
    for (let i = 0; i < focusable.length; i++) {
        if (focusable[i].getAttribute('tabindex') === '0') {
            focusable[i].setAttribute('tabindex', '-1');
        } else {
            focusable[i].setAttribute('tabindex', '0');
        }
    }
}

function toggleAriaHidden() {
    if (nav.getAttribute('aria-hidden') === 'true') {
        nav.setAttribute('aria-hidden', 'false');
    } else {
        nav.setAttribute('aria-hidden', 'true');
    }
}

function toggleNavBtnLabel() {
    if (navBtn.getAttribute('aria-label') === 'open navigation') {
        navBtn.setAttribute('aria-label', 'close navigation');
    } else {
        navBtn.setAttribute('aria-label', 'open navigation');
    }
}

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    document.body.classList.toggle('js-stop-scrolling');
    toggleNavBtnLabel();
    toggleFocusable();
    toggleAriaHidden();
}

navBtn.addEventListener('click', toggleNav);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', toggleNav);
}
