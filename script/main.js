$(function(){
    $(".nav_menu>li").hover(function(){
        $(".sub").stop().slideDown();
        $(".sub_bg").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
        $(".sub_bg").stop().slideUp();
    })




})//jquery