const original = ['🐶', '🐱', '🐵', '🦊', '🐸', '🐻', '🐼', '🐯', '🐮'];
let current = [...original];
let firstSelected = null;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    current.forEach((emoji, index) => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = emoji;
        cell.dataset.index = index;
        cell.addEventListener("click", handleSelect);
        grid.appendChild(cell);
    });
}

function handleSelect(e) {
    const index = e.target.dataset.index;

    if (firstSelected === null) {
        firstSelected = index;
        e.target.style.backgroundColor = "#fbc531";
    } else {
        swapEmojis(firstSelected, index);
        firstSelected = null;
        createGrid();
        checkWin();
    }
}

function swapEmojis(i, j) {
    const temp = current[i];
    current[i] = current[j];
    current[j] = temp;
}

function checkWin() {
    const status = document.getElementById("status");
    if (current.join("") === original.join("")) {
        status.textContent = "🎉 You solved the puzzle!";
    } else {
        status.textContent = "";
    }
}

function resetGame() {
    current = shuffle([...original]);
    firstSelected = null;
    document.getElementById("status").textContent = "";
    createGrid();
}

window.onload = resetGame;
