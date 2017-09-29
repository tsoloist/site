$(function() {
	console.log('hey');
	$('.tab').click(function(e){
        $('.tab').removeClass('active');
         $(this).addClass('active');

         var contentToShow = $(this).data("tab");
         $('.tab-content').removeClass('active');
         $(contentToShow).addClass('active');
    });
});