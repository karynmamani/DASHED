$(document).ready(function(){

	var $ulslider = $('.slider > li.list-item');
	$ulslider.hover(function(){
		$(this).toggleClass("open");
		$(this).toggleClass("active-menu");
	});

});