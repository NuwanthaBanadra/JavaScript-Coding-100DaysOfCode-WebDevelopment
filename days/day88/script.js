const emojis = ['🐶', '🐱', '🐻', '🦊', '🐼', '🐯', '🦁', '🐮'];
const board = document.getElementById('gameBoard');
const movesText = document.getElementById('moves');
let cards = [];
let flippedCards = [];
let moves = 0;

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}

function initGame() {
    const doubled = [...emojis, ...emojis];
    const shuffled = shuffle(doubled);
    board.innerHTML = '';
    moves = 0;
    movesText.textContent = "Moves: 0";
    cards = [];

    shuffled.forEach((emoji, i) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;
        card.dataset.index = i;
        card.textContent = '';
        card.addEventListener('click', handleCardClick);
        board.appendChild(card);
        cards.push(card);
    });
}

function handleCardClick(e) {
    const card = e.target;
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.emoji;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moves++;
        movesText.textContent = `Moves: ${moves}`;
        const [first, second] = flippedCards;

        if (first.dataset.emoji === second.dataset.emoji) {
            flippedCards = [];
        } else {
            setTimeout(() => {
                first.classList.remove('flipped');
                second.classList.remove('flipped');
                first.textContent = '';
                second.textContent = '';
                flippedCards = [];
            }, 1000);
        }
    }
}

initGame();
