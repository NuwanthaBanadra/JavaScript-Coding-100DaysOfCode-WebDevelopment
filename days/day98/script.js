let score = 0;
let timeLeft = 30;
const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");

function moveTarget() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

function startGame() {
    const moveInterval = setInterval(moveTarget, 700);

    const countdown = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdown);
            clearInterval(moveInterval);
            target.style.display = "none";
            message.textContent = `⏰ Time's up! Your score: ${score}`;
        }
    }, 1000);
}

target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget(); // move immediately on hit
});

window.onload = () => {
    moveTarget();
    startGame();
};
