'use strict';

$(".gameboard").find(".square").click(function(){
  $(this).text("x").addClass("player");
});
