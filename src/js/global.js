$('.control__title').on('click', function () {
    $(this).next().slideToggle(300);
});


function closedClick(wrap, item) {

    let wrapper = $(wrap),
        element = $(item);

    $(document).mouseup(function (e) {
        if (!wrapper.is(e.target) && wrapper.has(e.target).length === 0) {
            element.slideUp(300);
            element.removeClass('active');
        }
    });
}

closedClick('.control__title', '.control__list');
closedClick('.profile-main__btn', '.profile__content');


$('.custum-check__input').on('click', function () { $(this).toggleClass('active'); });


$('.currencies__btn-add').on('click', function () {
    $('.currencies__wrapper').css('display', 'none');
    $('.modal-add').css('display', 'block');
});

$('.modal-add__closed').on('click', function () {
    $('.modal-add').css('display', 'none');
    $('.currencies__wrapper').css('display', 'block');
});