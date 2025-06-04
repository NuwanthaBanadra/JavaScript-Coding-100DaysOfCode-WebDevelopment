const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const strength = getStrength(password);

    switch (strength) {
        case 0:
            strengthBar.style.background = "#444";
            strengthText.textContent = "";
            break;
        case 1:
            strengthBar.style.background = "red";
            strengthText.textContent = "Weak 🔴";
            break;
        case 2:
            strengthBar.style.background = "orange";
            strengthText.textContent = "Medium 🟠";
            break;
        case 3:
            strengthBar.style.background = "limegreen";
            strengthText.textContent = "Strong 🟢";
            break;
    }
});

function getStrength(password) {
    if (password.length === 0) return 0;

    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password) && /\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
}
