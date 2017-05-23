$(document).ready(function(){
  $("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
  	$("#menu").click(function(){
  		$("#nav").toggle();
  	});
  	$(window).resize(function(){
  		if(window.innerWidth > 768) {
  			$("#nav").removeAttr("style");
  		}

});
});

$(function() {
$('#section-1').hide(); // this or use css to hide the div
$('#section-1').fadeIn('slow');

$('#section-2').hide(); // this or use css to hide the div
$('#section-2').delay(1000).fadeIn('slow');

$('#section-3').hide(); // this or use css to hide the div
$('#section-3').delay(2000).fadeIn('slow');
});
