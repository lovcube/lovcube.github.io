$(window).scroll(function(){$(window).scrollTop()>100?$(".main_h").addClass("sticky"):$(".main_h").removeClass("sticky")}),$(".mobile-toggle").click(function(){$(".main_h").hasClass("open-nav")?$(".main_h").removeClass("open-nav"):$(".main_h").addClass("open-nav")}),$(".main_h li a").click(function(){$(".main_h").hasClass("open-nav")&&($(".navigation").removeClass("open-nav"),$(".main_h").removeClass("open-nav"))}),$(function(){$("a.logo, nav a, .home-buttons a, a.introarrow, a.footerarrow").bind("click",function(o){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top},1e3,"easeInOutExpo"),o.preventDefault()})});var wow=new WOW({boxClass:"wow",mobile:!1});wow.init(),$(function(){$(".homepage a").tooltip({placement:"bottom"})}),$(document).ready(function(){$("#wowtestim").owlCarousel({navigation:!1,slideSpeed:50,paginationSpeed:400,autoPlay:!1,items:1})}),$(document).ready(function(){$("#wowcarousel").owlCarousel({navigation:!1,slideSpeed:100,paginationSpeed:700,autoPlay:!1,items:2})});