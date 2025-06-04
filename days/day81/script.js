const emojis = ["🍒", "🍋", "🍊", "🍉", "🍇", "⭐", "💎"];
const slots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3")];
const message = document.getElementById("message");

function spin() {
    const results = [];

    for (let slot of slots) {
        const randEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        slot.textContent = randEmoji;
        results.push(randEmoji);
    }

    if (results[0] === results[1] && results[1] === results[2]) {
        message.textContent = "🎉 JACKPOT! You Win!";
        message.style.color = "gold";
    } else {
        message.textContent = "Try Again!";
        message.style.color = "#ccc";
    }
}
