const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");

function updateColor() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);

    const hex = "#" + [r, g, b]
        .map(c => c.toString(16).padStart(2, "0"))
        .join("");

    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
}

function copyHex() {
    navigator.clipboard.writeText(hexCode.textContent);
    alert("Hex code copied: " + hexCode.textContent);
}

[red, green, blue].forEach(input => {
    input.addEventListener("input", updateColor);
});

updateColor();
