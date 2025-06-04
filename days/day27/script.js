const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordField = document.getElementById("password");

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

function generatePassword() {
    const length = lengthInput.value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/";

    let characters = "";
    if (useUppercase) characters += uppercase;
    if (useLowercase) characters += lowercase;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    if (characters === "") {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard! 📋");
}
