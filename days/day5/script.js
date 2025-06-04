// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

// Get elements
const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuote");

// Generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Add event listener
newQuoteBtn.addEventListener("click", generateQuote);
