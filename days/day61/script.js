const quotes = [
    "The quick brown fox jumps over the lazy dog",
    "Practice makes perfect",
    "Typing is a valuable skill",
    "JavaScript is fun and powerful"
];

let startTime, quoteText;
const quote = document.getElementById('quote');
const input = document.getElementById('input');
const wpmDisplay = document.getElementById('wpm');
const errorsDisplay = document.getElementById('errors');

function startNewTest() {
    quoteText = quotes[Math.floor(Math.random() * quotes.length)];
    quote.textContent = quoteText;
    input.value = '';
    wpmDisplay.textContent = '0';
    errorsDisplay.textContent = '0';
    startTime = null;
}

input.addEventListener('input', () => {
    if (!startTime) {
        startTime = new Date();
    }

    const typed = input.value;
    const elapsed = (new Date() - startTime) / 1000 / 60; // in minutes

    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === quoteText[i]) correct++;
    }

    const words = typed.trim().split(/\s+/).length;
    const wpm = Math.round((correct / 5) / elapsed);
    const errors = Math.max(0, typed.length - correct);

    wpmDisplay.textContent = isNaN(wpm) ? 0 : wpm;
    errorsDisplay.textContent = errors;
});

window.onload = startNewTest;
