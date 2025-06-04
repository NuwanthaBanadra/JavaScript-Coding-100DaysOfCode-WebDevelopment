const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is an essential language for web development.",
    "Practice makes perfect, keep coding daily!",
    "Typing speed improves with regular practice."
];

let startTime, timerInterval;
const quoteText = document.getElementById("quote");
const inputText = document.getElementById("inputText");

function startTest() {
    clearInterval(timerInterval);
    inputText.value = "";
    quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("wpm").textContent = 0;
    document.getElementById("accuracy").textContent = 100;
    document.getElementById("timer").textContent = 0;
    startTime = null;
}

function checkTyping() {
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }

    const quote = quoteText.textContent;
    const input = inputText.value;
    let correctChars = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === quote[i]) correctChars++;
    }

    const accuracy = (correctChars / input.length) * 100 || 100;
    document.getElementById("accuracy").textContent = accuracy.toFixed(2);

    if (input === quote) {
        clearInterval(timerInterval);
        const timeTaken = (new Date() - startTime) / 1000;
        const words = quote.split(" ").length;
        const wpm = (words / timeTaken) * 60;
        document.getElementById("wpm").textContent = Math.round(wpm);
    }
}

function updateTimer() {
    const timeElapsed = Math.floor((new Date() - startTime) / 1000);
    document.getElementById("timer").textContent = timeElapsed;
}

startTest();
