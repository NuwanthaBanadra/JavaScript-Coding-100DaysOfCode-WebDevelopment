const slider = document.getElementById('rangeSlider');
const bubble = document.getElementById('valueBubble');

function setBubble() {
    const val = slider.value;
    const min = slider.min ? slider.min : 0;
    const max = slider.max ? slider.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

slider.addEventListener('input', setBubble);

setBubble(); // initialize on load
