const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('show');
});