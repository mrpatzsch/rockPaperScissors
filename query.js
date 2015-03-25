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
	var computerMove = function(move) {
			if (randomPlay() === "rock") {
				$('#computerMove').html("<img src='img/Rock.png'>");
				move = "rock";
				return move;
			} else if (randomPlay() === "paper") {
				$('#computerMove').html("<img src='img/Paper.png'>");
				move = "paper";
				return move;
			} else {
				$('#computerMove').html("<img src='img/Scissors.png'>");
				move = "scissors";
				return move;
			}
		};

	// var getWinner = function(playerMove,computerMove) {
	// 	var winner;
	// 	if(playerMove == "rock" && computerMove == "rock") {
	// 		winner = "tie";
	// 	}
	// 	else if(playerMove == "rock" && computerMove == "paper") {
	// 		winner = "computer";
	// 	}
	// 	else if(playerMove == "rock" && computerMove == "scissors") {
	// 		winner = "player";
	// 	}
	// 	else if(playerMove == "paper" && computerMove == "rock") {
	// 		winner = "player";
	// 	}
	// 	else if(playerMove == "paper" && computerMove == "paper") {
	// 		winner = "tie";
	// 	}
	// 	else if(playerMove == "paper" && computerMove == "scissors") {
	// 		winner = "computer";
	// 	}
	// 	else if(playerMove == "scissors" && computerMove == "rock") {
	// 		winner = "computer";
	// 	}
	// 	else if(playerMove == "scissors" && computerMove == "paper") {
	// 		winner = "player";
	// 	}
	// 	else if(playerMove == "scissors" && computerMove == "scissors") {
	// 		winner = "tie";
	// 	}
	// 	return winner;
	// };
	var playerMove = function(move) {
			var buttons = $('.move');
			buttons.click(function(event) {
			computerMove();
			if ($( this ).attr( "id" ) === ('rock')) {
				$('#playersMove').html("<img src='img/Rock.png'>");
				move = "rock";
				return move;
			} else if ($(this).attr("id") === ('paper')) {
				$('#playersMove').html("<img src='img/Paper.png'>");
				move = "paper";
				return move;
			} else if ($(this).attr("id") === ('scissors')) {
				$('#playersMove').html("<img src='img/Scissors.png'>");
				move = "scissors";
				return move;
			}
		});
	};


	var getWinner = function() {
		var computer = computerMove("rock");
		var player = playerMove("rock");
		if (computer == player) {
			console.log("it's a tie");
		} else {
			console.log("that didn't work");
		}
	};
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
		playerMove();
});
