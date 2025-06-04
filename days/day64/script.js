const passwordInput = document.getElementById('password');
const meter = document.getElementById('strength-meter');
const strengthText = document.getElementById('strength-text');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    if (val.length >= 6) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[0-9]/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;

    meter.className = 'strength-meter';
    strengthText.textContent = 'Strength: ';

    if (strength <= 1) {
        meter.classList.add('weak');
        strengthText.textContent += 'Weak';
    } else if (strength === 2 || strength === 3) {
        meter.classList.add('medium');
        strengthText.textContent += 'Medium';
    } else {
        meter.classList.add('strong');
        strengthText.textContent += 'Strong';
    }
});
