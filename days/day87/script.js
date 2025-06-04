const sentences = [
    "JavaScript makes the web interactive and powerful.",
    "Practice typing every day to improve your speed.",
    "Frontend development includes HTML, CSS, and JavaScript.",
    "Debugging is an essential skill for any programmer."
];

let startTime, endTime;
let selectedText = "";
const textDisplay = document.getElementById("textDisplay");
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

function startTyping() {
    if (!startTime) {
        startTime = new Date();
    }

    const input = inputText.value;
    if (input === selectedText) {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        const wordCount = selectedText.split(" ").length;
        const wpm = Math.round((wordCount / timeTaken) * 60);
        const accuracy = calculateAccuracy(selectedText, input);

        result.innerHTML = `
      ✅ Completed in <strong>${timeTaken.toFixed(2)}</strong> seconds<br>
      💬 Speed: <strong>${wpm}</strong> WPM<br>
      🎯 Accuracy: <strong>${accuracy}%</strong>
    `;
    }
}

function calculateAccuracy(original, typed) {
    const originalWords = original.split(" ");
    const typedWords = typed.split(" ");
    let correct = 0;

    for (let i = 0; i < originalWords.length; i++) {
        if (originalWords[i] === typedWords[i]) {
            correct++;
        }
    }

    return Math.round((correct / originalWords.length) * 100);
}

function resetTest() {
    selectedText = sentences[Math.floor(Math.random() * sentences.length)];
    textDisplay.textContent = selectedText;
    inputText.value = "";
    result.innerHTML = "";
    startTime = null;
    endTime = null;
}

resetTest(); // Load first sentence
