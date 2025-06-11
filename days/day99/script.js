let num1, num2, operator, correctAnswer;
let score = 0;
let timeLeft = 5;
let timer;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function generateQuestion() {
    const ops = ["+", "-", "*"];
    operator = ops[Math.floor(Math.random() * ops.length)];
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);

    correctAnswer = eval(`${num1} ${operator} ${num2}`);
    questionEl.textContent = `What is ${num1} ${operator} ${num2}?`;
    answerEl.value = "";
    answerEl.focus();

    timeLeft = 5;
    timerEl.textContent = timeLeft;
    if (timer) clearInterval(timer);
    timer = setInterval(countdown, 1000);
}

function countdown() {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        endGame("⏰ Time's up!");
    }
}

function submitAnswer() {
    const userAnswer = parseInt(answerEl.value);
    if (userAnswer === correctAnswer) {
        score++;
        scoreEl.textContent = score;
        generateQuestion();
    } else {
        clearInterval(timer);
        endGame("❌ Wrong answer!");
    }
}

function endGame(message) {
    resultEl.textContent = `${message} Final Score: ${score}`;
    questionEl.textContent = "Game Over!";
    answerEl.disabled = true;
    document.querySelector("button").disabled = true;
}

window.onload = generateQuestion;
