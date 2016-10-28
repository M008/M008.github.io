$(document).ready(function() {
    // console.log('jestem');
    var hamburger = $('.hamburger').css('display', 'none');
    var menu = $('.menu');


    if ($(window).width() <= 620) {
        $('.to_be_sticky').addClass('fixed');
        var logo = $('.hamburger').css('display', 'block');
        $('.menu').css('display', 'none');
        // do something here
        hamburger.on('click', function() {
            // $('.menu').css('display', 'block')
            menu.toggle('slow');
        })
    }

    if ($(window).width() <= 700) {
        $('.team-gallery').slick({
            dots: false,
            arrows: true,
            autoplay: true,
            prevArrow: $('.rigth_arr'),
            nextArrow: $('.left_arr'),
        });
    }

    /////////////     STICKY MENU     //////////////////

    /////////////     STICKY MENU     //////////////////

    if ($(window).width() >= 620) {
        var menu = $('.to_be_sticky');
        var menuTop = menu.position().top;

        // console.log(menuTop);
        $(window).on('scroll', function() {
            var warunek = $(document).scrollTop();

            if (warunek > menuTop) {
                $('.to_be_sticky').addClass('fixed');

            } else {

                $('.to_be_sticky').removeClass('fixed');
            }
            // console.log(warunek);
        });
    }
    /////////////////////////////////////////////////
    if(($(window).width() <= 1020) && ($(window).width() >= 700)){
      $('.team-gallery').slick({
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,

          prevArrow: $('.rigth_arr'),
          nextArrow: $('.left_arr'),

      });
    }
    ////////////////////////////////////////////////

    $('.circle_wrap').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    ////////////////    SLICK CAROUSEL     ////////////


    if ($(window).width() >= 620) {
        $('.team-gallery').slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

            prevArrow: $('.rigth_arr'),
            nextArrow: $('.left_arr'),

        });
    }

    ////////////////  PORTFOLIO FILTER  ////////////////////
    var buttons = $('.buttons_portfolio').find('button');

    var images = $('.port_box').find('img');

    buttons.on('click', function() {
        $('.port_box').css('display', 'none');
        var btnData = $(this).data('tag');
        console.log("data buttons    " + btnData);
        images.each(function() {
            var imgData = $(this).data('tag');
            console.log("index of zwraca INDEX IMG  " + imgData.indexOf(btnData));
            if (btnData.indexOf('all') !== -1) {

                $('.port_box').css('display', 'block');

            } else if ((imgData.indexOf(btnData) !== -1) && (btnData.indexOf('all') === -1)) {
                $(this).parent().css('display', 'block');
            } else {
                $(this).parent().css('display', 'none');
            }

        })


    })

    //////////// ROZWIJA TEKST W SEKCJ ABOUT ////////

    var btnMore = $('.text').find('button');

    btnMore.on('click', function() {
        $('.more_text').toggle('slow');
    })

    ///////////////////
})
