$(document).ready(function () {
// Кнопка меню
    $('.js-burger').click(function () {
        $('.js-sidebar').toggleClass('opened');
        $('.shadow').fadeIn();
    });
    $('.shadow').click(function () {
        $('.js-sidebar').toggleClass('opened');
        $('.shadow').fadeOut();
    });

    var asideScroll = document.querySelector('.js-sidebar');
    SimpleScrollbar.initEl(asideScroll);
    // Слайдер Новостей
    var newsSlider = $('.js-newsSlider');
    newsSlider.slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.js-newsSliderPrev').click(function () {
        newsSlider.slick('slickPrev');
    });
    $('.js-newsSliderNext').click(function () {
        newsSlider.slick('slickNext');
    });

    // Слайдер мероприятий
    var eventsSlider = $('.js-eventsSlider');
    eventsSlider.slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    });

    $('.js-eventsSliderPrev').click(function () {
        eventsSlider.slick('slickPrev');
    });
    $('.js-eventsSliderNext').click(function () {
        eventsSlider.slick('slickNext');
    });

    // Слайдер партнеров
    var sliderPartners = $('.js-sliderPartners');
    sliderPartners.slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true
    });
});


