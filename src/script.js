const navBtn = document.querySelector('.nav-button');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('.nav-link');
const tabIndexed = document.querySelectorAll('[tabindex]');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const logo = document.querySelector('.logo');

function toggleTabFocusable() {
    for (let i = 0; i < tabIndexed.length; i++) {
        if (tabIndexed[i].getAttribute('tabindex') === '0') {
            tabIndexed[i].setAttribute('tabindex', '-1');
        } else {
            tabIndexed[i].setAttribute('tabindex', '0');
        }
    }
}

function toggleAriaHidden() {
    if (footer.getAttribute('aria-hidden') === 'true') {
        footer.setAttribute('aria-hidden', 'false');
        logo.setAttribute('aria-hidden', 'false');
        for (let i = 0; i < sections.length; i++) {
            sections[i].setAttribute('aria-hidden', 'false');
        }
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].setAttribute('aria-hidden', 'true');
        }
    } else {
        footer.setAttribute('aria-hidden', 'true');
        logo.setAttribute('aria-hidden', 'true');
        for (let i = 0; i < sections.length; i++) {
            sections[i].setAttribute('aria-hidden', 'true');
        }
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].setAttribute('aria-hidden', 'false');
        }
    }
}

function toggleNavBtn() {
    if (navBtn.getAttribute('aria-expanded') === 'true') {
        navBtn.setAttribute('aria-label', 'close navigation');
        navBtn.setAttribute('aria-expanded', 'false');
    } else {
        navBtn.setAttribute('aria-label', 'open navigation');
        navBtn.setAttribute('aria-expanded', 'true');
    }
}

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    document.body.classList.toggle('js-stop-scrolling');
    toggleNavBtn();
    toggleTabFocusable();
    toggleAriaHidden();
}

navBtn.addEventListener('click', toggleNav);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', toggleNav);
}
