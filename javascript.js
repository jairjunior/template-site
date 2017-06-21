"use strict";

var contador = 0;
$(document).ready(function() {
	
  // Pega o offset da barra de navegação em relação ao topo da página quando em "repouso"
  var navbarOffsetTop = $('.my-navbar-wrapper').offset().top;	
  // Estado da barra de navegação
  var isDown = false;

	// Função que decide quando a barra de navegação deve estar fixa ao topo ou não
	function stickyNav(){

		// Posição atual em relação ao topo
		var scrollOffsetTop = $(window).scrollTop();

	    if ( (scrollOffsetTop > navbarOffsetTop-10) && !isDown ) {
	    	$('.my-navbar-wrapper')
	        .addClass('my-sticky-navbar')
	        .hide()
	        .delay(200)
	        .slideDown(500);
	        contador ++;
	        console.log("Número de vezes: "+contador);
	        isDown = true;
	    }

	    else if ( (scrollOffsetTop < navbarOffsetTop) && isDown ) {
	        $('.my-navbar-wrapper').removeClass('my-sticky-navbar'); 
	        isDown = false;
	    }
	};

	// Executa a função assim que o documento estiver pronto
	stickyNav();
	// E também executa sempre que a página for rolada
	$(window).scroll(function() {
		stickyNav();
	});



	// Dropdown Menu na barra de navegação superior
	$(".my-dropdown").hover(
  		function () {
     		$(".my-dropdown-menu").slideDown("medium");
  		}, 
  		function () {
     		$(".my-dropdown-menu").slideUp("medium");
  		}
	);


	// Links desabilitados
	$('.my-link-disabled').click(function(e){
     e.preventDefault();
  })


});