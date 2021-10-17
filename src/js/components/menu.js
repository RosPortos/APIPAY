document.addEventListener('DOMContentLoaded', function () {

    $('.burger').on('click', function () {
        $('.burger, .nav ').toggleClass('active');
    });

    $('.nav__link ').on('click', function () {
        $(this).next().slideToggle(300);
    });

});