const emojiGrid = document.getElementById("emojiGrid");
const search = document.getElementById("search");
const copiedMsg = document.getElementById("copied");

const emojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊",
    "😍", "😘", "😗", "😋", "😜", "🤪", "😎", "🥳", "😏", "😒", "😞", "😔",
    "😢", "😭", "😤", "😠", "😡", "🤬", "😱", "😨", "😰", "😓", "🤗", "🤔",
    "👍", "👎", "👏", "🙌", "🙏", "💪", "👀", "👋", "🧠", "🫶", "💖", "🔥", "🎉"
];

function renderEmojis(filter = "") {
    emojiGrid.innerHTML = "";
    emojis.filter(e => e.includes(filter)).forEach(emoji => {
        const span = document.createElement("span");
        span.textContent = emoji;
        span.className = "emoji";
        span.addEventListener("click", () => {
            navigator.clipboard.writeText(emoji);
            copiedMsg.style.display = "block";
            setTimeout(() => copiedMsg.style.display = "none", 1000);
        });
        emojiGrid.appendChild(span);
    });
}

search.addEventListener("input", () => {
    renderEmojis(search.value.trim());
});

renderEmojis();
