const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");

const quotes = [
    "Practice makes perfect.",
    "Stay hungry stay foolish.",
    "JavaScript is fun to learn.",
    "Code is like humor.",
    "Learn one thing every day."
];

let timeLeft = 60;
let timer;
let isTyping = false;
let startTime;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    quoteEl.textContent = getRandomQuote();
    inputEl.value = "";
    inputEl.focus();
    wpmEl.textContent = "0";
}

function startTimer() {
    if (!isTyping) {
        isTyping = true;
        startTime = new Date();
        timer = setInterval(() => {
            timeLeft--;
            timeEl.textContent = timeLeft;

            if (timeLeft === 0) {
                clearInterval(timer);
                inputEl.disabled = true;
            } else {
                calculateWPM();
            }
        }, 1000);
    }
}

function calculateWPM() {
    const wordsTyped = inputEl.value.trim().split(/\s+/).length;
    const elapsedTime = (60 - timeLeft) / 60;
    const wpm = Math.round(wordsTyped / elapsedTime);
    if (!isNaN(wpm)) {
        wpmEl.textContent = wpm;
    }
}

function resetTest() {
    clearInterval(timer);
    timeLeft = 60;
    isTyping = false;
    inputEl.disabled = false;
    timeEl.textContent = "60";
    updateQuote();
}

inputEl.addEventListener("input", startTimer);

window.onload = updateQuote;
