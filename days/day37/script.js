const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = "";

    const filtered = emojiList.filter(e =>
        e.name.includes(searchTerm)
    );

    filtered.forEach(e => {
        const span = document.createElement("span");
        span.className = "emoji";
        span.textContent = e.emoji;
        span.title = e.name;

        span.onclick = () => {
            navigator.clipboard.writeText(e.emoji);
            alert(`Copied ${e.emoji} to clipboard!`);
        };

        resultsDiv.appendChild(span);
    });

    if (filtered.length === 0 && searchTerm) {
        resultsDiv.innerHTML = "<p>No emojis found 😢</p>";
    }
});
