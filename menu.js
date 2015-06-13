$(document).ready(function() {
	$(".icon-eye").click(function(){
		$(this).parent().find(".curso-falta").toggle();
		$(this).parent().find(".curso-promedio").toggle();
		$(this).hide();
	});
	$(".curso-falta").click(function(){
		$(this).parent().find(".icon-eye").toggle();
		$(this).parent().find(".curso-promedio").toggle();
		$(this).hide();
	});
	$(".curso-promedio").click(function(){
		$(this).parent().find(".icon-eye").toggle();
		$(this).parent().find(".curso-falta").toggle();
		$(this).hide();
	});
});