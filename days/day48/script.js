let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("resultMessage");
    const attemptsText = document.getElementById("attempts");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "⛔ Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsText.textContent = `Attempts: ${attempts}`;

    if (guess === secretNumber) {
        result.textContent = `🎉 Correct! The number was ${secretNumber}`;
        result.style.color = "green";
    } else if (guess < secretNumber) {
        result.textContent = "📉 Too low. Try again!";
        result.style.color = "#333";
    } else {
        result.textContent = "📈 Too high. Try again!";
        result.style.color = "#333";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("resultMessage").textContent = "";
    document.getElementById("attempts").textContent = "Attempts: 0";
}
