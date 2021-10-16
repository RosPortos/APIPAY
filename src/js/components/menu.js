document.addEventListener('DOMContentLoaded', function () {

    $('.burger').on('click', function () {
        $('.burger, .nav ').toggleClass('active');
    });

});