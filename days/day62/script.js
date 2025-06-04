const items = {
    apple: 'fruit',
    banana: 'fruit',
    lion: 'animal',
    tiger: 'animal',
};

document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', event => event.preventDefault());

    zone.addEventListener('drop', event => {
        event.preventDefault();
        const draggedId = event.dataTransfer.getData('text/plain');
        const correctCategory = items[draggedId];
        const targetCategory = zone.getAttribute('data-category');

        if (correctCategory === targetCategory) {
            zone.classList.add('correct');
            zone.classList.remove('incorrect');
            zone.textContent += ` ✅ ${draggedId}`;
        } else {
            zone.classList.add('incorrect');
            zone.classList.remove('correct');
        }
    });
});

function resetGame() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('correct', 'incorrect');
        zone.textContent = zone.getAttribute('data-category') === 'fruit' ? 'Fruits' : 'Animals';
    });
}
