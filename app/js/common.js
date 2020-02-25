$(function() {
	// top Menu
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
// home parallax
document.querySelectorAll('.scene').forEach((elem) => {
	const modifier = elem.getAttribute('data-modifier');
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`
			}
		}
	}).start();
		
});