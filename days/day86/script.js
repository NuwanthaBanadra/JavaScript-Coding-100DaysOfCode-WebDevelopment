const board = document.getElementById('board');
const colorPicker = document.getElementById('colorPicker');

for (let i = 0; i < 400; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = colorPicker.value;
    });
    board.appendChild(cell);
}

function clearBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}
