

$(document).ready(function () {

$('#toggle').click(function () {

 $('.main-nav ul li').toggle("slow");

 $('#toggle_class').toggle("slow");

});
});



$(window).resize(function(){
	if(window.innerWidth > 768) {
		$(".main-nav ul li").show();
    $('#toggle_class').hide();
	}
});

$(window).resize(function(){
	if(window.innerWidth < 768) {
    $('#toggle_class').show();
	}
});
