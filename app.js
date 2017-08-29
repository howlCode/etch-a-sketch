function grid(numBox) {
	$(document).ready(function() {	
	for (var i = 0;i < numBox; i++) {
		$('#sketchpad').append("<div></div>");
		console.log(numBox);
	}
	});
};


grid(16);