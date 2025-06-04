let countdown;
let timeLeft;

function startCountdown() {
    let minutes = document.getElementById("minutes").value;
    if (minutes === "" || minutes <= 0) {
        alert("Please enter a valid time!");
        return;
    }
    
    timeLeft = minutes * 60;
    clearInterval(countdown); // Clear existing countdown
    countdown = setInterval(updateTimer, 1000);
    updateTimer(); // Start immediately
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("countdown").innerText = `${minutes}:${seconds}`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(countdown);
        document.getElementById("countdown").innerText = "Time's Up!";
    }
}

function resetCountdown() {
    clearInterval(countdown);
    document.getElementById("countdown").innerText = "00:00";
    document.getElementById("minutes").value = "";
}
