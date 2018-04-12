$(document).ready(function () {
    // Изменение стиля display
    function toggleDisplay(el,val) {
        el.style.display = val;
    }

    // Кнопка меню
    var burgerBtn = document.querySelector('.js-burger'),
        menu = document.querySelector('.js-menu');

    burgerBtn.addEventListener('click', function () {
        if(menu.classList.contains('opened')) {
            menu.classList.remove('opened');
            setTimeout(function () {
                toggleDisplay(menu,'none');
            }, 600)
        } else {
            toggleDisplay(menu,'block');
            setTimeout(function () {
                menu.classList.add('opened')
            }, 100)

        }
    });

    // Фиксирование шапки
    var headerFixed = document.querySelector('.js-headerFixed'),
        headerCenter = document.querySelector('.js-headerCenter');
    if(headerFixed) {
        new Waypoint({
            element: headerCenter,
            handler: function() {
                headerFixed.classList.toggle('fixed');
            },
            offset: 1
        });
    }

    var sponsorsSlider = $('.js-sponsorsSlider');
    function installSponsorsSlider() {
        sponsorsSlider.slick({
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: false,
            speed: 500,
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 495,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    // Медиа выражения
    var tabletRes = window.matchMedia('(max-width: 767px)');

    // Проверка разрешения при загрузке
    if(tabletRes.matches) {
        installSponsorsSlider();
    }

    // Изменение при ресайзе
    function changeResize(e) {
        if (!e.matches) {
            toggleDisplay(menu,'none');
            menu.classList.remove('opened');
            sponsorsSlider.slick('unslick');
        } else {
            installSponsorsSlider();
        }
    }
    tabletRes.addListener(changeResize);
});


