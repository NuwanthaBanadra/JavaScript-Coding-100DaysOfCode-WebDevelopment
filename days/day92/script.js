function generateTable() {
    const num = document.getElementById('numberInput').value;
    const output = document.getElementById('tableOutput');
    output.innerHTML = '';

    if (num === '' || isNaN(num)) {
        output.innerHTML = '<p>Please enter a valid number.</p>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const result = `${num} × ${i} = ${num * i}`;
        const p = document.createElement('p');
        p.textContent = result;
        output.appendChild(p);
    }
}
