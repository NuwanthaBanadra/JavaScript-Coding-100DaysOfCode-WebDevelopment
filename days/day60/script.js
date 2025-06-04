const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');
let isDrawing = false;

for (let i = 0; i < 400; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('mousedown', () => {
        isDrawing = true;
        cell.style.backgroundColor = colorPicker.value;
    });

    cell.addEventListener('mouseover', () => {
        if (isDrawing) {
            cell.style.backgroundColor = colorPicker.value;
        }
    });

    cell.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    grid.appendChild(cell);
}

document.body.addEventListener('mouseup', () => {
    isDrawing = false;
});

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}
