let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;

function updateDisplay() {
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (!isPaused) {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        timer = null;
                        document.getElementById("status").textContent = "Break Time! ☕";
                        new Audio("alarm.mp3").play(); // Add a notification sound
                        setTimeout(startBreak, 2000);
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }
        }, 1000);
    }
}

function pauseTimer() {
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    minutes = 25;
    seconds = 0;
    isPaused = false;
    document.getElementById("status").textContent = "Focus Mode 🧠";
    updateDisplay();
}

function startBreak() {
    minutes = 5;
    seconds = 0;
    document.getElementById("status").textContent = "Break Time ☕";
    startTimer();
}

updateDisplay();
