/* var header = document.getElementById('header');
var sticky = header.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
} */  // * Toggle to enable sticky header


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const skipToMainEl = document.querySelector(".skip-to-main");
const mainPageLogo = document.querySelector(".logo");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

if (document.activeElement === skipToMainEl) {
    mainPageLogo.style.display = 'none';
    mainPageLogo.style.visibility = 'hidden';
} else {
    mainPageLogo.style.display = 'block';
    mainPageLogo.style.visibility = 'visible';
}