$(function() {
	// Custom JS

	$( '#topMenu' ).click(function(){
		$(this).children('.ham').toggleClass( 'active' );
		$('#topMenu_block').toggleClass( 'active' );
	});

});
