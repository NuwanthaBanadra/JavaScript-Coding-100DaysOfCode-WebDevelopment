const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quoteText.innerText = `"${data.content}"`;
        authorText.innerText = `- ${data.author}`;
    } catch (error) {
        quoteText.innerText = "Oops! Unable to fetch a quote.";
        authorText.innerText = "";
    }
}

function copyQuote() {
    const textToCopy = `${quoteText.innerText} ${authorText.innerText}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Quote copied to clipboard!");
    });
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Get first quote on load
getQuote();
