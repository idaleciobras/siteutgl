(function(a){"use strict";a(document).on("ready",function(){jQuery(window).on("scroll",function(){200<a(this).scrollTop()?a("#header .header-inner").addClass("sticky"):a("#header .header-inner").removeClass("sticky")}),jQuery(window).on("scroll",function(){100<a(this).scrollTop()?a(".header").addClass("sticky"):a(".header").removeClass("sticky")}),a(".pro-features .get-pro").on("click",function(){a(".pro-features").toggleClass("active")}),a(".search a").on("click",function(){a(".search-top").toggleClass("active")}),a(".menu").slicknav({prependTo:".mobile-nav",duration:300,closeOnClick:!0}),a(".hero-slider").owlCarousel({loop:!0,autoplay:!0,smartSpeed:500,autoplayTimeout:3500,singleItem:!0,autoplayHoverPause:!0,items:1,nav:!0,navText:["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],dots:!1}),a(".testimonial-slider").owlCarousel({items:3,autoplay:!0,autoplayTimeout:4500,smartSpeed:300,autoplayHoverPause:!0,loop:!0,merge:!0,nav:!1,dots:!0,responsive:{1:{items:1},300:{items:1},480:{items:1},768:{items:2},1170:{items:3}}}),a(".portfolio-slider").owlCarousel({autoplay:!0,autoplayTimeout:4e3,margin:15,smartSpeed:300,autoplayHoverPause:!0,loop:!0,nav:!0,dots:!1,responsive:{300:{items:1},480:{items:2},768:{items:2},1170:{items:4}}}),a(".counter").counterUp({delay:20,time:2e3}),a(".clients-slider").owlCarousel({items:5,autoplay:!0,autoplayTimeout:3500,margin:15,smartSpeed:400,autoplayHoverPause:!0,loop:!0,nav:!1,dots:!1,responsive:{300:{items:1},480:{items:2},768:{items:3},1170:{items:5}}}),a(".pf-details-slider").owlCarousel({items:1,autoplay:!1,autoplayTimeout:5e3,smartSpeed:400,autoplayHoverPause:!0,loop:!0,merge:!0,nav:!0,dots:!1,navText:["<i class=\"icofont-rounded-left\"></i>","<i class=\"icofont-rounded-right\"></i>"]}),a(".accordion > li:eq(0) a").addClass("active").next().slideDown(),a(".accordion a").on("click",function(b){var c=a(this).closest("li").find("p");a(this).closest(".accordion").find("p").not(c).slideUp(300),a(this).hasClass("active")?a(this).removeClass("active"):(a(this).closest(".accordion").find("a.active").removeClass("active"),a(this).addClass("active")),c.stop(!1,!0).slideToggle(300),b.preventDefault()}),a("select").niceSelect(),a(function(){a("#datepicker").datepicker()}),a("input[type=\"checkbox\"]").change(function(){a(this).is(":checked")?a(this).parent("label").addClass("checked"):a(this).parent("label").removeClass("checked")}),a(".right-bar .bar").on("click",function(){a(".sidebar-menu").addClass("active")}),a(".sidebar-menu .cross").on("click",function(){a(".sidebar-menu").removeClass("active")}),a(".video-popup").magnificPopup({type:"video"});var b=a(window).width();767<b&&new WOW().init(),a.scrollUp({scrollText:"<span><i class=\"fa fa-angle-up\"></i></span>",easingType:"easeInOutExpo",scrollSpeed:900,animation:"fade"}),a(".scroll").on("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top-100},1e3),b.preventDefault()}),a.stellar({horizontalOffset:0,verticalOffset:0});var c=new GMaps({el:"#map",lat:23.011245,lng:90.88478,scrollwheel:!1});c.addMarker({lat:23.011245,lng:90.88478,title:"Marker with InfoWindow",infoWindow:{content:"<p>welcome to Medipro</p>"}})}),a(window).on("load",function(){a(".preloader").addClass("preloader-deactivate")})})(jQuery);