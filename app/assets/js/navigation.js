//Toggle menu 

$('.header_nav-button').click(function(){toggleMenu()});
$('.header_nav ul li a').click(function(){toggleMenu()});


function toggleMenu() {
    $('.header_nav-button').toggleClass('header_nav-button--close');    
    $('.header_nav').toggleClass('header_nav--is-open');
}

