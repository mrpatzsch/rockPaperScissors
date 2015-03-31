$(function() {
	function Player(player) {
		this.player = player;
	}


	function Rockpaperscissors() {
		var player = new Player("player");
		var computer = new Player("computer");

		this.pMove = null;
		this.cMove = null;
	}

	Rockpaperscissors.prototype.rules = function() {
		this.winner = null;
		if(this.pMove === this.cMove) {
			this.winner = "tie";
		} else if(this.pMove == "rock" && this.cMove == "paper" ||
				this.pMove == "paper" && this.cMove == "scissors" ||
				this.pMove == "scissors" && this.cMove == "rock") {
			this.winner = "computer";
		} else if(this.pMove == "rock" && this.cMove == "scissors" ||
				this.pMove == "paper" && this.cMove == "rock" ||
				this.pMove == "scissors" && this.cMove == "paper")  {
			this.winner = "player";
		}
		console.log(this.winner);
		console.log("The current player move ", this.pMove);
		console.log("The current computer move ", this.cMove);
	};

	Rockpaperscissors.prototype.changeHead = function() {
		var text = $('#whoWon');
			if (this.winner === "player") {
				text.html('<h2>YOU WIN!<h2>');
			} else if (this.winner === "computer") {
				text.html("<h2>Oh no!<br>You lost to a computer!</h2>");
			} else {
				text.html("<h2>It was a tie! Try again!<h2>");
			}
		};

	Rockpaperscissors.prototype.randomPlay = function() {
			var randomNumber = Math.random();
			if (randomNumber < 0.33) {
				$('#computerMove').html("<img src='img/computerRock.png' id='rock'>");
				this.cMove = "rock";
				return "rock";
			} else if (randomNumber < 0.66) {
				$('#computerMove').html("<img src='img/computerPaper.png' id='paper'>");
				this.cMove = "paper";
				return "paper";
			} else {
				$('#computerMove').html("<img src='img/computerScissors.png' id='scissors'>");
				this.cMove = "scissors";
				return "scissors";
			}
		};

	Rockpaperscissors.prototype.init =function() {
			var _this = this;
			var $move = $('.move');
			$move.click(function(event) {
				_this.randomPlay();
				if (this === $move[0]) {
					$('#playerMove').html("<img src='img/playerRock.png' id='rock'>");
					_this.pMove = "rock";
				} else if (this === $move[1]) {
					_this.pMove = "paper";
					$('#playerMove').html("<img src ='img/playerPaper.png' id='paper'>");
				} else if (this === $move[2]) {
					_this.pMove = "scissors";
					$('#playerMove').html("<img src ='img/playerScissors.png' id='scissors'>");
				}
			_this.rules();
			_this.changeHead();
		});
	};

	var gamePlay = new Rockpaperscissors();
	gamePlay.init();

});
