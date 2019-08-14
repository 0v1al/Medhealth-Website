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

$('#s1').addClass("active");

let sections = $('.jump')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this)
    , id = $el.attr('href');

    $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});




