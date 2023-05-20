// set starting round to be 1
var round = 1;
// to count player and computer wins
var playerWins = 0;
var computerWins = 0;

// function to find winner based on player choice
function findRoundWinner(choice) {
    // player choice
    var player = choice.id;
    // all possible options
    var options = ["rock", "paper", "scissors"];
    // random number between 0 and 2 to simulate computer choice
    var computerChoice = Math.floor(Math.random() * 2);
    // match history object
    var roundDesc = document.getElementById("round");
    // player points
    var playerDisplay = document.getElementById("player");
    // computer points
    var computerDisplay = document.getElementById("computer");
    // player choice image
    var playerImage = document.getElementById("playerImage");
    //computer choice image
    var computerImage = document.getElementById("compImage");
    // game status
    var status = document.getElementById("status");
    // player result
    var playerResult = document.getElementById("playerResult");
    // computer result
    var compResult = document.getElementById("compResult");
    // to check all possible outcomes and update win counts for computer and player and match history
    if (computerChoice == 0) {
        computerImage.src = "resources/Rock.png";
        computerImage.style.display = "block";
        if (player == "Rock") {
            playerImage.src = "resources/Rock.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose rock, computer also chose " + options[computerChoice] + ". It's a tie this round!\r\n";
        } else if (player == "Paper") {
            playerImage.src = "resources/Paper.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose paper, computer chose " + options[computerChoice] + ". Round won!\r\n";
            playerWins += 1;
        } else {
            playerImage.src = "resources/Scissors.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose scissors, computer chose " + options[computerChoice] + ". Round lost!\r\n";
            computerWins += 1;
        }
    } else if (computerChoice == 1) {
        computerImage.src = "resources/Paper.png";
        computerImage.style.display = "block";
        if (player == "Rock") {
            playerImage.src = "resources/Rock.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose rock, computer chose " + options[computerChoice] + ". Round lost!\r\n";
            computerWins += 1;
        } else if (player == "Paper") {
            playerImage.src = "resources/Paper.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose paper, computer also chose " + options[computerChoice] + ". It's a tie this round!\r\n";
        } else {
            playerImage.src = "resources/Scissors.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose scissors, computer chose " + options[computerChoice] + ". Round won!\r\n";
            playerWins += 1;
        }
    } else {
        computerImage.src = "resources/Scissors.png";
        computerImage.style.display = "block";
        if (player == "Rock") {
            playerImage.src = "resources/Rock.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose rock, computer chose " + options[computerChoice] + ". Round won!\r\n";
            playerWins += 1;
        } else if (player == "Paper") {
            playerImage.src = "resources/Paper.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose paper, computer chose " + options[computerChoice] + ". Round lost!\r\n";
            computerWins += 1;
        } else {
            playerImage.src = "resources/Scissors.png";
            playerImage.style.display = "block";
            roundDesc.textContent += "Round " + round + ": You chose scissors, computer chose " + options[computerChoice] + ". It's a tie this round!\r\n";
        }
    }
    // update player wins
    playerDisplay.textContent = playerWins;
    // update computer wins
    computerDisplay.textContent = computerWins;
    // increment round count
    round += 1;
    // stop game after 5 rounds or if 3 rounds are won by any player and automatically restart game after 15s
    if (round > 5 || playerWins > 2 || computerWins > 2) {
        inputButtons = document.getElementsByClassName("playerInput");
        for (const button of inputButtons) {
            button.disabled = true;
          }
        // base status statement
        status.textContent = "Overall score is player: " + playerWins + ", computer: " + computerWins;
        // check who is winner of match and output to user
        if (playerWins == computerWins) {
            status.textContent += ". Therefore, the match is a tie.";
            playerResult.textContent = "TIE!";
            compResult.textContent = "TIE!";
        } else if (playerWins > computerWins) {
            status.textContent += ". Therefore, you have won the match.";
            playerResult.textContent = "WINNER!";
            playerResult.style.color = "Green";
            compResult.textContent = "LOSER!";
            compResult.style.color = "Red";
        } else {
            status.textContent += ". Therefore, you have lost the match.";
            playerResult.textContent = "LOSER!";
            playerResult.style.color = "Red";
            compResult.textContent = "WINNER!";
            compResult.style.color = "Green";
        }
        restart();
    }
}

// restart function to restart game after 15s and show restart progress bar
function restart() {
    var bar = document.getElementById("bar");
    var width = 0;
    var time = setInterval(frame, 150);
    function frame() {
        if (width >= 100) {
            clearInterval(time);
            window.location.reload();
        } else {
            width += 1;
            bar.style.width = width + "%";
            bar.textContent = "Restarting " + width + "%";
            bar.style.fontWeight = "bold";
        }
    }
}

