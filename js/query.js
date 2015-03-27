$(function() {
	var randomPlay = function() {
		var randomNumber = Math.random();
		if (randomNumber < 0.33) {
			return "rock";
		} else if (randomNumber < 0.66) {
			return "paper";
		} else {
			return "scissors";
		}
	};

	function Player(which) {
		this.player = which;
	}

	Player.prototype = {
		chooseMove: function(xoro) {
			if (this.player === "player") {
				var move = function() {
					$('.move').click(function(event) {
					if(event.target === $('.move')[0]) {
						$('#playersMove').html("<img src='img/Rock.png' id='rock'>");
						computerMove();
						player = "rock";
						gamePlay();
						change();
					}
					});
				};
			}
		}
	};
	var computer;
	var computerMove = function() {
		var random = randomPlay();
			if (random === "rock") {
				$('#computerMove').html("<img src='img/computerRock.png' id='rock'>");
				computer = "rock";
				return "rock";
			} else if (random === "paper") {
				$('#computerMove').html("<img src='img/computerPaper.png' id='paper'>");
				computer = "paper";
				return "paper";
			} else {
				$('#computerMove').html("<img src='img/computerScissors.png' id='scissors'>");
				computer = "scissors";
				return "scissors";
			}
		};
	var player;
	var winner;
	var playerMove = function() {
		var move = $('.move');
		var rock = $('#rock');
		var paper = $('#paper');
		var scissors = $('#scissors');
		if(rock.click(function(event) {
			$('#playersMove').html("<img src='img/playerRock.png' id='rock'>");
			computerMove();
			player = "rock";
			gamePlay();
			change();
		}));
		if(paper.click(function(event) {
			$('#playersMove').html("<img src ='img/playerPaper.png' id='paper'>");
			computerMove();
			player = "paper";
			gamePlay();
			change();
		}));
		if (scissors.click(function(event) {
			$('#playersMove').html("<img src = 'img/playerScissors.png' id='scissors'>");
			computerMove();
			player = "scissors";
			gamePlay();
			change();
		}));
	};


	var gamePlay = function() {
		rules(player, computer);
	};

	var text = $('#winner');
	var change = function() {
		if (winner === "player") {
			text.html('<h2>YOU WIN!<h2>');
		} else if (winner === "computer") {
			text.html("<h2>Oh no!<br>You lost to a computer!</h2>");
		} else {
			text.html("<h2>It was a tie! Try again!<h2>");
		}

	};

	function rules(playerMove,computerMove) {
		if(playerMove === computerMove) {
			winner = "tie";
		} else if(playerMove == "rock" && computerMove == "paper" ||
				playerMove == "paper" && computerMove == "scissors" ||
				playerMove == "scissors" && computerMove == "rock") {
			winner = "computer";
		} else if(playerMove == "rock" && computerMove == "scissors" ||
				playerMove == "paper" && computerMove == "rock" ||
				playerMove == "scissors" && computerMove == "paper")  {
			winner = "player";
		}
		return winner;
	}
	playerMove();
});
