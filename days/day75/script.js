const gameArea = document.getElementById("gameArea");
const startBtn = document.getElementById("startBtn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

let score = 0;
let timeLeft = 30;
let timer;
let target;

startBtn.addEventListener("click", startGame);

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreEl.textContent = score;
    timerEl.textContent = timeLeft;

    if (target) target.remove();

    createTarget();
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            if (target) target.remove();
            alert(`Game over! Your score: ${score}`);
        }
    }, 1000);
}

function createTarget() {
    if (target) target.remove();

    target = document.createElement("div");
    target.classList.add("target");

    const maxX = gameArea.clientWidth - 40;
    const maxY = gameArea.clientHeight - 40;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    target.onclick = () => {
        score++;
        scoreEl.textContent = score;
        createTarget();
    };

    gameArea.appendChild(target);
}
