const collection = document.querySelectorAll('.collection');
const gardener = document.querySelectorAll('.gardener');
const roadmap = document.querySelectorAll('.roadmap');
const harvest = document.querySelectorAll('.harvest');
const sideNavBar = document.querySelector('.side-nav-bar');
const sideNavBarMobile = document.querySelector('.side-nav-bar-mobile');
const wrapper = document.querySelectorAll('.wrapper');
const wrapper2 = document.querySelector('.wrapper2');
const wrapper3 = document.querySelector('.wrapper3');
const wrapper4 = document.querySelector('.wrapper4');
const wrapper5 = document.querySelector('.wrapper5');
const home = document.querySelectorAll('.home');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('#close');


closeBtn.addEventListener('click', () => {
    sideNavBarMobile.classList.remove('left');

})

hamburgerMenu.addEventListener('click', () => {
    sideNavBarMobile.classList.toggle('left');
})


home.forEach(home => {
    home.addEventListener('click', () => {
        wrapper.forEach(wrapper => {
            wrapper.style.display = 'block';
        })

        wrapper2.style.display = 'none';
        wrapper3.style.display = 'none';
        wrapper4.style.display = 'none';
        wrapper5.style.display = 'none';
        sideNavBar.style.display = 'flex';

    })
})



collection.forEach(collection => {
    collection.addEventListener('click', () => {
        wrapper3.style.display = 'block';
        wrapper.forEach(wrapper => {
            wrapper.style.display = 'none';
        })

        wrapper2.style.display = 'none';
        wrapper4.style.display = 'none';
        wrapper5.style.display = 'none';
        sideNavBar.style.display = 'flex';

    })
})


gardener.forEach(garden => {
    garden.addEventListener('click', () => {
        wrapper2.style.display = 'block';
        wrapper.forEach(wrapper => {
            wrapper.style.display = 'none';
        })

        wrapper3.style.display = 'none';
        wrapper4.style.display = 'none';
        wrapper5.style.display = 'none';
        sideNavBar.style.display = 'flex';
    })
})

roadmap.forEach(roadmap => {
    roadmap.addEventListener('click', () => {
        wrapper4.style.display = 'block';
        wrapper.forEach(wrapper => {
            wrapper.style.display = 'none';
        })

        wrapper2.style.display = 'none';
        wrapper3.style.display = 'none';
        wrapper5.style.display = 'none';
        sideNavBar.style.display = 'none';
    })
})

harvest.forEach(harvest => {
    harvest.addEventListener('click', () => {
        wrapper5.style.display = 'block';
        wrapper.forEach(wrapper => {
            wrapper.style.display = 'none';
        })

        wrapper2.style.display = 'none';
        wrapper3.style.display = 'none';
        wrapper4.style.display = 'none';
        sideNavBar.style.display = 'flex';
    })
})

