$(document).ready(function(){

	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
	// set up block configuration
	$('.block .action').click(function(){
		$('.block').addClass('flip');
	});
	$('.block .edit-submit').click(function(e){
		$('.block').removeClass('flip');
		e.preventDefault();
	});	
});