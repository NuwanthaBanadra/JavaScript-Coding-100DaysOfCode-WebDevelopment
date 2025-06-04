function generateColor() {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return hex.toUpperCase();
}

function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = generateColor();
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;

        const code = document.createElement("div");
        code.className = "color-code";
        code.innerText = color;

        box.appendChild(code);
        box.onclick = () => {
            navigator.clipboard.writeText(color);
            alert(`Copied ${color} to clipboard!`);
        };

        palette.appendChild(box);
    }
}

window.onload = generatePalette;
