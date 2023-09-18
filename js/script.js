function getComputerChoice() {
    // generating CPU's input

    // assigning rock, paper, and scissors their value
    // for reference
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    // generate random number
    let result = Math.floor(Math.random() * 3 + 1);
    // match the number to return rock, paper, or scissor
    if (result === rock) {
        return `rock`;
    } else if (result === paper) {
        return `paper`;
    } else if (result === scissors) {
        return `scissors`;
    }
}


function playRound(playerSelection, computerSelection) {
    // matching user's and CPU's input
    // to determine the winner

    // convert both player's input to lowercase
    const player = playerSelection.toLowerCase();
    const cpu = computerSelection.toLowerCase();

    // placeholder for the winner of the round
    let winner = '';

    // checks the result of the round
    if (player === 'rock' && cpu === 'paper'){
        console.log("You Lose! Paper beats Rock");
         return winner = 'cpu';
    } else if (player === 'rock' && cpu === 'scissors') {
        console.log("You Win! Rock beats Scissors");
        return winner = 'user';
    } else if (player === 'rock' && cpu === 'rock') {
        console.log("Draw! Rock can't beat another Rock");
        return winner = 'none';
    } else if (player === 'paper' && cpu === 'rock') {
        console.log("You Win! Paper beats Rock");
        return winner = 'user';
    } else if (player === 'paper' && cpu === 'paper') {
        console.log("Draw! Paper can't beat another Paper");
        return winner = 'none';
    } else if (player === 'paper' && cpu === 'scissors') {
        console.log("You Lose! Scissors beat Paper");
        return winner = 'cpu';
    } else if (player === 'scissors' && cpu === 'rock') {
        console.log("You Lose! Rock beats Scissors");
        return winner = 'cpu';
    } else if (player === 'scissors' && cpu === 'paper') {
        console.log("You Win! Scissors beat Paper");
        return winner = 'user';
    } else if (player === 'scissors' && cpu === 'scissors') {
        console.log("Draw! Scissors can't beat another Scissors");
        return winner = 'none';
    } 
}


function scoreTally(winner, score1, score2) {
// tally up the scores of the players

// checks who the winner is
// and adds up the score appropriately
    if (winner === 'user') {
    // have to increase both the variable
    // because the scores will reset
    // once the program exits the function
    score1 += 1;
    score2 += 0;
    return score1, score2;
    } else if (winner === 'cpu') {
    score2 += 1;
    score1 += 0;
    return score1, score2;
    } else { 
    // cannot use break or continue statement here
    // because it's in a function
    score1 += 0;
    score2 += 0;
    return score1, score2;
    }
}

function winnerAnn(score1, score2) {
    // compares the scores of the user and the CPU
    // and announces the winner

    // compares the scores
    if (score1 > score2) {
        return `The result is ${score1}:${score2}. User Wins!`;
    } else if (score1 < score2) {
        return `The result is ${score1}:${score2}. CPU Wins!`;
    } else if (score1 === score2) {
        return `It's a DRAW!`;
    }
}


function game() {
    // initiates the game

    // placeholder for the user's and the CPU's scores
    let userScore = 0;
    let cpuScore = 0;

    // loop for the five rounds of the game
    for (let counter = 1; counter <= 5; counter++) {

        // prompts the user for input
        let userInput = prompt(`Rock, Paper, or Scissors?`);

        // generates CPU's input
        let cpuInput = getComputerChoice();

        // placeholder for the winner of the current round
        let winner = playRound(userInput, cpuInput);

        // updates the scores of both the user and the CPU
        userScore, cpuScore = scoreTally(winner, userScore, cpuScore);
    }

    // outputs the winner of the game
    console.log(winnerAnn(userScore, cpuScore));
}


game();