const preview = document.getElementById("preview");
const cssCode = document.getElementById("css-code");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, "0")}`;
}

function generateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    preview.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
}

function copyToClipboard() {
    navigator.clipboard.writeText(cssCode.textContent)
        .then(() => alert("CSS gradient copied!"))
        .catch(() => alert("Copy failed"));
}

generateBtn.addEventListener("click", generateGradient);
copyBtn.addEventListener("click", copyToClipboard);

// Initial load
generateGradient();
