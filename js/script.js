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

