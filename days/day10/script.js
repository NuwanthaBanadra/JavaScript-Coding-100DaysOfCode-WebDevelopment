const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Act as if what you do makes a difference. It does. - William James",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Happiness is not by chance, but by choice. - Jim Rohn",
    "You are stronger than you think. - Unknown",
    "The future depends on what you do today. - Mahatma Gandhi"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    
    // Fade-out effect
    quoteElement.style.opacity = 0;
    
    setTimeout(() => {
        quoteElement.innerText = quotes[randomIndex];
        quoteElement.style.opacity = 1; // Fade-in effect
    }, 500);
}

// Generate an initial quote on page load
generateQuote();
