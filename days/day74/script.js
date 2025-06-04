const emojis = ["🍕", "🎈", "🐶", "🚀", "🍩", "🎧", "🦄", "🎲"];
const gameGrid = document.getElementById("gameGrid");
const movesDisplay = document.getElementById("moves");
let moves = 0;
let firstCard = null;
let lockBoard = false;

// Duplicate and shuffle
let emojiPairs = [...emojis, ...emojis].sort(() => 0.5 - Math.random());

emojiPairs.forEach((emoji) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.textContent = "❓";
    gameGrid.appendChild(card);
});

gameGrid.addEventListener("click", (e) => {
    const clicked = e.target;
    if (!clicked.classList.contains("card") || clicked.classList.contains("revealed") || lockBoard) return;

    clicked.textContent = clicked.dataset.emoji;
    clicked.classList.add("revealed");

    if (!firstCard) {
        firstCard = clicked;
    } else {
        lockBoard = true;
        moves++;
        movesDisplay.textContent = `Moves: ${moves}`;

        if (clicked.dataset.emoji === firstCard.dataset.emoji) {
            firstCard = null;
            lockBoard = false;
            if (document.querySelectorAll('.revealed').length === emojiPairs.length) {
                setTimeout(() => alert(`🎉 You won in ${moves} moves!`), 300);
            }
        } else {
            setTimeout(() => {
                clicked.textContent = "❓";
                firstCard.textContent = "❓";
                clicked.classList.remove("revealed");
                firstCard.classList.remove("revealed");
                firstCard = null;
                lockBoard = false;
            }, 1000);
        }
    }
});
