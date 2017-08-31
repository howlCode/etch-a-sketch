
function createGrid(x) {
  for (var rows = 0; rows < x; rows++){
    for (var cols = 0; cols < x; cols++){
      $("#sketchpad").append("<div class = 'grid' ></div>");
    };
  };
  $(".grid").height(600/x);
  $(".grid").width(800/x);
};

//Clear grid function
function clearGrid() {
  $(".grid").remove();
}

// Create default 16x16 grid, and set to color black 
$(document).ready(function(){
  createGrid(16);
  $('.grid').hover(function() {
  	$(this).css('background-color', 'black');
  });
});

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





