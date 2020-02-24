$(function() {
	// Custom JS

	$( '#topMenu' ).click(function(){
		$(this).children('.ham').toggleClass( 'active' );
		$('#topMenu_block').toggleClass( 'active' );
	});
	$( '.menu-search' ).click(function(){
		$('.menu-search-container').toggleClass( 'active' );
	});
	$( '.menu-search-close' ).click(function(){
		$('.menu-search-container').toggleClass( 'active' );
	});

});
