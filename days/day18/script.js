function generatePassword() {
    const length = document.getElementById("length").value;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied to clipboard!");
}

generatePassword();
