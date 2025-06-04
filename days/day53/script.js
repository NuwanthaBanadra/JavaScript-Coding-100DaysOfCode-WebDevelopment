const emojis = document.querySelectorAll(".emoji");
const feedback = document.getElementById("feedbackText");

emojis.forEach((emoji) => {
    emoji.addEventListener("click", () => {
        emojis.forEach(e => e.classList.remove("selected"));
        emoji.classList.add("selected");
        feedback.textContent = emoji.getAttribute("data-feedback");
    });
});
