$(document).ready(function(){
$("#nav").addClass("js");
	$("#round-point").click(function(){
		$("#nav").toggle();
	});
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$("#nav").removeAttr("style");
		}
	});

});
