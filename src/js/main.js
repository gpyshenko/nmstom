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

    var headerFixed = document.querySelector('.js-headerFixed');
    if(headerFixed) {
        new Waypoint({
            element: $('.header-center'),
            handler: function() {
                headerFixed.classList.toggle('fixed');
            },
            offset: 1
        });
    }
    var tabletRes = window.matchMedia('(max-width: 767px)');

    function changeResize(e) {
        if (!e.matches) {
            toggleDisplay(menu,'none');
            menu.classList.remove('opened');
        }
    }

    tabletRes.addListener(changeResize);
});


