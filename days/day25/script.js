const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex].text;
    document.getElementById("author").textContent = "- " + quotes[randomIndex].author;
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
