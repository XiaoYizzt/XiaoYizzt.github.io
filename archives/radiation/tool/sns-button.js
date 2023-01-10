
$(function() {
	
	$('#hatena').socialbutton('hatena');
	
	$('#mixi_like').socialbutton('mixi_like', {
		key: '2f06e8e1a7e462f5f30ecb54fc0df01f4aa1def4',
		show_faces: false
	}).width(90);
	
	$('#twitter').socialbutton('twitter', {
		button: 'horizontal',
		text: $("title").text()
	});
	
	$('#facebook_like').socialbutton('facebook_like', {
		button: 'button_count'
	});
	
});



