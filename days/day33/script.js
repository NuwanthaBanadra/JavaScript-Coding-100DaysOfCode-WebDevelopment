const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Coding is fun and improves problem-solving skills.",
    "JavaScript is a powerful programming language.",
    "Practice makes perfect when it comes to typing.",
    "Speed and accuracy are key in typing tests."
];

let startTime, endTime, sentence;

function startTest() {
    sentence = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById("sentence").textContent = sentence;
    document.getElementById("inputText").value = "";
    document.getElementById("result").textContent = "";
    startTime = new Date().getTime();
}

function checkSpeed() {
    const typedText = document.getElementById("inputText").value.trim();
    if (!typedText) {
        alert("Please type the sentence!");
        return;
    }

    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // Time in seconds
    const wordsTyped = typedText.split(" ").length;
    const wpm = Math.round((wordsTyped / timeTaken) * 60);

    // Calculate accuracy
    let correctWords = 0;
    const originalWords = sentence.split(" ");
    const typedWords = typedText.split(" ");
    
    for (let i = 0; i < originalWords.length; i++) {
        if (originalWords[i] === typedWords[i]) {
            correctWords++;
        }
    }

    const accuracy = ((correctWords / originalWords.length) * 100).toFixed(2);

    document.getElementById("result").textContent = `Speed: ${wpm} WPM | Accuracy: ${accuracy}%`;
}
