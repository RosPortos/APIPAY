$('.control__title').on('click', function () {
    $(this).next().slideToggle(300);
});

function slideUp(item) {
    item.slideUp(300);
}

function fadeOut(item) {
    item.fadeOut(300);
}

function closedClick(wrap, item, method) {

    let wrapper = $(wrap),
        element = $(item);

    $(document).mouseup(function (e) {
        if (!wrapper.is(e.currentTarget) && wrapper.has(e.target).length === 0) {
            element.removeClass('active');
            method(element);
        }
    });
}

// closedClick('.control__title', '.control__list', slideUp);
closedClick('.header-profile', '.profile__content', slideUp);
closedClick('.sample-popup__inner', '.sample-popup', fadeOut);
closedClick('.popup', '.popup', fadeOut);
closedClick('.modal-add', '.modal-bg', fadeOut);

$('.custum-check__input').on('click', function () { $(this).toggleClass('active'); });

/* 
$('.modal-add__closed, .overley').on('click', function () {
    $('.modal-add').css('display', 'none');
    $('.currencies__wrapper, .output__middle').css('display', 'block');
    $('.overley').fadeOut(400);
}); */


function select() {
    const selectTop = document.querySelectorAll(".select__top");
    const selectContent = document.querySelectorAll(".select__content");
    let selectInput = $(".select__input");

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('select__top')) {
            selectTop.forEach((item, i) => {

                if (target == item) {

                    item.classList.toggle('active');
                    $(selectContent[i]).slideToggle(300);
                }

                if (target != item) {

                    item.classList.remove('active');
                    $(selectContent[i]).slideUp(300);
                }
            });
        } else {
            selectTop.forEach((item, i) => {
                item.classList.remove('active');
                $(selectContent[i]).slideUp(300);
            });
        }

        selectInput.on('click', function () {
            let thisText = $(this).find('span').text();
            let thisImg = $(this).find('img').attr("src");
            let thisContent = $(this).parent();
            let thisParent = $(this).parent().prev();
            thisParent.find('.select__top-title').text(thisText);
            thisParent.find('.select__top-icon').attr("src", thisImg);
            thisContent.slideUp(300);
        });
    });
}

select();

$('.btn-add-template, .create-account, .read-more').on('click', function () {
    $('.add-template, .applic-modal').fadeIn(400);
    $('.overley').fadeIn(400);
});

$('.add-template__closed, .overley, .applic-modal__closed').on('click', function () {
    $('.add-template, .applic-modal').fadeOut(400);
    $('.overley').fadeOut(400);
});
