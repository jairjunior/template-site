"use strict";


$(document).ready(function() {
	
	// Pega o offset da barra de navegação em relação ao topo da página (quando em "repouso")
	var navOffsetTop = $('.my-navbar-wrapper').offset().top;	
	// Função que decide quando a barra de navegação deve estar fixa ao topo ou não
	function stickyNav(){
		
		var scrollOffsetTop = $(window).scrollTop();	// Posição atual em relação ao topo

	    if (scrollOffsetTop > navOffsetTop)
	        $('.my-navbar-wrapper').addClass('my-sticky-navbar');
	    else
	        $('.my-navbar-wrapper').removeClass('my-sticky-navbar'); 
	};

	// Executa a função assim que o documento estiver pronto
	stickyNav();
	// E também executa sempre que a página for rolada
	$(window).scroll(function() {
		stickyNav();
	});




});