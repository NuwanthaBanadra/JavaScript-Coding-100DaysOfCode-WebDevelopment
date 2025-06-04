const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");

    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    die1.textContent = diceFaces[roll1];
    die2.textContent = diceFaces[roll2];

    die1.style.transform = "rotate(360deg)";
    die2.style.transform = "rotate(360deg)";
    setTimeout(() => {
        die1.style.transform = "rotate(0deg)";
        die2.style.transform = "rotate(0deg)";
    }, 300);
}
