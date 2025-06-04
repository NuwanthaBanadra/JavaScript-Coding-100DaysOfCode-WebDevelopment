let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    let amPm = "";
    if (!is24HourFormat) {
        amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;
    document.getElementById("clock").innerText = formattedTime;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

setInterval(updateClock, 1000);
updateClock();
