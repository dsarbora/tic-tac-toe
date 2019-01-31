function Game(board, players, currentPlayer, turn){
  this.board = [];
  this.players = [];
};

function Board(spaces){
  this.spaces=[]
};

function Space(x, y, occupant){

};

function Player(marker){
  this.marker = marker;
};



var game = new Game();
var board = new Board();
var space1 = new Space(1, 1);
var space2 = new Space(1, 2);
var space3 = new Space(1, 3);
var space4 = new Space(2, 1);
var space5 = new Space(2, 2);
var space6 = new Space(2, 3);
var space7 = new Space(3, 1);
var space8 = new Space(3, 2);
var space9 = new Space(3, 3);
var player1 = new Player(X);
var player2 = new Player(O);
