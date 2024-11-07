function getComputerChoice() {
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const max_number = 3;
  const min_number = 1;
  let choice = Math.floor(Math.random() * (max_number - min_number + 1)) + min_number;
  let result;
  
  switch(choice) {
    case rock:
      result = "rock";
      break;
    case paper:
      result = "paper";
      break;
    case scissors:
      result = "scissors";
      break;
  }
  return result;
}



function getHumanChoice() {
  let repeat = true;
  let choice;
  
  while (repeat) {
    choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch(choice) {
      case "rock":
        repeat = false;
        break;
      case "paper":
        repeat = false;
        break;
      case "scissors":
        repeat = false;
        break;
      default:
        break;
    }
  }
  return choice;
}


function playRound(human, computer) {
  let message;
  if (human === "rock" && computer === "scissors") {
    humanScore += 1;
    message = `You win! Rock beats Scissors!`
  } else if (human === "rock" && computer === "paper") {
    computerScore += 1;
    message = `You lose! Paper beats Rock!`
  } else if (human === "rock" && computer === "rock") {
    message = `Draw!`;
  } else if (human === "paper" && computer === "rock") {
    humanScore += 1;
    message = `You win! Paper beats Rock!`
  } else if (human === "paper" && computer === "scissors") {
    computerScore += 1;
    message = `You lose! Scissors beats Paper!`
  } else if (human === "paper" && computer === "paper") {
    message = `Draw!`;
  } else if (human === "scissors" && computer === "paper") {
    humanScore += 1;
    message = `You win! Scissors beats Paper!`
  } else if (human === "scissors" && computer === "rock") {
    computerScore += 1;
    message = `You lose! Rock beats Scissors!`
  } else if (human === "scissors" && computer === "scissors") {
    message = `Draw!`;
  }
  console.log(message);
  
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanChoice, computerChoice);