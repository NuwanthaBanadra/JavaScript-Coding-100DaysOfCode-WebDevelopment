const previewText = document.getElementById("previewText");
const xOffset = document.getElementById("xOffset");
const yOffset = document.getElementById("yOffset");
const blur = document.getElementById("blur");
const color = document.getElementById("color");

function updateShadow() {
    const x = xOffset.value;
    const y = yOffset.value;
    const b = blur.value;
    const c = color.value;

    previewText.style.textShadow = `${x}px ${y}px ${b}px ${c}`;
}

[xOffset, yOffset, blur, color].forEach(input => {
    input.addEventListener("input", updateShadow);
});

updateShadow();
