const hamburgerToggle = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
hamburgerToggle.addEventListener('click', function(){
    navMenu.classList.toggle('nav-active')
})


const header = document.querySelector('header');
window.onscroll = function(){
    
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        navMenu.classList.remove('nav-active');
    }
    else {
        header.classList.remove('navbar-fixed');
    }
}

document.addEventListener('click', function(){
    let notHeader = header.contains(event.target);
    let notNav = navMenu.contains(event.target);

    if(!notHeader && !notNav){
        navMenu.classList.remove('nav-active');
    }
})

const title = document.getElementById('title');

let title2 = [...title.textContent];


title2 = title2.map(e => `<span>${e}</span>`).join('');

title.innerHTML = title2;

// document.addEventListener('DOMContentLoaded', function() {
//     let cursor1 = document.getElementById('cursor1');
//     let cursor2 = document.getElementById('cursor2');

//     document.addEventListener('mousemove', function(e) {
//         cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
//     });
// });