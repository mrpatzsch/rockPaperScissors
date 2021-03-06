////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
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

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0; 
    var computerWins = 0;

        while (playerWins < x+1 && computerWins < x+1) {
            var playerMoveThisTurn = getPlayerMove();
            var computerMoveThisTurn = getComputerMove();
            var winnerThisTurn = getWinner(playerMoveThisTurn, computerMoveThisTurn);
            console.log("Player's move is " + playerMoveThisTurn + "\nComputer's move is " + computerMoveThisTurn);
            console.log("The winner this round is " + winnerThisTurn);
            if (winnerThisTurn == 'player') {
                playerWins +=1;
                console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
                if (playerWins == x) {
                    console.log("Congratulations! You win!");
                    break;
                }
            }
            else if (winnerThisTurn == 'computer') {
                computerWins +=1;
                console.log("The score is Player: " + playerWins + " to " + computerWins + " : Computer");
                if (computerWins == x) {
                    console.log("Oh No! The computer won!");
                    break;
                }
            
            }
            else if (winnerThisTurn == 'tie' ){
                console.log("The score is Player: " + playerWins + " to " + computerWins + " :Computer");
            }
        }
        

    console.log("The final score is: ");
    return [playerWins, computerWins];
}

playTo(1);

