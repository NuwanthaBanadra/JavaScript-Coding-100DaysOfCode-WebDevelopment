function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = ""; // Clear previous colors

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.background = color;
        colorBox.textContent = color;
        colorBox.onclick = () => copyToClipboard(color);
        palette.appendChild(colorBox);
    }
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

function copyToClipboard(color) {
    navigator.clipboard.writeText(color);
    alert(`Copied: ${color}`);
}

generatePalette(); // Generate palette on page load
