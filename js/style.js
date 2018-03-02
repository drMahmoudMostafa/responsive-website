$(document).ready(function () {
    
    $("body").niceScroll({
        cursorcolor: $(".toolbox .colortool ul li.active").css("backgroundColor"),
        cursorwidth: "6px",
        cursorborder: "0"
    })

    $("#showMore").click(function () {
        "use strict";
        console.log("clicked")
        if ($(".feat").last().hasClass("hidden")) {
            $(".hidden").first().fadeIn();
            $(".hidden").first().removeClass("hidden");
            console.log("condition 1");
        } else {
            $("#showMore").prop("disabled", true).css({
                color: "#000",
                background: "#666",
                cursor: "default"

            });
            console.log("condition 2")
        }
    })
    // fadeToggle colortool
    $("#setting").click(function () {
        $(".colortool").fadeToggle();
    })

    // color themes

    var colorLi = $(".toolbox .colortool ul li");

    colorLi
        .eq(0).css("backgroundColor", "#b70d0d").end()
        .eq(1).css("backgroundColor", "#0860b9").end()
        .eq(2).css("backgroundColor", "#91024f").end()
        .eq(3).css("backgroundColor", "#160091").end()
        .eq(4).css("backgroundColor", "#08892b").end()
        .eq(5).css("backgroundColor", "#749000");

    colorLi.click(function () {
        $("link[href*=color_theme]").attr("href", $(this).attr("data-value"));
        colorLi.removeClass("active");
        $(this).addClass("active");
    })
    
    //scroll to top
    $(window).scroll(function(){
        if($(this).scrollTop() >= 700){
            $("#scrollTop").fadeIn();
        }else{
            $("#scrollTop").fadeOut();
        }
    })
    $("#scrollTop").click(function(){
        $("html , body").animate({scrollTop: 0}, 1000)
    })

})
// loading screen
$(window).on("load",function()
{
    $(".loading h1 , .loading .spinner").fadeOut(1000, function(){
        $(this).parent().fadeOut(1000 , function(){
            $(this).remove();
        })
    })
})
