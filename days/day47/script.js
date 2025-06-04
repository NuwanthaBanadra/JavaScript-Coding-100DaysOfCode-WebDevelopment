const emojiMap = {
    happy: ["😄", "😁", "😆", "😊", "😃"],
    sad: ["😢", "😞", "😔", "😭", "🥺"],
    angry: ["😠", "😡", "🤬", "😤", "😾"],
    excited: ["🤩", "🥳", "😻", "😮‍💨", "💃"],
    chill: ["😎", "🧘", "🌴", "🍹", "🛋️"]
};

function showEmojis(mood) {
    const emojiBox = document.getElementById("emojiBox");
    emojiBox.innerHTML = "";
    emojiMap[mood].forEach(emoji => {
        const span = document.createElement("span");
        span.className = "emoji";
        span.textContent = emoji;
        span.title = "Click to copy";
        span.onclick = () => {
            navigator.clipboard.writeText(emoji);
            alert(`Copied ${emoji} to clipboard!`);
        };
        emojiBox.appendChild(span);
    });
}
