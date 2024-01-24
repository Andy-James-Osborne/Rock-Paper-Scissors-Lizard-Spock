// Array with game options
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

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
        return "You win!";
    } else if (computerChoice === userChoice) {
        return "It's a tie!";
    } else {
        return "Computer wins!";
    }
}
