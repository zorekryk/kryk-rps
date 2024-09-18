let humanScore = 0;
let computerScore = 0;

const playRound = (computerChoice, humanChoice) => {
  console.log("Computer chose: " + computerChoice);
  console.log("Human chose: " + humanChoice);

  if (computerChoice === humanChoice) {
    alert("It's a tie!");
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    alert(
      "Computer wins! \n" +
        `Score: Human: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    humanScore++;
    alert(
      "Human wins! \n" +
        `Score: Human: ${humanScore}, Computer: ${computerScore}`
    );
  }
};

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const getHumanChoice = () => {
  let choice = prompt("Rock, paper, scissors?").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return choice;
};

const playGame = (rounds) => {
  computerScore = 0;
  humanScore = 0;
  for (let i = 0; i < rounds; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  alert(`Final Score: Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    alert("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    alert("Sorry, you lost. Better luck next time!");
  } else {
    alert("It's a tie!");
  }
};

let rounds;
do {
  rounds = parseInt(prompt("How many rounds would you like to play?"));
} while (isNaN(rounds) || rounds <= 0);

playGame(rounds);
