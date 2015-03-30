$(function() {
	function Player(player) {
		this.player = player;
		this.move = "";
	}

	function Rockpaperscissors(playerMove, computerMove) {
		var player = new Player("player");
		var computer = new Player("computer");
		this.playerMove = playerMove;
		this.computerMove = computerMove;
		this.winner = "";
	}

	Rockpaperscissors.prototype = {
		rules: function(playerMove,computerMove) {
		if(playerMove === computerMove) {
			this.winner = "tie";
		} else if(playerMove == "rock" && computerMove == "paper" ||
				playerMove == "paper" && computerMove == "scissors" ||
				playerMove == "scissors" && computerMove == "rock") {
			this.winner = "computer";
		} else if(playerMove == "rock" && computerMove == "scissors" ||
				playerMove == "paper" && computerMove == "rock" ||
				playerMove == "scissors" && computerMove == "paper")  {
			this.winner = "player";
		}
		return winner;
		},
		change: function() {
			if (winner === "player") {
				text.html('<h2>YOU WIN!<h2>');
			} else if (winner === "computer") {
				text.html("<h2>Oh no!<br>You lost to a computer!</h2>");
			} else {
				text.html("<h2>It was a tie! Try again!<h2>");
			}
		},
		computerMove: function() {
		var computer;
		var player;
		var winner;
		var random = randomPlay();
			if (random === "rock") {
				$('#computerMove').html("<img src='img/computerRock.png' id='rock'>");
				this.move = "rock";
				return "rock";
			} else if (random === "paper") {
				$('#computerMove').html("<img src='img/computerPaper.png' id='paper'>");
				this.move = "paper";
				return "paper";
			} else {
				$('#computerMove').html("<img src='img/computerScissors.png' id='scissors'>");
				this.move = "scissors";
				return "scissors";
			}
		},

		playerMove: function() {
			var move = $('.move');
			var rock = $('#rock');
			var paper = $('#paper');
			var scissors = $('#scissors');
			move.click(function(event) {
				for (var i = 0; i < move.length; i++) {
					if(event.target === move[0]) {
						$('#playersMove').html("<img src='img/playerRock.png' id='rock'>");
							this.move = "rock";
					} else if(event.target === move[1]) {
						$('#playersMove').html("<img src ='img/playerPaper.png' id='paper'>");
							this.move = "paper";
					}
					else if (event.target === move[2]) {
						$('#playersMove').html("<img src = 'img/playerScissors.png' id='scissors'>");
							this.move = "scissors";
						}
					}
				});
			}
		};

	var gamePlay = new Rockpaperscissors();
	Rockpaperscissors();
});

