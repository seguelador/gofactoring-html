$(function($){
	
	"use strict";     

	/*
	|----------------------------------------------------------------------------
	| STICKY NAVBAR
	|----------------------------------------------------------------------------
	*/
	
	/*if ( matchMedia( 'only screen and (min-width: 992px)' ).matches ) {
		$(document).on('scroll', function() {
			var scrollPos = $(this).scrollTop();
			if( scrollPos > 50 ) {
				$('.navbar').addClass('navbar-fixed-top');
			} else {
				$('.navbar').removeClass('navbar-fixed-top');
			}
		});
	}*/

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50 ) {
			$('.scrolltop:hidden').stop(true, true).fadeIn();
		} else {
			$('.scrolltop').stop(true, true).fadeOut();
		}
	});
	$(".scroll").on('click',function(){
		$("html,body").animate({scrollTop:$("body").offset().top},"1000");
		return false
	});

