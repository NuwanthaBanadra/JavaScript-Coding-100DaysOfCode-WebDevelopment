function generatePassword() {
    const length = document.getElementById("length").value;
    const useUpper = document.getElementById("uppercase").checked;
    const useLower = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";
    if (useUpper) characters += upper;
    if (useLower) characters += lower;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    if (characters === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        password += randomChar;
    }

    document.getElementById("result").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("result");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

