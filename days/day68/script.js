function generatePassword() {
    const length = +document.getElementById("length").value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let chars = "";
    if (hasUpper) chars += upper;
    if (hasLower) chars += lower;
    if (hasNumber) chars += number;
    if (hasSymbol) chars += symbol;

    if (chars === "") return alert("Select at least one option!");

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("password").value = password;
    setStrength(length, hasUpper, hasLower, hasNumber, hasSymbol);
}

function setStrength(length, upper, lower, num, sym) {
    let score = 0;
    if (upper) score++;
    if (lower) score++;
    if (num) score++;
    if (sym) score++;
    if (length >= 12) score++;

    const strengthText = document.getElementById("strengthText");
    if (score <= 2) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "red";
    } else if (score === 3 || score === 4) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "lime";
    }
}

function copyPassword() {
    const input = document.getElementById("password");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied!");
}
