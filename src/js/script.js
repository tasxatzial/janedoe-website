const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('.nav-link');
const toggleNavBtn = document.querySelector('.nav-button');

toggleNavBtn.addEventListener('click', toggleNav);
nav.addEventListener('click', closeNav);

/* trap keyboard navigation inside menu when it is open */
nav.addEventListener('keydown', navigateMenu);

function navigateMenu(event) {
    if (!document.body.classList.contains('js-nav-open')) {
        return;
    }
    if (event.key === 'Tab' || event.keyCode === 9) {
        if (event.shiftKey) {
            if (document.activeElement === closeNavBtn) {
                navLinks[navLinks.length - 1].focus();
                event.preventDefault();
            }
        } else {
            if (document.activeElement === navLinks[navLinks.length - 1]) {
                toggleNavBtn.focus();
                event.preventDefault();
            }
        }
    }
}

function closeNav(event) {
    if (event.target.closest('a')) {
        toggleNav();
    }
}

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    if (document.body.classList.contains('js-nav-open')) {
        if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
            document.body.classList.add('js-no-scroll');
        }
        toggleNavBtn.setAttribute('aria-label', 'close navigation');
        toggleNavBtn.setAttribute('aria-expanded', 'true'); 
    } else {
        document.body.classList.remove('js-no-scroll');
        toggleNavBtn.setAttribute('aria-label', 'open navigation');
        toggleNavBtn.setAttribute('aria-expanded', 'false');  
    }
    toggleNavBtn.focus();
}
