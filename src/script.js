const navBtn = document.querySelector('.nav-button');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('.nav-link');
const tabFocusable = document.querySelectorAll('[tabindex="0"]');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const logo = document.querySelector('.logo');

function toggleTabFocusable() {
    for (let i = 0; i < tabFocusable.length; i++) {
        if (tabFocusable[i].getAttribute('tabindex') === '0') {
            tabFocusable[i].setAttribute('tabindex', '-1');
        } else {
            tabFocusable[i].setAttribute('tabindex', '0');
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
