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

closedClick('.control__title', '.control__list', slideUp);
closedClick('.header-profile', '.profile__content', slideUp);
closedClick('.sample-popup__inner', '.sample-popup', fadeOut);

$('.custum-check__input').on('click', function () { $(this).toggleClass('active'); });


$('.btn-add').on('click', function () {
    $('.currencies__wrapper').css('display', 'none');
    $('.modal-add').css('display', 'block');
});

$('.modal-add__closed').on('click', function () {
    $('.modal-add').css('display', 'none');
    $('.currencies__wrapper').css('display', 'block');
});


function select() {
    const selectTop = document.querySelectorAll(".select__top");
    const selects = document.querySelectorAll(".select");
    const selectContent = document.querySelectorAll(".select__content");
    let selectInput = $(".select__input");

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('select__top')) {
            selectTop.forEach((item, i) => {

                if (target == item) {

                    item.classList.toggle('active');
                    selects[i].classList.add('active');
                    $(selectContent[i]).slideToggle(300);
                }

                if (target != item) {

                    item.classList.remove('active');
                    selects[i].classList.remove('active');
                    $(selectContent[i]).slideUp(300);
                }
            })
        } else {
            selectTop.forEach((item, i) => {
                item.classList.remove('active');
                selects[i].classList.remove('active');
                $(selectContent[i]).slideUp(300);
            });
        }

        selectInput.on('click', function () {
            let thisText = $(this).find('span').text();
            let thisParent = $(this).parent();
            let thisParentPrev = $(this).parent().prev();
            thisParent.slideUp(300);
            thisParentPrev.text(thisText).removeClass('active');
        });
    })
}

select();
