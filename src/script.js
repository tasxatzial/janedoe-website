const navBtn = document.querySelector('.nav-button');
const navLinks = document.querySelectorAll('.nav-link');
const tabindexed = document.querySelectorAll('[tabindex]');

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    document.body.classList.toggle('js-stop-scrolling');
    for (var i = 0; i < tabindexed.length; i++) {
        if (tabindexed[i].getAttribute('tabindex') === '0') {
            tabindexed[i].setAttribute('tabindex', '-1');
        } else {
            tabindexed[i].setAttribute('tabindex', '0');
        }
    }
}

navBtn.addEventListener('click', toggleNav);

navLinks.forEach(function(link) {
    link.addEventListener('click', toggleNav);
});
