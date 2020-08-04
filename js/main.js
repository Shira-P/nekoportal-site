const masterNav = document.querySelector('.master-nav');
const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
const menuBtn = document.querySelector('.menu-btn');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        masterNav.classList.add('show');
        menu.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        // toggle
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        masterNav.classList.remove('show');
        menu.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // toggle
        showMenu = false;
    }
}

window.onresize = updateMenuType;
window.onload = updateMenuType;

function updateMenuType() {
    let myWidth = window.innerWidth;
    if(myWidth >= 750 && showMenu) {
        menuBtn.classList.remove('close');
        masterNav.classList.remove('show');
        menu.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        // toggle
        showMenu = false;
    }
}