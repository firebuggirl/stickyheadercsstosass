

//  $(document).ready(function () {

//	$('#toggle-view ul').click(function () {

	//	var text = $(this).children('li.panel');

	//	if (text.is(':hidden')) {
//			text.slideDown('200');
	//		$(this).children('#toggle').html('-');
//		} else {
	//		text.slideUp('200');
		//	$(this).children('#toggle').html('+');
	//	}

//	});

//});



$(document).ready(function () {

$('#toggle').click(function () {

 $('li').toggle("slow");

 $('#toggle_class').toggle("slow");


  });

});
