// Get elements
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

// Function to update counter display
function updateCounter() {
    counter.textContent = count;
}

// Increase button event
increaseBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

// Decrease button event
decreaseBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

// Reset button event
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

// Initialize counter display
updateCounter();
