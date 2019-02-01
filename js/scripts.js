var spaces = ['1','2','3','4','5','6','7','8','9'];
var spaceMarkers = ['gf1', 'gf2', 'gf3', 'gf4', 'gf5', 'gf6', 'gf7', 'gf8', 'gf9']
var winningCombinations = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9'],
  ['1','4','7'],
  ['2','5','8'],
  ['3','6','9'],
  ['1','5','9'],
  ['3','5','7']
];


//         GAME CONSTRUCTOR AND METHODS
function Game(board, players, currentPlayer, turn){
  this.board = [],
  this.players = [],
  this.turn = 0
};

Game.prototype.changePlayer = function(){
  this.turn += 1;
  if(this.turn % 2 === 0){
    this.currentPlayer = this.players[0];  // FUNCTION CHANGES CURRENT PLAYER
  }
  else{
    this.currentPlayer = this.players[1];
  };
};

Game.prototype.addBoard = function(board){  // ADDS BOARD TO GAME
  this.board.push(board);
};

Game.prototype.addPlayer = function(player){  //ADDS PLAYER TO GAME, SETS CURRENT PLAYER
  this.players.push(player);
  this.currentPlayer = this.players[0];
};

Game.prototype.checkWin = function(array){
  for(var i = 0; i < 8; i++){
    var currentArray = array[i];
    var playerSpaces = game.currentPlayer.spaces;
    counter = 0;

    for(var j = 0; j<3; j++){
      if(playerSpaces.includes(currentArray[j])){
        counter++;
        console.log(counter)
      }

    };
    if(counter == 3){
      alert(this.currentPlayer.name +" WINS");
      return counter;


    }

  };
};

//         BOARD CONSTRUCTOR AND METHODS
function Board(spaces, currentID){
  this.spaces=[]
  this.currentID = 0
};

Board.prototype.createSpaces = function(){
  for(var i = 0; i < 9; i++){
    space = new Space()
    this.addSpace(space);
  };


};


Board.prototype.addSpace = function(space){
  this.assignID(space);
  this.spaces.push(space);
};

Board.prototype.assignID = function(space){
  this.currentID ++
  space.id = this.currentID
};

//          SPACE CONSTRUCTOR AND METHODS
function Space(id, occupant){
  this.id = id,
  this.occupant = occupant
};

Space.prototype.getOccupant =function(){
  if(this.occupant){
    alert("You can't go there")
  }
  else{
    this.occupant = game.currentPlayer;
  };
};

Space.prototype.displayOccupant=function(id){
  if(this.occupant.marker == "X"){
    $(".X").show();
  }
  else if(this.occupant.marker == "O"){
    $(".O").show();
  }
  else{};
};

//            PLAYER CONSTRUCTOR AND METHODS
function Player(name, marker, spaces){
  this.name = name,
  this.marker = marker,
  this.spaces = []
};

Player.prototype.markSpace = function(){

}


//           USER INTERFACE / START OF GAME

var game = new Game();
var board = new Board();
var space1 = new Space(1);
var space2 = new Space(2);
var space3 = new Space(3);
var space4 = new Space(4);
var space5 = new Space(5);
var space6 = new Space(6);
var space7 = new Space(7);
var space8 = new Space(8);
var space9 = new Space(9);
var player1 = new Player("player1", "X");
var player2 = new Player("player2", "O");
board.addSpace(space1);
board.addSpace(space2);
board.addSpace(space3);
board.addSpace(space4);
board.addSpace(space5);
board.addSpace(space6);
board.addSpace(space7);
board.addSpace(space8);
board.addSpace(space9);
game.addBoard(board);
game.addPlayer(player1);
game.addPlayer(player2);
$(function(){
$("#ef2").text("X")
});

var printMarker = function(id){
  var check = $('#' + id).text();
  if(check == "X" || check == "O"){
    alert("You can't go here");
  }
  else{
    $("#" + id).text(game.currentPlayer.marker);
    game.currentPlayer.spaces.push(id);
    game.checkWin(winningCombinations);
    game.changePlayer();
  };
};

$(function(){
  $(".boardSpace").click(function(){
    var thisID = this.id;
    printMarker(thisID);



  });  //end gameSpace.click function
}); //end doc ready function
