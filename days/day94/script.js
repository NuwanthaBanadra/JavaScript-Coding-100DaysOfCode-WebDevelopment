function getRandomColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return `#${hex}`;
}

function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const box = document.createElement('div');
        box.className = 'color-box';
        box.style.backgroundColor = color;

        const code = document.createElement('div');
        code.className = 'color-code';
        code.textContent = color;

        box.appendChild(code);
        box.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert(`${color} copied to clipboard!`);
        });

        palette.appendChild(box);
    }
}

// Generate on page load
window.onload = generatePalette;
