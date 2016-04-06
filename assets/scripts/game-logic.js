'use strict';

let boardArray = ['', '', '', '', '', '', '', '', ''];

let newArray = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];

let newArraySquare = function(square) {
  return newArray.indexof(square);
};

let turnCounter = 0;

let game = "active";

let playerXWins = 0;

let playerOWins = 0;

const clear = function () {
 $(".square").text("");
 boardArray = ['', '', '', '', '', '', '', '', ''];
};

$(".reset").on("click", function() {
  clear();
  game = "active";
});

const turn = function () {
  return turnCounter%2 === 0 ? "X" : "O";
};

const ifWin = function () {
  game = "inactive";
  if (turn() === "X") {
    playerXWins += 1;
    $('.player-X-wins').text(playerXWins);
  } else {
    playerOWins += 1;
    $('.player-O-wins').text(playerOWins);
  }
};

const columnWin = function(activeBoard) {
  for (let i = 0; i < 2; i++) {
    if (((activeBoard[i] === activeBoard[i+3]) && (activeBoard[i] === activeBoard[i+6])) && activeBoard[i] !== '') {
    ifWin();
    }
  }
};

const rowWin = function(activeBoard) {
  for (let i = 0; i < 6; i++) {
    if (((activeBoard[i] === activeBoard[i+1]) && (activeBoard[i] === activeBoard[i+2])) && activeBoard[i] !== '') {
    ifWin();
    }
  }
};

const diagonalWin = function(activeBoard) {
  if (((activeBoard[0] === activeBoard[4]) && (activeBoard[0] === activeBoard[8])) && activeBoard[4] !== '') {
    return ;
  } else if (((activeBoard[2] === activeBoard[4]) && (activeBoard[0] === activeBoard[6])) && activeBoard[4] !== '') {
    ifWin();
  }
};

const tie = function(activeBoard) {
  let tieStatus = true;
  for (let i = 0; i < 8; i++) {
    if (activeBoard[i] === "") {
      tieStatus = false;
    }
  }
  if (tieStatus === true) {
    game = "inactive";
  }
};

const gameResult = function() {
  columnWin(boardArray);
  if (game === "active") {
    rowWin(boardArray);
  } else if (game === "active") {
    diagonalWin(boardArray);
  } else if (game === "active") {
    tie(boardArray);
  }
  turnCounter +=1;
};
$(".square").on(click, function(){

}

$(".gameboard").find(".square").click(function(){
  $(this).text("x").addClass("player");
});
