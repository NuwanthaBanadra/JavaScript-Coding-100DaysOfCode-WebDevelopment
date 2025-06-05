const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Start where you are. Use what you have. Do what you can.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Push yourself, because no one else is going to do it for you.",
    "Don’t wait for opportunity. Create it.",
    "Great things never come from comfort zones."
];

function typeWriterEffect(text, i = 0) {
    const quoteEl = document.getElementById("quote");
    if (i < text.length) {
        quoteEl.textContent += text.charAt(i);
        setTimeout(() => typeWriterEffect(text, i + 1), 40);
    }
}

function showQuote() {
    const quoteEl = document.getElementById("quote");
    quoteEl.textContent = '';
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    typeWriterEffect(randomQuote);
}

// Show first quote on load
window.onload = showQuote;