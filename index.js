const menuIcon = document.querySelector('#menu-icon');
const portfolio = document.querySelector('.portfolio');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    portfolio.classList.toggle('active');
}