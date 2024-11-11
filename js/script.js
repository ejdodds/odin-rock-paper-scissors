function getComputerChoice() {
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const max_number = 3;
  const min_number = 1;
  // Generates random number from 1 to 3
  let choice = Math.floor(Math.random() * (max_number - min_number + 1)) + min_number;
  // Placeholder for computer's choice
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


function playRound(human) {
  
  let computer = getComputerChoice();
  
  if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
    
    humanScore += 1;
    humanScoreBoard.textContent = humanScore;
    result.textContent = `You win! ${human} beats ${computer}!`
    
  } else if ((human === "rock" && computer === "paper") || (human === "paper" && computer === "scissors") || (human === "scissors" && computer === "rock")) {
    
    computerScore += 1;
    computerScoreBoard.textContent = computerScore;
    result.textContent = `You lose! ${computer} beats ${human}!`
    
  } else if ((human === "rock" && computer === "rock") || (human === "paper" && computer === "paper") || (human === "scissors" && computer === "scissors")) {
    
    result.textContent = `Draw!`;
    
  }
  
  checkScore();
  
}


function checkWinner() {
  if (humanScore < computerScore) {
    result.textContent = `Game Over... You lose...`;
  } else if (humanScore > computerScore) {
    result.textContent = `Congratulations! You won!`;
  }
  
  finishGame();
  
}


function checkScore() {
  if (humanScore === 5 || computerScore === 5) {
    checkWinner();
  }
}


function finishGame() {
  choices.forEach(choice => {
    choice.setAttribute("disabled", " ")
  });
}


function resetGame() {
  result.textContent = `Welcome! Press START!`;
  humanScore = 0;
  computerScore = 0;
  humanScoreBoard.textContent = humanScore;
  computerScoreBoard.textContent = computerScore;
  choices.forEach(choice => {
    choice.setAttribute("disabled", " ");
  })
  buttonReset.setAttribute("disabled", " ");
  buttonStart.removeAttribute("disabled");
}


function startGame() {
  buttonStart.setAttribute("disabled", " ");
  choices.forEach(choice => {
    choice.removeAttribute("disabled");
  })
  buttonReset.removeAttribute("disabled");
  result.textContent = "Choose to start the game";
}


// It's the initial state after the page loads
function loadInitial() {
  result.textContent = `Welcome! Press START!`;
  choices.forEach(choice => {
    choice.setAttribute("disabled", " ");
  });
  buttonReset.setAttribute("disabled", " ");
}


// Can't directly change the textContent property.
let humanScoreBoard = document.querySelector(".humanScore");
let computerScoreBoard = document.querySelector(".computerScore");
let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choices");
choices.forEach(button => {
  button.addEventListener("click", event => {
    // Retrieves the choice button text
    let choice = event.target.textContent.toLowerCase();
    playRound(choice);
  })
})

let result = document.querySelector(".result");

const buttonStart = document.querySelector(".buttonStart");
const buttonReset = document.querySelector(".buttonReset");

buttonStart.addEventListener("click", startGame);
buttonReset.addEventListener("click", resetGame);

// Starts the page with this initial state after load
document.addEventListener("load", loadInitial());