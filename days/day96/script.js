let num1, num2, operator, correctAnswer;
let score = 0;

function generateQuestion() {
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

    document.getElementById("question").textContent = `${num1} ${operator} ${num2} = ?`;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    const userAnswer = Number(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "✅ Correct!";
        score++;
        document.getElementById("score").textContent = score;
        setTimeout(generateQuestion, 1000);
    } else {
        document.getElementById("result").textContent = "❌ Try again!";
    }
}

window.onload = generateQuestion;
