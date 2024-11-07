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

getComputerChoice();