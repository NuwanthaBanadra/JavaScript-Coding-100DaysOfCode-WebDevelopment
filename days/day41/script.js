const emojiDisplay = document.getElementById("emoji");

const emojis = [
    "😄", "😂", "🥺", "😍", "🤔", "😎", "😢", "🙃", "🤯", "🧐", "😡", "🥳", "🤩",
    "🤑", "😴", "🤤", "👻", "👽", "🤖", "🎃", "😇", "😈", "💀", "🙈", "🐶",
    "🐱", "🐸", "🐵", "🦄", "🐧", "🐼", "🐷", "🦊", "🦁", "🐨", "🐙", "🐥"
];

function generateEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojiDisplay.innerText = emojis[randomIndex];
    emojiDisplay.style.transform = "scale(1.2)";
    setTimeout(() => emojiDisplay.style.transform = "scale(1)", 150);
}
