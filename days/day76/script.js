const icons = ["🐶", "🐱", "🐰", "🦊", "🐶", "🐱", "🐰", "🦊"];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {
    const grid = document.getElementById("grid");
    const shuffled = shuffle([...icons]);
    grid.innerHTML = "";
    moves = 0;
    document.getElementById("moves").textContent = moves;

    shuffled.forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = icon;
        card.textContent = "";
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this.classList.contains("matched") || this === firstCard) return;

    this.textContent = this.dataset.icon;
    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    document.getElementById("moves").textContent = moves;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    if (isMatch) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        resetBoard();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.textContent = "";
            secondCard.textContent = "";
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 800);
    }
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

startGame();
