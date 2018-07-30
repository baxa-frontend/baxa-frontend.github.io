$('.times').hide();
$(function(){
    $('.bars').click(function(){
        $('.bars').hide();
        $('.times').show();
        $('.menu').slideToggle(500);
    });
    $('.times').click(function(){
       $('.times').hide();
       $('.bars').show();
       $('.menu').slideToggle(500);
    });
    $(window).resize(function(){
        if($(window).width() > 992){
            $('.menu').removeAttr('style');
        }
    });
});