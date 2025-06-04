// Function to update the clock every second
function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
