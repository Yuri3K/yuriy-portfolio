$(function () {

    $('.menu__btn, .menu__link').on('click', function () {
        $('.menu__list,.menu__btn').toggleClass('active');
        if ($(window).width() < 992) {
            $('body').toggleClass('lock');
        }

    });

    $(window).scroll(function () {
        var menu = $('.menu').outerHeight(true);
        if ($(this).scrollTop() > menu) {
            $('.menu').addClass('opacity')
        } else if ($(this).scrollTop() <= menu) {
            $('.menu').removeClass('opacity')
        }

    });



    $(".header a, .logo, .top").on("click", function (event) {
        event.preventDefault();
        $('.menu').addClass('opacity');
        // var menu = $('.menu').outerHeight(true);
        // var pad = parseInt($('.menu.opacity').css('padding'));
        // var height = $('.menu').outerHeight(true);
        // console.log(menu);
        // console.log(height);
        // console.log(pad);
        var id = $(this).attr('href'),
            height = $('.menu.opacity').outerHeight(true),
            top;
        console.log($(this).attr('href'));

        if (id == '#about') {
            top = $(id).offset().top - $('.menu').outerHeight(true) + 45;
        } else {
            top = $(id).offset().top - height;
        }
        // console.log(top);
        // console.log($('.menu').outerHeight(true));
        // console.log($('.menu.opacity').outerHeight(true));
        // console.log($(this).outerHeight(true));


        $('body,html').animate({ scrollTop: top }, 1500);

    });

    $(window).scroll(function () {
        var head = $('.header').outerHeight(),
            height = $('.menu.opacity').outerHeight(true);
        if ($(this).scrollTop() < head - (height + 1)) {
            $('.top').css('opacity', '0');
        } else if ($(this).scrollTop() > head - (height + 1)) {
            $('.top').css('opacity', '1');
        }
    });

    $('.reviews__inner').slick({

        dots: true,
        prevArrow: '<button class="slick__arrow--prev" type="button"><span class="sr-only">Предыдущий слайд</span></button>',
        nextArrow: '<button class="slick__arrow--next" type="button"><span class="sr-only">Следующий слайд</span></button>',

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    var mixer = mixitup('.project__show', {

        animation: {
            effects: 'rotateY(-25deg)',
            duration: 1000,
        }
    });


});



