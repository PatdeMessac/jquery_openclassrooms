

$(function() {

	$("body").css("background" , "white");

	$("p:first").css("margin-top" , "3em");

	$("p").css("background" , "white");

	$("h1").css("background" , "white");

	$("p").hide();

	$("h2").hide();




	$("h1").on( "click", function() {

		$("p:first").show();

		});


	$("p:first").on( "click", function() {

		$("p:eq(1)").show();

		$("p:eq1").css("background" , "url(fete.jpg)");

		});


	$("p:eq(1)").on( "click", function() {

		$("p:eq(2)").show();
$("p:eq2").css("background" , "url(fete.jpg)");
		});


	$("p:eq(2)").on( "click", function() {

		$("body").css("background" , "url(fete.jpg)");
		$("h2").show();
		$("h2").css("background" , "url(fete.jpg)");
		$("h1").css("background" , "url(fete.jpg)");

	//$("p").show();
		$("p").css("background" , "url(fete.jpg)");

	$('#son')[0].play();

		});

});