
function createGrid(x) {
  for (var rows = 0; rows < x; rows++){
    for (var cols = 0; cols < x; cols++){
      $("#sketchpad").append("<div class = 'grid' ></div>");
    };
  };
  $(".grid").height(600/x);
  $(".grid").width(800/x);

};

// Create default 16x16 grid on page load, and set to draw black grids 
function onLoad() {
		$(document).ready(function(){
	  createGrid(16);
	  $('.grid').hover(function() {
	  	$(this).css('background-color', 'black');
	  });
	});
}

//Clear grid function
function clearGrid() {
  $(".grid").remove();
}


// If button "clear grid" is pressed
$(document).ready(function(){
	$(".clearGrid").click(function(){
	  clearGrid();
	  createGrid(16);
	  $(".grid").hover(function(){
	    $(this).css("background-color", "black");
	   });
	});
});


// Set to "Rainbow" style coloring if button is pressed
$(document).ready(function() {
	$(".rainbowColors").click(function() {
		$('.grid').hover(function() {
			const rainbow = ['mistyrose','goldenrod','blue','green','yellow','red','orange','purple','pink'];
			let rainbowRandom = rainbow[Math.floor(rainbow.length * Math.random())];
			$(this).css("background-color", `${rainbowRandom}`)
		});
	});
});

// Change grid size as user inputs
$(document).ready(function() {
	$('.userGridSize').click(function() {
		let userSize = prompt("What size, B?");
		$(document).ready(function(){
		clearGrid();
	  createGrid(userSize);
	  	$('.grid').hover(function() {
	  	$(this).css('background-color', 'black');
	  	});
		});
	});
});



onLoad();
