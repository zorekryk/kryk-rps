let humanScore = 0;
let computerScore = 0;

const playRound = (computerChoice, humanChoice) => {
  console.log("Computer chose: " + computerChoice);
  console.log("Human chose: " + humanChoice);

  if (computerChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("Computer wins!");
    computerScore++;
  } else {
    console.log("Human wins!");
    humanScore++;
  }
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const getHumanChoice = () => {
  let choice = prompt("Rock, paper, scissors?").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

const playGame = (rounds) => {
  for (let i = 0; i < rounds; i++) {
    playRound(getComputerChoice(), getHumanChoice());
    console.log(`Score: Human: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("Final Score:");
  console.log(`Human: ${humanScore} - Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You are the overall winner!");
  } else if (humanScore < computerScore) {
    console.log("Computer is the overall winner!");
  } else {
    console.log("The game is a tie!");
  }
}

// Ask the user for the number of rounds
let rounds = parseInt(prompt("How many rounds would you like to play?"));
playGame(rounds);
