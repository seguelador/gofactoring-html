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

	/*
	-------------------------------------------------------------------------
	INDICATORS
	-------------------------------------------------------------------------
	*/

	// UF
	$.ajax({
		url: 'http://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=a646fc5d8a6d4ef520bc861dd412f95325178af3&formato=json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(response) {
		var uf = response.UFs[0].Valor;
		$('.indicator-uf').text(uf);
	});

	// UTM
	$.ajax({
		url: 'http://api.sbif.cl/api-sbifv3/recursos_api/utm?apikey=a646fc5d8a6d4ef520bc861dd412f95325178af3&formato=json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(response) {
		var utm = response.UTMs[0].Valor;
		$('.indicator-utm').text(utm);
	});

	// IPC
	$.ajax({
		url: 'http://api.sbif.cl/api-sbifv3/recursos_api/ipc?apikey=a646fc5d8a6d4ef520bc861dd412f95325178af3&formato=json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(response) {
		var ipc = response.IPCs[0].Valor;
		$('.indicator-ipc').text(ipc);
	});

	// EURO
	$.ajax({
		url: 'http://api.sbif.cl/api-sbifv3/recursos_api/euro?apikey=a646fc5d8a6d4ef520bc861dd412f95325178af3&formato=json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(response) {
		var euro = response.Euros[0].Valor;
		$('.indicator-euro').text(euro);
	});

	// DOLAR
	$.ajax({
		url: 'http://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=a646fc5d8a6d4ef520bc861dd412f95325178af3&formato=json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(response) {
		var dolar = response.Dolares[0].Valor;
		$('.indicator-dolar').text(dolar);
	});
});


