let score = 0;
let targetLetter = '';
const gameArea = document.getElementById("gameArea");

function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}

function spawnBubble() {
    const bubble = document.createElement("div");
    const letter = getRandomLetter();
    bubble.className = "bubble";
    bubble.textContent = letter;

    // Random horizontal position
    bubble.style.left = `${Math.random() * 250}px`;

    // Click logic
    bubble.addEventListener("click", () => {
        if (letter === targetLetter) {
            score++;
            document.getElementById("score").textContent = score;
            document.getElementById("message").textContent = "✅ Nice!";
        } else {
            document.getElementById("message").textContent = "❌ Wrong!";
        }
        bubble.remove();
        pickNewLetter();
    });

    gameArea.appendChild(bubble);

    // Auto-remove after animation
    setTimeout(() => {
        if (gameArea.contains(bubble)) bubble.remove();
    }, 4000);
}

function pickNewLetter() {
    targetLetter = getRandomLetter();
    document.getElementById("targetLetter").textContent = targetLetter;
}

function startGame() {
    pickNewLetter();
    setInterval(() => {
        spawnBubble();
    }, 1200 - Math.min(score * 20, 1000)); // Speeds up with score
}

window.onload = startGame;