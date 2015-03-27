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
	var computer;
	var computerMove = function(move) {
		var random = randomPlay();
			if (random === "rock") {
				$('#computerMove').html("<img src='img/Rock.png' id='rock'>");
				computer = "rock";
				return "rock";
			} else if (random === "paper") {
				$('#computerMove').html("<img src='img/Paper.png' id='paper'>");
				computer = "paper";
				return "paper";
			} else {
				$('#computerMove').html("<img src='img/Scissors.png' id='scissors'>");
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
			$('#playersMove').html("<img src='img/Rock.png' id='rock'>");
			computerMove();
			player = "rock";
			gamePlay();
			change();
		}));
		if(paper.click(function(event) {
			$('#playersMove').html("<img src ='img/Paper.png' id='paper'>");
			computerMove();
			player = "paper";
			gamePlay();
			change();
		}));
		if (scissors.click(function(event) {
			$('#playersMove').html("<img src = 'img/Scissors.png' id='scissors'>");
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
	playerMove();
	// var playerMove = function(move) {
	// 	var buttons = $('.move');
	// 	buttons.click(function(event) {
	// 		if ($(this).attr("id") === ('rock')) {
				// $('#playersMove').html("<img src='img/Rock.png' id='rock'>");
	// 			$('#computerMove').show();
	// 			move = "rock";
	// 			return move;
	// 		} else if ($(this).attr("id") === ('paper')) {
	// 			$('#playersMove').html("<img src='img/Paper.png' id='paper'>");
	// 			$('#computerMove').show();
	// 			move = "paper";
	// 			return move;
	// 		} else if ($(this).attr("id") === ('scissors')) {
	// 			$('#playersMove').html("<img src='img/Scissors.png' id='scissors'>");
	// 			$('#computerMove').show();
	// 			move = "scissors";
	// 			return move;
	// 		}
	// 	});
	// };
function rules(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove == "rock" && computerMove == "rock") {
        winner = "tie";
    }
    else if(playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    }
    else if(playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    }
    else if(playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    }
    else if(playerMove == "paper" && computerMove == "paper") {
        winner = "tie";
    }
    else if(playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    }
    else if(playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    }
    else if(playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    }
    else if(playerMove == "scissors" && computerMove == "scissors") {
        winner = "tie";
    }
    return winner;
}

	
	// var getWinner = function() {
	// 	if (computerMove() === playerMove()) {
	// 		console.log("it's a tie");
	// 	} else {
	// 		console.log("that didn't work");
	// 	}
	// };
			// var playerWins = 0;
			// var computerWins = 0;
			// while (playerWins < x+1 && computerWins < x+1) {
			// 	// var playerMoveThisTurn = playerMove();
			// 	// var computerMoveThisTurn = computerMove();
			// 	var winnerThisTurn = getWinner(playerMove(), computerMove());
			// 	if (winnerThisTurn == 'player') {
			// 		playerWins +=1;
			// 		if (playerWins == x) {
			// 			break;
			// 		}
			// 	}
			// 	else if (winnerThisTurn == 'computer') {
			// 		computerWins +=1;
			// 		if (computerWins == x) {
			// 			break;
			// 		}

			// 	}
			// 	else if (winnerThisTurn == 'tie' ){
			// 		return tie;
			// 	}
			// }
			// console.log("The final score is: ");
			// return [playerWins, computerWins];
});
