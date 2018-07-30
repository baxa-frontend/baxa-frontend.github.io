$(function(){

    $links = $('.menu a');
    $links.on('click', function(e){
        e.preventDefault();
        
        $links.removeClass('active');
        var selector = $(this).addClass('active').attr('href');
        var target = $(selector);

        $('html, body').animate({
            scrollTop: target.offset().top
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
    $('.btn-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
});