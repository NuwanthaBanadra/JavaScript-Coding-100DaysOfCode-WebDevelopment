const gameBoard = document.getElementById("gameBoard");
const status = document.getElementById("status");
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
let colorPairs = [...colors, ...colors];
let first, second, lock = false, matched = 0;

// Shuffle function
colorPairs.sort(() => 0.5 - Math.random());

// Create board
colorPairs.forEach((color, i) => {
    const div = document.createElement("div");
    div.classList.add("square");
    div.dataset.color = color;
    div.dataset.index = i;
    div.addEventListener("click", handleClick);
    gameBoard.appendChild(div);
});

function handleClick(e) {
    const square = e.target;
    if (lock || square.classList.contains("revealed")) return;

    reveal(square);

    if (!first) {
        first = square;
    } else {
        second = square;
        lock = true;

        if (first.dataset.color === second.dataset.color) {
            first.classList.add("revealed");
            second.classList.add("revealed");
            matched += 2;
            if (matched === colorPairs.length) {
                status.textContent = "🎉 You Won!";
            }
            resetTurn();
        } else {
            setTimeout(() => {
                hide(first);
                hide(second);
                resetTurn();
            }, 800);
        }
    }
}

function reveal(square) {
    square.style.background = square.dataset.color;
}

function hide(square) {
    square.style.background = "#ccc";
}

function resetTurn() {
    [first, second] = [null, null];
    lock = false;
}
