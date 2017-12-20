$(document).ready(function() {

	$.material.init();
    $('.sidebar').slideAndSwipe();

	/*-----------------------------------/
	/*	TOP NAVIGATION AND LAYOUT
	/*----------------------------------
	var $body = $('body');
	var $overlay = $('.overlay');

	$('.btn-burger').on('click', function() {
		if(!$body.hasClass('sidebar-show')) {
			$body.addClass('sidebar-show');
			$overlay.fadeIn();
		} else {
			$body.removeClass('sidebar-show');
			$body.removeClass('layout-default'); 
			$overlay.fadeOut();
		}
	});
	$overlay.on('click', function() {
		$(this).fadeOut();
		$body.removeClass('sidebar-show');
	});
*/

//Enable swiping...
      $(".wrap-content, .wraper").swipe( {
        //Generic swipe handler for all directions
        
        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {

	          var c =  $('.sidebar');
	          c.css("transform", "translate(0,0)");
	          c.addClass("ssm-nav-visible");

	          var a = $;
	          a(".ssm-toggle-nav").addClass("ssm-nav-visible"),
	          a("html").addClass("is-navOpen"), 
	          a(".ssm-overlay").fadeIn();
        
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:100
      });
});