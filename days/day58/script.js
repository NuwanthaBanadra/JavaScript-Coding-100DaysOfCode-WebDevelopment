let score = 0;
let currentHole = null;
let timer = null;

function randomHole() {
    const holes = document.querySelectorAll('.hole');
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    if (currentHole) {
        currentHole.innerHTML = '';
    }

    const mole = document.createElement('div');
    mole.classList.add('mole');
    mole.onclick = () => {
        score++;
        document.getElementById('score').textContent = score;
        mole.remove();
    };

    currentHole = randomHole();
    currentHole.appendChild(mole);
}

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;

    clearInterval(timer);
    timer = setInterval(showMole, 800);

    // Stop game after 30 seconds
    setTimeout(() => {
        clearInterval(timer);
        if (currentHole) currentHole.innerHTML = '';
        alert("Game over! Your score: " + score);
    }, 30000);
}
