

$(document).ready(function(){


    $("[data-fancybox]").fancybox({

    });


    $("#countdown").TimeCircles({
        use_background: false,
        animation_interval: "smooth"
    });


    $('.main-slider > ul').bxSlider({
        mode: 'fade',
        auto: false,
        pager: true,
        pagerType: 'short',
        infiniteLoop: true,
        controls: true,
        speed: 500,
        pause: 4000
    });
    


});

