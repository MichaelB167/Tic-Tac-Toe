'use strict';

let boardArray = ['', '', '', '', '', '', '', '', ''];

let newArray = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];

let turnCounter = 0;

let game = "active";

const turn = function () {
  return turnCounter%2 === 0 ? "X" : "O";
};

const clear = function () {
 $(".square").text("");
 boardArray = ['', '', '', '', '', '', '', '', ''];
};

const columnWin = function(activeBoard) {
  for (let i = 0; i < 2; i++) {
    if (((activeBoard[i] === activeBoard[i+3]) && (activeBoard[i] === activeBoard[i+6])) && activeBoard[i] !== '') {
    return ;
    }
  }
};

const rowWin = function(activeBoard) {
  for (let i = 0; i < 6; i++) {
    if (((activeBoard[i] === activeBoard[i+1]) && (activeBoard[i] === activeBoard[i+2])) && activeBoard[i] !== '') {
    return ;
    }
  }
};

const diagonalWin = function(activeBoard) {
  if (((activeBoard[0] === activeBoard[4]) && (activeBoard[0] === activeBoard[8])) && activeBoard[4] !== '') {
    return ;
  } else if (((activeBoard[2] === activeBoard[4]) && (activeBoard[0] === activeBoard[6])) && activeBoard[4] !== '') {
    return ;
  }
};

const tie = function(activeBoard) {
  
}

$(".gameboard").find(".square").click(function(){
  $(this).text("x").addClass("player");
});
