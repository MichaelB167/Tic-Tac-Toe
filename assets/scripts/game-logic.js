'use strict';

let boardArray = ['', '', '', '', '', '', '', '', ''];

let newArray = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"];

let turnCounter = 0;

let game = "active";

let playerXWins = 0;

let playerOWins = 0;

let clear = function () {
 $(".square").text("");
 $(".player-wins").text("");
 boardArray = ['', '', '', '', '', '', '', '', ''];
};

$("#reset").on("click", function() {
  clear();
  game = "active";
});

let turn = function () {
  return turnCounter%2 === 0 ? "X" : "O";
};

const ifWin = function () {
  game = "inactive";
  if (turn() === "X") {
    playerXWins += 1;
    $('.player-wins').text("Player X Wins!");
  } else {
    playerOWins += 1;
    $('.player-wins').text("Player O Wins!");
  }
};

const columnWin = function(activeBoard) {
  for (let i = 0; i < 3; i++) {
    if (((activeBoard[i] === activeBoard[i+3]) && (activeBoard[i] === activeBoard[i+6])) && activeBoard[i] !== '') {
    ifWin();
    }
  }
};

const rowWin = function(activeBoard) {
  for (let i = 0; i < 9; i+=3) {
    if (((activeBoard[i] === activeBoard[i+1]) && (activeBoard[i] === activeBoard[i+2])) && activeBoard[i] !== '') {
    ifWin();
    }
  }
};

const diagonalWin = function(activeBoard) {
  if ((activeBoard[2] === activeBoard[4]) && (activeBoard[2] === activeBoard[6]) && (activeBoard[4] !== '')) {
    ifWin();
  } else if ((activeBoard[0] === activeBoard[4]) && (activeBoard[0] === activeBoard[8]) && (activeBoard[4] !== '')) {
    ifWin();
  }
};

const tie = function(activeBoard) {
  let tieStatus = true;
  for (let i = 0; i < 9; i++) {
    if (activeBoard[i] === "") {
      tieStatus = false;
    }
  }
  if (tieStatus === true) {
    game = "inactive";
    $('.player-wins').text("It's a Tie");
  }
};

const gameResult = function() {
  columnWin(boardArray);
  if (game === "active") {
    rowWin(boardArray);
  } if (game === "active") {
    diagonalWin(boardArray);
  } if (game === "active") {
    tie(boardArray);
  }
  turnCounter +=1;
};

let newArraySquare = function(square) {
  return newArray.indexOf(square);
};

const isMoveValid = function(move) {
  if ((move !== "X") && (move !== "O") && (game === "active")) {
    return true;
  } else {
    return false;
  }
};

$(".square").on("click", function() {
  const index = newArraySquare($(this).attr('id'));
  if (isMoveValid(boardArray[index]) === true) {
    $(this).text(turn());
    boardArray[index] = turn();
    if (turn() === "X") {
      $(this).text("X").addClass("player");
    }
    if (turn() === "O") {
      $(this).text("O").addClass("player");
    }
    gameResult();
  }
});
