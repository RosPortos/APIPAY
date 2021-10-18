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


$('.btn-add').on('click', function () {
    $('.currencies__wrapper').css('display', 'none');
    $('.modal-add').css('display', 'block');
});

$('.modal-add__closed').on('click', function () {
    $('.modal-add').css('display', 'none');
    $('.currencies__wrapper').css('display', 'block');
});

const selectTop = $('.select__top'),
    selectContent = $('.select__content'),
    selectInput = $(".select__input:not(.select__input-two)"),
    selectInputCard = $('.select__input-two');

function select() {
    selectTop.on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
        $(this).next(selectContent).slideToggle(300);
    });

    selectInput.on('click', function () {
        let thisText = $(this).find('span').text();
        let thisParent = $(this).parent();
        let thisParentPrev = $(this).parent().prev();
        thisParent.slideUp(300);
        thisParentPrev.text(thisText).removeClass('active');
    });

    function hideSelect() {
        selectContent.slideUp(300);
        selectTop.removeClass('active');
        selectTop.parent().removeClass('active');
    }
}
select();