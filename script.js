const sideNavBar = document.querySelector('.side-nav-bar');
const sideNavBarMobile = document.querySelector('.side-nav-bar-mobile');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('#close');


closeBtn.addEventListener('click', () => {
    sideNavBarMobile.classList.remove('left');

})

hamburgerMenu.addEventListener('click', () => {
    sideNavBarMobile.classList.toggle('left');
})

