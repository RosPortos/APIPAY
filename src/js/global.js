
let headerHeight = $('.header-admin').outerHeight();

$('.page-content').css('padding-top', `${headerHeight + 20}px`);
$('.nav').css('top', `${headerHeight}px`);