document.addEventListener('DOMContentLoaded', function () {


    function toggleSlideItem(parent, item, speed) {
        $(parent).on('click', function () {
            $(item).slideToggle(speed);
        });
    }

    function toggleFadeItem(parent, item, speed) {
        $(parent).on('click', function () {
            $(item).fadeToggle(speed);
        });
    }

    toggleSlideItem('.profile-main__btn', '.profile__content', 300);
    toggleFadeItem('.sample-popup__close', '.sample-popup', 400);
    toggleFadeItem('.sample__btn-change', '.sample-popup', 400);
});