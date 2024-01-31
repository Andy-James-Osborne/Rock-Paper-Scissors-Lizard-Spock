// Array with game options
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let userScore = 0;
let computerScore = 0;

// start screen
const startScreen = document.querySelector(".start-screen");
startScreen.addEventListener("click", startGame);

// game screen hidden until .start-screen button is clicked
const gameScreen = document.querySelector(".container");
gameScreen.style.display = "none";

// Game over screen options
const gameOverScreen = document.querySelector(".game-over");
gameOverScreen.style.display = "none";

// Add click event listeners to game buttons (once game starts)
function setupGameButtons() {
  const buttons = document.querySelectorAll(".buttons");
  buttons.forEach(button => button.addEventListener("click", handleChoice));
}

function startGame() {
  startScreen.style.display = "none";  // Hide start screen
  gameScreen.style.display = "block";  // Show game screen
  setupGameButtons();                   // Get event listener buttons to work
}

function handleChoice(event) {
    // Get user's choice
    const userChoice = event.target.id;

    // Generate computer's choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Update choices in UI
    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("computer-choice").textContent = computerChoice;

    // Determine result
    const result = determineWinner(userChoice, computerChoice);

    // Update result in UI
    document.getElementById("result").textContent = result;

    updateScore(1);

    roundsForWinner();
}

function determineWinner(userChoice, computerChoice) {
    // Win conditions based on the game rules
    const winConditions = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["rock", "scissors"]
    };

    // Check if user wins
    if (winConditions[userChoice].includes(computerChoice)) {
        userScore++;
        return "You win!";
    } else if (computerChoice === userChoice) {
        return "It's a tie!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function updateScore () {
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
}

function roundsForWinner() {
    if (userScore === 10 || computerScore === 10) {
      // Hide game screen and show game over screen
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "block";
  
      // Optionally, show who won in the game over screen
      if (userScore === 10) {
        document.querySelector(".game-over h1").textContent = "Congratulations! You won!";
      } else {
        document.querySelector(".game-over h1").textContent = "Game over! The computer won.";
      }
    }
  }

  // event listerner for resetting the game on game over page
  const resetButton = document.querySelector(".reset-game");
  resetButton.addEventListener("click", resetGame);

  const homeButton = document.querySelector(".home-screen");
  homeButton.addEventListener("click", homeScreen);
  
  function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScore();
  
    gameScreen.style.display = "block";
    gameOverScreen.style.display = "none";

    setupGameButtons(); // This resets the score
  }

  function homeScreen() {
    startScreen.style.display = "block";
    gameOverScreen.style.display = "none";
  }
  


updateScore()