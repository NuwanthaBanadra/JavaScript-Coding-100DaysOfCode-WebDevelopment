let time = 1500; // 25 minutes
let isRunning = false;
let interval;
let onBreak = false;

const timerDisplay = document.getElementById("timer");
const modeDisplay = document.getElementById("mode");

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(interval);
            isRunning = false;
            onBreak = !onBreak;
            time = onBreak ? 300 : 1500;
            modeDisplay.textContent = onBreak ? "Break Time!" : "Work Session";
            startTimer();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    onBreak = false;
    time = 1500;
    updateDisplay();
    modeDisplay.textContent = "Work Session";
}

updateDisplay();
