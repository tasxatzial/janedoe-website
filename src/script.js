const navBtn = document.querySelector('.nav-button');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    
    if (document.body.classList.contains('js-nav-open')) {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].removeAttribute('hidden');
        }
        navBtn.setAttribute('aria-label', 'close navigation');
        navBtn.setAttribute('aria-expanded', 'true');
        
    } else {
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].setAttribute('hidden', '');
        }
        navBtn.setAttribute('aria-label', 'open navigation');
        navBtn.setAttribute('aria-expanded', 'false');  
    }
}

navBtn.addEventListener('click', toggleNav);

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', toggleNav);
}
