function runSpeedTest() {
    const speedDisplay = document.getElementById("speed");
    speedDisplay.textContent = "Testing...";

    setTimeout(() => {
        let speed = (Math.random() * 90 + 10).toFixed(2); // Between 10 and 100 Mbps
        animateSpeed(speed);
    }, 1000);
}

function animateSpeed(targetSpeed) {
    const speedDisplay = document.getElementById("speed");
    let current = 0;
    const target = parseFloat(targetSpeed);
    const interval = setInterval(() => {
        current += 1;
        if (current >= target) {
            speedDisplay.textContent = `${target} Mbps`;
            clearInterval(interval);
        } else {
            speedDisplay.textContent = `${current} Mbps`;
        }
    }, 20);
}
