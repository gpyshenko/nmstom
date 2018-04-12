$(document).ready(function () {
// Кнопка меню
    $('.js-burger').click(function () {
        $('.js-menu').fadeToggle();
    });

    function changeWaypoint(top) {
        new Waypoint({
            element: $('.header-top'),
            handler: function(direction) {
                console.log('asd');
                $('.js-headerFixed').toggleClass('fixed')
            },
            offset: top
        });
    }

    var winWidth = $( window ).outerWidth();
    function listenMQ() {
        if(winWidth < 768) {
            changeWaypoint(0)
        } else if(winWidth > 768) {
            changeWaypoint(-52)
        }
    }
    listenMQ();
    $(window).resize(function() {
        listenMQ();
    });
});


