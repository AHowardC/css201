$(document).ready(()=>{
	$('#change-perspective').change((event)=>{
		var newVal = event.target.value;
		$('#parent').css({
			'perspective': newVal
		})
	})

	$('.card-holder').click(function(){
		$(this).toggleClass('flip');
	})
})