function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const secondDeg = seconds * 6;

    document.querySelector(".hour-hand").style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    document.querySelector(".minute-hand").style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    document.querySelector(".second-hand").style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
