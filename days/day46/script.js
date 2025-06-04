const sentences = [
    "Practice makes perfect.",
    "JavaScript is fun to learn.",
    "Typing fast is a useful skill.",
    "Always code as if the person who ends up maintaining your code is a violent psychopath.",
    "Simplicity is the soul of efficiency."
];

let timer = 30;
let interval;
let startTime;
let currentSentence = "";
const input = document.getElementById("input");
const sentence = document.getElementById("sentence");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");

function startTest() {
    clearInterval(interval);
    timer = 30;
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentence.textContent = currentSentence;
    input.value = "";
    input.disabled = false;
    input.focus();
    wpmDisplay.textContent = "WPM: 0";
    timerDisplay.textContent = "⏳ Time: 30s";

    startTime = new Date();
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timer--;
    timerDisplay.textContent = `⏳ Time: ${timer}s`;
    if (timer <= 0) {
        clearInterval(interval);
        finishTest();
    }
}

function finishTest() {
    input.disabled = true;
    const wordsTyped = input.value.trim().split(" ").length;
    const totalTime = 30 - timer;
    const wpm = Math.round((wordsTyped / totalTime) * 60) || 0;
    wpmDisplay.textContent = `WPM: ${wpm}`;
}

