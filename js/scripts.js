$(document).ready(function(){
	
	$('.nav-item').click(function(event) {
		event.preventDefault();

		$('.tab-pane').hide();
		$('.nav-item').removeClass('active');

		$(this).addClass('active');

		var target = $(this).attr('href');

		$(target).fadeIn();
		
		

	});

	// $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	// 	$(this).addClass('active')
	// });



});