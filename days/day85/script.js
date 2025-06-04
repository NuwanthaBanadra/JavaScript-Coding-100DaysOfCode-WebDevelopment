function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").textContent = getDieFace(dice1);
    document.getElementById("dice2").textContent = getDieFace(dice2);
    document.getElementById("result").textContent = `You rolled: ${dice1} + ${dice2} = ${dice1 + dice2}`;
}

function getDieFace(value) {
    const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return faces[value - 1];
}
