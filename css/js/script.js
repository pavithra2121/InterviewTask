$('h1').hide();
$('h1').slideUp(1000);
$('h1').slideUp(1000).slideDown(1000);
$('#main').css({
    color:'red',
    fontsize:25
});
$('.content').css({
    color:'blue',
    fontsize:50
});
/*===================
|  | Team
===================*/
$(function(){
    $("#team-members").owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });

});
/*===========================
| | |progress bar
==========================*/
$(function() {
    /*$("#progress-elements").waypoint(function() {*/
        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
        }, 1000);

    });
});

           /* this.destroy();
        }, {
            offset: 'bottom-in-view'
        });
});

/*===============================
  |   | |responsive-tabs
 ==============================*/
    $(function () {
        $("#services-tabs").responsiveTabs({
            animation:'slide'

        });
});
 /*==========================
      portfolio
===========================*/
$(window).on('load',function(){
    //initialize isotope
    $("#isotope-container").isotope({

    });
    //filter items on button click
    $("#isotope-filters").on('click', 'button', function() {
        alert("you clicked filter button")
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        


    });

});
/*=================================
     magnifier
================================*/
$(function() {
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        gallery: {
            enabled:true
        }
    });
});
/*==================================
 testimonials
===================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

    });

});
/*===============================
counter up
================================*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});
/*===============================
 client section
================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items:6,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

    });
});
/*============================
  show and hide white navigation
==============================*/
$(function(){
    //show/hide nav on page load
    showHideNav();
    $(window).scroll(function(){
        //show/hide nav on windows scroll
        showHideNav();
        //alert("you just scrolled!");
        //if ($(window).scrollTop() > 50) {
            //show white nav
            //alert("Your scroll position is greater than 50 pixels,Your scrol position= " + $(window).scrollTop());
           // $("nav").addClass("white-nav-top");
            //show dark logo
            //$(".navbar-brand img").attr("src", "logo/logo-dark.png");

        
            //hide white nav
           // alert("Your scroll position is less than 50 pixels, Your scrol position= " + $(window).scrollTop());
          // $("nav").removeClass("white-nav-top");
           //show logo
           //$(".navbar-brand img").attr("src", "logo/logo.png");


        

    });
    function showHideNav(){
        if ($(window).scrollTop() > 50) {
            //show white nav
            //alert("Your scroll position is greater than 50 pixels,Your scrol position= " + $(window).scrollTop());
            $("nav").addClass("white-nav-top");
            //show dark logo
            $(".navbar-brand img").attr("src", "logo/logo-dark.png");
            //show back to top button
            $("#back-to-top").fadeIn();

        }else{
            //hide white nav
           // alert("Your scroll position is less than 50 pixels, Your scrol position= " + $(window).scrollTop());
           $("nav").removeClass("white-nav-top");
           //show logo
           $(".navbar-brand img").attr("src", "logo/logo.png");
           //hide back to top button
           $("#back-to-top").fadeOut();


        }

    }

});
/*smooth scrolling*/
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        //get section id like #about,#team etc.
        var section_id= $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top-64
        },1250,easeInOutExpo);

    });

});



        