function mixColors() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;

    const mixed = blendHexColors(color1, color2);
    document.getElementById("mixedColor").style.backgroundColor = mixed;
    document.getElementById("hexCode").textContent = `HEX: ${mixed}`;
}

function blendHexColors(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);

    const r = Math.floor((rgb1.r + rgb2.r) / 2);
    const g = Math.floor((rgb1.g + rgb2.g) / 2);
    const b = Math.floor((rgb1.b + rgb2.b) / 2);

    return rgbToHex(r, g, b);
}

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    return {
        r: parseInt(hex.substring(0, 2), 16),
        g: parseInt(hex.substring(2, 4), 16),
        b: parseInt(hex.substring(4, 6), 16)
    };
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}
