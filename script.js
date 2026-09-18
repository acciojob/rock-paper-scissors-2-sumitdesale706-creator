// Internal track variables
let userScore = 0;
let computerScore = 0;
let totalTurns = 0;
let turnsPlayed = 0;
let gameActive = false;

// DOM Element Selectors using data-ns-test tags
const gameNumberInput = document.querySelector('[data-ns-test="game-number"]');
const playButton = document.querySelector('[data-ns-test="play-game"]');
const userPointsDiv = document.querySelector('[data-ns-test="user-points"]');
const computerPointsDiv = document.querySelector('[data-ns-test="computer-points"]');
const roundsLeftDiv = document.querySelector('[data-ns-test="rounds-left"]');
const computerChooseDiv = document.querySelector('[data-ns-test="computer-choose"]');
const roundResultDiv = document.querySelector('[data-ns-test="round-result"]');
const gameResultDiv = document.querySelector('[data-ns-test="game-result"]');

const rockBtn = document.querySelector('[data-ns-test="rock"]');
const paperBtn = document.querySelector('[data-ns-test="paper"]');
const scissorsBtn = document.querySelector('[data-ns-test="scissors"]');

// Initialize window global value requirement
window.computerChoose = undefined;

// Reset and Start Game Environment
playButton.addEventListener("click", () => {
    const inputTurns = parseInt(gameNumberInput.value);
    
    if (isNaN(inputTurns) || inputTurns <= 0) {
        return;
    }

    userScore = 0;
    computerScore = 0;
    turnsPlayed = 0;
    totalTurns = inputTurns;
    gameActive = true;

    // Reset layout UI elements to original states
    userPointsDiv.textContent = "0";
    computerPointsDiv.textContent = "0";
    roundsLeftDiv.textContent = totalTurns.toString();
    computerChooseDiv.textContent = "-";
    roundResultDiv.textContent = "........";
    gameResultDiv.textContent = "";
});

// Setup click selectors
rockBtn.addEventListener("click", () => playTurn("ROCK"));
paperBtn.addEventListener("click", () => playTurn("PAPER"));
scissorsBtn.addEventListener("click", () => playTurn("SCISSORS"));

function playTurn(userSelection) {
    // If turns are spent or game hasn't started, break early
    if (!gameActive || turnsPlayed >= totalTurns) {
        return;
    }

    const choicesArr = ["ROCK", "PAPER", "SCISSORS"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choicesArr[randomIndex];
    
    // Crucial requirement: Update the window property to match array indexes [0, 1, 2]
    window.computerChoose = randomIndex;
    computerChooseDiv.textContent = computerChoice;

    turnsPlayed++;
    const roundsLeft = totalTurns - turnsPlayed;
    roundsLeftDiv.textContent = roundsLeft.toString();

    let roundOutcome = "";

    if (userSelection === computerChoice) {
        roundOutcome = "TIE";
    } else if (
        (userSelection === "ROCK" && computerChoice === "SCISSORS") ||
        (userSelection === "PAPER" && computerChoice === "ROCK") ||
        (userSelection === "SCISSORS" && computerChoice === "PAPER")
    ) {
        userScore++;
        roundOutcome = "WON";
    } else {
        computerScore++;
        roundOutcome = "LOSE";
    }

    // Refresh round scores and statuses instantly
    userPointsDiv.textContent = userScore.toString();
    computerPointsDiv.textContent = computerScore.toString();
    roundResultDiv.textContent = roundOutcome;

    // Check if game run sequence has run out of turns
    if (roundsLeft === 0) {
        gameActive = false;
        if (userScore > computerScore) {
            gameResultDiv.textContent = "WON";
        } else if (computerScore > userScore) {
            gameResultDiv.textContent = "LOSE";
        } else {
            gameResultDiv.textContent = "TIE";
        }
    }
}
