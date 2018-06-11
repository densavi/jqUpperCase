$(document).ready(function() {

	$('.btn').click(function() {
		var value = $('.input').val().toUpperCase();
		$('.input').val(value);
	});

});