const words = ['javascript', 'developer', 'function', 'variable', 'object', 'browser', 'frontend', 'backend'];
let currentWord = '';

function scramble(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

function newWord() {
    const index = Math.floor(Math.random() * words.length);
    currentWord = words[index];
    const scrambled = scramble(currentWord);
    document.getElementById('scrambled-word').textContent = scrambled;
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
}

function checkAnswer() {
    const guess = document.getElementById('guess').value.trim().toLowerCase();
    const result = document.getElementById('result');
    if (guess === currentWord) {
        result.textContent = '✅ Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = '❌ Try Again!';
        result.style.color = 'red';
    }
}

// Load first word when page loads
window.onload = newWord;
