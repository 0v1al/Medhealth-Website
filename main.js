;(function (global) {
    'use strict'

    let upArrow = document.querySelector('.up-arrow');
    let menu = document.querySelector('.menu');
    
    //global.pageYOffset

    let prevScrollPos = 0;
    
    global.addEventListener('scroll', e => {
        
        let currentScrollPos = global.pageYOffset;
        
        if (prevScrollPos < currentScrollPos) {
            menu.classList.add('navbar-scroll');
        } else {
            menu.classList.remove('navbar-scroll');
        }

        if (global.pageYOffset >= 700) {
            upArrow.classList.add('fade-in');
        } else {
            upArrow.classList.remove('fade-in');
        }
    
    });

}(window));

