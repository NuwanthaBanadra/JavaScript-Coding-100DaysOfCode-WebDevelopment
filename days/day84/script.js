let num1, num2, operator, correctAnswer;
let score = 0;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    const ops = ["+", "-", "×"];
    operator = ops[Math.floor(Math.random() * ops.length)];

    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "×":
            correctAnswer = num1 * num2;
            break;
    }

    document.getElementById("problem").textContent = `${num1} ${operator} ${num2} = ?`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    const userAnswer = Number(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("feedback").textContent = "✅ Correct!";
    } else {
        score--;
        document.getElementById("feedback").textContent = `❌ Wrong! Answer was ${correctAnswer}`;
    }
    document.getElementById("score").textContent = score;
    generateProblem();
}

// Initialize game
generateProblem();
