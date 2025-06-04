const textColorInput = document.getElementById("textColor");
const bgColorInput = document.getElementById("bgColor");
const previewText = document.getElementById("previewText");
const contrastRatioSpan = document.getElementById("contrastRatio");
const resultText = document.getElementById("accessibilityResult");

function hexToRgb(hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return [
        (bigint >> 16) & 255,
        (bigint >> 8) & 255,
        bigint & 255
    ];
}

function luminance(r, g, b) {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function calculateContrast(rgb1, rgb2) {
    const lum1 = luminance(...rgb1);
    const lum2 = luminance(...rgb2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
}

function updatePreview() {
    const textColor = textColorInput.value;
    const bgColor = bgColorInput.value;

    previewText.style.color = textColor;
    previewText.style.backgroundColor = bgColor;

    const rgbText = hexToRgb(textColor);
    const rgbBg = hexToRgb(bgColor);
    const ratio = calculateContrast(rgbText, rgbBg);
    contrastRatioSpan.textContent = ratio;

    const ratioVal = parseFloat(ratio);
    if (ratioVal >= 7) {
        resultText.textContent = "✅ AAA Level - Excellent Contrast";
        resultText.style.color = "green";
    } else if (ratioVal >= 4.5) {
        resultText.textContent = "✅ AA Level - Good Contrast";
        resultText.style.color = "orange";
    } else {
        resultText.textContent = "❌ Fails Accessibility Test";
        resultText.style.color = "red";
    }
}

textColorInput.addEventListener("input", updatePreview);
bgColorInput.addEventListener("input", updatePreview);

updatePreview();
