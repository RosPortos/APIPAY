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

    function closeFadeItem(parent, item, speed) {
        $(parent).on('click', function () {
            $(item).fadeOut(speed);
        });
    }

    toggleSlideItem('.profile-main__btn', '.profile__content', 300);
    toggleFadeItem('.sample-popup__close', '.sample-popup', 400);
    toggleFadeItem('.sample__btn-change', '.sample-popup', 400);

    toggleFadeItem('.main__btn--logo', '.popup--registration', 400);
    toggleFadeItem('.main__btn--header', '.popup--authorization', 400);
    toggleFadeItem('.popup__close--registration', '.popup--registration', 400);
    toggleFadeItem('.popup__close--authorization', '.popup--authorization', 400);
    toggleFadeItem('.popup__link-registration', '.popup--registration', 400);
    closeFadeItem('.popup__link-registration', '.popup--authorization', 400);
});