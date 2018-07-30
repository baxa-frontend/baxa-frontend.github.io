$(function () {

    $links = $('.menu a');
    $links.on('click', function (e) {
        e.preventDefault();

        $links.removeClass('active');
        var selector = $(this).addClass('active').attr('href');
        var target = $(selector);

        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 500);
    });
    var btn = $('.btn-up');
    var h = 300;

    $(document).on('scroll', function () {
        var scrollBtn = $(this).scrollTop();

        if (scrollBtn >= h) {
            btn.fadeIn(300);
        } else {
            btn.fadeOut(300);
        }
    });

});
var menu_selector = ".menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
function onScroll() {
    var scroll_top = $(document).scrollTop() + 100;
    $(menu_selector + " a").each(function () {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $("a[href='#']").click(function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function () {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});
