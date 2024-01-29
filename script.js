// Array with game options
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let userScore = 0;
let computerScore = 0;

// Add click event listeners to buttons
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => button.addEventListener("click", handleChoice));

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

    updateScore(1)
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

updateScore()