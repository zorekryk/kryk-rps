const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const compRock = document.querySelector(".rock");
const compPaper = document.querySelector(".paper");
const compScissors = document.querySelector(".scissors");
const resultMessage = document.getElementById("resultMessage");
const roundBtn1 = document.getElementById("roundBtn1");
const roundBtn3 = document.getElementById("roundBtn3");
const roundBtn5 = document.getElementById("roundBtn5");
const restart = document.getElementById("restart");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let currentRound = 0;
let totalRounds = 3;

restart.addEventListener("click", function () {
  if (confirm("Are you sure?")) {
    resetGame();
  }
});

roundBtn1.addEventListener("click", function () {
  totalRounds = 1;
  resetGame();
});
roundBtn3.addEventListener("click", function () {
  totalRounds = 3;
  resetGame();
});
roundBtn5.addEventListener("click", function () {
  totalRounds = 5;
  resetGame();
});

const toggleChoosingButtons = (state) => {
  rock.disabled = state;
  paper.disabled = state;
  scissors.disabled = state;
};

toggleRoundButtons = (state) => {
  roundBtn1.disabled = state;
  roundBtn3.disabled = state;
  roundBtn5.disabled = state;
};

// Функція для обнулення вибору комп'ютера
const resetComputerChoice = () => {
  compRock.style.opacity = 0.3;
  compPaper.style.opacity = 0.3;
  compScissors.style.opacity = 0.3;
};

// Функція для відображення вибору комп'ютера
const showComputerChoice = () => {
  if (computerChoice === "rock") {
    compRock.style.opacity = 1;
  } else if (computerChoice === "paper") {
    compPaper.style.opacity = 1;
  } else if (computerChoice === "scissors") {
    compScissors.style.opacity = 1;
  }
};

// Функція для отримання вибору комп'ютера
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

// Функція для визначення переможця одного раунду
const determineWinner = () => {
  if (humanChoice === computerChoice) {
    resultMessage.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage.textContent = "You won this round!";
  } else {
    computerScore++;
    resultMessage.textContent = "Computer won this round!";
  }

  // Оновлення рахунку на екрані
  score.textContent = `${humanScore} : ${computerScore}`;
};

// Функція для перевірки завершення раундів
const checkGameOver = () => {
  if (currentRound >= totalRounds) {
    if (humanScore > computerScore) {
      resultMessage.textContent = "You won!";
    } else if (computerScore > humanScore) {
      resultMessage.textContent = "Computer won!";
    } else {
      resultMessage.textContent = "It's a tie!";
    }
    toggleRoundButtons(false);
    toggleChoosingButtons(true);
    resetComputerChoice();
  }
};

// Функція для початку гри та обробки кожного раунду
const playRound = (playerChoice) => {
  toggleRoundButtons(true);
  humanChoice = playerChoice;
  resetComputerChoice();
  computerChoice = getComputerChoice();
  showComputerChoice();
  determineWinner();
  currentRound++;
  checkGameOver();
};

// Функція для перезапуску гри
const resetGame = () => {
  resetComputerChoice();
  humanScore = 0;
  computerScore = 0;
  currentRound = 0;
  score.textContent = `${humanScore} : ${computerScore}`;
  resultMessage.textContent = "New game!";
  toggleChoosingButtons(false);
  toggleRoundButtons(false);
};

// Обробники подій для вибору користувача
rock.addEventListener("click", function () {
  playRound("rock");
});

paper.addEventListener("click", function () {
  playRound("paper");
});

scissors.addEventListener("click", function () {
  playRound("scissors");
});

// Оновлення рахунку на початку гри
score.textContent = `${humanScore} : ${computerScore}`;
resultMessage.textContent = "The game has started!";
