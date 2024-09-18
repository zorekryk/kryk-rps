let humanScore = 0;
let computerScore = 0;

const playRound = (computerChoice, humanChoice) => {
  console.log("Computer chose: " + computerChoice);
  console.log("Human chose: " + humanChoice);
  if (computerChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer wins!");
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Human wins!");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer wins!");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Human wins!");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer wins!");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Human wins!");
    humanScore++;
  } else {
    console.log("Something went wrong...")
  }
}

const getComputerChoice = () => {
  const number = Math.random();
  if (number < 0.34) {
    return 'rock';
  } else if (number <= 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const getHumanChoice = () => {
  const choice = prompt("Rock, paper, scissors?").toLowerCase();
  return choice;
}

for (let i = 0; i < 5; i++) {
  playRound(getComputerChoice(), getHumanChoice());
  console.log(`Score: Human: ${humanScore} Computer: ${computerScore}`);
}
