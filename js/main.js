const btn = document.querySelector('.mobile-nav-button');
const icon = document.querySelector('.mobile-nav-button__icon');
const menu = document.querySelector('.mobile-nav');
const logo = document.querySelector('.header__logo');
const logoSmall = document.querySelector('.header__logo-small');

btn.addEventListener('click', function () {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
    logo.classList.toggle('visually-hidden');
    logoSmall.classList.toggle('visually-hidden');
    document.body.classList.toggle('no-scroll');
});

$(document).ready(function () {

    var element = $(".beer__image-first");
    var height_el = element.offset().top;
    var element_stop = $(".fixed-second");
    var height_el_stop = element_stop.offset().top;

    $(".fixed-first").css({
        "width": element.outerWidth(),
        "height": element.outerHeight()
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > height_el_stop - element.outerHeight() - -540) {

            element.css({
                "top": element.offset().top,
                "left": element.offset().left
            }).removeClass("fixed").addClass("absolute");

        } else {

            if ($(window).scrollTop() > height_el) {

                element.addClass("fixed").attr("style", "");

            } else {

                element.removeClass("fixed absolute").attr("style", "");

            }

        }

    });

});

$(document).ready(function () {

    var element = $(".beer__image-second");
    var height_el = element.offset().top;
    var element_stop = $(".fixed-third");
    var height_el_stop = element_stop.offset().top;

    $(".fixed-second").css({
        "width": element.outerWidth(),
        "height": element.outerHeight()
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > height_el_stop - element.outerHeight() - -585) {

            element.css({
                "top": element.offset().top,
                "left": element.offset().left
            }).removeClass("fixed").addClass("absolute");

        } else {

            if ($(window).scrollTop() > height_el) {

                element.addClass("fixed").removeClass("absolute").attr("style", "");

            } else {

                element.removeClass("fixed absolute").attr("style", "");

            }

        }

    });

});

