async function getQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    
    document.getElementById("quote").innerText = `"${data.content}"`;
    document.getElementById("author").innerText = `- ${data.author}`;
    
    document.getElementById("tweet").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.content + " - " + data.author)}`;
}

function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText);
    alert("Quote copied to clipboard!");
}

// Load a quote on page load
getQuote();
