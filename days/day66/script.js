const quoteEl = document.getElementById('quote');
const inputEl = document.getElementById('input');
const timeEl = document.getElementById('time');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');

const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a powerful and versatile language.",
    "Practice every day to improve your coding skills.",
    "Typing speed matters when you build real apps.",
    "Code is like humor. When you have to explain it, it’s bad."
];

let currentQuote = '';
let startTime, interval;

function setQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.innerHTML = '';
    currentQuote.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        quoteEl.appendChild(span);
    });
}

function startTest() {
    clearInterval(interval);
    inputEl.value = '';
    setQuote();
    startTime = null;
    timeEl.textContent = '0';
    wpmEl.textContent = '0';
    accuracyEl.textContent = '100%';
}

inputEl.addEventListener('input', () => {
    if (!startTime) {
        startTime = Date.now();
        interval = setInterval(updateTime, 1000);
    }

    const typedChars = inputEl.value.split('');
    const spanArray = quoteEl.querySelectorAll('span');
    let correct = 0;

    spanArray.forEach((span, index) => {
        const char = typedChars[index];
        if (!char) {
            span.classList.remove('correct', 'incorrect');
        } else if (char === span.textContent) {
            span.classList.add('correct');
            span.classList.remove('incorrect');
            correct++;
        } else {
            span.classList.add('incorrect');
            span.classList.remove('correct');
        }
    });

    const timeElapsedMin = (Date.now() - startTime) / 1000 / 60;
    const wordCount = typedChars.join('').trim().split(/\s+/).filter(Boolean).length;
    const wpm = Math.round(wordCount / timeElapsedMin);
    wpmEl.textContent = isFinite(wpm) ? wpm : 0;

    const accuracy = Math.round((correct / typedChars.length) * 100) || 0;
    accuracyEl.textContent = `${accuracy}%`;
});

function updateTime() {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    timeEl.textContent = seconds;
}

startTest();
