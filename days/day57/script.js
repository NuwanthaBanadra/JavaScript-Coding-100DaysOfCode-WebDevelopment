function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('userChoice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computerChoice').textContent = `Computer chose: ${computerChoice}`;

    const result = getWinner(userChoice, computerChoice);
    document.getElementById('winner').textContent = `Result: ${result}`;
}

function getWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a Tie!';
    }
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You Win!';
    }
    return 'Computer Wins!';
}
