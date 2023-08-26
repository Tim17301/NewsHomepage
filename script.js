(function(){
    "use strict";
    
    let fixed = false;

    $("#hamburger").on("click", function(){
        $("#hamburger").toggleClass("is-active");
        $(".openMobileNav").toggleClass("closedMobileNav");
        $(".greyBoxOpen").toggleClass("greyBoxClosed");
        
        if (fixed==false){
            fixed = true;
            $("body").css("position", "fixed");
        } else if (fixed==true){
            fixed = false;
            $("body").css("position", "");
        }
    });
    


    $(".openMobileNav ul li a").on("click", function(event){
        event.preventDefault();
        $("#hamburger").toggleClass("is-active");
        $(".openMobileNav").toggleClass("closedMobileNav");
        $(".greyBoxOpen").toggleClass("greyBoxClosed");

        if (fixed==false){
            fixed = true;
            $("body").css("position", "fixed");
        } else if (fixed==true){
            fixed = false;
            $("body").css("position", "");
        }
    });

    $(".greyBoxOpen").on("click", function(){
        $("#hamburger").removeClass("is-active");
        $(".openMobileNav").addClass("closedMobileNav");
        $(".greyBoxOpen").addClass("greyBoxClosed");
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() < 700){
                $(".banner-img img").attr("src", "assets/images/image-web-3-mobile.jpg");
            }
        });
    });

    $(document).ready(function(){
        $(window).resize(function(){
            if ($(window).width() > 700){
                $(".banner-img img").attr("src", "assets/images/image-web-3-desktop.jpg");
            }
        });
    });
    
    

})();


